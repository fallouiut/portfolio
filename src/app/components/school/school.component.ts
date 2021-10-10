import { Component, OnInit } from '@angular/core';
import { TranslaterService } from 'src/app/services/translater.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  degrees: any;

  constructor(private translaterService: TranslaterService) { }

  ngOnInit(): void {
    this.degrees = this.translaterService.getTextContent().getSchoolContent();
  }

}
