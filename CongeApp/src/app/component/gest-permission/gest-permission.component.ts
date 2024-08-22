import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-gest-permission',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './gest-permission.component.html',
  styleUrl: './gest-permission.component.css'
})
export class GestPermissionComponent {

}
