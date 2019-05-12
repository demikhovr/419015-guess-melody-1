import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mock = {
  gameTime: 0,
  errorCount: 0,
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `One`,
        },
      ],
    }
  ],
};

it(`App correctly renders`, () => {
  const {
    gameTime,
    errorCount,
    questions
  } = mock;

  const tree = renderer
    .create(<App
      gameTime={gameTime}
      errorCount={errorCount}
      questions={questions}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
