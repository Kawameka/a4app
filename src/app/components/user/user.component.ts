import { Component, OnInit } from '@angular/core';
// the ../../ means:
// from the current folder (where this file resides)
// go out two folders (e.g. leave the user folder, then leave the components folder)
// then go into the services folder, and access the file "data.service"
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // creates a string variable called name
  name:string;

  age:number;
  email:string;

  // creates an blank Address interface (see below) called address
  address:Address;

  // creates an array of strings variable called hobbies
  hobbies:string[];

  // creates a variable that can be anything (string, number, etc)
  hello:any;

  posts:Post[];

  isEdit:boolean = false;

  // a service needs to be injected as a dependency
  // which goes into the constructor params
  // this allows us to use any functions that are in "DataService"
  constructor(private dataService:DataService) {
    console.log('constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    // sets the name variable to John Doe
    this.name = 'John Doe';

    this.age = 30;
    this.email = "butts@gmail.com";

    // sets the information in the object
    this.address = {
      street:'50 Butts Ave',
      city:'Los Angeles',
      state: 'CA'
    }
    this.hobbies = ['Code', 'Movies', 'Music'];

    this.hello = 1;

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name='Butt Happen';
    this.hobbies.push('Butt Molding');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    // look through the hobbies array
    for(let i = 0; i < this.hobbies.length; i++){
      // if you find the hobby within the hobbies array
      if(this.hobbies[i] == hobby){
        // remove the hobby
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}