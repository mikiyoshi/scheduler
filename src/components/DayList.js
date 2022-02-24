import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  // const days = [
  //   {
  //     id: 1,
  //     name: 'Monday',
  //     spots: 2,
  //   },
  //   {
  //     id: 2,
  //     name: 'Tuesday',
  //     spots: 5,
  //   },
  //   {
  //     id: 3,
  //     name: 'Wednesday',
  //     spots: 0,
  //   },
  // ];
  // const [day, setDay] = useState('Monday');
  const { days, setDay, value } = props;
  return (
    <ul>
      {days.map((singleDay) => {
        return (
          <DayListItem
            key={singleDay.id}
            name={singleDay.name}
            spots={singleDay.spots}
            selected={singleDay.name === value}
            setDay={setDay}
          />
        );
      })}
    </ul>
  );
}

// export default function DayList(props){

//   return(
//     <ul>
//       <DayListItem
//         key={props.days[0].id}
//         name={props.days[0].name}
//         spots={props.days[0].spots}
//         selected={props.days[0].name === props.day}
//         setDay={props.setDay}
//       />
//       <DayListItem
//         key={props.days[1].id}
//         name={props.days[1].name}
//         spots={props.days[1].spots}
//         selected={props.days[1].name === props.day}
//         setDay={props.setDay}
//       />
//       <DayListItem
//         key={props.days[2].id}
//         name={props.days[2].name}
//         spots={props.days[2].spots}
//         selected={props.days[2].name === props.day}
//         setDay={props.setDay}
//       />
//     </ul>
//   )
// }
