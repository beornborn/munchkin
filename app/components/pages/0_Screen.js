//@flow
import React from 'react'
import { Container, Title, Content, Info, Date } from './0_Screen.style'

export default class Screen0 extends React.Component {
  render() {
    return <Container>
      <Content>
        <Title>Обновление от <Date>21 марта 2018</Date></Title>
        <Info>Последняя прошедшая игра: <Date>11 марта 2018</Date></Info>
        <Info>Следующая игра: <Date>25 марта 2018 14:00 "Евразия" Раисы Окипной 3</Date></Info>
      </Content>
    </Container>
  }
}
