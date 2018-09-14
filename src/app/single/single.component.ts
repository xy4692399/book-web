import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  rollback() {
    this.location.back();
  }

}
