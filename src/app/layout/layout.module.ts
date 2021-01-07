import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        LandingPageComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        FontAwesomeModule,
        RouterModule
    ],
    exports: [
        LandingPageComponent,
        NavbarComponent,
        FooterComponent
    ]
})
export class LayoutModule { }
