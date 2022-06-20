import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AnimateInModule } from "ngx-animate-in";
import { ContactUsComponent } from "./contact-us.component";


@NgModule({
    declarations: [
        ContactUsComponent
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        AnimateInModule
    ],
    exports: [
        ContactUsComponent
    ]
    
})

export class ContactUsModule {

}