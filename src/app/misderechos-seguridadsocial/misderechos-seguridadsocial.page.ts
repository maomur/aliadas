import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misderechos-seguridadsocial',
  templateUrl: './misderechos-seguridadsocial.page.html',
  styleUrls: ['./misderechos-seguridadsocial.page.scss'],
})
export class MisderechosSeguridadsocialPage implements OnInit {
  url: string = "https://aliadas.co/sistema-de-salud-2-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
