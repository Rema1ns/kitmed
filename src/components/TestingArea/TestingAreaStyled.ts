import styled from 'styled-components';

export const TestingAreaSizeStyled = styled.div<{props: string}>`
  position: relative;
  top: -18px;
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
  border-top: none;
  margin: 0 20px;
  width: auto;
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
`;

export const ParametersAreaStyled = styled.div`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  width: auto;
  height: 50px;
  padding: 8px 20px;
  border-bottom: 1px solid gray;
`;

export const ParameterTextStyled = styled.div<{props: string}>`
  cursor: pointer;
  justify-content: center;
  position: relative;
  top: 7px;
  display: flex;
  border-bottom: 4px solid ${(props) => {
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
  height: 28px;
  width: 95px;
`;

export const ResponsesNameStyled = styled.div`
  justify-content: center;
  position: relative;
  top: 7px;
  display: flex;
  height: 28px;
  width: 95px;
`;

export const ResponseDescriptionStyled = styled.div`
  width: auto;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 10px 0 0 0;
`;

export const ResponseInerStyled = styled.div`
  padding: 20px;
  width: auto;
`;

export const BtnTryOutStyled = styled.div`
  width: auto;
  height: 30px;
  padding: 5px 23px ;
  margin-left: auto;
  border: 2px solid #3b4151;
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 300ms;
  :hover {
    box-shadow: 0px 0px 5px lightslategray;
    transition-duration: 300ms;
  }
`;

export const BtnCancelStyled = styled.div`
  width: auto;
  height: 30px;
  padding: 5px 23px ;
  margin-left: auto;
  border: 2px solid #ff6060;
  color: #ff6060;
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 300ms;
  :hover {
    box-shadow: 0px 0px 5px #ff6060;
    transition-duration: 300ms;
  }
`;

export const TableContainerStyled = styled.div`
  padding: 20px;
`;

export const HeadersParameterNameStyled = styled.div`
  padding: 12px 0;
  font-size: 12px;
  width: 108px;
  height: 37px;
`;

export const HeadersParameterDescriptionStyled = styled.div`
  padding: 12px 0;
  font-size: 12px;
  width: auto;
  height: 37px;
`;

export const TheadStyled = styled.div`
  display: flex;
  border-bottom: 1px solid #3b4151;
`;

export const TbodyStyled = styled.div`
  width: auto;
  height: 75px;
  display: flex;
`;

export const ParametersTitleStyled = styled.div`
  padding: 5px 0;
  width: 108px;
  height: auto;
`;

export const ParameterTypeStyled = styled.div`
  font-size: 12px;
  font-family: monospace;
  padding: 5px 0;
`;

export const ParameterNameStyled = styled.div`
  min-width: 84px;
  font-size: 16px;
  font-family: monospace;
  padding: 5px 0;
  margin-right: 12px;
`;

export const ParameterInStyled = styled.div`
  font-size: 12px;
  font-family: monospace;
  color: #808080;
`;

export const ParameterInputStyled = styled.input<{props: boolean}>`
  max-width: 340px;
  width: 100%;
  height: 36px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 20px 0 30px 5px;
  min-width: 100px;
  padding: 8px 10px;
  cursor: ${(props) => (props.props ? 'default' : 'not-allowed')}
`;

export const BtnGroupStyled = styled.div`
  padding: 30px;
  width: auto;
  display: flex;
`;

export const BtnExecuteStyled = styled.div`
  border-radius: 4px 0 0 4px;
  background-color: dodgerblue;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  padding: 5px 23px;
  transition-duration: 300ms;
  :hover {
    transition-duration: 300ms;
    box-shadow: 0px 0px 5px lightslategray;
  }
`;

export const BtnClearStyled = styled.div`
  border-radius: 0 4px 4px 0;
  border: 2px solid #3b4151;
  background-color: #fff;
  color: #3b4151;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  padding: 5px 23px;
  transition-duration: 300ms;
  :hover {
    box-shadow: 0px 0px 5px lightslategray;
    transition-duration: 300ms;
  }
`;

export const H4Styled = styled.h4`
  margin: 0;
  display: flex;
  font-size: 12px;
  padding: 10px 0;
`;

export const MicrolightStyled = styled.pre`
  white-space: pre;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background-color: #333333;
  border-radius: 5px;
  padding: 6px;
  margin: 0;
  width: auto;
`;

export const FlexStyled = styled.div`
  display: flex;
`;

export const TextAreaStyled = styled.textarea<{props: boolean}>`
  width: 100%;
  min-height: 150px;
  border-radius: 4px;
  padding: 10px;
  margin: 5px 0;
  color: ${(props) => (!props.props ? '#fafafa' : '#333333')};
  background-color: ${(props) => (!props.props ? '#333333' : '#fafafa')};
`;
