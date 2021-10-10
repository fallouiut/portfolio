import { Component, OnInit } from '@angular/core';
import { TranslaterService } from 'src/app/services/translater.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {

  persoProjets: any;

  constructor(private translaterService: TranslaterService) { }

  ngOnInit(): void {
    this.persoProjets = this.translaterService.getTextContent().getPersonalContent();
  }


}
