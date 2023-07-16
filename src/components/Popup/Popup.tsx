import React, { useState } from 'react';

import InsidePopup from '../InsidePopup/InsidePopup';
import { ArrowOpenCloseStyled } from '../App/AppStyled';

import { LabelStyled } from './PopupStyled';

interface Iprops {
  child: string
}

const Popup = ({ child }: Iprops) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <LabelStyled onClick={() => setIsOpen(!isOpen)}>
        {child}
        <ArrowOpenCloseStyled props={isOpen} />
      </LabelStyled>
      {isOpen && (
        <>
          <InsidePopup child="GET" />
          <InsidePopup child="POST" />
          <InsidePopup child="PUT" />
          <InsidePopup child="DELETE" />
        </>
      )}
    </>
  );
};

export default Popup;
