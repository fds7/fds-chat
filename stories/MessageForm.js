import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MessageForm from '../src/components/MessageForm';

storiesOf('MessageForm', module)
  .add('default', () => (
    <MessageForm onMessageSubmit={action('onMessageSubmit')} />
  ));
