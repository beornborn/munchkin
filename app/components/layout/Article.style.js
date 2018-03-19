//@flow
import styled from 'styled-components'
import { Container as BasicContainer } from 'components/pages/Shared.style'

export const Container = styled(BasicContainer)`
  flex-direction: row;
  justify-content: center;
  background-color: rgba(242,243,185,0.13);
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`
