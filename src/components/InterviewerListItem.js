import React from 'react';
import classNames from 'classnames';
import 'components/InterviewerListItem.scss';

export default function InterviewerListItem(props) {
  // const { name, avatar, selected, setInterviewer } = props;
  let interviewerClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected,
  });
  // return (
  //   <li onClick={setInterviewer} className={interviewerClass}>
  //     <img className="interviewers__item-image" src={avatar} alt={name} />
  //     {selected && name}
  //   </li>
  // );
  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
