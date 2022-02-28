import React from 'react';

// import PropTypes from 'prop-types';
import InterviewerListItem from 'components/InterviewerListItem';
import 'components/InterviewerList.scss';

export default function InterviewerList(props) {
  // step 1 one interviewer
  // const interviewer = {
  //   id: 1,
  //   name: "Sylvia Palmer",
  //   avatar: "https://i.imgur.com/LpaY82x.png"
  // };
  //
  // step 2 interviewers
  // const interviewers = [
  //   { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  //   { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  //   { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  //   { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  //   { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
  // ];

  // const { interviewers, setInterviewer, value } = props;
  // const { interviewers, value, onChange } = props;
  // return (
  //   <section className="interviewers">
  //     <h4 className="interviewers__header text--light">Interviewer</h4>
  //     <ul className="interviewers__list">
  //       {/* {interviewers.map((oneInt) => {
  //         return (
  //           <InterviewerListItem
  //             key={oneInt.id}
  //             name={oneInt.name}
  //             avatar={oneInt.avatar}
  //             selected={oneInt.id === value}
  //             setInterviewer={() => onChange(oneInt.id)}
  //           />
  //         );
  //       })} */}
  //     </ul>
  //   </section>
  // );

  // const interviewers = props.interviewers.map((interviewer) => {
  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    );
  });
  // Render the new day list item inside a ul tag
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}

// InterviewerList.propTypes = {
//   interviewers: PropTypes.array.isRequired,
// }
