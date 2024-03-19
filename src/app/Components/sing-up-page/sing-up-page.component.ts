import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl ,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up-page',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './sing-up-page.component.html',
  styleUrls: ['./sing-up-page.component.css']
})
export class SingUpPageComponent {
  constructor(){}
  // submit(e:any){
  //   console.log(e.valid)
  //   if(e.valid){
  //     alert("sucess")
  //   }
  login:any=new FormGroup({
      uname:new FormControl(" ",[Validators.required,Validators.minLength(8)]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)]),
  })
  show(){
    console.log(this.login)
  }
  }
