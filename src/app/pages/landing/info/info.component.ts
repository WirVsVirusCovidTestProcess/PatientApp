import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';

interface InfoSegment {
  imageUrl: string;
  title: string;
  texts: Array<string>;
  button?: {
    text: string,
    handler: () => void
  };
}

@Component({
  selector: 'app-landingpage-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  infoParts: Array<InfoSegment> = [{
    imageUrl: 'assets/img/illustrations/undraw_medical_research_qg4d.svg',
    title: 'landingpage.info.anamnese.title',
    texts: ['landingpage.info.anamnese.text1', 'landingpage.info.anamnese.text2']
  }, {
    imageUrl: 'assets/img/illustrations/undraw_road_sign_mfpo.svg',
    title: 'landingpage.info.assessment.title',
    texts: ['landingpage.info.assessment.text1', 'landingpage.info.assessment.text2']
  }, {
    imageUrl: 'assets/img/illustrations/undraw_onboarding_o8mv.svg',
    title: 'landingpage.info.recommendations.title',
    texts: ['landingpage.info.recommendations.text1']
  }, {
    imageUrl: 'assets/img/illustrations/undraw_real_time_collaboration_c62i.svg',
    title: 'landingpage.info.connect.title',
    texts: ['landingpage.info.connect.text1']
  }, {
    imageUrl: 'assets/img/illustrations/undraw_progress_indicator_p84k.svg',
    title: 'landingpage.info.progress.title',
    texts: ['landingpage.info.progress.text1', 'landingpage.info.progress.text2']
  }];

  constructor() { }

  ngOnInit() {}
}
