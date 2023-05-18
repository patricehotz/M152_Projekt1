import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DateiformateComponent } from './dateiformate/dateiformate.component';
import { AnimationsComponent } from './animations/animations.component';
import { UhrheberrechtComponent } from './uhrheberrecht/uhrheberrecht.component';
import { KonzeptComponent } from './konzept/konzept.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DateiformateComponent,
    AnimationsComponent,
    UhrheberrechtComponent,
    KonzeptComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
