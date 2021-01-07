import {Component, OnInit} from '@angular/core';
import {faServer, faUpload, faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    faServer = faServer;
    faUpload = faUpload;
    faProjectDiagram = faProjectDiagram;
    faGithub = faGithub;
    faFacebook = faFacebook;
    faInstagram = faInstagram;
    faTwitter = faTwitter;

    constructor() {
    }

    ngOnInit(): void {
    }

}
