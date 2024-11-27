/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PageResponseItem } from '../models/page-response-item';
import { searchBooks } from '../fn/google-book/search-books';
import { SearchBooks$Params } from '../fn/google-book/search-books';

@Injectable({ providedIn: 'root' })
export class GoogleBookService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `searchBooks()` */
  static readonly SearchBooksPath = '/googleBooks/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchBooks$Response(params: SearchBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseItem>> {
    return searchBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchBooks(params: SearchBooks$Params, context?: HttpContext): Observable<PageResponseItem> {
    return this.searchBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseItem>): PageResponseItem => r.body)
    );
  }

}