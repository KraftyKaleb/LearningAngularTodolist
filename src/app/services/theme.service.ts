import {Inject, Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private subject = new Subject<any>();

    constructor(@Inject(DOCUMENT) private document: Document, private cookieService: CookieService) {
        console.log(this.getPreviouslyEnabled());
        if (this.getPreviouslyEnabled()) {
            this.toggleStyle()
        }
    }

    private darkMode: boolean = this.hasPreviouslyEnabled()? this.getPreviouslyEnabled() : false;

    toggleTheme(): void {
        this.darkMode = !this.darkMode;
        this.toggleStyle()
        this.cookieService.set('theme-preference', String(this.darkMode));

    }

    private toggleStyle(): void {
        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
        if (themeLink) {
            if (this.darkMode) {
                themeLink.href = "dark-bootstrap-blue.css"
            } else {
                themeLink.href = "light-bootstrap-blue.css"
            }
        }
        this.subject.next(this.darkMode);
    }

    getTheme(): boolean {
        return this.darkMode;
    }

    onToggle(): Observable<any> {
        return this.subject.asObservable();
    }

    hasPreviouslyEnabled(): boolean {
        return this.cookieService.check('theme-preference');
    }

    private getPreviouslyEnabled(): boolean {
        if (this.hasPreviouslyEnabled()) {
            return (this.cookieService.get('theme-preference') === 'true')
        } else return false;
    }
}
