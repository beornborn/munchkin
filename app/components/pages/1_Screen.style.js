//@flow
import styled from 'styled-components'
import { Container as BasicContainer, Content as BasicContent } from './Shared.style'
import { bp } from 'Theme'

export const Container = styled(BasicContainer)`
  flex-direction: row;
  justify-content: center;
  background-color: rgba(242,243,185,0.13);
`
export const Content = styled(BasicContent)`
  min-width: 780px;
  padding: 0 10px;
  margin-top: 40px;
`
export const SubContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Boy = styled.img`
  height: 300px;
  @media all and (max-width: ${bp.average}px) {
    height: 200px;
  }
  @media all and (max-width: 600px) {
    height: 150px;
  }
  @media all and (max-width: 500px) {
    display: none;
  }
`
export const Girl = styled.img`
  height: 270px;
  margin-top: 18px;
  @media all and (max-width: ${bp.average}px) {
    height: 175px;
  }
  @media all and (max-width: 600px) {
    height: 125px;
  }
  @media all and (max-width: 500px) {
    display: none;
  }
`
export const LeftImgContainer = styled.div`
  display: flex;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ff5555;
  font-family: monospace;
`
export const H1 = styled.h1`
  font-size: 50px;
  letter-spacing: 8px;
  margin-top: 0px;
  @media all and (max-width: ${bp.average}px) {
    font-size: 30px;
  }
  @media all and (max-width: 600px) {
    font-size: 25px;
  }
`
export const RightImgContainer = styled.div`
  display: flex;
`
