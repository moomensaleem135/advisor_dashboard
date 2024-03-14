'use client';
import { EventSourceInput } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useEffect, useState } from 'react';

import { exampleEvents } from './exampleEvents';
import NewTaskForm from './form';
import { CalendarStyles, DragEventDiv, Main, NewButton } from './index.styles';
import TooltipContent from './tooltip/tooltip';

interface Event {
  title: string;
  desc: string;
  start: Date | string;
  end: Date | string;
  allDay: boolean;
  id: number;
}

export default function Calendar() {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentEventNumber, setCurrentEventNumber] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (formData: any) => {
    const newEvent = {
      title: formData.title,
      desc: formData.desc,
      start: formData.startDate,
      end: formData.endDate,
      allDay: true,
      id: new Date().getTime()
    };
    setAllEvents((prevEvents) => [...prevEvents, newEvent]);
    setCurrentEventNumber((prevNumber) => prevNumber + 1);
    setTotalEvents((prevTotal) => prevTotal + 1);
  };

  useEffect(() => {
    const draggableEl = document.getElementById('draggable-el');
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
          const title = eventEl.getAttribute('title');
          const id = eventEl.getAttribute('data');
          const start = eventEl.getAttribute('start');

          return { title, id, start };
        }
      });
    }
    setAllEvents(exampleEvents);
    setTotalEvents(exampleEvents.length);
    setCurrentEventNumber(exampleEvents.length);
  }, []);

  return (
    <Main>
      <CalendarStyles>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: '',
            center: 'prev,title,next',
            right: ''
          }}
          height="75vh"
          firstDay={1}
          fixedWeekCount={false}
          events={allEvents as EventSourceInput}
          nowIndicator={true}
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          eventContent={(arg) => (
            <TooltipContent
              title={arg.event.title}
              desc={arg.event.extendedProps.desc}
              startDate={arg.event.start as Date}
              endDate={arg.event.end as Date}
              currentEventNumber={currentEventNumber}
              totalEvents={totalEvents}
            />
          )}
          eventClassNames={(arg) =>
            arg.event.start && arg.event.start < new Date() ? 'past-event' : ''
          }
          dayCellContent={({ date }) => {
            const today = new Date();
            const isToday =
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear();

            return <div style={{ fontWeight: isToday ? 'bold' : 'normal' }}>{date.getDate()}</div>;
          }}
        />
        {/* <DragEventDiv id="draggable-el">
          <NewButton onClick={handleOpenForm}>New Task</NewButton>
        </DragEventDiv> */}
        {/* <NewTaskForm open={isFormOpen} onClose={handleCloseForm} onFormSubmit={handleFormSubmit} /> */}
      </CalendarStyles>
    </Main>
  );
}
