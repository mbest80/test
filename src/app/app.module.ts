import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateNavigationComponent } from './_template/template-navigation/template-navigation.component';
import { TemplateRechnerComponent } from './_template/template-rechner/template-rechner.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateHeaderComponent,
    TemplateNavigationComponent,
    TemplateRechnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
