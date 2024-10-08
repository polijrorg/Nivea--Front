// import ButterFlyIcon from 'public/icons/butterflyIcon';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type BigTextProps ={
  color: string;
  fontWeight?: number;
  fontDecoration?: string;
}

type CheckProps = {
  isChecked: boolean;
}

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: top;
  background: ${({ theme }) => theme.colors.primary.main };
  padding-top: 80px;
`;
export const SubDiv = styled(View)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 312px;
  height: auto;
  padding: 16px;
`;
export const StyledLink = styled(Text)`
  color: #5746AF;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Poppins-Regular';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

export const Header = styled(Text)`
  display: flex;
  width: 320px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FCFCFC;
  text-align: center;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 16px;
  padding-top: 16px;
`;

export const SmallText = styled.Text`
  width: 264px;
  height: auto;
  flex-shrink: 0;
  color: rgba(252, 252, 252, 0.50);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Poppins;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 60px;
`;

export const CadastroText = styled.Text<BigTextProps>`
  width: 260px;
  position: absolute;
  padding-bottom: 48px;
  height: auto;
  bottom: 0px;
  color: ${({ color }) => color};
  text-align: center;
  font-family: 'Poppins-Regular';
  font-size: 12px;
  font-weight: ${({fontWeight}) => fontWeight || 400};
  line-height: normal;
  text-decoration-line: ${({fontDecoration}) => fontDecoration || 'none'};
  
`;
export const StyledImage = styled.Image`
  width: 328px;
 height: 272px;
  
`;
