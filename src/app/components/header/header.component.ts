import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title = 'To-Do!';
    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Home', routerLink: ['/']},
            {label: 'Table', routerLink: ['/table']},
            {label: 'About', disabled: true, tooltip: 'Coming soon!'}
        ];
    }
}
