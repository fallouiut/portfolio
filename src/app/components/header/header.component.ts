import { Component, OnInit } from '@angular/core';
import { TranslaterService } from 'src/app/services/translater.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttons: any;

  constructor(private translaterService: TranslaterService) { }

  ngOnInit(): void {
    this.buttons = this.translaterService.getTextContent().getButtonsName();
  }

}
