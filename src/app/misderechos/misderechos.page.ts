import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misderechos',
  templateUrl: './misderechos.page.html',
  styleUrls: ['./misderechos.page.scss'],
})
export class MisderechosPage implements OnInit {
  url: string = "https://aliadas.co/mis-derechos";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
