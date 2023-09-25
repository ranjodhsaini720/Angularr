import { Component , HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scroll();
  }

  scroll() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      let id = document.getElementById('nav');
      if (id) {
        id.style.backgroundColor = '#010101';
        id.style.transition = 'all 0.3s ease-in-out';
      }
    } else {
      let id = document.getElementById('nav');
      if (id) {
        id.style.backgroundColor = 'transparent';
      }
    }
  }
}
