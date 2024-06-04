import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
// const eventInfo = {
//   timeText: '25-03-2020',
//   event: {
//     title: 'task1',
//   },
// };
export default function CalendarFull() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={[
        { title: 'event 1', date: '2019-04-01' },
        { title: 'event 2', date: '2019-04-02' },
      ]}
      eventContent={renderEventContent}
      dateClick={handleDateClick}
    />
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
