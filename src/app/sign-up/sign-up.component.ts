import { Component, OnInit } from '@angular/core';
import { signup } from '../signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signup: signup = {
    id: 1,
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }
  
}
