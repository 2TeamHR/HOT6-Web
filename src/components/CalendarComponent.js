import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

function CalenderComponent() {

    const container = document.getElementById('calendar');
    const options = {
      defaultView: 'month',
      timezone: {
        zones: [
          {
            timezoneName: 'Asia/Seoul',
            displayLabel: 'Seoul',
          },
        ],
      },
      month: {
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      }
    };
    
    const calendar = new Calendar(container, options);

    calendar.createEvents([
        {
          id: 'event1',
          calendarId: 'cal2',
          title: '주간 회의',
          start: '2022-06-07T09:00:00',
          end: '2022-06-07T10:00:00',
        },
        {
          id: 'event2',
          calendarId: 'cal1',
          title: '점심 약속',
          start: '2022-06-08T12:00:00',
          end: '2022-06-08T13:00:00',
        },
        {
          id: 'event3',
          calendarId: 'cal2',
          title: '휴가',
          start: '2022-06-08',
          end: '2022-06-10',
          isAllday: true,
          category: 'allday',
        },
      ]);

    return (
        <>
            {/* <!-- v2 --> */}
            <link rel="stylesheet" href="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css" />
<script src="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.js"></script>

            <div id="calendar" style={{height: "800px"}}></div>
        </>
    );
}

export default CalenderComponent;