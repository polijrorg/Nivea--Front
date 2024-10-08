// import ButterFlyIcon from 'public/icons/butterflyIcon';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

type BigTextProps ={
  color: string;
  fontWeight?: number;
  fontDecoration?: string;
}
type IconProps = {
  height: string;
  width: string;
}

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.main };
`;

export const IconDiv = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;
export const TextDiv = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;


export const StyledICon = styled.Image<IconProps>`
  height: ${({height}) => height};
  width: ${({width}) => width};
`;
// export const StyledICon2 = styled(ButterFlyIcon)`
//   height: 58px;
//   width: 60px;
// `;
export const Header = styled(Text)`
  color: ${({ theme }) => theme.colors.primary.light };
  text-align: center;
  font-family: 'Poppins-Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  width: 264px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  padding-bottom: 16px;
  padding-top: 24px;
`;

export const SmallText = styled.Text<{ paddingSize?: string }>`
  width: 264px;
  height: auto;
  flex-shrink: 0;
  color: rgba(252, 252, 252, 0.70);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Poppins-Regular';
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: ${({ paddingSize }) => paddingSize || '28px' };
`;
export const BigText = styled.Text<BigTextProps>`
  /* width: 260px; */
  /* flex-direction: column; */
  height: auto;
  padding-top: 20px;
  color: ${({ color }) => color};
  text-align: center;
  font-family: 'Poppins-Regular';
  font-size: 16px;
  font-weight: ${({fontWeight}) => fontWeight || 400};
  line-height: normal;
  text-decoration-line: ${({fontDecoration}) => fontDecoration || 'none'};
  
`;
export const StyledImage = styled.Image`
  width: 328px;
 height: 272px;
  
`;
