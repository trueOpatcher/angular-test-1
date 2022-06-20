import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CreditsComponent } from "./credits.component";


@NgModule({
    declarations: [
        CreditsComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        CreditsComponent
    ]
})

export class CreditsModule {

}