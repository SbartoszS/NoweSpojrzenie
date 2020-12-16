import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { OpinionComponent } from './home/opinion/opinion.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { OffersComponent } from './home/offers/offers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OpinionComponent,
    CarouselComponent,
    AboutUsComponent,
    OffersComponent
    GalleryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
