import { TouchableOpacity } from 'react-native'
import theme from 'src/theme'
import styled from 'styled-components/native'

export type FilterStyledProps = {
  isActived?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyledProps>`
  ${({ isActived }) => isActived && `border: 1px solid ${theme.COLORS.GREEN_700};` }
  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 74px;

  align-items: center;
  justify-content: center;
  
`

export const Title = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.WHITE};

  text-transform: uppercase;
`