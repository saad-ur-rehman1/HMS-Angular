import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleBookService, IGoogleBook } from '../../services/book-service';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent 
{
  count : number = 0;

  books : IGoogleBook[] = [];
  
  propertyInComponent : string = "I am a property in the ts file of component";

  itemImageUrl  : string = '/assets/baba.jpg';

  text : string = 'Hakuna Matata :) ';

  searchTitle: string = 'Angular Tutorial';

  constructor(private booksService : GoogleBookService)
  {
    console.log("I am constructor of seeds service");
  }

  ngOnInit()
  {
     this.getBooks(this.searchTitle);
  }

  Dummy(message : string){
    alert(message);

    this.propertyInComponent  = "Property in component changed via interpolation";
  }

  getBooks(title : string) {
    this.booksService.findBook(title).subscribe((data) => {
      if (data) {
        this.books = data;
      } else {
        console.log("Error occured")
      }
    });
  }

  searchBooks() {
    this.getBooks(this.searchTitle);
  }
}
