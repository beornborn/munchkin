//@flow
import styled from 'styled-components'
import { bp, palette } from 'Theme'

export const Container = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: ${palette.persimmon};
  color: ${palette.white};
  display: flex;
  border-bottom: 1px solid ${palette.gallery};

  @media all and (max-width: ${bp.average}px) {
    padding: 10px 0;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 760px;
  padding: 15px 20px 5px 20px;
  letter-spacing: 2px;

  @media all and (max-width: ${bp.average}px) {
    min-width: initial;
    padding: 5px 40px;
    flex-grow: 1;
  }
`
export const Title = styled.h1`
  margin: 0;
`
export const Info = styled.div`
  font-size: 20px;
`
export const Date = styled.span`
  font-weight: bold;
  margin-left: 20px;
  font-size: 25px;
  color: black;
`
