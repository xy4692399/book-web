import { Component, OnInit } from '@angular/core';
import { Library } from './library';
import {IndexService} from '../index.service';
import {Result} from './result';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibraryComponent implements OnInit {

  result: Result;

  libraries: Library [];

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.getLibraries();
    // console.log(this.getLibraries());
  }

  getLibraries() {
    const v = this;
    v.indexService.getLibraries().subscribe(data => {console.log(data);  v.result = data ;  } );
  }

}
