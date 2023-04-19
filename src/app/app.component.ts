import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "./services/theme.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularLearning';
    //themeSelection!: string;
    darkMode: boolean = false;
    constructor(private themeService: ThemeService) {
    }
    ngOnInit(): void {
        this.themeService.onToggle().subscribe(value => (this.darkMode = value));
    }
}
