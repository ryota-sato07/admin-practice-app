import { Component, OnInit } from '@angular/core';
import { Member }            from '../member';
import { MEMBERS }           from '../mock-members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members = MEMBERS;
  member: Member = {
    id:   1,
    name: 'Tanaka'
  };

  selectedMemnber: Member = {
    id:   1,
    name: 'Tanaka'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(member: Member): void {
    this.selectedMemnber = member;
  }

}
