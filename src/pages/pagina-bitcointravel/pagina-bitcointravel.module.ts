import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaBitcointravelPage } from './pagina-bitcointravel';

@NgModule({
  declarations: [
    PaginaBitcointravelPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaBitcointravelPage),
  ],
  exports: [
    PaginaBitcointravelPage
  ]
})
export class PaginaBitcointravelPageModule {}
