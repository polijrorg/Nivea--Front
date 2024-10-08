import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
type IconProps = {
  height: string;
  width: string;
}

export const IconDiv = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  padding: 16px;
`;


export const StyledICon = styled.Image<IconProps>`
  height: ${({height}) => height};
  width: ${({width}) => width};
`;