import React from 'react';
import { HashRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Admin from '../src/containers/Admin';
import Forms from '../src/containers/Forms';
import Dashboard from '../src/containers/Dashboard';
import DataGrid from '../src/containers/DataGrid';

storiesOf('Admin Demo', module)
  .addDecorator(story => <HashRouter>{story()}</HashRouter>)
  .add('Admin', () => <Admin />)
  .add('Header', () => <Header />)
  .add('Footer', () => <Footer />)
  .add('Dashboard', () => <Dashboard />)
  .add('DataGrid', () => <DataGrid />)
  .add('Forms', () => <Forms />);
