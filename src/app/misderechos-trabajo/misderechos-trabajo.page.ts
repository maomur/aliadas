import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misderechos-trabajo',
  templateUrl: './misderechos-trabajo.page.html',
  styleUrls: ['./misderechos-trabajo.page.scss'],
})
export class MisderechosTrabajoPage implements OnInit {
  url: string = "https://aliadas.co/trabajo-domestico-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
