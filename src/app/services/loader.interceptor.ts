import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {BehaviorSubject, finalize, Observable} from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.isLoading.next(true);
    return next.handle(request).pipe(
        finalize(
            () => {
                this.isLoading.next(false);
            }
        )
    );
  }
}
