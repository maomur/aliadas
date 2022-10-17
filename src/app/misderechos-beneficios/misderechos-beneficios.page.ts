import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misderechos-beneficios',
  templateUrl: './misderechos-beneficios.page.html',
  styleUrls: ['./misderechos-beneficios.page.scss'],
})
export class MisderechosBeneficiosPage implements OnInit {
  url: string = "https://aliadas.co/beneficios-laborales-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}

