const calendarCurrentElement = document.getElementById("calendarCurrent");
const calendarNextElement = document.getElementById("calendarNext");
const calendarCurrentTitle = document.getElementById("calendarCurrentTitle");
const calendarNextTitle = document.getElementById("calendarNextTitle");
const monthTitle = document.getElementById("monthTitle");












// Arreglo de eventos (Formato date: "AAAA-MM-DD", description "")
const events = [
    { date: "2024-12-05", description: "Reunión de proyecto" },
    { date: "2024-12-15", description: "Cena de fin de año" },
    { date: "2024-12-20", description: "Último día de trabajo" },
    { date: "2024-01-10", description: "Comienzo de año" },
];















const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

const nextMonth = (currentMonth + 1) % 12;
const nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear;

function generateCalendar(year, month, calendarElement, calendarTitleElement) {
    calendarElement.innerHTML = "";
    calendarTitleElement.textContent = `${monthNames[month]} ${year}`;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const headerRow = document.createElement("div");
    headerRow.className = "day-header";
    dayNames.forEach(dayName => {
        const dayHeader = document.createElement("div");
        dayHeader.textContent = dayName;
        headerRow.appendChild(dayHeader);
    });
    calendarElement.appendChild(headerRow);

    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDiv = document.createElement("div");
        calendarElement.appendChild(emptyDiv);
    }

    // Crear celdas de días con eventos
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.innerHTML = `<span>${day}</span>`;

        // Mostrar eventos en la fecha correspondiente
        events
            .filter(event => event.date === dateStr)
            .forEach(event => {
                const eventDiv = document.createElement("div");
                eventDiv.className = "event";
                eventDiv.textContent = event.description;
                dayDiv.appendChild(eventDiv);
            });

        calendarElement.appendChild(dayDiv);
    }
}

// Generar el calendario para el mes actual y el siguiente
generateCalendar(currentYear, currentMonth, calendarCurrentElement, calendarCurrentTitle);
generateCalendar(nextMonthYear, nextMonth, calendarNextElement, calendarNextTitle);
