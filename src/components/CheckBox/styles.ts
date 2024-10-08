import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';



export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledBox = styled.View<{checked: boolean}>`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.checked ? '#0081F1' : '#FCFCFC80')};
  border-width: 0px;
  border-color:#FCFCFC80;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const CheckMark = styled.Text`
  color: #20134B;
  font-weight: 700;
  font-size: 11px;
`;

export const CheckBoxText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  color: #FCFCFC80;
`;