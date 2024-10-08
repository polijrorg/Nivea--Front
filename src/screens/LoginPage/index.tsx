import * as S from './styles';
import { Text, View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import EntrarButton from '@components/EntrarButton';
import Logo from '@components/Logo';
import LogInput from '@components/Input';
import CheckBox from '@components/CheckBox';

const LoginPage = ({ navigation }) => {
  
  const handleLogin = async () => {
    navigation.navigate("Home")
  }
  const [isChecked, setChecked] = useState(false);

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <S.Wrapper>
    <StatusBar style="light" />
    <Logo/>
    <S.Header>Logar no Expansão do Ser</S.Header>
    <S.SmallText>Bem Vindo de Volta! Preparado para sua próxima terapia? </S.SmallText>
    <LogInput text='Email' placeHolderText='exemplo@gmail.com' type={false}/>
    <LogInput text='Senha' placeHolderText='********' type={true}/>
    <S.SubDiv>
    <CheckBox label='Manter-se conectado' />
    <S.StyledLink>Esqueceu a senha? </S.StyledLink>
    </S.SubDiv>
    <EntrarButton color='#9E8CFC' text='Iniciar Sessão' func={handleLogin} />
    <S.CadastroText color='#FCFCFC'>Não tem uma conta? <S.CadastroText color='#9E8CFC' fontWeight={700} fontDecoration='underline'>Cadastre-se</S.CadastroText>
    </S.CadastroText>
  </S.Wrapper>
  </TouchableWithoutFeedback>
);
}

export default LoginPage;
