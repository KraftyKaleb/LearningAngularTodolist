import {Component} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {UiService} from "../../services/ui.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-task-container',
    templateUrl: './task-container.component.html',
    styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent {
    showAddTask!: boolean;
    themeSubscription!: Subscription;

    constructor(private uiService: UiService, private router: Router, private themeService: ThemeService) {
        this.themeSubscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value));
    }
    ngOnInit(): void {
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
}
