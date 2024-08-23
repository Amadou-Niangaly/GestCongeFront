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
import { ImprimerCongeComponent } from './component/imprimer/imprimer-conge/imprimer-conge.component';
import { ImprimerPermissionComponent } from './component/imprimer/imprimer-permission/imprimer-permission.component';
import { PageImpressionCongeComponent } from './component/imprimer/imprimer-conge/page-impression-conge/page-impression-conge.component';
import { PageImpressionPermissionComponent } from './component/imprimer/imprimer-permission/page-impression-permission/page-impression-permission.component';

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
    {path:"add-user",component:AjouterUserComponent},
    {path:"imprim-conge",component:ImprimerCongeComponent},
    {path:"imprim-permission",component:ImprimerPermissionComponent},
    {path:"page-imprim-conge",component:PageImpressionCongeComponent},
    {path:"page-imprim-permission",component:PageImpressionPermissionComponent}
];
