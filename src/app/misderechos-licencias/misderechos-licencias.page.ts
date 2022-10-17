import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misderechos-licencias',
  templateUrl: './misderechos-licencias.page.html',
  styleUrls: ['./misderechos-licencias.page.scss'],
})
export class MisderechosLicenciasPage implements OnInit {
  url: string = "https://aliadas.co/licencias-y-permisos-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}