import styled from '@emotion/styled';

export const Input = styled.input`
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  width: 100%;
  height: 40px;
  color: black;
  margin-bottom: 10px;
  border-color: grey;
  &:focus {
    outline: none;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }
`;

export const Label = styled.label`
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
