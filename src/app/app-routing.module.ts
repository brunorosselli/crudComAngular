import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../app/components/home/home.component'
import { RouterModule, Routes } from '@angular/router';
import { ListaLembreteComponent } from './components/lista-lembrete/lista-lembrete.component';
import { CriarLembreteComponent } from './components/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './components/editar-lembrete/editar-lembrete.component';

const routes:  Routes = [
  {path: 'lista', component: ListaLembreteComponent},
  {path: 'lembrete/criar', component: CriarLembreteComponent},
  {path: 'lembrete/editar/:id', component: EditarLembreteComponent},
  {path: '**', redirectTo: 'lista'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
