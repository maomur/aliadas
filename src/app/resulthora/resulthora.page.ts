import { Component, OnInit } from '@angular/core';
import { ValoresService } from '../services/valores.service';

@Component({
  selector: 'app-resulthora',
  templateUrl: './resulthora.page.html',
  styleUrls: ['./resulthora.page.scss'],
})
export class ResulthoraPage implements OnInit {

  dataAll: any[] = [];

  constructor(private valoresServices: ValoresService) { }

  ngOnInit() {
    this.dataAll = this.valoresServices.getAll();
    console.log('dataAll Hora', this.dataAll)
  }

  auxilioTransporte: number = 117172;

}
