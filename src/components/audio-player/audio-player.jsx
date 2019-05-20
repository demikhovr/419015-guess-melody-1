import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };

    this._audioRef = React.createRef();

    this._handlePlayBtnClick = this._handlePlayBtnClick.bind(this);
    this._handleCanPlayThroughAudio = this._handleCanPlayThroughAudio.bind(this);
    this._handlePlayAudio = this._handlePlayAudio.bind(this);
    this._handlePauseAudio = this._handlePauseAudio.bind(this);
    this._handleTimeUpdateAudio = this._handleTimeUpdateAudio.bind(this);
  }

  render() {
    const {
      isPlaying,
      isLoading
    } = this.state;

    return <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={this._handlePlayBtnClick}
      />
      <div className="track__status">
        <audio ref={this._audioRef} />
      </div>
    </React.Fragment>;
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;
    audio.src = src;
    audio.addEventListener(`canplaythrough`, this._handleCanPlayThroughAudio);
    audio.addEventListener(`play`, this._handlePlayAudio);
    audio.addEventListener(`pause`, this._handlePauseAudio);
    audio.addEventListener(`timeupdate`, this._handleTimeUpdateAudio);
  }

  componentDidUpdate(prevProps) {
    const {isPlaying} = this.props;

    if (prevProps.isPlaying === this.props.isPlaying) {
      return;
    }
    const audio = this._audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;
    audio.removeEventListener(`canplaythrough`, this._handleCanPlayThroughAudio);
    audio.removeEventListener(`play`, this._handlePlayAudio);
    audio.removeEventListener(`pause`, this._handlePauseAudio);
    audio.removeEventListener(`timeupdate`, this._handleTimeUpdateAudio);
    audio.src = ``;
  }

  _handlePlayBtnClick() {
    const {onPlayBtnClick} = this.props;
    onPlayBtnClick();
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  }

  _handleCanPlayThroughAudio() {
    this.setState({
      isLoading: false,
    });
  }

  _handlePlayAudio() {
    this.setState({
      isPlaying: true,
    });
  }

  _handlePauseAudio() {
    this.setState({
      isPlaying: false,
    });
  }

  _handleTimeUpdateAudio() {
    const audio = this._audioRef.current;

    this.setState({
      progress: audio.currentTime,
    });
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
