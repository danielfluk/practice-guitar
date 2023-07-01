import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ThemePickerComponent
  ],
  exports: [TopBarComponent],
})
export class CoreModule {}
