import { Component } from '@angular/core';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprimer-conge',
  standalone: true,
  imports: [SearchBarComponent,RouterLink],
  templateUrl: './imprimer-conge.component.html',
  styleUrl: './imprimer-conge.component.css'
})
export class ImprimerCongeComponent {

}
