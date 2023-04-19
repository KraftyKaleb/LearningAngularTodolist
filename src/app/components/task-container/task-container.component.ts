import {Component} from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
    selector: 'app-task-container',
    templateUrl: './task-container.component.html',
    styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent {
    darkMode: boolean = false;
    constructor(private themeService: ThemeService) {
    }
    ngOnInit(): void {
        this.themeService.onToggle().subscribe(value => (this.darkMode = value));
    }
}
