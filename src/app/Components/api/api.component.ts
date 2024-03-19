import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../../posts.service';
import { FormControl ,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { fromEvent,from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit,AfterViewInit{
    constructor(public ps:PostsService,private router:Router ){
    }
    @ViewChild('inputChange')
    inputChange:ElementRef | undefined;
    posts:any ;
    newObServales:any;
    formHeader:any="ADD POST";
    searchInput:any;
    showForm:boolean=false;
    searchData:any=[];
    search:any;
    listData:boolean=false
    alterform:any=new FormGroup({
      id:new FormControl(null,[Validators.required]),
      title:new FormControl(null,[Validators.required]),
      body:new FormControl(null,[Validators.required])
    })
    ngOnInit(): void {
      this.getPosts() 
    }
    getPosts(){
      this.ps.getPost().subscribe(
        (data:any)=>{
          this.posts=data
        },
        (error:any)=>{
          console.log("something went wrong!",error)
        }
      )
    }
    delete(id:any){
      let newData:any = this.posts.filter((item:any)=>{
        return item.id !== id
      })
      this.posts=newData
    }
    openForm(data:any = null){
      this.showForm=true
      this.formHeader="ADD POST"
      if(data){
        this.formHeader="EDIT POST"
        this.alterform.patchValue({
          id:data.id,
          title:data.title,
          body:data.body
        })
      }else{
        this.alterform.reset()
      }
    }
    savePost(){      
        this.showForm=false
        if(this.alterform.value.id){
          let newData=this.posts.map((item:any)=>{
            if(item.id ==this.alterform.value.id ){
              return {
                id:this.alterform.value.id,
                title:this.alterform.value.title,
                body:this.alterform.value.body
              }
            }else{
              return item
            }
          })
        this.posts=newData;
        }else{
          this.posts.unshift(this.alterform.value)
        }
    }
    closeForm(){
      this.showForm=false
    }
    getData(){
      this.newObServales= fromEvent(this.inputChange?.nativeElement,'input').subscribe((data:any)=>{
        this.searchInput=data.target.value
        this.search=from(this.posts).pipe(filter((obj:any)=>{
          return  obj.title.split(" ").includes(this.searchInput)
        })).subscribe((data)=>{
          this.searchData.push(data)
          this.listData=true
        }),
        (err:any)=>{
          console.log(err)
        }
      })
    }
    route(id:any){
      this.router.navigate(['/item'],{queryParams:{id:id}})

    }
    ngAfterViewInit(): void {
      this.getData();
    }
}
