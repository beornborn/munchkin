//@flow
import styled from 'styled-components'
import { palette } from 'Theme'
import { Container as BasicContainer } from './Shared.style'

export const Container = styled(BasicContainer)`
  flex-direction: row;
  justify-content: center;
  background-color: rgba(242,243,185,0.13);
`
export const GoogleMap = styled.iframe`
  border: 5px solid ${palette.aliceblue};
`
