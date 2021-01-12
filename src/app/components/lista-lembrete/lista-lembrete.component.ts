import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service'
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component'

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  public lembretes:  Lembrete[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  
  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.getListaLembrete();
  }

  getListaLembrete(){
    this.lembreteService.getListaLembretes()
    .subscribe((lembretes: Lembrete[]) => {
      this.lembretes = lembretes;
    }, () => {this.errorMsgComponent.setError('Falha Ao Executar Lembretes');});
  }

  deletaLembrete(id: number){
    this.lembreteService.deletaLembrete(id)
    .subscribe(() => {
      this.getListaLembrete()
    }, () => {this.errorMsgComponent.setError('Falha ao Deletar Lembrete');});
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }

}
