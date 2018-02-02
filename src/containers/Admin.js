import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import styled from 'styled-components';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';

import { Header, Footer } from '../components';
import { Dashboard, DataGrid, Forms } from './';

const Main = styled.main`
  margin-top: 60px;
  margin-bottom: 40px;
`;

class Admin extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Main>
            <Grid fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/data-grid" name="Data Grid" component={DataGrid} />
                <Route path="/forms" name="Forms" component={Forms} />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Grid>
          </Main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default Admin;
