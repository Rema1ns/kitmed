import React, { useState } from 'react';

import Popup from '../Popup/Popup';

import { ContentPositionStyled } from './ContentStyled';

const Content = () => {
  return (
    <ContentPositionStyled>
      <Popup child="Category" />
      <Popup child="Product" />
    </ContentPositionStyled>
  );
};

export default Content;
