//@flow
import React from 'react'
import pt from 'prop-types'
import Header from 'components/pages/Header'
import { HorizontalSpace } from 'components/pages/Shared.style'
import { Container, Content } from './Article.style'

export default class ArticleLayout extends React.Component {
  static propTypes = {
    children: pt.element.isRequired
  }

  static displayName = 'ArticleLayout'

  render() {
    return <Container>
      <Header type='article' />
      <Content>
        {this.props.children}
        <HorizontalSpace height={50} />
      </Content>
    </Container>
  }
}
