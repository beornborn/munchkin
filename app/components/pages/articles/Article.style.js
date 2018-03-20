//@flow
import styled from 'styled-components'
import { bp, palette } from 'Theme'
import { Container as BasicContainer, Content as BasicContent } from 'components/pages/Shared.style'

export const Container = styled(BasicContainer)`
  flex-direction: row;
  justify-content: center;
  background-color: rgba(242,243,185,0.13);
`
export const Content = styled(BasicContent)`
  padding: 0 10px;
  margin-top: 40px;
`
export const Title = styled.h1`
  display: flex;
  margin: 0;
  letter-spacing: 10px;
  font-size: 50px;
  color: ${palette.bayOfMany};
  font-weight: normal;
  font-style: italic;
  margin-bottom: 30px;
  justify-content: center;
  @media all and (max-width: ${bp.average}px) {
    font-size: 35px;
  }
`
export const P = styled.p`
  font-size: 23px;
  letter-spacing: 1px;
  line-height: 30px;
  padding: 10px 40px;
  @media all and (max-width: ${bp.average}px) {
    padding: 10px 20px;
    line-height: 26px;
    font-size: 20px;
  }
`
