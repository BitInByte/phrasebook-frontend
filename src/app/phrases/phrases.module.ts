import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './phrases.routes';
import * as fromPhrase from './store/phrase.reducer';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import { PhraseComponent } from './phrase/phrase.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from '../auth/auth.module';

// console.log all actions
// Middleware between action and reducer
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [TimelineComponent, PhraseComponent],
  imports: [
    RoutesModule, // Order matters
    CommonModule,
    FontAwesomeModule,
    // RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromPhrase.TASK_FEATURE_KEY,
      fromPhrase.reducer,
      { metaReducers }
      // !environment.production && { metaReducers }
    ),
    SharedModule,
  ],
})
export class PhrasesModule {}
