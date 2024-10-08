import * as S from './styles';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { theme } from '@styles/default.theme';
import EntrarButton from '@components/EntrarButton';
import Logo from '@components/Logo';

const Home = ({ navigation }) => {
  const func1 = async () => {
    navigation.navigate("LoginPage")
  }
  const func2 = async () => {
    navigation.navigate("SignInPage")
  }
  return (
  <S.Wrapper>
    <StatusBar style="light" />
    <Logo/>
    <S.StyledImage 
        source={require('../../../public/images/image 7.png')} 
      />
    <S.Header style={{ color: theme.colors.primary.light }}>
                Encontre 
                <S.Header style={{ color: theme.colors.white }}> sua Frequência de Brilho </S.Header>
                Ideal
            </S.Header>
            <S.SmallText paddingSize='0px'>App para procurar e encontrar a sua frequência de brilho ideal.</S.SmallText>
          <S.SmallText>Transforme-se junto da Expansão do Ser!  </S.SmallText>
    <EntrarButton color='#9E8CFC' text='Cadastre-se Agora'  func={func2} />
    <S.TextDiv>
    <S.BigText color='#FCFCFC'>Já tem uma conta? </S.BigText>
    <TouchableOpacity onPress={func1}>
      <S.BigText color='#9E8CFC' fontWeight={700} fontDecoration='underline'> Entrar</S.BigText>
    </TouchableOpacity>
    
    </S.TextDiv>
  </S.Wrapper>
);
}

export default Home;
