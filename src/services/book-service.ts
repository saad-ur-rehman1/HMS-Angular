import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookService {
    private API_URL = "https://www.googleapis.com/books/v1/volumes";
  
    constructor(private http: HttpClient) {}
  
    findBook(title: string): Observable<IGoogleBook[]> {
      return this.http
        .get<GoogleBooksApiInterface>(`${this.API_URL}?q=${title}`)
        .pipe(map((data: GoogleBooksApiInterface) => data.items));
    }
  }

  export interface GoogleBooksApiInterface {
    kind: string;
    totalItems: number;
    items: IGoogleBook[];
}

export interface IGoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}