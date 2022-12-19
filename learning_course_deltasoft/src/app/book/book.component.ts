import { Component, OnInit } from '@angular/core';
import { Book } from '../type/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit{ 
  book: Book[] = [
    {
      name: 'Transformer',
      author: 'micle bay',
      image: 'https://upload.wikimedia.org/wikipedia/th/thumb/6/66/Transformers07.jpg/220px-Transformers07.jpg',
      amount:700,
      },
      {
      name :'Transformer : Revenge of the Fallen',
      author :'micle bay',
      image : 'https://upload.wikimedia.org/wikipedia/en/c/cb/TF2SteelPoster.jpg',
      amount: 800,
      },
      {
      name :'Transformer : Dark of the Moon',
      author :'micle bay',
      image : 'https://s.isanook.com/mv/0/ud/4/20048/tran1-ss.jpg',
      amount: 900,
      },
      {
      name :'Transformer : Age of Extinction',
      author :'micle bay',
      image : 'https://upload.wikimedia.org/wikipedia/en/0/0f/Transformers_Age_of_Extinction_poster.jpg',
      amount: 500,
      },
      {
        name :'Transformer : The last Knight',
        author :'micle bay',
        image : 'https://play-lh.googleusercontent.com/Xs3w0_sjQ3imeyxXCrLW5_gDmmlXYtzJdKOtApBiXmhlyNbMOmDtFevqE7m_YpNmZTfUXA',
        amount: 500,
        },
        {
          name :'Bumblebee',
          author :'micle bay',
          image : 'https://m.media-amazon.com/images/M/MV5BMjUwNjU5NDMyNF5BMl5BanBnXkFtZTgwNzgxNjM2NzM@._V1_.jpg',
          amount: 500,
          },
          {
            name :'Transformer : Rise of the Beast',
            author :'micle bay',
            image : 'https://i.ytimg.com/vi/3t3TedG-ovs/maxresdefault.jpg',
            amount: 500,
            },  
            {
              name :'Pacific Rim',
              author :'UNknow',
              image : 'https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_.jpg',
              amount: 500,
              }, 
              {
                name :'Real Steel',
                author :'UNknow',
                image : 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Real_Steel_Poster.jpg/220px-Real_Steel_Poster.jpg',
                amount: 500,
                }, 
                {
                  name :'Terminator',
                  author :'UNknow',
                  image : 'https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg',
                  amount: 500,
                  },       
  ];

  isShowing : boolean = true;

  togglebook(){
    this.isShowing = !this.isShowing;
  }

  constructor(){
    console.log({constructor:"constructor"});
  }

  ngOnInit(): void{
    console.log({onInIt:'on in it'});
  }

}
