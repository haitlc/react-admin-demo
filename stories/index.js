import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import App from '../src/App';
import Header from '../src/components/Header';

storiesOf('App', module).add('Regular render', () => (
  <App onClick={action('clicked')} />
));

storiesOf('Header', module).add('Header', () => (
  <Header />
));

