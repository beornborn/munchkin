//@flow
import styled from 'styled-components'
import { palette } from 'Theme'
import { Container as BasicContainer } from './Shared.style'

export const Container = styled(BasicContainer)`
  flex-direction: row;
  justify-content: center;
  background-color: ${palette.aliceblue};
`
export const CtaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
`
export const Cta = styled.a`
  font-size: 40px;
  color: ${palette.link};
  letter-spacing: 1px;
  margin-left: 20px;
`
