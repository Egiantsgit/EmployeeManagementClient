import { Router } from '@angular/router';
import { AutheticationProfileServiceService } from './AutheticationProfileService.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      console.log('routechaged' + val);
  });
  }

}



