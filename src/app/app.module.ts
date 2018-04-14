import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatchService } from './match.service';

import { AppComponent } from './app.component';
import { MatchlistComponent } from './matchlist/matchlist.component';
import { MatchsummaryComponent } from './matchsummary/matchsummary.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchlistComponent,
    MatchsummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
