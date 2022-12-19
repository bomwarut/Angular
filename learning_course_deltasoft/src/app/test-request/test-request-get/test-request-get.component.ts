import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.scss']
})
export class TestRequestGetComponent implements OnInit{
booklist:Book[] = [];

constructor(private http:HttpClient) {}

ngOnInit(): void {
  
}
searchBookList(name:string){
  this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books?name='+name).subscribe(Response=>{
    this.booklist = Response;
  });
}
}
