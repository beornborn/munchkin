//@flow
import React from 'react'
import { Container, CtaContainer, Cta } from './5_Screen.style'
import { Content, SectionTitle, Text } from './Shared.style'

export default class Screen5 extends React.Component {
  render() {
    return <Container id='want-too'>
      <Content>
        <SectionTitle>Дайте 2!</SectionTitle>
        <Text>Для коммуникации у нас есть группа в вайбере.</Text>
        <Text>Отправьте свой номер и я вас добавлю.</Text>
        <CtaContainer>
          <Text>Для этого перейдите по</Text>
          <Cta href='https://goo.gl/forms/Edh3UOmHeaQfA64q2' target='blank'>
            ссылке
          </Cta>
        </CtaContainer>
        <Text>Если есть свой манчкин - берите с собой.</Text>
      </Content>
    </Container>
  }
}
