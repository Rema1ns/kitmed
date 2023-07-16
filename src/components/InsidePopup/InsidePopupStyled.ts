import styled from 'styled-components';

export const LabelStyled = styled.label<{props: string}>`
  display: flex;
  background-color: ${(props) => {
    switch (props.props) {
    case 'PUT':
      return 'rgba(252,161,48,.1)';
    case 'GET':
      return 'rgba(97,175,254,.1)';
    case 'POST':
      return 'rgba(73,204,144,0.1)';
    case 'DELETE':
      return 'rgba(249,62,62,.1)';
    default:
      return 'black';
    }
  }};
  width: auto;
  height: 40px;
  margin: 0 20px 15px 20px;
  cursor: pointer;
  border: 2px solid ${(props) => {
    switch (props.props) {
    case 'PUT':
      return '#fca130';
    case 'GET':
      return '#61affe';
    case 'POST':
      return '#49cc90';
    case 'DELETE':
      return '#f93e3e';
    default:
      return 'black';
    }
  }};
  border-radius: 5px;
  padding: 5px;
  color: black;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  font-family: monospace;
`;

export const AreaColorStyled = styled.div<{props: string}>`
  width: 80px;
  height: 100%;
  color: white;
  font-size: 14px;
  font-weight: 600;
  font-family: sans-serif;
  display: flex;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: ${(props) => {
    switch (props.props) {
    case 'PUT':
      return '#fca130';
    case 'GET':
      return '#61affe';
    case 'POST':
      return '#49cc90';
    case 'DELETE':
      return '#f93e3e';
    default:
      return 'black';
    }
  }};
`;
