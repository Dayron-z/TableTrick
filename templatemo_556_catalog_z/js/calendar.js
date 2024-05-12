$(document).ready(function() {
    // Inicializa el calendario
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
      dateClick: function(info) {
        alert('Date: ' + info.dateStr);
      }
    });
    calendar.render();
  });   