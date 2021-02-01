import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService:SharedService) { }
  @Input() searchName!:string;
selectedUser:any;
 users$ = new Observable<User[]>();
  ngOnInit(): void {
 this.getUserList();
  }

   getUserList(){
    this.users$ = this.userService.getUser();

  }

  RowSelected(u:any){
    this.selectedUser = u.name;

   console.log(this.selectedUser)
    }
}
