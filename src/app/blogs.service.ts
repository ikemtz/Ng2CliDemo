import { Injectable } from '@angular/core';
import { IBlog } from './iBlog';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogsService {

  constructor(private http: Http) { }
  private url: string = 'https://derivewebnode.azurewebsites.net/api/blogs';  // URL to web api

  public GetBlogsResponse(): Promise<IBlog[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        let r = response.json() as IBlog[];
        return r;
      })
      .catch(this.handleError);
  }

  public handleError(error: any): Promise<any> {

    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
