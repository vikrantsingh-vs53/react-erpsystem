// src/components/Calendar.js

import React from 'react';
import FullCalendar from '@fullcalendar/react'; // Using FullCalendar library
import dayGridPlugin from '@fullcalendar/daygrid'; // Using the dayGrid plugin

const Calendar = () => {
  const events = [
    // Add your calendar events here
    { title: 'Flight to Delhi', date: '2024-03-14' },
    { title: 'Holi Hae Bhailog', date: '2024-03-25' },
    // Add more events as needed
  ];

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </div>
  );
};

export default Calendar;
