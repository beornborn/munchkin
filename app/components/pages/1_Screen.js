//@flow
import React from 'react'
import { Container, Boy, Girl, LeftImgContainer, Header, RightImgContainer, H1, Content, SubContent } from './1_Screen.style'

export default class Screen1 extends React.Component {
  render() {
    return <Container>
      <Content>
        <SubContent>
          <LeftImgContainer>
            <Boy src={'http://d2v8wn4dcj4vge.cloudfront.net/boy.png'} />
          </LeftImgContainer>
          <Header>
            <H1>ИГРАЙ</H1>
            <H1>МАНЧКИН</H1>
            <H1>В КИЕВЕ!</H1>
          </Header>
          <RightImgContainer>
            <Girl src={'http://d2v8wn4dcj4vge.cloudfront.net/girl.png'} />
          </RightImgContainer>
        </SubContent>
      </Content>
    </Container>
  }
}
