import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
