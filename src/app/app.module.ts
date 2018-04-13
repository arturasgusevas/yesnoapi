import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

import { AnswerService } from './answer.service';
import { OutputService } from './output.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AnswerService,
    OutputService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
