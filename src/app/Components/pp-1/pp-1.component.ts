import { CommonModule } from '@angular/common';
import { Component, OnChanges} from '@angular/core';
import { FormControl ,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-pp-1',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './pp-1.component.html',
  styleUrl: './pp-1.component.css'
})
export class Pp1Component implements OnChanges{
  constructor(){
  }
  isBtn:boolean=false
  login:any=new FormGroup({
    uname:new FormControl(null,[Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),Validators.minLength(5)]),
    cpassword:new FormControl(null,[Validators.required]),
    mobile:new FormControl(null,[Validators.maxLength(10),Validators.pattern(/^\d{10}$/)])
}) 
  ngOnChanges(): void {
      if(this.login.get('email')&& this.login.get('password')){
        this.isBtn=false
      }
  }
  submit(){
    console.log(this.login.value)
  }
  reset(){
    this.login.reset()
  }
}
