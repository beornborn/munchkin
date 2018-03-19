//@flow
import React from 'react'
import Images from 'components/pages/Images'
import { Container } from './2_Screen.style'
import { HorizontalSpace, Content, SectionTitle, Li } from './Shared.style'

export default class Screen2 extends React.Component {
  render() {
    const images = [
      {
        original: 'http://d2v8wn4dcj4vge.cloudfront.net/cards-1.jpg',
        thumbnail: 'http://d2v8wn4dcj4vge.cloudfront.net/cards-1.jpg',
      },
      {
        original: 'http://d2v8wn4dcj4vge.cloudfront.net/cards-2.jpg',
        thumbnail: 'http://d2v8wn4dcj4vge.cloudfront.net/cards-2.jpg',
      },
      {
        original: 'http://d2v8wn4dcj4vge.cloudfront.net/rules.jpg',
        thumbnail: 'http://d2v8wn4dcj4vge.cloudfront.net/rules.jpg',
      },
    ]

    return <Container id='what-is-this'>
      <Content>
        <SectionTitle>Манчкин это</SectionTitle>
        <ul>
          <Li>настольная карточная игра на 3-6 человек, ~1 час игры</Li>
          <Li>веселые картинки и описания</Li>
          <Li>уровни, монстры, кубик, сокровища, сила, шмотки, проклятия, нычки</Li>
          <Li>помогайте, мешайте, подставляйте, торгуйте, договаривайтесь</Li>
        </ul>
        <HorizontalSpace height={50} />
        <Images images={images} />
      </Content>
    </Container>
  }
}
