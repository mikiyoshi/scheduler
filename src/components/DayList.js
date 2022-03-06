import React from 'react';
import DayListItem from './DayListItem';

// DayList Component
export default function DayList(props) {
  const { days } = props;
  const dayListData = days.map((day) => {
    return (
      // Array of DayListItem
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });
  // Render the new day list item inside a ul tag
  return <ul>{dayListData}</ul>;
}
