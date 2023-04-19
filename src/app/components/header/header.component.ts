import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {MenuItem} from "primeng/api";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title = 'To-Do!';
    darkMode!: boolean;
    themeSubscription!: Subscription;
    items!: MenuItem[];

    constructor(private themeService: ThemeService) {
        this.darkMode = themeService.getTheme();
        this.themeSubscription = this.themeService.onToggle().subscribe(value => (this.darkMode = value));
    }

    ngOnInit() {
        this.items = [
            { label: 'Home', routerLink: ['/']},
            { label: 'Table', routerLink: ['/table']},
            { label: 'About', disabled: true, tooltip: 'Coming soon!'}
        ];
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
