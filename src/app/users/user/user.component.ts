import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Fetching Route Parameters
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
      // The old way...
      // name: this.route.snapshot.params.['name']
    };
    // To Fetching Route Parameters Reactively
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      }
    );
  }

}
