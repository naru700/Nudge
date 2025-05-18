import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PanelModule, ButtonModule, InputTextModule],
  templateUrl: './Nudge.component.html',
  styleUrls: ['./Nudge.component.scss']
})
export class NudgeComponent {}
