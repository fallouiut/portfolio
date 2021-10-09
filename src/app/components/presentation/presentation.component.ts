import { Component, OnInit } from '@angular/core';
import { TranslaterService } from 'src/app/services/translater.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  presentation: any;
  mail: string = "fallou.seye@outlook.fr"

  constructor(private translaterService: TranslaterService) { }

  ngOnInit(): void {
    this.presentation = this.translaterService.getTextContent().getPresentationContent();
  }

}
