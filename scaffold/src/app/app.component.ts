import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies = [];
  displayedMovies = [];
  searchword:any;

  constructor(private web: WebService){
    this.getData();
  }

  getData(){
    this.web.getData().subscribe((res)=>{
      console.log(res);
      this.movies = res['Search'];
      this.displayedMovies = this.movies;
    },(error)=>{

    })
  }

  searchThis(){
    this.displayedMovies = this.movies.filter((res)=>{
      return res['Title'].toUpperCase().search(this.searchword.toUpperCase())!=-1
    })
  }
}
