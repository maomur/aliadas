import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fechaInicio: string = "0";
  fechaFin: string = "0";
  diasTrabajados: number = 0;
  salarioMensual: number = 0;
  auxilioTransporte: number = 0;
  deducciones: number = 0;
  otrosPagos: number = 0;
  salarioRecibido: number = 0;
  cesantias: number = 0;
  interesesCesantias: number = 0;
  prima: number = 0;
  vacaciones: number = 0;
  totalLiquidacion: number = 0;

}
