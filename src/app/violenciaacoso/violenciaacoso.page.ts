import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-violenciaacoso',
  templateUrl: './violenciaacoso.page.html',
  styleUrls: ['./violenciaacoso.page.scss'],
})
export class ViolenciaacosoPage implements OnInit {
  url: string = "https://aliadas.co/acoso-y-violencia-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}