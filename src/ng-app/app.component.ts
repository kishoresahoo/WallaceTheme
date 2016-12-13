import 'rxjs/add/operator/let';

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, Route} from '@angular/router'; 
import { Store } from '@ngrx/store';

import * as appSelectors from './app.selectors';
import * as postActions from './post-data/posts.actions';
import {AppState} from './app.state';

@Component({
  selector: 'wallace',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<router-outlet></router-outlet>'
})

export class AppComponent { 
	constructor(private store: Store<AppState>, private router: Router){
		

		store.let(appSelectors.getRoutes).subscribe(routes => {
			router.resetConfig(routes);
		});
	}
}
