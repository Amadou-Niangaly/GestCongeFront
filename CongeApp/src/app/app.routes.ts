import { Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { DemandeCongeComponent } from './component/demande-conge/demande-conge.component';
import { GestCongeComponent } from './component/gest-conge/gest-conge.component';
import { DemandePermissionComponent } from './component/demande-permission/demande-permission.component';
import { GestPermissionComponent } from './component/gest-permission/gest-permission.component';
import { HistoriqueComponent } from './component/historique/historique.component';
import { GestUserComponent } from './component/gest-user/gest-user.component';
import { ImprimerComponent } from './component/imprimer/imprimer.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { AjouterUserComponent } from './component/gest-user/ajouter-user/ajouter-user.component';

export const routes: Routes = [
    {path:"accueil",component:AccueilComponent},
    {path:"demande-conge",component:DemandeCongeComponent},
    {path:"gest-conge",component:GestCongeComponent},
    {path:"demande-permission",component:DemandePermissionComponent},
    {path:"gest-permission",component:GestPermissionComponent},
    {path:"historique",component:HistoriqueComponent},
    {path:"gest-user",component:GestUserComponent},
    {path:"imprimer",component:ImprimerComponent},
    {path:"search",component:SearchBarComponent},
    {path:"add-user",component:AjouterUserComponent}
];
