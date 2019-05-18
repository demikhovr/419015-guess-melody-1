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

    this._handlePlayBtnClick = this._handlePlayBtnClick.bind(this);
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
        <audio />
      </div>
    </React.Fragment>;
  }

  componentDidMount() {
    const {src} = this.props;
    this._audio = new Audio(src);

    this._audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    this._audio.onplay = () => this.setState({
      isPlaying: true,
    });

    this._audio.onpause = () => this.setState({
      isPlaying: false,
    });

    this._audio.ontimeupdate = () => this.setState({
      progress: this._audio.currentTime,
    });
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    return isPlaying ? this._audio.play() : this._audio.pause();
  }

  componentWillUnmount() {
    this._audio.oncanplaythrough = null;
    this._audio.onplay = null;
    this._audio.onpause = null;
    this._audio.ontimeupdate = null;
    this._audio.src = ``;
    this._audio = null;
  }

  _handlePlayBtnClick() {
    const {onPlayBtnClick} = this.props;
    onPlayBtnClick();
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
