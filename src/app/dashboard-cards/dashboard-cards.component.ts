import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss']
})
export class DashboardCardsComponent implements OnInit {
  @Input('Confirmed')
  Confirmed:any;
  @Input('Active')
  Active:any;
  @Input('Death')
  Death:any;
  @Input('Recovered')
  Recovered:any;
 

  constructor() { }

  ngOnInit(): void {
  }

}
