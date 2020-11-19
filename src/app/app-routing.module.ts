import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [


    {
      path: '',
      component: DashboardComponent,
    },

    {
      path: 'products',
      component: ProductsComponent,
    },

    {
      path: 'requests',
      component: RequestsComponent,
    },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
