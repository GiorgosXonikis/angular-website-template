import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './layout/landing-page/landing-page.component';
import {FeaturesPageComponent} from './features-page/features-page.component';
import {DocsPageComponent} from './docs-page/docs-page.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'docs',
        component: DocsPageComponent
    },
    {
        path: 'features',
        component: FeaturesPageComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        FeaturesPageComponent,
        DocsPageComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        LayoutModule,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
