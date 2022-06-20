import { Component, Input } from "@angular/core";


@Component({
    selector: 'arrow',
    template: `
    <svg class="m-auto" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 13L7 7L1 1" [attr.stroke]="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>  
    `
})

export class ArrowComponent {

    @Input() color = 'white';

}