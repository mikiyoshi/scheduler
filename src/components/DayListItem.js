import React from 'react';
import classNames from 'classnames';

import 'components/DayListItem.scss';

export default function DayListItem(props) {
  // console.log('DayListItem', props);
  // const { name, spots, selected, setDay } = props;
  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });
  // function formatSpots(spots) {
  //   return `${spots ? spots : 'no'} ${
  //     spots !== 1 ? 'spots' : 'spot'
  //   } remaining`;
  // }
  const formatSpots = function (props) {
    // 'no spots remaining'
    // '1 spot remaining'
    if (props === 0) {
      return 'no spots remaining';
    } else if (props === 1) {
      return '1 spot remaining';
    } else {
      return `${props} spots remaining`;
    }
  };
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
  // return (
  //   <li className={dayClass} onClick={() => setDay(name)}>
  //     <h2 className="text--regular">{name}</h2>
  //     <h3 className="text--light">{formatSpots(spots)}</h3>
  //   </li>
  // );
  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
