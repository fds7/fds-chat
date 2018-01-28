import React, {Component} from 'react';
import styled from 'styled-components';
import {
  Image,
  Dimmer,
  Loader,
  Label,
} from 'semantic-ui-react';

const CenteredDiv = styled.div`
  text-align: center;
`;

const ImageWrap = styled.div`
  cursor: pointer;
`;

export default class ProfilePhotoForm extends Component {
  state = {
    hover: false
  }

  handleMouseOver = () => {
    this.setState({
      hover: true
    });
  }

  handleMouseOut = () => {
    this.setState({
      hover: false
    });
  }

  render() {
    const {
      loading,
      onPhotoClick,
      photoUrl,
    } = this.props;
    const {hover} = this.state;
    return (
      <React.Fragment>
        <Dimmer.Dimmable
          dimmed={loading}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={onPhotoClick}
        >
          <Dimmer active={loading}>
            <Loader />
          </Dimmer>
          <ImageWrap>
            <Image fluid src={photoUrl} bordered />
          </ImageWrap>
        </Dimmer.Dimmable>
        <CenteredDiv>
        <Label basic pointing style={{visibility: hover ? 'visible' : 'hidden'}}>사진을 변경하려면 클릭하세요.</Label>
        </CenteredDiv>
      </React.Fragment>
    )
  }
}
