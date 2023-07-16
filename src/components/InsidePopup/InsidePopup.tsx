import React, { useState } from 'react';

import { ArrowOpenCloseStyled } from '../App/AppStyled';
import TestingArea from '../TestingArea/TestingArea';

import { AreaColorStyled, LabelStyled } from './InsidePopupStyled';

interface Iprops {
  child: string
}

const InsidePopup = ({ child }: Iprops) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <LabelStyled
        props={child}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AreaColorStyled props={child}>{child}</AreaColorStyled>
        /api/Categories
        <ArrowOpenCloseStyled props={isOpen} />
      </LabelStyled>
      {isOpen && <TestingArea child={child} />}
    </>
  );
};

export default InsidePopup;
