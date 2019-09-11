import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdi-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent implements OnInit {

  overlay = {
    title: 'Modal Title',
    option: [
      {
        link: '#',
        name: 'Got It'
      },
      {
        link: 'https://en.wikipedia.org/wiki/Modal_window',
        name: 'Did not Get It'
      },
      {
        link: '#',
        name: 'cancel'
      }
    ]
  };
  constructor() { }

  ngOnInit() {

  }

}

