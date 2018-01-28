import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProfilePhotoForm from '../src/components/ProfilePhotoForm';

const samplePhotoUrl = "https://avatars0.githubusercontent.com/u/767106?s=460&v=4";

storiesOf('ProfilePhotoForm', module)
  .add('default', () => (
    <ProfilePhotoForm
      photoUrl={samplePhotoUrl}
      onPhotoClick={action('onPhotoClick')}
    />
  ))
  .add('blank photo', () => (
    <ProfilePhotoForm
      onPhotoClick={action('onPhotoClick')}
    />
  ))
  .add('loading', () => (
    <ProfilePhotoForm
      photoUrl={samplePhotoUrl}
      onPhotoClick={action('onPhotoClick')}
      loading
    />
  ));
