//@flow
import styled from 'styled-components'
import { Container as BasicContainer } from './Shared.style'

export const Container = styled(BasicContainer)`
  flex-direction: row;
  justify-content: center;
  background-color: rgba(242,243,185,0.13);
`
export const Boy = styled.img`
  height: 300px;
`
export const Girl = styled.img`
  height: 270px;
  margin-top: 18px;
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
`
export const RightImgContainer = styled.div`
  display: flex;
`
