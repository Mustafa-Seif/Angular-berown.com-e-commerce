import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { ErrorToFetchService } from '../services/error-to-fetch.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(
    private loader: LoaderService,
    private errorService: ErrorToFetchService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loader.showLoader();
    return next.handle(request).pipe(
      finalize(() =>
        setTimeout(() => {
          this.loader.hideLoader();
        }, 3000)
      ),
      catchError((error: HttpErrorResponse) => {
        this.errorService.ErrorMassage(error.message); // Show error message
        return throwError(error); // Rethrow error
      })
    );
  }
}
