import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { CardComponent } from './components/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameService } from './game.service';
import { MessageComponent } from './components/message.component';
import { Globals } from './constants';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (private injector: Injector) {
    Globals.injector = injector
  }
}
