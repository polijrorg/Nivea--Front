import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';
type IconProps = {
  height: string;
  width: string;
}

export const InputDiv = styled(View)`
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
`;
export const InputText = styled(Text)`
  color: #FCFCFC;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 8px;
`;


export const StyledInput = styled(TextInput)`
width: 312px;
height: 32px;
flex-shrink: 0;
border-radius: 8px;
background-color: rgba(232, 232, 232, 0.30);
padding-left: 8px;
color: #FCFCFC;
`;