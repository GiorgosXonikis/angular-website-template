import { Component, OnInit } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.scss']
})
export class DocsPageComponent implements OnInit {
  faInfo = faInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
