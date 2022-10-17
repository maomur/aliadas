import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-guiaentidades',
  templateUrl: './guiaentidades.page.html',
  styleUrls: ['./guiaentidades.page.scss'],
})
export class GuiaentidadesPage implements OnInit {
  url: string = "https://aliadas.co/guia-de-entidades-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}