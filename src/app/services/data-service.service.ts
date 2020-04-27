import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {

  constructor(@Inject(String) private configURL: string, private http: HttpClient) { }


  get(): Observable<T>
  {
    return this.http.get<T>(this.configURL);
  }

  post(model: T): Observable<T>
  {
    return this.http.post<T>(this.configURL, model);
  }

  put(id, model: T): Observable<T>
  {
    return this.http.put<T>(this.configURL + `/${id}`, model);
  }

  getByID(modelId: string): Observable<T>
  {
    return this.http.get<T>(this.configURL + `/${modelId}`);
  }


  delete(modelId: string): Observable<T>
  {
    return this.http.delete<T>(this.configURL + `${modelId}`);
  }

}
