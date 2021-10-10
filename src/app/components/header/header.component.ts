import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslaterService } from 'src/app/services/translater.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttons: any;
  
  info: any;

  constructor(
    private translaterService: TranslaterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buttons = this.translaterService.getTextContent().getButtonsName();
    this.info = this.translaterService.getTextContent().getInfos();
  }

  moveTo(url: string) {
    this.router.navigate([url]);
  }

}
