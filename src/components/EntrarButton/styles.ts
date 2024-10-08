import { Text,TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity<{ color?: string }>`
  background-color: ${({ color }) => (color)};
  display: inline-flex;
  min-height: 32px;
  padding: 16px;
  width:312px;
  padding: 8px 27px 8px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 40px;
`;
export const ButtonText = styled.Text`
  display: flex;
  width: 269px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  color: #FCFCFC;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
