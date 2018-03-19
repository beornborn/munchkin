//@flow
import styled from 'styled-components'
import { palette } from 'Theme'
import { Link } from 'react-router'
import { Container as BasicContainer } from './Shared.style'

export const Container = styled(BasicContainer)`
  flex-direction: column;
  align-items: center;
  background-color: rgba(214,216,112,0.13);
`
export const Article = styled(Link)`
  font-size: 20px;
  color: ${palette.link};
  letter-spacing: 1px;
  margin-left: 20px;
`
