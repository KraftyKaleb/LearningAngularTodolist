import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {MenuItem} from "primeng/api";
import {ThemeService} from "../../services/theme.service";

@Component({
    selector: 'app-theme-switch',
    templateUrl: './theme-switch.component.html',
    styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent {
    darkMode!: boolean;
    themeSubscription!: Subscription;

    constructor(private themeService: ThemeService) {
        this.darkMode = themeService.getTheme();
        this.themeSubscription = this.themeService.onToggle().subscribe(value => (this.darkMode = value));
    }

    ngOnInit() {

    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
