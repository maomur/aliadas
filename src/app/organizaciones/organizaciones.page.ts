import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.page.html',
  styleUrls: ['./organizaciones.page.scss'],
})
export class OrganizacionesPage implements OnInit {
  url: string = "https://aliadas.co/organizaciones-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}