import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  bark(){
  document.body.classList.toggle('dark-mode');
  document.getElementById('sun')?.classList.toggle('d-none');
  document.getElementById('moon')?.classList.toggle('d-none');
}

}
