import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search implements OnInit {
  searchTerm: string = "";

  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params['searchTerm']){
        this.searchTerm = params['searchTerm'];
      }
    });
  }
  search():void{
    

  }
}
