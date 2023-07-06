import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared'; // SERVIÇO É IMPORTADO COMO PROVIDER



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
