//@flow
import React from 'react'
import { Container, Article } from './6_Screen.style'
import { Content, SectionTitle } from './Shared.style'

export default class Screen6 extends React.Component {
  render() {
    return <Container>
      <Content>
        <SectionTitle>Статьи</SectionTitle>
        <Article to='articles/munchkin-and-kiev'>Манчкин и Киев</Article>
      </Content>
    </Container>
  }
}
