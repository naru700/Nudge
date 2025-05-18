// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { NudgeComponent } from './pages/Nudge/Nudge.component';
import { FinalroundComponent } from './pages/finalround/finalround.component';

export const routes: Routes = [
  { path: '', redirectTo: 'nudge', pathMatch: 'full' },
  { path: 'nudge', component: NudgeComponent },
  { path: 'finalround', component: FinalroundComponent }
];
