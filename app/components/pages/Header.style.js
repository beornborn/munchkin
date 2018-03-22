//@flow
import styled from 'styled-components'
import { palette, bp } from 'Theme'
import Scrollchor from 'react-scrollchor'
import { Link } from 'react-router'

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
  font-size: 18px;
  font-style: italic;
  @media all and (max-width: ${bp.average}px) {
    font-size: 15px;
  }
`
export const Items = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`
export const Item = styled.div`
  display: flex;
  padding: 10px 20px;
  @media all and (max-width: ${bp.average}px) {
    padding: 10px 10px;
  }
  @media all and (max-width: 400px) {
    padding: 10px 5px;
  }
`
export const Phone = styled.div`
  display: flex;
  padding: 10px;
  flex-grow: 3;
  justify-content: center;
  @media all and (max-width: 620px) {
    display: none;
  }
`
export const PhoneLink = styled.a`
  text-decoration: none;
  color: ${palette.link};
`
export const NavigationLink = styled(Scrollchor)`
  color: ${palette.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:visited {
    color: ${palette.text};
  }
`
export const NavigationLinkRoute = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:visited {
    color: ${palette.text};
  }
`
