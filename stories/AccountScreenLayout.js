import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AccountScreenLayout from '../src/components/AccountScreenLayout';
import NickNameForm from '../src/components/NickNameForm';
import ProfilePhotoForm from '../src/components/ProfilePhotoForm';
import LogOutButton from '../src/components/LogOutButton';

const samplePhotoUrl = "https://avatars0.githubusercontent.com/u/767106?s=460&v=4";

storiesOf('AccountScreenLayout', module)
  .add('default', () => (
    <AccountScreenLayout
      photoEl={<ProfilePhotoForm photoUrl={samplePhotoUrl} />}
      nickNameEl={<NickNameForm />}
      logoutButtonEl={<LogOutButton />}
    />
  ));
