import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NewRoomModal from '../src/components/NewRoomModal';

storiesOf('NewRoomModal', module)
  .add('default', () => (
    <NewRoomModal
      onCreate={action('onCreate')}
      onCancel={action('onCancel')}
    />
  ))
  .add('opened', () => (
    <NewRoomModal
      open
      onCreate={action('onCreate')}
      onCancel={action('onCancel')}
    />
  ))
  .add('loading', () => (
    <NewRoomModal
      open
      loading
    />
  ))
  .add('errorMessage', () => (
    <NewRoomModal
      open
      errorMessage="에러 발생!"
    />
  ))
