import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TopMenu from '../src/components/TopMenu';

storiesOf('TopMenu', module)
  .add('default', () => (
    <TopMenu />
  ))
  .add('links', () => (
    <TopMenu
      logoItemProps={{as: 'a', href: 'https://httpbin.org'}}
      accountItemProps={{as: 'a', href: 'https://httpbin.org/ip'}}
    />
  ));
