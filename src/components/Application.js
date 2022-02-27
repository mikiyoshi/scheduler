// import React from 'react';

// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import DayList from './DayList';
import 'components/Application.scss';
import Appointment from 'components/Appointment';
import axios from 'axios';
// error conflict components/Appointment.js and components/Appointment/index.js
// delete components/Appointment.js

const appointments = [
  {
    id: 1,
    time: '12pm',
  },
  {
    id: 2,
    time: '1pm',
    interview: {
      student: 'Lydia Miller-Jones',
      interviewer: {
        id: 3,
        name: 'Sylvia Palmer',
        avatar: 'https://i.imgur.com/LpaY82x.png',
      },
    },
  },
  {
    id: 3,
    time: '2pm',
  },
  {
    id: 4,
    time: '3pm',
    interview: {
      student: 'Archie Andrews',
      interviewer: {
        id: 4,
        name: 'Cohana Roy',
        avatar: 'https://i.imgur.com/FK8V841.jpg',
      },
    },
  },
  {
    id: 5,
    time: '4pm',
  },
];

const scheduleList = appointments.map((appointment) => {
  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={appointment.interview}
    />
  );
});

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
// replace to import API Objact

export default function Application(props) {
  // const [day, setDay] = useState('Monday');
  const [day, setDay] = useState([]);
  useEffect(() => {
    const path = `/api/days`;
    axios.get(path).then((response) => {
      setDay(response.data);
      // console.log('API data:', response.data);
    });
  }, []);
  // console.log('old days', days);
  console.log('API useSate day', day); // api Object import
  // const newDay = [];
  // for (let item of day) { // mapでも同じ
  //   console.log('API loop', item);
  //   newDay.push(item);
  // }
  // console.log('newDay', newDay);
  // const newDay = day.map((item, index, array, this) => { //
  const days = day.map((item) => {
    // api Object return in days[] array
    return item;
  });
  console.log('new days', days);
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          {/* <DayList
            days={days}
            day={'Monday'}
            setDay={(day) => console.log(day)}
          /> */}
          {/* <DayList days={days} day={day} setDay={setDay} /> */}
          <DayList days={days} value={day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {/* <DayList days={days} day={day} setDay={setDay} /> */}

        {scheduleList}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
