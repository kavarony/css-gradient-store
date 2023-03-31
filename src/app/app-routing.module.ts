import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home',  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)   },
  { path: 'header',  loadChildren: () => import('./header/header.module').then(m => m.HeaderModule)   },
  { path: 'footer',  loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule)   },
  { path: 'about',  loadChildren: () => import('./about/about.module').then(m => m.AboutModule)   },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
