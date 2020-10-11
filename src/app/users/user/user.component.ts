import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription: Subscription;
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
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      }
    );
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    // In this case this is not necessary because Angular does it,
    //  but it will be necessary in a custom observable subscription.
    this.paramSubscription.unsubscribe();
  }

}
