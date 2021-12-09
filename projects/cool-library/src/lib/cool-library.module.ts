import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoolLibraryComponent } from './cool-library.component';
import { CommonModule } from '@angular/common';
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";


@NgModule({
  declarations: [
    CoolLibraryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot(),
  ],
  exports: [
    CoolLibraryComponent
  ]
})
export class CoolLibraryModule { }
