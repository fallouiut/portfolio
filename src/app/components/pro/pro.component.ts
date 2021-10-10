import { Component, OnInit } from '@angular/core';
import { TranslaterService } from 'src/app/services/translater.service';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss']
})
export class ProComponent implements OnInit {

  experiences: any;

  constructor(private translaterService: TranslaterService) { }

  ngOnInit(): void {
    this.experiences = this.translaterService.getTextContent().getExperiencesContent();
  }

}
