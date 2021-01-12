import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from '../../services/lembrete.service';
import { Lembrete } from 'src/app/interfaces/lembrete';


@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {

  @ViewChild(ErrorMsgComponent) erroMsgComponent: ErrorMsgComponent;
  constructor(private lembreteService: LembreteService, private router: Router) { }

  // tslint:disable-next-line: typedef
  addLembrete(lembrete: Lembrete){
    this.lembreteService.addLembrete(lembrete)
    .subscribe(
      () => { this.router.navigateByUrl('lista'); },
      () => { this.erroMsgComponent.setError('Falha ao Adicionar um Lembrete'); }
    );
  }

}
