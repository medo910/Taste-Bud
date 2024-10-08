// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutMainComponent } from './about-main/about-main.component';


// // Define routes
// export const routes: Routes = [
//     { path: '', component: HomeComponent }, // Default route
//     // { path: 'Home', component: HomeComponent }, // Home route (explicit)
//     { path: 'About', component: AboutMainComponent }, // About route
//     { path: '**', redirectTo: '' } // Wildcard route for unknown paths
// ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
// //   exports: [RouterModule]
// // })
// export class AppRoutingModule { }




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMainComponent } from './about-main/about-main.component';

// Define routes
export const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent }, // Default route (Home)
  { path: 'about', component: AboutMainComponent }, // About route
  // { path: '**', redirectTo: '' } // Wildcard route redirects to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



