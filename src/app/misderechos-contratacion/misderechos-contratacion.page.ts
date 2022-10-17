import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misderechos-contratacion',
  templateUrl: './misderechos-contratacion.page.html',
  styleUrls: ['./misderechos-contratacion.page.scss'],
})
export class MisderechosContratacionPage implements OnInit {
  url: string = "https://aliadas.co/contratacion-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}