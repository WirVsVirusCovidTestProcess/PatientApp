import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { SharedModule } from '../../shared.module';
import { MediumComponent } from './medium/medium.component';
import { HighComponent } from './high/high.component';
import { LowComponent } from './low/low.component';
import { InfoComponent } from './info/info.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    ResultsPageRoutingModule
  ],
  declarations: [ResultsPage, LowComponent, MediumComponent, HighComponent, InfoComponent, LoadingComponent]
})
export class ResultsPageModule {}
