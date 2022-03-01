import axios from 'axios';
import 'components/Application.scss';
import DayList from 'components/DayList';
import React, { useState, useEffect } from 'react';
import Appointment from 'components/Appointment';
import getAppointmentsForDay from 'helpers/selectors';
import { getInterview, getInterviewersForDay } from 'helpers/selectors';
import useApplicationData from 'hooks/useApplicationData';

export default function Application(props) {
  const { state, setState, setDay, bookInterview, cancelInterview } =
    useApplicationData();

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewersItem = getInterviewersForDay(state, state.day);

  const scheduleList = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewersItem}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((all) => {
      console.log('All', all);
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
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
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {scheduleList}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
