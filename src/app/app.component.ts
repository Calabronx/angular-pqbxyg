import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Bully Maguire';
  nombre2: string = 'ferNanDo hErrerA jImeneZ';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes: string[] = ['Batman', 'Superman', 'Wolverine', ''];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = 'fr';
  videoUrl: string = 'https://www.youtube.com/embed/-CBKW-90VxQ';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  cambiarIdiomaEspaniol(nuevoIdioma: string) {
    this.idioma = IDIOMA_ESPANIOL;
  }
  cambiarIdiomaFrances(nuevoIdioma: string) {
    this.idioma = IDIOMA_FRANCES;
  }
  cambiarIdiomaIngles(nuevoIdioma: string) {
    this.idioma = IDIOMA_INGLES;
  }

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };
}

class Constants {
  IDIOMA_ESPANIOL = 'es';
  IDIOMA_FRANCES = 'fr';
  IDIOMA_INGLES = 'en';
}
