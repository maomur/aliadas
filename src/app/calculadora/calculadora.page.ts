import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { safeCall } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  tipoSalario: string;
  formularioPrincipal: FormGroup;
  fechaInicio: string;
  fechaFin: string;
  tipoTrabajo: string;
  //salarioMensual: number;
  smmlv22: number = 1000000;
  subsidioT22: number = 117172;


  constructor() {
    this.formularioPrincipal = new FormGroup({
      fechaInicio: new FormControl('', []),
      fechaFin: new FormControl('', []),
      tipoTrabajo: new FormControl('', []),
      salarioMensual: new FormControl('', []),
      otrasFormasDePago: new FormControl('', []),
      tipodeTrabajo: new FormControl('', []),
      calculoDeseado: new FormControl('', [])
    }, [])
  }

  ngOnInit() {
  }
  recogerInformacion() {
    console.log('FUNCION', this.formularioPrincipal.value);
    const datos = this.formularioPrincipal.value;
    console.log(datos.salarioMensual)
    console.log('Salario x 30', parseInt(datos.salarioMensual) * 30)
    this.formularioPrincipal.reset();
  }



}
