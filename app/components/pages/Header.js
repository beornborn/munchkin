//@flow
import React from 'react'
import { OverContainer, Container, Item, Items, Email, EmailLink, NavigationLink } from './Header.style'

export default class Header extends React.Component {
  render() {
    return <OverContainer>
      <Container>
        <Items>
          <Item>
            <NavigationLink to='#what-is-this'>Что это</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to='#we-are'>Кто мы</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to='#want-too'>ХОЧУ ТОЖЕ!</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to='#place-and-time'>Место и время</NavigationLink>
          </Item>
        </Items>
        <Email>
          <EmailLink href='mailto:munchkin.kiev@gmail.com'>munchkin.kiev@gmail.com</EmailLink>
        </Email>
      </Container>
    </OverContainer>
  }
}
