import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeNotesRoutingModule } from './practice-notes-routing.module';
import { RandomNotesComponent } from './random-notes/random-notes.component';
import { SharedModule } from '../shared/shared.module';
import { PracticeNotesComponent } from './practice-notes/practice-notes.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [RandomNotesComponent, PracticeNotesComponent],
  imports: [
    CommonModule,
    PracticeNotesRoutingModule,
    SharedModule,
    MatSidenavModule,
    SideNavComponent,
    MatListModule,
  ],
})
export class PracticeNotesModule {}
