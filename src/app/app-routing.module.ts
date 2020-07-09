import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuComponenteComponent } from './componentes/meu-componente/meu-componente.component';
import { SegundoComponenteComponent } from './componentes/segundo-componente/segundo-componente.component';

const routes: Routes = [
  { path: 'meu-componente', component: MeuComponenteComponent},
  { path: 'segundo-componente', component: SegundoComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }
