import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "./services/theme.service";
import {CookieService} from "ngx-cookie-service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularLearning';
    constructor() {
    }
    ngOnInit(): void {
    }
}
