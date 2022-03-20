import { Component, OnInit } from '@angular/core';
import { NgxDateFormat, NgxTimelineEvent, periodKeyDateFormat } from '@frxjs/ngx-timeline';

// @see https://github.com/emanuelefricano93/frxjs-Ngx-Timeline#readme
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  events!: NgxTimelineEvent[];
  
  constructor() {
    this.initEvents();
    // periodKeyDateFormat.MONTH_YEAR = NgxDateFormat.YEAR;
  }

  ngOnInit(): void {
  }

  
  private initEvents(): void {
    
    const today = new Date();
    today.setFullYear(-489);
    today.setMonth(8);
    today.setDate(10);
    today.setHours(6)
    const tomorrow = new Date(today.getTime());
    tomorrow.setDate(today.getDate() + 1);
    const nextMonth = new Date(today.getTime());
    nextMonth.setMonth(today.getMonth() + 1);
    const nextYear = new Date(today.getTime());
    nextYear.setFullYear(today.getFullYear() + 1);

    this.events = [
      { id: 0, description: 'This is the description of the event 0', timestamp: today, title: 'title 0' },
      { id: 1, description: 'This is the description of the event 1', timestamp: tomorrow, title: 'title 1' },
      { id: 2, description: 'This is the description of the event 2', timestamp: today, title: 'title 2' },
      { id: 3, description: 'This is the description of the event 3', timestamp: tomorrow, title: 'title 3' },
      { id: 4, description: 'This is the description of the event 4', timestamp: nextMonth, title: 'title 4' },
      { id: 5, description: 'This is the description of the event 5', timestamp: nextYear, title: 'title 5' },
    ];
  }

}
