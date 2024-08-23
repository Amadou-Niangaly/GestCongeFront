import { Component } from '@angular/core';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprimer-permission',
  standalone: true,
  imports: [SearchBarComponent,RouterLink],
  templateUrl: './imprimer-permission.component.html',
  styleUrl: './imprimer-permission.component.css'
})
export class ImprimerPermissionComponent {

}
