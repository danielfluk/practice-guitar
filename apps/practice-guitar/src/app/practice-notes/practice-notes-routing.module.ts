import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomNotesComponent } from './random-notes/random-notes.component';
import { PracticeNotesComponent } from './practice-notes/practice-notes.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeNotesComponent,
    children: [
      {
        path: '',
        redirectTo: 'fretboard-memorization',
        pathMatch: 'full',
      },
      {
        path: 'fretboard-memorization',
        component: RandomNotesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeNotesRoutingModule {}
