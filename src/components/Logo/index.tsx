import * as S from './styles';
import React from 'react';
import { TextProps } from 'react-native';

const Logo: React.FC = () => (
  <S.IconDiv>
      <S.StyledICon height ='40px' width='40px' source={require('../../../public/images/VentoIcon.png')}/>
      <S.StyledICon height ='58px' width='60px' source={require('../../../public/images/ButterflyIconImg.png')}/> 
    </S.IconDiv>
);

export default Logo;
