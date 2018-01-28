import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RoomList from '../src/components/RoomList';

const shortRooms = [
  {
    roomId: 1,
    title: 'Redux 스터디 모임',
    createdAt: 1517118311910,
    joined: true,
  },
  {
    roomId: 2,
    title: 'TypeScript 스터디 모임',
    createdAt: 1517118311910
  },
];

const longRooms = [
  {
    roomId: 1,
    title: 'Redux 스터디 모임',
    createdAt: 1517118311910,
    joined: true,
  },
  {
    roomId: 2,
    title: 'TypeScript 스터디 모임',
    createdAt: 1517118311910
  },
  {
    roomId: 3,
    title: 'MobX 스터디 모임',
    createdAt: 1517118311910
  },
  {
    roomId: 4,
    title: 'Redux Saga 스터디 모임',
    createdAt: 1517118311910
  },
  {
    roomId: 5,
    title: 'Haskell 스터디 모임',
    createdAt: 1517118311910
  },
  {
    roomId: 6,
    title: 'Async/Await 스터디 모임',
    createdAt: 1517118311910
  },
  {
    roomId: 7,
    title: 'RxJS 스터디 모임',
    createdAt: 1517118311910
  },
  {
    roomId: 8,
    title: 'Angular 스터디 모임',
    createdAt: 1517118311910
  },
  {
    roomId: 9,
    title: 'Vue 스터디 모임',
    createdAt: 1517118311910
  },
  {
    roomId: 10,
    title: 'Node.js 스터디 모임',
    createdAt: 1517118311910
  },
]

storiesOf('RoomList', module)
  .add('default', () => (
    <RoomList
      rooms={shortRooms}
    />
  ))
  .add('link', () => (
    <RoomList
      rooms={shortRooms.map(room => ({
        ...room,
        itemProps: {
          as: 'a',
          href: 'https://httpbin.org/ip'
        }
      }))}
    />
  ))
  .add('next only', () => (
    <RoomList
      hasNext
      onNextClick={action('onNextClick')}
      rooms={longRooms}
    />
  ))
  .add('prev only', () => (
    <RoomList
      hasPrev
      onPrevClick={action('onNextClick')}
      rooms={longRooms}
    />
  ))
  .add('both', () => (
    <RoomList
      hasPrev
      onPrevClick={action('onNextClick')}
      hasNext
      onNextClick={action('onNextClick')}
      rooms={longRooms}
    />
  ))
  .add('loading', () => (
    <RoomList
      loading
    />
  ));
