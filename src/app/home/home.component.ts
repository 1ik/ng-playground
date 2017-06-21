import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {
  
  public localState = { value: '' };
  
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
  }
}
