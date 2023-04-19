import {Inject, Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {DOCUMENT} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private subject = new Subject<any>();

    constructor(@Inject(DOCUMENT) private document: Document) {
    }

    private darkMode: boolean = false;

    toggleTheme(): void {
        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

        this.darkMode = !this.darkMode;
        this.subject.next(this.darkMode)
        if (themeLink) {
             if (this.darkMode) {
                 themeLink.href = "dark-bootstrap-blue.css"
             } else {
                 themeLink.href = "light-bootstrap-blue.css"
             }
        }
    }

    getTheme(): boolean {
        return this.darkMode;
    }

    onToggle(): Observable<any> {
        return this.subject.asObservable();
    }
}
