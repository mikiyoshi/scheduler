//getAppointmentsForDay send to Array to Application.js
export function getAppointmentsForDay(state, name) {
  const filteredDays = state.days.filter((day) => day.name === name);
  if (state.days.length === 0 || filteredDays.length === 0) {
    return [];
  }

  const appointmentsFromDays = filteredDays[0].appointments; // selected days in the nav from http://localhost:8001/api/days

  let filteredAppointments = [];

  for (let appointment of appointmentsFromDays) {
    filteredAppointments.push(state.appointments[appointment]);
  }
  return filteredAppointments;
}

// getInterview send to Array to Application.js
export function getInterview(state, interview) {
  if (!interview) return null;
  const filteredInterview = {};
  filteredInterview.student = interview.student;
  filteredInterview.interviewer = state.interviewers[interview.interviewer];

  return filteredInterview; // appointments list Obj atselected days in the nav from http://localhost:8001/api/appointments
}

// getInterviewersForDay send to Array to Application.js
export function getInterviewersForDay(state, name) {
  const filteredDays = state.days.filter((day) => day.name === name);
  if (state.days.length === 0 || filteredDays.length === 0) {
    return [];
  }

  const interviewersFromDays = filteredDays[0].interviewers;

  let filteredInterviewers = [];

  for (let interviewer of interviewersFromDays) {
    filteredInterviewers.push(state.interviewers[interviewer]);
  }
  return filteredInterviewers; // interviewers list Obj at selected days in the nav from http://localhost:8001/api/interviewers
}
