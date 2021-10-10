import { Component } from '@angular/core';
import { TranslaterService } from './services/translater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private translaterService: TranslaterService) {
  }

  ngOnInit(): void {

    this.translaterService.initLanguage();

  }

  switchLanguage(lang: string) {
    // alert(lang);
    this.translaterService.switchLanguage(lang);
  }


}
