import { CommonModule } from '@angular/common';
import { Component, OnChanges} from '@angular/core';
import { FormControl ,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnChanges{
  constructor(private route:Router){
  }
  isBtn:boolean=false
  login:any=new FormGroup({
    uname:new FormControl(null,[Validators.minLength(3)]),
    password:new FormControl(null)
}) 
  ngOnChanges(): void {
      if(this.login.get('uname') == "user" && this.login.get('password') == "user"){
        this.isBtn=false;
      }
  }
  submit(){
    if(this.login.get('uname').value == "user" && this.login.get('password').value =="user"){
      this.route.navigate(["/admin"])
    }else{
      alert("username and password does not match")
    }
  }
  reset(){
    this.login.reset()
  }
}
