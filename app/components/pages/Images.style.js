//@flow
import styled from 'styled-components'
import { bp } from 'Theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const SubContainer = styled.div`
  width: initial;

  @media all and (max-width: ${bp.average}px) {
    width: 80vw;
  }
`
export const Image = styled.img`
  max-height: 400px;
  width: initial!important;
`
export const Thumb = styled.img`
  max-height: 70px;
`
