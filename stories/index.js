import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import App from '../src/App';
import Header from '../src/components/Header';

import Footer from '../src/components/Footer';
import Admin from '../src/containers/Admin';
import Form from '../src/containers/Form';
import Dashboard from '../src/containers/Dashboard';
import DataGrid from '../src/containers/DataGrid';

storiesOf('Admin Demo', module)
  .add('App', () => <App />)
  .add('Admin', () => <Admin />)  
  .add('Footer', () => <Footer />)
  .add('Dashboard', () => <Dashboard />)
  .add('DataGrid', () => <DataGrid />)
  .add('Form', () => <Form />);
