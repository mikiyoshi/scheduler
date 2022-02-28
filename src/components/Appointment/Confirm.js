import React from 'react';
import Button from './../Button';

export default function Confirm(props) {
  return (
    <main className="appointment__card appointment__card--confirm">
      {/* <h1 className="text--semi-bold">Delete the appointment?</h1> */}
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        {/* <Button danger>Cancel</Button>
        <Button danger>Confirm</Button> */}
        <Button danger onClick={props.onConfirm}>
          Cancel
        </Button>
        <Button danger onClick={props.onCancel}>
          Confirm
        </Button>
      </section>
    </main>
  );
}
