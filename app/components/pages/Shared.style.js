//@flow
import styled from 'styled-components'
import { palette, bp } from 'Theme'

export const Container = styled.div`
  display: flex;
  padding: 50px 0;
  border-bottom: 1px solid ${palette.gallery};

  @media all and (max-width: ${bp.average}px) {
    padding: 10px 0;
  }
`
export const HorizontalSpace = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height}px;
`
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 760px;
  padding: 0 20px;

  @media all and (max-width: ${bp.average}px) {
    min-width: initial;
    padding: 0 40px;
    flex-grow: 1;
  }
`
export const SectionTitle = styled.h2`
  display: flex;
  margin: 0;
  letter-spacing: 10px;
  font-size: 50px;
  color: ${palette.bayOfMany};
  font-weight: normal;
  font-style: italic;
  margin-bottom: 30px;
  @media all and (max-width: ${bp.average}px) {
    font-size: 35px;
  }
`
export const Text = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  @media all and (max-width: ${bp.average}px) {
    font-size: 18px;
  }
`
export const Li = styled.li`
  font-size: 20px;
  letter-spacing: 1px;
  @media all and (max-width: ${bp.average}px) {
    font-size: 18px;
  }
`
