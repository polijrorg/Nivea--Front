import * as S from './styles';
import React from 'react';
import { TextProps } from 'react-native';

type Props = {
  text: string;
  placeHolderText: string;
  type: boolean;
}

const LogInput: React.FC<Props> = ({ text, placeHolderText, type }) => (
  <S.InputDiv>
    <S.InputText>{text}</S.InputText>
      <S.StyledInput placeholder={placeHolderText} 
  placeholderTextColor="rgba(233, 232, 234, 0.50)" 
  style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }} secureTextEntry={type}/>
  </S.InputDiv>
);

export default LogInput;
