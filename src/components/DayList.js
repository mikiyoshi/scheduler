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
  // const { days, setDay, value } = props;

  // console.log('DayList days', days);
  // console.log('DayList setDay', setDay);
  // console.log('DayList value', value);
  // console.log('DayList', props);
  // Object destructuring
  // Basic assignment
  // const user = {
  //     id: 42,
  //     isVerified: true
  // };
  // const {id, isVerified} = user;
  // console.log(id); // 42
  // console.log(isVerified); // true

  // return (
  //   // <ul>
  //   //   <DayListItem
  //   //   key={props.id}
  //   //   name={props.name}
  //   //   spots={props.spots}
  //   //   selected={props.name === props.value}
  //   //   setDay={props.onChange}
  //   //  />
  //   // </ul>
  //   <ul>
  //     {days.map((singleDay) => {
  //       return (
  //         <DayListItem
  //           // key={singleDay.id}
  //           // name={singleDay.name}
  //           // spots={singleDay.spots}
  //           // selected={singleDay.name === value}
  //           // setDay={setDay}
  //         />
  //       );
  //     })}
  //   </ul>
  // );

  const { days, day, setDay } = props;
  const listItems = days.map((items) => {
    return (
      // Array of DayListItem
      <DayListItem
        key={items.id}
        name={items.name}
        spots={items.spots}
        selected={items.name === props.value}
        setDay={props.onChange}
      />
    );
  });
  // Render the new day list item inside a ul tag
  return <ul>{listItems}</ul>;
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
