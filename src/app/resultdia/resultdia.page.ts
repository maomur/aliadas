import { Component, OnInit } from '@angular/core';
import { ValoresService } from '../services/valores.service';

@Component({
  selector: 'app-resultdia',
  templateUrl: './resultdia.page.html',
  styleUrls: ['./resultdia.page.scss'],
})
export class ResultdiaPage implements OnInit {

  dataAll: any[] = [];

  constructor(private valoresServices: ValoresService) { }

  ngOnInit() {
    this.dataAll = this.valoresServices.getAll();
    console.log('dataAll Dia', this.dataAll);
  }

  auxilioTransporte: number = 117172

}
