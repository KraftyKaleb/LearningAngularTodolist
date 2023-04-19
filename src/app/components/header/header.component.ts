import {Component} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

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

    constructor(private uiService: UiService, private router: Router) {
        this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value));
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
