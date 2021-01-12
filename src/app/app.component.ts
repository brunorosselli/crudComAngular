import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crudComAngular';
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  
  ngOnInit() {
    this.errorMsgComponent.setError('Está uma mensagem de Erro!')
  }
}
