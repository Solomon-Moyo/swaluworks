import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.scss',
})
export class ComingSoon {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/services']); // redirect back to services after 5s
    }, 5000);
  }
}
