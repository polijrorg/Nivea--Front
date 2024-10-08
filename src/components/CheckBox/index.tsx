import React, { useState } from 'react';
import styled from 'styled-components/native';
import * as S from './styles';
import { TouchableOpacity } from 'react-native';
import { theme } from '@styles/default.theme';
import { Text } from 'react-native';

type Props = {
  label: string;
}

const CheckBox: React.FC<Props> = ( {label} ) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked) };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <S.CheckboxContainer>
        <S.StyledBox checked={checked}>
          {checked && <S.CheckMark>✓</S.CheckMark>}
        </S.StyledBox>
        <S.CheckBoxText>{label}</S.CheckBoxText>
      </S.CheckboxContainer>
    </TouchableOpacity>
  );
};

export default CheckBox;
