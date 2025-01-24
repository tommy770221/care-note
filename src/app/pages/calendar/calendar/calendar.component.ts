import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    ViewChild
} from '@angular/core';
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {fromEventPattern} from 'rxjs';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit, AfterViewInit {
    calendar: Calendar;
    dayClicked = new EventEmitter();

    //@ViewChild('calendarDiv') calendarDiv!: ElementRef;

    constructor() {}

    event(eventName) {
        return fromEventPattern(
            (handler) => this.calendar.on(eventName, handler),
            (handler) => this.calendar.off(eventName, handler)
        );
    }

    handleDateClick(arg) {
        console.log(arg.date);
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        const calendarDiv = document.getElementById('calendarDiv');
        //console.log(calendarDiv);
        this.calendar = new Calendar(calendarDiv, {
            plugins: [dayGridPlugin, interactionPlugin],
            initialView: 'dayGridYear',
            headerToolbar: {
              left: 'prev,next',
              center: 'title',
              right: 'dayGridYear,dayGridMonth,dayGridWeek,dayGridDay' // user can switch between the two
            },
            dateClick: this.handleDateClick.bind(this),
            editable: true, // important for activating event interactions!
            selectable: true, // important for activating date selectability!
            events: [
                {
                    title: 'Movie In',
                    start: new Date(2025,0,24, 19, 0),
                    end: new Date(2025,0,26, 22, 0),
                    allDay: false,
                    backgroundColor: '#2388f5'
                }
            ],

        });
        this.calendar.render();
        /*
    this.event('dateClick').subscribe((arg) => {
      console.log(arg);
    });*/
    }
}
