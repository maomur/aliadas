import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValoresService } from '../services/valores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],

})
export class CalculadoraPage implements OnInit {


  tipoSalario: string = 'Salario';

  public isShowHora: boolean = false;
  public isShowMes: boolean = false;
  public isShowDia: boolean = false;

  buttonMes: boolean = false;
  buttonDia: boolean = false;
  buttonHora: boolean = false;
  buttonInactive: boolean = true;

  formularioPrincipal: FormGroup;

  constructor(private valoresServices: ValoresService, private router: Router) {
    this.formularioPrincipal = new FormGroup({
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      tipoTrabajo: new FormControl('', [Validators.required]),
      salarioMensual: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      salarioPorHora: new FormControl('', [Validators.pattern(/^[0-9]+$/)]),
      salarioPorDia: new FormControl('', [Validators.pattern(/^[0-9]+$/)]),
      otrasFormasDePago: new FormControl('', []),
      diasLaborados: new FormControl('', []),
      tipodeTrabajo: new FormControl('', [])
    }, [])


  }

  ngOnInit() {

  }
  recogerInformacion(pData: any) {
    const nuevaData: any = pData.value;
    this.valoresServices.addData(nuevaData);
    console.log('CONSOLE LOG Recoger Info', nuevaData);


    //pData.reset()
    //const datos = this.formularioPrincipal.value;
    // console.log(typeof (datos));
    // console.log(datos);
    // console.log('FECHA INICIAL', datos.fechaInicio.toLocaleDateString());
    // console.log('FECHA FINAL', datos.fechaFin.toLocaleDateString());
    // const salarioMensual = datos.salarioMensual;
    // const otrasFormasDePago = datos.otrasFormasDePago;
    // const salarioDia = parseInt(datos.salarioMensual) / 30;
    // const salarioHora = salarioDia / 8;
    // const auxilioTransporte = 117172;
    // const seguridadSocial = datos.salarioMensual * 0.04;
    // const pension = datos.salarioMensual * 0.04;
    // const deducciones = seguridadSocial + pension;
    // const salarioPercibido = datos.salarioMensual - deducciones;
    // const baseSalarial = salarioMensual + auxilioTransporte + otrasFormasDePago;

    // console.log('SALARIO MENSUAL', salarioMensual);
    // console.log('SALARIO DIA', salarioDia);
    // console.log('SALARIO HORA', salarioHora);
    // console.log('AUXILIO DE TRANSPORTE', auxilioTransporte);
    // console.log('SEGURIDAD SOCIAL', salarioMensual * 0.04);
    // console.log('PENSIÓN', salarioMensual * 0.04);
    // console.log('DEDUCCIONES', pension + seguridadSocial)
    // console.log('SALARIO PERCIBIDO MES', salarioPercibido);
    // console.log('BASE SALARIAL', baseSalarial);
    //console.log('NÚMERO DE DÍAS TRABAJADOS', Math.abs(this.fechaFin - this.fechaInicio))
    //this.formularioPrincipal.reset();
  }

  selectorSalario($event: any) {
    switch ($event.target.value) {
      case 'por-horas':
        this.isShowHora = true;
        this.isShowDia = false;
        this.isShowMes = false;
        this.buttonHora = true;
        this.buttonMes = false;
        this.buttonDia = false;
        this.buttonInactive = false;

        //this.tipoSalario = 'Salario por Hora';


        break;
      case 'por-dias':
        //this.tipoSalario = 'Salario por Día';
        this.isShowDia = true;
        this.isShowMes = false;
        this.isShowHora = false;
        this.buttonDia = true;
        this.buttonHora = false;
        this.buttonMes = false;
        this.buttonInactive = false;
        break;

      case 'tiempo-completo':
        this.isShowMes = true;
        this.isShowDia = false;
        this.isShowHora = false;
        this.buttonMes = true;
        this.buttonHora = false;
        this.buttonDia = false;
        this.buttonInactive = false;

        //this.tipoSalario = 'Salario por Mes';
        break;
    }
  }
  onSubmitMes() {
    const result = this.router.navigate(['/result']);
  }

  onSubmitDia() {
    const result = this.router.navigate(['/resultdia']);
  }

  onSubmitHora() {
    const result = this.router.navigate(['/resulthora']);
  }

}
