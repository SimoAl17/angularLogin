import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    pswConfirm: new FormControl("", [Validators.required]),
    mail: new FormControl("", [Validators.required]),
    dob: new FormControl("", [Validators.required]),
  });


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    const newUser: User = {username: this.registerForm.value.username,
                          password:this.registerForm.value.password,
                          mail: this.registerForm.value.mail,
                          dob: new Date(this.registerForm.value.dob).getTime()}
    this.auth.register(newUser).subscribe({
      next:(user) => console.log(user),
      error: err => console.log(err)
    });
  }

}