import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Calculadora', url: '/resultados', icon: 'calculator' },
    { title: 'Mis Derechos', url: '/misderechos', icon: 'book' },
    { title: 'Guía de Entidades', url: '/guiaentidades', icon: 'list' },
    { title: 'Violencia y Acoso', url: '/violenciaacoso', icon: 'remove-circle' },
    { title: 'Libertad Sindical', url: '/libertadsindical', icon: 'people' },
    { title: 'Actualidad', url: '/noticias', icon: 'megaphone' },
    { title: 'Denuncia', url: '/denuncias', icon: 'warning' },
    { title: 'Empleador', url: '/empleador', icon: 'thumbs-up' },
    { title: 'Organizaciones que nos apoyan', url: '/organizaciones', icon: 'heart' },
    { title: 'Sobre Aliadas', url: '/sobrealiadas', icon: 'information-circle' },
    { title: 'Términos y Condiciones', url: '/privacidad', icon: 'document' },
  ];
  arrFormularioPrincipal: any[];
  constructor() {
    this.arrFormularioPrincipal = [
      {
        fechaInicio: "",
        fechaFin: "",
        tipoTrabajo: ""
      }
    ]
  }
}
