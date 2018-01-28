import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NickNameForm from '../src/components/NickNameForm';

storiesOf('NickNameForm', module)
  .add('default', () => (
    <NickNameForm
      onNickNameChange={action('onNickNameChange')}
    />
  ))
  .add('loading', () => (
    <NickNameForm
      nickName="React"
      loading
      onNickNameChange={action('onNickNameChange')}
    />
  ));
