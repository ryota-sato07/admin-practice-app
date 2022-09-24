import { Component, OnInit } from '@angular/core';
import { Member }            from '../member';
import { MemberService }     from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];
  selectedMemnber?: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMemnber = member;
  }

  getMembers(): void {
    this.memberService.getMembers()  // Observable
      .subscribe(members => this.members = members)
  }

  // 削除したメンバー以外のデータを返す
  onDelete(member: Member): void {
    this.members = this.members.filter(m => m !== member);
    this.memberService.deleteMember(member).subscribe();
  }

}
