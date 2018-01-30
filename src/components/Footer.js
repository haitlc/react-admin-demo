import React, { Component } from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 10px;
  bottom: 0px;
  position: fixed;
  width: 100%;
  border: solid 1px #e7e7e7;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <span>2018 React Admin Demo.</span>
      </StyledFooter>
    );
  }
}

export default Footer;
