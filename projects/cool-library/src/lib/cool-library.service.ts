import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoolLibraryService {

  constructor(private translateService: TranslateService) { }

  switchToEN() {
    this.translateService.use('en');
  }

  
  switchToDE() {
    this.translateService.use('de');
  }
}
