import {Component} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {ThemeService} from "../../services/theme.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    ngOnInit() {
    }

    title = 'To-Do!';
    showAddTask!: boolean;
    subscription!: Subscription;
    themeSubscription!: Subscription;
    darkMode: any;

    constructor(private uiService: UiService, private router: Router, private themeService: ThemeService) {
        this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value));
        this.themeSubscription = this.themeService.onToggle().subscribe(value => (this.darkMode = value))
    }



    toggleAddTask() {
        this.uiService.toggleAddTask()
    }

    goToPage(route: string) {
        this.router.navigate([route]);
    }

    hasRoute(route: string) {
        return this.router.url === route;
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
