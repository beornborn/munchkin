//@flow
import React from 'react'
import pt from 'prop-types'
import { OverContainer, Container, Item, Items, Email, EmailLink, NavigationLink, NavigationLinkRoute } from './Header.style'

export default class Header extends React.Component {
  static propTypes = {
    type: pt.oneOf(['landing', 'article'])
  }

  static defaultProps = {
    type: 'landing'
  }

  articleNav = () => {
    return <Items>
      <Item>
        <NavigationLinkRoute to='/'>Back to Main Page</NavigationLinkRoute>
      </Item>
    </Items>
  }

  landingNav = () => {
    return <Items>
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
  }

  render() {
    const { type } = this.props

    return <OverContainer>
      <Container>
        {type === 'landing' ? this.landingNav() : this.articleNav()}
        <Email>
          <EmailLink href='mailto:munchkin.kiev@gmail.com'>munchkin.kiev@gmail.com</EmailLink>
        </Email>
      </Container>
    </OverContainer>
  }
}
