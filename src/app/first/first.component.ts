import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: any;
  owoce=["jablko","pomarancza","banan","winogrona"]

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

}
