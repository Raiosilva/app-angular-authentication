import { Person } from './../person';
import { Observable } from 'rxjs';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people$: Observable<Person[]>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.people$ = this.mainService.getPeople();
  }

}
