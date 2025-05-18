import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PanelModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
