import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listNumberMultiplos: Array<any>;
  listNumerosEnteros: Array<any>;
  numeroEnteroMayor: number;
  cadenaReservada: string;

  constructor() {
    this.listNumberMultiplos = new Array<any>();
    this.listNumerosEnteros = new Array<any>();
    this.cadenaReservada = '';
  }

  ngOnInit(): void {
    this.multiplos();
    this.enteroMayor();
  }

  reverseCadena(event: any): string {
    const cadena = event.target.value;
    for (let i = cadena.length - 1; i >= 0; i--) {
      this.cadenaReservada += cadena[i];
    }
    return this.cadenaReservada;
  }

  enteroMayor(): void {
    for (let i = 1; i <= 10; i++) {
      this.listNumerosEnteros.push(i);
    }
    this.numeroEnteroMayor = Math.max(...this.listNumerosEnteros);
  }


  multiplos(): void {
    let multiplo;
    for (let i = 1; i <= 100; i++) {
      if ((i % 3) === 0) {
        if ((i % 5) === 0) {
          multiplo = 'Mareigua';
        } else {
          multiplo = 'Mare';
        }
      } else if ((i % 5) === 0) {
        multiplo = 'Igua';
      } else {
        multiplo = '';
      }
      let item = new Object();
      item = {
        numero: i,
        descripcionMultiplo: multiplo
      }
      this.listNumberMultiplos.push(item);
    }
  }
}
