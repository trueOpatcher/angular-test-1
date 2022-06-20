import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HeadComponent } from "./head/head.component";
import { PageComponent } from "./page.component";
import { PageRoutes } from "./page.routing";
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhoWeAreComponent } from "./who-we-are/who-we-are.component";
import { WhyWeComponent } from './why-we/why-we.component';
import { WhatWeDo2Component } from './what-we-do2/what-we-do2.component';
import { ContactUsModule } from "./contact-us/contact.module";
import { CreditsComponent } from './credits/credits.component';
import { CreditsModule } from "./credits/credits.module";
import { AnimateInModule } from "ngx-animate-in";


@NgModule({
    declarations: [
        PageComponent,
        HeadComponent,
        WhatWeDoComponent,
        WhoWeAreComponent,
        WhyWeComponent,
        WhatWeDo2Component,
    ],
    imports: [
        ContactUsModule,
        CreditsModule,
        RouterModule.forChild(PageRoutes),
        SharedModule,
        AnimateInModule
    ]
})

export class PageModule {

}