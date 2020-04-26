import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
