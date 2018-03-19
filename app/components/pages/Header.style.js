//@flow
import styled from 'styled-components'
import { palette } from 'Theme'
import Scrollchor from 'react-scrollchor'

export const OverContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${palette.aliceblue};
  border-bottom: 1px solid ${palette.gallery};
`
export const Items = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`
export const Item = styled.div`
  display: flex;
  padding: 10px 20px;
  font-size: 15px;
`
export const Email = styled.div`
  display: flex;
  padding: 10px;
  flex-grow: 3;
  justify-content: center;
`
export const EmailLink = styled.a`
  text-decoration: none;
  color: ${palette.link};
`
export const NavigationLink = styled(Scrollchor)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:visited {
    color: ${palette.text};
  }
`
