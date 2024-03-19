import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pp2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pp2.component.html',
  styleUrl: './pp2.component.css'
})
export class Pp2Component{

  @ViewChild('singUp') singUp!:NgForm;

  submit(e:any){
      console.log(e.value)
  }
  reset(){
    this.singUp.reset()
  }
}
