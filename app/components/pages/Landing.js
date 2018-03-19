//@flow
import React from 'react'
import Header from 'components/pages/Header'
import Screen1 from 'components/pages/1_Screen'
import Screen2 from 'components/pages/2_Screen'
import Screen3 from 'components/pages/3_Screen'
import Screen4 from 'components/pages/4_Screen'
import Screen5 from 'components/pages/5_Screen'
import Screen6 from 'components/pages/6_Screen'
import { HorizontalSpace } from 'components/pages/Shared.style'
import { Container } from './Landing.style'

export default class Landing extends React.Component {
  render() {
    return <Container>
      <Header />
      <HorizontalSpace height={37} />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen5 />
      <Screen4 />
      <Screen6 />
    </Container>
  }
}
