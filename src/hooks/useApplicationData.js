import { useState, useEffect } from 'react';
import axios from 'axios';

// useApplicationData custom help for Application.js
export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  });

  //This function will set the day inside the useState above
  const setDay = (day) => {
    return setState({ ...state, day });
  };

    // console.log('dddd',interviewers)
  useEffect(() => {
    const dayURL = '/api/days';
    const appointmentURL = '/api/appointments';
    const interviewersURL = '/api/interviewers';
    Promise.all([
      axios.get(dayURL),
      axios.get(appointmentURL),
      axios.get(interviewersURL),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data, // /api/days
        appointments: all[1].data, // /api/appointments
        interviewers: all[2].data, // /api/interviewers
      }));
    });
  }, []);

  //findDay
  function findDay(day) {
    const daysOfWeek = {
      Monday: 0, // key from api/days
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
    };
    return daysOfWeek[day];
  }

  //bookInterview
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const dayOfWeek = findDay(state.day);
    let day = {
      ...state.days[dayOfWeek],
      spots: state.days[dayOfWeek],
    };

    if (!state.appointments[id].interview) {
      day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spots - 1,
      };
    } else {
      day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spots,
      };
    }

    let days = state.days;
    days[dayOfWeek] = day;

    const url = `/api/appointments/${id}`;
    return axios.put(url, appointment).then(() => {
      setState({ ...state, appointments, days });
    });
  }

  //cancelInterview
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const dayOfWeek = findDay(state.day);

    const day = {
      ...state.days[dayOfWeek],
      spots: state.days[dayOfWeek].spots + 1,
    };

    let days = state.days;
    days[dayOfWeek] = day;

    const url = `/api/appointments/${id}`;

    return axios.delete(url, appointment).then(() => {
      setState({ ...state, appointments, days });
    });
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
