import React from 'react';
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  // const interviewer = {
  //   id: 1,
  //   name: "Sylvia Palmer",
  //   avatar: "https://i.imgur.com/LpaY82x.png"
  // };

  const { id, name, avatar } = props;
  return <InterviewerListItem key={id} name={name} avatar={avatar} />;
}
