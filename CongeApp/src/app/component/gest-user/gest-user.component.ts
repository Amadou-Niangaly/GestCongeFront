import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gest-user',
  standalone: true,
  imports: [SearchBarComponent,RouterLink],
  templateUrl: './gest-user.component.html',
  styleUrl: './gest-user.component.css'
})
export class GestUserComponent {

}
