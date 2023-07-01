import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablatureComponent } from './tablature/tablature.component';

@NgModule({
  declarations: [TablatureComponent],
  imports: [CommonModule],
  exports: [TablatureComponent],

})
export class SharedModule {}
