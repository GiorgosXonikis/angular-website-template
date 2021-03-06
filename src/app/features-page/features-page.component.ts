import { Component, OnInit } from '@angular/core';
import { faServer, faNetworkWired, faLaptopCode, faDatabase, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.scss']
})
export class FeaturesPageComponent implements OnInit {
  faServer = faServer;
  faNetworkWired = faNetworkWired;
  faLaptopCode = faLaptopCode;
  faDatabase = faDatabase;
  faPowerOff = faPowerOff;



  constructor() { }

  ngOnInit(): void {
  }

}
