import React from 'react';
import classNames from 'classnames';
import 'components/InterviewerListItem.scss';

// InterviewerListItem Component
export default function InterviewerListItem(props) {
  const { name, avatar, selected } = props;
  const interviewerList = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected,
  });
  return (
    <li
      className={interviewerList}
      selected={selected}
      onClick={props.setInterviewer}
    >
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
