import styled from 'styled-components';

export const GlobalStyled = styled.body`
  * {
    box-sizing: border-box;
  }
  font-size: 14px;
  font-weight: 700;
  font-family: sans-serif;
  color: #3b4151;
`;

export const ArrowOpenCloseStyled = styled.div<{props: boolean}>`
  display: flex;
  width: 0.8em;
  position: relative;
  align-items: center;
  margin-left: auto;
  margin-top: ${(props) => (props.props ? '10px;' : '0px')};
  right: 10px;
  height: 0.8em;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  transform: ${(props) => (props.props ? 'rotate(225deg)' : 'rotate(45deg)')};
`;
