import React, {Component} from 'react';
import styled from 'styled-components';
import {
  List,
  Container,
  Button,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import ko from 'date-fns/locale/ko';

const distOpt = {
  addSuffix: true,
  locale: ko
};

const MinHeightContainer = styled(Container)`
  min-height: 200px;
`;

export default class RoomList extends Component {
  static defaultProps = {
    rooms: [],
    loading: false,
    hasPrev: false,
    hasNext: false,
    onPrevClick: () => {},
    onNextClick: () => {},
    onMount: () => {}
  }

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const {
      rooms,
      loading,
      hasPrev,
      hasNext,
      onPrevClick,
      onNextClick,
    } = this.props;

    return (
      <Dimmer.Dimmable as={MinHeightContainer} dimmed={loading}>
        <Dimmer active={loading} inverted>
          <Loader />
        </Dimmer>
        {
          loading
          ? null
          : rooms.length > 0
          ? <React.Fragment>
              <List divided relaxed>
                {
                  rooms.map(({id, title, createdAt, joined, itemProps = {}}) => (
                    <List.Item {...itemProps} key={id}>
                      <List.Icon name="send" size="large" verticalAlign="middle" color={joined && 'teal'}/>
                      <List.Content>
                        <List.Header>{title}</List.Header>
                        <List.Description>마지막 활동: {distanceInWordsToNow(new Date(createdAt), distOpt)}</List.Description>
                      </List.Content>
                    </List.Item>
                  ))
                }
              </List>
              {
                (hasPrev || hasNext) && (
                  <Button.Group floated="right">
                    {hasPrev && <Button onClick={onPrevClick}>이전</Button>}
                    {hasNext && <Button onClick={onNextClick}>다음</Button>}
                  </Button.Group>
                )
              }
            </React.Fragment>
          : '채팅방이 없습니다.'
        }
      </Dimmer.Dimmable>
    )
  }
}
