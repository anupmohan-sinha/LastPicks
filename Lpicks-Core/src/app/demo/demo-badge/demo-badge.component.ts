import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-badge',
  templateUrl: './demo-badge.component.html',
  styleUrls: ['./demo-badge.component.scss']
})
export class DemoBadgeComponent implements OnInit {
  demoBadge1 = {
    color: 'primary',
    label: 'Primary'
  };
  demoBadge2 = {
    color: 'success',
    label: 'Success'
  };
  demoBadge3 = {
    color: 'danger',
    label: 'Danger'
  };
  demoBadge4 = {
    color: 'navy',
    label: 'Navy'
  };
  demoBadge5 = {
    color: 'secondary',
    label: 'Secondary'
  };
  demoBadge6 = {
    color: 'warning',
    label: 'Warning'
  }
  demoBadge7 = {
    color: 'foam',
    label: 'Foam'
  }

  constructor() { }

  ngOnInit() {
  }

}
