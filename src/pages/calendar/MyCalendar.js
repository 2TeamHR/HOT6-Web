import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class MyCalendar extends Component {
    render() {
        return (
          <div className="container mt-5">
              <button className="btn btn-primary mb-3" style={{float:"right"}}>일정 추가</button>
              <div style={{clear:"both"}}>
              </div>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={[
                { title: '노재영', date: '2023-02-02' },
                { title: '최고', date: '2023-02-03' }
                ]}
              />
          </div>
        );
    }
}
export default MyCalendar;
