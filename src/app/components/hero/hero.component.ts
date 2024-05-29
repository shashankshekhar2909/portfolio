import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit{
  lettersArray:any = []
  letters = 'Shashank Shekhar'

  ngOnInit(): void {
    this.lettersArray = this.letters.split('');
  }
  change(e:any){
    console.log(e);
  }

}
