//@flow
import styled from 'styled-components'
import { palette } from 'Theme'

export const Container = styled.div`
  display: flex;
  padding: 50px 0;
  border-bottom: 1px solid ${palette.gallery};
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
  min-width: 800px;
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
`
export const Text = styled.div`
  font-size: 18px;
  letter-spacing: 1px;
`
export const Li = styled.li`
  font-size: 18px;
  letter-spacing: 1px;
`
