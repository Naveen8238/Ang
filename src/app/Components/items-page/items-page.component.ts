import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServicesService } from '../../data-services.service';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../posts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.css'
})
export class ItemsPageComponent implements OnInit {
constructor(private route:ActivatedRoute,private users:DataServicesService,private post:PostsService){
}
 user:any=[];
 posts:any=[];
//  userId:any="";
  ngOnInit():void{
    // this.route.paramMap.subscribe(
    //   (params:any)=>{
    //     let userId = +params.get('id')
    //     this.user.push(this.users.data.find(item=>item.id == userId));
    //   }
    // )
    // let userId = this.route.snapshot.paramMap.get('id')
    // this.user.push(this.users.data.find((item:any)=>item.id == this.route.snapshot.paramMap.get('id')));
    // this.route.queryParamMap.subscribe((qparams)=>{
    //   let id:any = qparams.get('id');
    //   if(id){
    //     this.user=this.users.data.filter((item:any)=>{
    //       return item.id == id
    //     })
    //   }
    //   else{
    //     this.user = this.users.data;
    //   }
    // })
    this.getPosts();
  }
  getPosts(){
    this.post.getPost().subscribe((data:any)=>{
        this.posts=data,
        this.route.queryParamMap.subscribe((qparams)=>{
          let id:any = qparams.get('id');
          if(id){
            this.user=this.posts.filter((item:any)=>{
              return item.id == id
            })
          }
          else{
            this.user = this.users.data;
          }
        })
      
    })
  }
  openForm(){
  }
  delete(post:any){

  }
}
