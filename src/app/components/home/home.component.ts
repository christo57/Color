import {Component} from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {

  constructor(private readonly router: Router) {

  }
  public GoToSvg(): void {
      this.router.navigate(['svg'])
  }
}
