import { Component, OnInit } from '@angular/core';
import { ValoresService } from '../services/valores.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  dataAll: any[] = [];

  ngOnInit() {

  }

  constructor(private valoresServices: ValoresService) {
    this.dataAll = this.valoresServices.getAll();
    console.log('CONSOLE LOG CONSTRUCTOR', this.dataAll)
  }

  diasLaborados: number;
  salarioMensual: any = 0;
  auxilioTransporte: number = 117172;
  otrasFormasDePago: number = 0;
  baseSalarial: number = this.salarioMensual + this.auxilioTransporte + this.otrasFormasDePago;

}
