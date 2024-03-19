import { Routes } from '@angular/router';
// import { Pp1Component } from './Components/pp-1/pp-1.component';
// import { Pp2Component } from './Components/pp2/pp2.component';
// import { ApiComponent } from './Components/api/api.component';
// import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
// import { ItemsPageComponent } from './Components/items-page/items-page.component';
import { ProjectComponent } from './Components/proj/project.component';
import { AsideComponent } from './Components/aside/aside.component';
import { SurveyComponent } from './Components/survey/survey.component';
import { ObservationComponent } from './Components/observation/observation.component';
import { RubricsComponent } from './Components/rubrics/rubrics.component';
import { LoginComponent } from './Components/login/login.component';
// import { SingUpPageComponent } from './Components/sing-up-page/sing-up-page.component';
// import { SuccessPageComponent } from './Components/success-page/success-page.component';
// import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
// import { ListingComponent } from './Components/listingPage/listingPage.component';
// import { ItemsPageComponent } from './Components/items-page/items-page.component';
export const routes: Routes = [
    // {
    //     path:"",
    //     component:ListingComponent
    // },
    // {
    //     path:"item",
    //     title:"itemsPage",
    //     component:ItemsPageComponent        
    // },
    // {
    //     path:'**',
    //     component:PageNotFoundComponent
    // },
    // {
    //     path:" ",
    //     component:SingUpPageComponent
    // },
    // {
    //     path:"success",
    //     component:SuccessPageComponent
    // }
    // {
    //     path:"",
    //     component:Pp1Component
    // },
    // {
    //     path:"template",
    //     component:Pp2Component
    // }
    // {
    //     path:"",
    //     component:ApiComponent
    // },
    // {
    //     path:"item",
    //     component:ItemsPageComponent
    // },
    // {
    //     path:"**",
    //     component:PageNotFoundComponent
    // }

    // {
    //     path:"",
    //     component:AsideComponent,
    // },
    // {
    //     path:"proj",
    //     component:ProjectComponent
    // },
    // {
    //     path:"survey",
    //     component:SurveyComponent
    // },
    // {
    //     path:"observation",
    //     component:ObservationComponent
    // },
    // {
    //     path:"obser",
    //     component:RubricsComponent
    // }

    {
        path:"",
        component:LoginComponent
    },
    {
        path:"admin",
        component:AsideComponent
    }
]
