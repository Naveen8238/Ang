  import { Component, OnInit } from '@angular/core';
  import { MatSidenavModule } from '@angular/material/sidenav';
  import {MatButtonModule} from '@angular/material/button';
  import { CommonModule } from '@angular/common';
import { DataServicesService } from '../../data-services.service';
import { ActivatedRoute, Router } from '@angular/router';


  @Component({
    selector: 'app-aside',
    standalone: true,
    imports: [MatSidenavModule,MatButtonModule,CommonModule],
    templateUrl: './aside.component.html',
    styleUrl: './aside.component.css'
  })
  export class AsideComponent implements OnInit{
    constructor (private ds:DataServicesService,private router:Router,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((qparams)=>{
    //   this.isButtonId= qparams.get('id') || 1
    //   this.newData=this.Data.filter((item:any)=>{
    //     return item.id == this.isButtonId
    //   })
    //   this.program=this.newData[0].Data
    // })
    this.Data.forEach((item:any)=>{
      if(this.router.url == item.url){
        this.setActive(item)
      }
    })
    this.program = this.Data[0].Data
  }
  isButtonId:any;
    program:any;
  // newData:any;
  Data:any = this.ds.Data
  setActive(item:any){
    this.program = item.Data
    this.isButtonId=item.id
  }  
  activeButton(item:any){
      return item.id == this.isButtonId
  }     
  }

