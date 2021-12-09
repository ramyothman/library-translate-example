import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import * as EnglishTranslate from '../assets/i18n/en'; 
import * as GermanTranslate from '../assets/i18n/de'; 
@Component({
  selector: 'lib-cool-library',
  template: `
    <p>
      cool-library works!
      {{ 'Hello' | translate }}
    </p>
  `,
  styles: [
  ]
})
export class CoolLibraryComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.setTranslation('en', EnglishTranslate.ENGLISH);
    this.translateService.setTranslation('de', GermanTranslate.GERMAN);
    this.translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

}
