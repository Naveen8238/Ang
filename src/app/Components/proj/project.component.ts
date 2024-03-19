import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DataServicesService } from '../../data-services.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit{
  constructor (private ds:DataServicesService,private router:Router,private route:ActivatedRoute){
}
ngOnInit(): void {
  this.route.queryParamMap.subscribe((qparams)=>{
    this.isButtonId= qparams.get('id') || 1
    this.newData=this.Data.filter((item:any)=>{
      return item.id == this.isButtonId
    })
    this.program=this.newData[0].Data
  })
}
isButtonId:any;
program:any;
newData:any;
Data:any = this.ds.Data
setActive(item:any){
  this.router.navigate([`/${item.url}`],{queryParams:{id:item.id}})
}
activeButton(item:any){
  if(item.id == this.isButtonId){
    return  true
  }else{
    return false

  }
} 
}

