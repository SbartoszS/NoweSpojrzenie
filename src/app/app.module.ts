import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { OpinionComponent } from './home/opinion/opinion.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { OffersComponent } from './home/offers/offers.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from '../shared';
import { McarouselComponent } from './home/mcarousel/mcarousel.component';
import { ContactComponent } from './contact/contact.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { TrainingComponent } from './training/training.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OpinionComponent,
    CarouselComponent,
    AboutUsComponent,
    OffersComponent,
    HomeComponent,
    GalleryComponent,
    McarouselComponent,
    ContactComponent,
    PricelistComponent,
    TrainingComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
