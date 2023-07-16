import styled from 'styled-components';

export const LabelStyled = styled.label`
  color: black;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  margin: 0 20px 5px 20px;
  padding: 10px 20px 10px 10px;
  width: auto;
  height: 50px;
  background-color: rgba(201, 201, 201, 0.11);
  border-bottom: 1px solid rgba(187, 186, 186, 0.86);

  :hover {
    background-color: rgba(128, 128, 128, 0.27);
    cursor: pointer;
  }
`;
