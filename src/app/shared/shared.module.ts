import { NgModule } from '@angular/core';
import { ArrowComponent } from './arrow.component';
import { CircleComponent } from './circle.component';
import { LogoComponent } from './logo.component';

@NgModule({
    declarations: [
        LogoComponent,
        CircleComponent,
        ArrowComponent
    ],
    exports: [
        LogoComponent,
        CircleComponent,
        ArrowComponent
    ]
})


export class SharedModule
{
}