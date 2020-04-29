import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { Router } from '@angular/router';

interface Keywords {
  first: string;
  second: string;
}

@Component({
  selector: 'app-hotline',
  templateUrl: './hotline.component.html',
  styleUrls: ['./hotline.component.scss'],
})
export class HotlineComponent implements OnInit {
  hotlineNumber: string;
  keywords: Keywords;

  @ViewChild('keywordForm', { static: false }) keywordForm: NgForm;

  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService
  ) { }

  ngOnInit() {
    this.keywords = {
      first: undefined,
      second: undefined
    };
    this.hotlineNumber = '+372 668 2808';
  }

  loadData(): void {
    this.questionnaireService.setRiskGroup('high');
    this.router.navigateByUrl('/results');
  }

  get hotLineUrl(): string {
    return `tel:${this.hotlineNumber.replace(/ /g, '')}`;
  }
}
