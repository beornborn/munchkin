//@flow
import React from 'react'
import pt from 'prop-types'
import ImageGallery from 'react-image-gallery'
// $FlowIgnore
import 'react-image-gallery/styles/css/image-gallery.css'
import Lightbox from 'react-images'
import _ from 'lodash'
import { Image, Thumb, Container, SubContainer } from './Images.style'

export default class Images extends React.Component {
  static propTypes = {
    images: pt.arrayOf(pt.shape({
      original: pt.string.isRequired,
      thumbnail: pt.string.isRequired,
    })).isRequired,
  }

  state = {lightboxIsOpen: false, currentImage: 0}

  openLightbox = (i: number) => this.setState({lightboxIsOpen: true, currentImage: i})
  closeLightbox = () => this.setState({lightboxIsOpen: false})
  onClickPrev = () => this.setState({currentImage: this.state.currentImage - 1})
  onClickNext = () => this.setState({currentImage: this.state.currentImage + 1})

  renderItem = (el: Object) => {
    const { images } = this.props
    const i = _.findIndex(images, im => im.original === el.original)
    return <Image src={el.original} onClick={() => this.openLightbox(i)} />
  }

  renderThumbInner = (el: Object) => {
    return <Thumb src={el.original} />
  }

  render() {
    const { images } = this.props
    const { lightboxIsOpen, currentImage } = this.state

    const imagesForLightbox = images.map(x => ({src: x.original}))

    return <Container>
      <SubContainer>
        <ImageGallery
          items={images}
          renderItem={this.renderItem}
          renderThumbInner={this.renderThumbInner}
          showFullscreenButton={false}
          showPlayButton={false}
          disableArrowKeys={true} />
        <Lightbox
          currentImage={currentImage}
          onClickPrev={this.onClickPrev}
          onClickNext={this.onClickNext}
          images={imagesForLightbox}
          isOpen={lightboxIsOpen}
          onClose={this.closeLightbox}
          backdropClosesModal={true} />
      </SubContainer>
    </Container>
  }
}
