//@flow
import React from 'react'
import Images from 'components/pages/Images'
import { Container } from './3_Screen.style'
import { HorizontalSpace, Content, SectionTitle, Li, Text } from './Shared.style'

export default class Screen3 extends React.Component {
  render() {
    const images = [
      {
        original: 'http://d2v8wn4dcj4vge.cloudfront.net/we-1.jpg',
        thumbnail: 'http://d2v8wn4dcj4vge.cloudfront.net/we-1.jpg',
      },
      {
        original: 'http://d2v8wn4dcj4vge.cloudfront.net/we-2.jpg',
        thumbnail: 'http://d2v8wn4dcj4vge.cloudfront.net/we-2.jpg',
      },
    ]

    return <Container id='we-are'>
      <Content>
        <SectionTitle>Мы это</SectionTitle>
        <Text>Группа молодых людей, которые регулярно собираются и:</Text>
        <ul>
          <Li>играют в манчкин</Li>
          <Li>знакомятся и общаются</Li>
          <Li>едят еду и пьют</Li>
        </ul>
        <HorizontalSpace height={50} />
        <Images images={images} />
      </Content>
    </Container>
  }
}






