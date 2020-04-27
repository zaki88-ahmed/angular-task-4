import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends DataService<News> {

  constructor(http: HttpClient)
  {
    super('http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-27&sortBy=publishedAt&apiKey=1d7e9ec8d79746ddb2aa08a085fd7bb4', http)
  }
}
