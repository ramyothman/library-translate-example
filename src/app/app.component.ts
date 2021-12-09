import { CoolLibraryService } from './../../projects/cool-library/src/lib/cool-library.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-app';
  constructor(private translateService: TranslateService, private coolService: CoolLibraryService) {
    this.translateService.setDefaultLang('de');
    this.coolService.switchToDE();
  }

  switchToDE() {
    this.translateService.use('de');
    this.coolService.switchToDE();
  }

  switchToEN() {
    this.translateService.use('en');
    this.coolService.switchToEN();
  }
}
