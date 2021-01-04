import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { TrainingComponent } from './training/training.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'oferta', component: OffersComponent },
  { path: 'szkolenia', component: TrainingComponent },
  { path: 'cennik', component: PricelistComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
