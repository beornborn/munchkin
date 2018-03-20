//@flow
import styled from 'styled-components'
import { palette } from 'Theme'
import { Container as BasicContainer } from 'components/pages/Shared.style'

export const Container = styled(BasicContainer)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  color: ${palette.text};
  font-family: cursive;
  align-items: center;
  background-color: rgba(255,255,200,0.13)
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`
