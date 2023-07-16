import React from 'react';

import logo from '../../assets/swagger.svg';

import { HeaderBackgroundStyled, LabelStyled, SelectStyled } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderBackgroundStyled>
      <img src={logo} alt="Swagger UI" />
      <LabelStyled>
        Select a definition
        <SelectStyled name="select" id="">
          <option value="https://localhost:7029/swagger/v1/swagger.json">WebApiForTesting v1</option>
        </SelectStyled>
      </LabelStyled>
    </HeaderBackgroundStyled>
  );
};

export default Header;
