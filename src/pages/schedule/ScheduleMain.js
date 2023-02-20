
function ScheduleMain() {

    const container = document.getElementById('calendar');
    const options = {
        defaultView: 'week',
        timezone: {
            zones: [
                {
                    timezoneName: 'Asia/Seoul',
                    displayLabel: 'Seoul',
                },
                {
                    timezoneName: 'Europe/London',
                    displayLabel: 'London',
                },
            ],
        },
        calendars: [
            {
                id: 'cal1',
                name: '개인',
                backgroundColor: '#03bd9e',
            },
            {
                id: 'cal2',
                name: '직장',
                backgroundColor: '#00a9ff',
            },
        ],
    };

    const Calendar = new Calendar(container, options);

    return (
        <>
            <div id="Calendar" style={"height: 600px;"}></div>
            <Calendar />
        </>

    )
}

export default ScheduleMain;