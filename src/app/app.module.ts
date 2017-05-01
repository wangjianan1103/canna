import {NgModule}      from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule}    from '@angular/http';
import {MetaConfig, MetaModule} from 'ng2-meta';

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

const metaConfig: MetaConfig = {
    useTitleSuffix: false,
    defaults: {
        title: '佳楠的个人博客',
        titleSuffix: ' | Site Name',
        'og:image': 'http://example.com/default-image.png',
        'any other': 'wangjianan'
    }
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        MetaModule.forRoot(metaConfig)
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
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}