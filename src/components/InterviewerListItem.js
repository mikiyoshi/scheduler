import React from 'react';
import classNames from 'classnames';

import 'components/InterviewerListItem.scss';

export default function InterviewerListItem(props) {
  console.log(props);
  // const { name, spots, selected, setDay } = props;
  // const dayClass = classNames('day-list__item', {
  //   'day-list__item--selected': selected,
  //   'day-list__item--full': spots === 0,
  // });
  // function formatSpots(spots) {
  //   return `${spots ? spots : 'no'} ${
  //     spots !== 1 ? 'spots' : 'spot'
  //   } remaining`;
  // }
  // if(spots){
  //   return spots: 'no remaining'
  // }
  // if(spots !== 1){
  //   return spots: `${spot} remaining`
  // }
  // elseを省略する
  // まずは、elseを省略した文です。早速書き方の例を示します。
  // (val == 0)?console.log("valは0です"):console.log("valは0ではないです")
  // 条件文に「?」を付けて、”True”の場合の処理を記載します。続いて「:」を付けて、”else”の場合の処理を記載します。
  // シンプルで、一行で書けるので簡単なif分を書く時には便利かと思います。
  const interviewersClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected,
  });
  return (
    <li className={interviewersClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );
}
