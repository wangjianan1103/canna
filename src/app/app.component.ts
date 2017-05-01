import {Component, OnInit} from '@angular/core';
import {Title}     from '@angular/platform-browser';
import {MetaService} from 'ng2-meta';

@Component({
    selector: 'app',
    templateUrl: './app.html'
})
export class AppComponent {
    public constructor(private titleService: Title,
                       private metaService: MetaService) {
    }

    ngOnInit(): void {
        this.metaService.setTitle('test title');
        this.metaService.setTag('keywords', '安全技术,人工智能,Java,AI开发,机器学习,智能世界,读后感,书籍分享,思维导图');
        this.metaService.setTag('description', '这是我的个人博客网站，主要是对所学知识的梳理和总结，同时也希望能够帮到其他童鞋。有分享才有进步，分享促进技术变革');
        this.metaService.setTag('keywords', 'Java程序开发,Java工具,Java渗透,Java Web,代码审计');
        this.metaService.setTag('og:url', 'https://www.oopmind.com');
        this.metaService.setTag('og:site_name', '佳楠的个人博客');

        this.titleService.setTitle("佳楠的个人博客11");
    }
}
