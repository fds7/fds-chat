import React, { Component } from 'react';
import {
  Comment
} from 'semantic-ui-react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import ko from 'date-fns/locale/ko';

const distOpt = {
  addSuffix: true,
  locale: ko
};

export default class MessageList extends Component {
  render() {
    const {messages} = this.props;

    return (
      <Comment.Group>
        {
          messages.map(({id, photoUrl, nickName, createdAt, content}) => (
            <Comment key={id}>
              <Comment.Avatar src={photoUrl} />
              <Comment.Content>
                <Comment.Author as="span">{nickName}</Comment.Author>
                <Comment.Metadata>
                  {distanceInWordsToNow(new Date(createdAt), distOpt)}
                </Comment.Metadata>
                <Comment.Text>{content}</Comment.Text>
              </Comment.Content>
            </Comment>
          ))
        }
      </Comment.Group>
    )
  }
}
