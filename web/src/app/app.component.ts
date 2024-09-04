import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'example-devcontainer';

  commonSvc = inject(CommonService)

  temperatures$ = this.commonSvc.getTemperatures()
  temperature = toSignal(this.temperatures$, { initialValue: [] })

}
