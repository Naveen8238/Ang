import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SingUpPageComponent } from './Components/sing-up-page/sing-up-page.component';
import { Pp1Component } from './Components/pp-1/pp-1.component';
import { Pp2Component } from './Components/pp2/pp2.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ApiComponent } from './Components/api/api.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { TodoFormComponent } from './Components/todo-form/todo-form.component';
import { AsideComponent } from './Components/aside/aside.component';
import { ProjectComponent } from './Components/proj/project.component';
import { LoginComponent } from './Components/login/login.component';




@Component({
  selector: 'app-root',
  standalone: true,
imports: [RouterOutlet,SingUpPageComponent,Pp1Component,Pp2Component,NavBarComponent,ApiComponent,TodoListComponent,TodoFormComponent,AsideComponent,ProjectComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
