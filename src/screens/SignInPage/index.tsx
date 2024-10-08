import * as S from './styles';
import { Text, View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import EntrarButton from '@components/EntrarButton';
import Logo from '@components/Logo';
import LogInput from '@components/Input';
import CheckBox from '@components/CheckBox';

const SignInPage = ({ navigation }) => {
  
  const handleLogin = async () => {
    navigation.navigate("Home")
  }
  const [isChecked, setChecked] = useState(false);

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <S.Wrapper>
    <StatusBar style="light" />
    <S.Header>Criar Conta</S.Header>
    <S.SmallText>Preencha as informações abaixo para poder acessar as informações de nosso aplicativo</S.SmallText>
    <LogInput text='Nome Completo' placeHolderText='Nome Sobrenome' type={false}/>
    <LogInput text='Email' placeHolderText='exemplo@gmail.com' type={false}/>
    <LogInput text='Senha' placeHolderText='********' type={true}/>
    <S.SubDiv>
    <CheckBox label='Concordo com os' />
    <S.StyledLink>Termos Roadtrip </S.StyledLink>
    <S.TermosText>e </S.TermosText>
    <S.StyledLink>Política de Privacidade</S.StyledLink>

    </S.SubDiv>
    <EntrarButton color='#9E8CFC' text='Registrar-se' func={handleLogin} />
    <S.CadastroText color='#FCFCFC'>Já tem uma conta? <S.CadastroText color='#9E8CFC' fontWeight={700} fontDecoration='underline'>Entrar</S.CadastroText>
    </S.CadastroText>
  </S.Wrapper>
  </TouchableWithoutFeedback>
);
}

export default SignInPage;
