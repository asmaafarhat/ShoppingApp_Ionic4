import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGardService } from './auth-gard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
    , canActivate: [AuthGardService]
  },
  {
    path: 'kids-shoes',
    loadChildren: () => import('./kids-shoes/kids-shoes.module').then(m => m.KidsShoesPageModule)
  },
  {
    path: 'girls-shoes',
    loadChildren: () => import('./girls-shoes/girls-shoes.module').then(m => m.GirlsShoesPageModule)
  },
  {
    path: 'kids-dresses',
    loadChildren: () => import('./kids-dresses/kids-dresses.module').then(m => m.KidsDressesPageModule)
  },
  {
    path: 'girls-dresses',
    loadChildren: () => import('./girls-dresses/girls-dresses.module').then(m => m.GirlsDressesPageModule)
  },
  {
    path: 't-shirt',
    loadChildren: () => import('./t-shirt/t-shirt.module').then(m => m.TShirtPageModule)
  },
  {
    path: 'pants-and-pocket',
    loadChildren: () => import('./pants-and-pocket/pants-and-pocket.module').then(m => m.PantsAndPocketPageModule)
  },
  {
    path: 'view-cart',
    loadChildren: () => import('./view-cart/view-cart.module').then(m => m.ViewCartPageModule)
  },
  {
    path: 'elem-data',
    loadChildren: () => import('./elem-data/elem-data.module').then(m => m.ElemDataPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
