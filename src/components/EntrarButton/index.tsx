import * as S from './styles';
import React from 'react';
import { GestureResponderEvent, TextProps } from 'react-native';

type HeadingProps = TextProps & HeadingExclusiveProps;

type HeadingExclusiveProps = {
  color?: string;
  text:string;
  func: (any) => void;
};

const EntrarButton: React.FC<HeadingProps> = ({ color, text, func}) => (
  <S.StyledButton color={color}>
    <S.ButtonText onPress={func}>{text}</S.ButtonText>
  </S.StyledButton>
);

export default EntrarButton;
