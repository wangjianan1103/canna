import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule}    from '@angular/http';

import {AppComponent}   from './app.component';
import {routing} from './app.routing';
import {NavbarComponent}         from './navbar/navbar.component';
import {BlogComponent}         from './blog/blog.component';
import {HomeComponent} from './home/home.component'
import {ArticleComponent} from './home/article/article.component'
import {ColorInDirective} from './config/colorIn.directive';
import {MarkCloudDirective} from './config/markCloud.directive';
import {ArticlesComponent} from './article/article.component';
import {ArticlesDetialComponent} from './article/article.detial.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        ColorInDirective,
        MarkCloudDirective,
        BlogComponent,
        HomeComponent,
        ArticleComponent,
        ArticlesComponent,
        ArticlesDetialComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}