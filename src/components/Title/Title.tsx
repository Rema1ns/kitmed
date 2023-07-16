import React from 'react';

import {
  AStyled, H2Styled, TitleStyled, VersionStyled
} from './TitleStyled';

const Title = () => {
  return (<>
    <TitleStyled>
      <H2Styled>
        WebApiForTesting
      </H2Styled>
      <VersionStyled>
        1.0
      </VersionStyled>
      <VersionStyled props>
        03SC
      </VersionStyled>
    </TitleStyled>
    <AStyled href="https://localhost:7029/swagger/v1/swagger.json">https://localhost:7029/swagger/v1/swagger.json</AStyled>
  </>
  );
};

export default Title;
