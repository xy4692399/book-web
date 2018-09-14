import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  rollback() {
    this.location.back();
  }

}
