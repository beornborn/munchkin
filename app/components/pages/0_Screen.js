//@flow
import React from 'react'
import { Container, Title, Content, Info, Date } from './0_Screen.style'

export default class Screen0 extends React.Component {
  render() {
    return <Container>
      <Content>
        <Title>Обновление от <Date>21 марта 2018</Date></Title>
        <Info>Последняя прошедшая игра: <Date>11 марта 2018</Date></Info>
        <Info>Следующая игра: <Date>25 марта 2018 в 14:00 50.449529,30.596498</Date></Info>
      </Content>
    </Container>
  }
}
