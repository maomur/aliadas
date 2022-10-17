import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misderechos-jornadalaboral',
  templateUrl: './misderechos-jornadalaboral.page.html',
  styleUrls: ['./misderechos-jornadalaboral.page.scss'],
})
export class MisderechosJornadalaboralPage implements OnInit {
  url: string = "https://aliadas.co/jornada-laboral-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
