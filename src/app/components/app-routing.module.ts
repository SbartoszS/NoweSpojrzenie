import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { TrainingComponent } from './training/training.component';
import { MainOffersComponent } from './main-offers/main-offers.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'onas', component: HomeComponent },
  { path: 'oferta', component: MainOffersComponent },
  { path: 'szkolenia', component: TrainingComponent },
  { path: 'cennik', component: PricelistComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
