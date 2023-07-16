import styled from 'styled-components';

export const H2Styled = styled.h2`
  color: #3b4151;
  font-size: 36px;
  font-family: sans-serif;
  font-weight: 700;
  margin: 0;
`;

export const TitleStyled = styled.div`
  display: flex;
  position: relative;
  top: 40px;
  left: 20px;
  margin-bottom: 30px;
`;

export const AStyled = styled.a`
  font-weight: 700;
  top: 7px;
  left: 20px;
  position: relative;
  text-decoration: none;
  color: steelblue;
  font-size: 14px;
`;

export const VersionStyled = styled.div<{props?: boolean}>`
  display: flex;
  background-color: ${(props) => (props.props ? '#89bf04' : 'gray')};
  border-radius: 30px;
  color: white;
  width: auto;
  height: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  padding: 0 5px;
  font-weight: 700;
`;
