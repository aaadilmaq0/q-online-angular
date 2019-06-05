import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-page3",
  templateUrl: "./page3.component.html",
  styleUrls: ["./page3.component.scss"]
})
export class Page3Component implements OnInit {
  friendList:any[] = [
    {
      id: 0,
      name: "Prashant",
      img: "man",
      status: "suggestion"
    },
    {
      id: 1,
      name: "Deepak",
      img: "man-3",
      status: "suggestion"
    },
    {
      id: 2,
      name: "Shrida",
      img: "girl-1",
      status: "suggestion"
    },
    {
      id: 3,
      name: "Arun",
      img: "man-2",
      status: "friend"
    },
    {
      id: 4,
      name: "Kamlesh",
      img: "man-1",
      status: "suggestion"
    },
    {
      id: 5,
      name: "Nirtish",
      img: "man",
      status: "friend"
    },
    {
      id: 6,
      name: "Mathili",
      img: "girl",
      status: "friend"
    },
    {
      id: 7,
      name: "Harshita",
      img: "girl-1",
      status: "suggestion"
    },
    {
      id: 8,
      name: "Darshan",
      img: "boy",
      status: "friend"
    }
  ];

  constructor(private toastr:ToastrService) {}

  ngOnInit() {
  }

  toggleFriend(status:string, index:number){
    this.friendList[index].status = (status =='suggestion') ? 'friend' : 'suggestion';
  }

  show(){
    console.log(JSON.parse(localStorage.getItem("form1")));
    console.log(JSON.parse(localStorage.getItem("form2")));
    var friends = [];
    this.friendList.forEach(friend=>{
      if(friend.status =='friend')
        friends.push(friend);
    })
    console.log({ friends : friends});
    this.toastr.success("THANK YOU!",'',{
      timeOut : 2000,
      positionClass : 'toast-bottom-right'
    });
  }
}
