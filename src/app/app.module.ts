import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './components/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { OpinionComponent } from './components/home/opinion/opinion.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { OffersComponent } from './components/home/offers/offers.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HttpService } from '../shared/service';
import { McarouselComponent } from './components/home/mcarousel/mcarousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { PricelistComponent } from './components/pricelist/pricelist.component';
import { TrainingComponent } from './components/training/training.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MainOffersComponent } from './components/main-offers/main-offers.component';
import { AuthInterceptorInterceptor } from './auth-interceptor/auth-interceptor.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ContactDetailsComponent } from './components/contact/contact-details/contact-details.component';
import { TitlePageComponent } from './title-page/title-page.component';



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
    PagenotfoundComponent,
    MainOffersComponent,
    ContactDetailsComponent,
    TitlePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi: true,
  },
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
