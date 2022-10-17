import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misderechos-salarios',
  templateUrl: './misderechos-salarios.page.html',
  styleUrls: ['./misderechos-salarios.page.scss'],
})
export class MisderechosSalariosPage implements OnInit {
  url: string = "https://aliadas.co/salario-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}