//@flow
import React from 'react'
import { Container, GoogleMap } from './4_Screen.style'
import { HorizontalSpace, Content, SectionTitle, Text } from './Shared.style'

export default class Screen4 extends React.Component {
  render() {
    return <Container id='place-and-time'>
      <Content>
        <SectionTitle>Играем В и Во</SectionTitle>
        <Text>в - “Евразия” на Раисы Окипной 3 по лестнице вниз</Text>
        <Text>во - воскресенья 14:00 </Text>
        <HorizontalSpace height={50} />
        <GoogleMap
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10465.978909300624!2d30.587632677898284!3d50.44965841190828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x93c120ef75daeb27!2sEvrasia!5e0!3m2!1sen!2sua!4v1521058399061'
          width='100%'
          height='550'
          frameBorder='0'
          allowFullScreen={true} />
      </Content>
    </Container>
  }
}
