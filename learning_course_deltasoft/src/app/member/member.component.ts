import { Component } from '@angular/core';
import { Database,set,ref,update, onValue, remove } from '@angular/fire/database';
import { __values } from 'tslib';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {
  title = 'firebase-crud-ng'

  constructor(public database : Database){

  }

  insertMember(value:any){
    set(ref(this.database, 'role/' + value.role), {
      role : value.role,
      first_name: value.first_name,
      last_name: value.last_name,
    });
    alert('Member Created');
  }

  searchMember(value:any){
    const starCountRef = ref(this.database,'role/' + value.role);
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
      alert('Role founded : ' + data.first_name + ' ' + data.last_name);
  });
  }

  updateMember(value:any){
    update(ref(this.database, 'role/' + value.role), {
      // role : value.role,
      first_name: value.first_name,
      last_name: value.last_name,
    });
    alert('Member Updated');
  }
  
  deleteMember(value:any){
    remove(ref(this.database,'role/' + value.role));
    alert('Role' + ' ' + value.role + ' ' + 'has been deleted');
  }
}
