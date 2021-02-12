import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.scss']
})
export class FeaturesPageComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
