import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


// import { disableDebugTools } from '@angular/platform-browser';
// import { safeCall } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],

})
export class CalculadoraPage implements OnInit {
  //Data Inicial Formulario
  formularioPrincipal: FormGroup;
  fechaInicio: any;
  fechaFin: any;
  tipoTrabajo: string;
  salarioMensual: number;
  otrasFormasDePago: number;
  calculoDeseado: string;

  //Variables
  diasTrabajados: number = 0;
  salarioDiario: number = 0;
  salarioHora: number = 0;
  auxilioTransporte: number = 117172;
  seguridadSocial: number = 0;
  pension: number = 0;
  deducciones: number = this.seguridadSocial + this.pension;


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
    const datos = this.formularioPrincipal.value;
    console.log('FECHA INICIAL', datos.fechaInicio.toLocaleDateString());
    console.log('FECHA FINAL', datos.fechaFin.toLocaleDateString());
    const salarioMensual = datos.salarioMensual;
    const otrasFormasDePago = datos.otrasFormasDePago;
    const salarioDia = parseInt(datos.salarioMensual) / 30;
    const salarioHora = salarioDia / 8;
    const auxilioTransporte = 117172;
    const seguridadSocial = datos.salarioMensual * 0.04;
    const pension = datos.salarioMensual * 0.04;
    const deducciones = seguridadSocial + pension;
    const salarioPercibido = datos.salarioMensual - deducciones;
    const baseSalarial = salarioMensual + auxilioTransporte + otrasFormasDePago;

    console.log('SALARIO MENSUAL', salarioMensual);
    console.log('SALARIO DIA', salarioDia);
    console.log('SALARIO HORA', salarioHora);
    console.log('AUXILIO DE TRANSPORTE', auxilioTransporte);
    console.log('SEGURIDAD SOCIAL', salarioMensual * 0.04);
    console.log('PENSIÓN', salarioMensual * 0.04);
    console.log('DEDUCCIONES', pension + seguridadSocial)
    console.log('SALARIO PERCIBIDO MES', salarioPercibido);
    console.log('BASE SALARIAL', baseSalarial);
    //console.log('NÚMERO DE DÍAS TRABAJADOS', Math.abs(this.fechaFin - this.fechaInicio))


    this.formularioPrincipal.reset();
  }



}
