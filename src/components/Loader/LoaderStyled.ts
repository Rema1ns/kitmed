import styled from 'styled-components';

export const LoaderStyled = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  margin: 5px auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid rgba(128, 128, 128, 0.34);
  border-top: 4px solid rgb(114, 112, 112);
  animation: spin 1s linear infinite;
`;
