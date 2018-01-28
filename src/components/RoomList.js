import React, {Component} from 'react';
import styled from 'styled-components';
import {
  List,
  Container,
  Button,
} from 'semantic-ui-react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import ko from 'date-fns/locale/ko';

export default class RoomList extends Component {
  render() {
    const {
      rooms = [],
      hasPrev,
      hasNext,
      onPrevClick,
      onNextClick,
    } = this.props;
    const distOpt = {
      addSuffix: true,
      locale: ko
    }
    return (
      <Container>
        {
          rooms.length > 0
          ? <React.Fragment>
              <List divided relaxed>
                {
                  rooms.map(({roomId, title, createdAt, joined, itemProps = {}}) => (
                    <List.Item {...itemProps} key={roomId}>
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
      </Container>
    )
  }
}
