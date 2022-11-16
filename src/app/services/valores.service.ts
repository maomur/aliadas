import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValoresService {

  public dataAll: any[] = [];
  constructor() { }

  addData(pData: any) {
    this.dataAll.shift();
    this.dataAll.push(pData);

    const fechaDeInicio = new Date(pData.fechaInicio);

    const inicioMilisegundos = fechaDeInicio.getTime();

    const fechaDeFin = new Date(pData.fechaFin);
    const finMilisegundos = fechaDeFin.getTime();

    const totalMilisegundos = Math.abs(finMilisegundos - inicioMilisegundos);

    pData.fechaInicio = pData.fechaInicio.toLocaleDateString();
    pData.fechaFin = pData.fechaFin.toLocaleDateString();

    const milisegundosDia: number = 24 * 60 * 60 * 1000;

    const diasLaborados: number = Math.round(totalMilisegundos / milisegundosDia);

    console.log('DIAS LABORADOS', diasLaborados);

    return diasLaborados

  }




  getAll() {
    return this.dataAll;
  }
}
