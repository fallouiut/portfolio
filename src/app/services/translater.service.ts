import { Injectable } from '@angular/core';
import { EnglishTextContent } from '../classes/EnglishTextContent';
import { FrenchTextContent } from '../classes/FrenchTextContent';
import { TextContent } from '../classes/TextContent';

@Injectable({
  providedIn: 'root'
})

/**
 * this class is used to manage languages and return the current language obj
 */
export class TranslaterService {

  constructor() { }

  languages: TextContent[] = [
    new FrenchTextContent(),
    new EnglishTextContent()
  ];

  private currentLang: string = 'fr';

  /**
   * change language
   * because user clicked on bottom left flags to switch
   * 
   */
  switchLanguage(lang: string) {
    if(lang == 'en' || lang == 'fr') {
        this.currentLang = lang;
        localStorage.setItem('currentLang', this.currentLang);
        window.location.reload();
    }
  }

  /**
   * find last language in local storage
   */
  initLanguage() {
    var storageLang = localStorage.getItem("currentLang");

    if(storageLang != null) {
      this.currentLang = storageLang.toString();
    }
  }

  /**
   * get current text content obj
   */
  getTextContent() {
    for (var language of this.languages) {
      if(language.lang == this.currentLang) {
        return language;
      }
    }
    return this.languages[0];
  }

}
