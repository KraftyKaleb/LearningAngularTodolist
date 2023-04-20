import {Inject, Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {DOCUMENT} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private subject = new Subject<any>();

    constructor(@Inject(DOCUMENT) private document: Document) {
        console.log(this.getPreviouslyEnabled());
        if (this.getPreviouslyEnabled()) {
            this.toggleStyle()
        }
    }

    private darkMode: boolean = this.hasPreviouslyEnabled()? this.getPreviouslyEnabled() : false;

    toggleTheme(): void {
        this.darkMode = !this.darkMode;
        this.toggleStyle()
        localStorage.setItem('theme-preference', String(this.darkMode));

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
        return localStorage.getItem('theme-preference') !== null;
    }

    private getPreviouslyEnabled(): boolean {
        if (this.hasPreviouslyEnabled()) {
            return (localStorage.getItem('theme-preference') === 'true')
        } else return false;
    }
}
