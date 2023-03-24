import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [

  {
    path: '',
    component:ProductListComponent,
  },
  {
    path: 'product-details/:id',
    component:ProductDetailsComponent,
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'Register',
    component:RegisterComponent,
  },
  {
  path: 'card',
  component: CardComponent,
  // canActivate: [AuthGuard]
},


  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
