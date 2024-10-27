import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { IfExistsDirective } from './directives/if-exists.directive';


@NgModule({
  declarations: [
    IfExistsDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    IfExistsDirective
  ]
})
export class SharedModule { }
