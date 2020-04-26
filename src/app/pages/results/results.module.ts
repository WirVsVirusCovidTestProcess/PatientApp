import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    ResultsPageRoutingModule
  ],
  declarations: [ResultsPage]
})
export class ResultsPageModule {}
