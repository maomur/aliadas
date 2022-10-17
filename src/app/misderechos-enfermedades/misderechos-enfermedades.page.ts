import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misderechos-enfermedades',
  templateUrl: './misderechos-enfermedades.page.html',
  styleUrls: ['./misderechos-enfermedades.page.scss'],
})
export class MisderechosEnfermedadesPage implements OnInit {
  url: string = "https://aliadas.co/enfermedades-y-accidentes-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}