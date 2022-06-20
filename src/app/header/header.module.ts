import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";



@NgModule({
    declarations: [
        HeaderComponent,
        SideMenuComponent
    ],
    imports: [
        SharedModule,      
    ],
    exports: [
        HeaderComponent
    ]
})

export class HeaderModule {

}