import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyGirlyApp';
  selection = { value: '' };
  constructor(){
    console.log('Nuevas funciones');
    console.warn('Cuidado');
    console.log('Prueba de conflictos')
  }
}
