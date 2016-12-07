import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { My1stComComponent } from './my-1st-com/my-1st-com.component';
import { MyNestedComComponent } from './my-nested-com/my-nested-com.component';

@NgModule({
  declarations: [
    AppComponent,
    My1stComComponent,
    MyNestedComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
