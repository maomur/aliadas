import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-libertadsindical',
  templateUrl: './libertadsindical.page.html',
  styleUrls: ['./libertadsindical.page.scss'],
})
export class LibertadsindicalPage implements OnInit {
  url: string = "https://aliadas.co/libertad-sindical-app";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
