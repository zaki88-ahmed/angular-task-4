import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../services/model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  allNews: {articles: News[]};
  title: string;
  description: string
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getData();


    
  }


  getData()
  {
    this.newsService.get().subscribe((data: any) => 
    {
      this.allNews = data;
      console.log(this.allNews);
      console.log((this.allNews));
      
    })

    for(var value in this.allNews)
    {
        this.title = this.allNews[value].title;
         this.description = this.allNews[value].description;
        console.log(this.title);
    }
  }

}
