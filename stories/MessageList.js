import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MessageList from '../src/components/MessageList';

const samplePhotoUrl =  'https://avatars0.githubusercontent.com/u/767106?s=460&v=4';

const messages = [
  {
    id: 1,
    photoUrl: samplePhotoUrl,
    nickName: '김승하',
    createdAt: 1517131220000,
    content: '짧은 메시지'
  },
  {
    id: 2,
    photoUrl: samplePhotoUrl,
    nickName: '김승하',
    createdAt: 1517131227054,
    content: `긴 메시지 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit eum vero ex labore? Sit sint quas doloribus, nemo quis architecto, quo omnis mollitia quia distinctio necessitatibus inventore doloremque pariatur!
    Autem necessitatibus velit, laudantium quas culpa delectus, atque iste tempora, corrupti possimus laboriosam praesentium officiis temporibus! Deleniti cupiditate recusandae, quo doloribus, culpa beatae neque voluptatem nulla corrupti, eos esse quisquam?
    Commodi quisquam nobis ratione ea laboriosam cupiditate voluptatibus obcaecati explicabo laudantium est. Vero non delectus autem id corrupti deserunt a optio necessitatibus iusto! Et, recusandae ipsam aliquam quia accusamus rerum?
    Accusamus, voluptate sequi. Ratione officiis aut suscipit in adipisci rerum ea consequatur quidem? Rerum ea laborum iusto voluptas, placeat libero sequi deleniti! Omnis iure ex molestiae fugiat, quis beatae repellat?
    Quidem, similique ea recusandae dolore numquam quos excepturi enim maiores officiis quam inventore ullam sunt quisquam hic tenetur ut est in accusamus consectetur repellendus ducimus. Veniam placeat laborum provident debitis?
    Temporibus corrupti, eligendi eaque unde voluptate numquam optio ipsum. Non vel voluptate necessitatibus atque et fuga, optio quibusdam obcaecati veniam dicta, doloribus iusto eligendi quia officiis exercitationem libero error asperiores?
    Soluta assumenda sequi quod similique praesentium, temporibus necessitatibus veritatis debitis voluptatibus ab, deserunt iure laborum eius corrupti. Possimus, harum vitae, impedit eaque facilis ullam molestiae quam vel, laborum nam quos!
    Ab tempora perferendis inventore similique possimus consequatur sint voluptas nostrum, laudantium illo dignissimos numquam libero doloribus nemo a odit distinctio deserunt, soluta consequuntur maxime beatae! Ea ullam sint vero nostrum!
    Quibusdam sit unde nemo est perferendis cupiditate ut, beatae soluta qui consequuntur officia delectus pariatur doloremque cumque incidunt, ad cum? Necessitatibus ipsam nihil alias possimus quibusdam veniam commodi tempora est.
    Provident iusto voluptate non tenetur nesciunt. Quibusdam quos neque, recusandae officiis quae quasi quod illum facilis rerum esse ea mollitia iste nesciunt temporibus sapiente nihil expedita dolor voluptatum optio eum?`
  }
];

storiesOf('MessageList', module)
  .add('default', () => (
    <MessageList messages={messages}/>
  ));
