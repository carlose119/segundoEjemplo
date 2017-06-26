import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilDetallesPage } from './perfil-detalles';

@NgModule({
  declarations: [
    PerfilDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilDetallesPage),
  ],
  exports: [
    PerfilDetallesPage
  ]
})
export class PerfilDetallesPageModule {}
