import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {
  constructor(private location: Location) { }

  ngOnInit() {
  }
  rollback() {
    this.location.back();
  }

}
