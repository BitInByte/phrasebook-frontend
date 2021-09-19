import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhrasesService } from '../phrases.service';
import * as PhraseActions from './phrase.actions';

@Injectable()
export class PhraseEffects {
  getTimeline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PhraseActions.getPhraseStart),
      mergeMap(() =>
        this.phrasesService.getTimeline().pipe(
          map((phrases) =>
            PhraseActions.getPhraseSuccess({
              phrases,
            })
          ),
          catchError(() => of(PhraseActions.getPhraseError()))
        )
      )
    )
  );
  constructor(
    private readonly actions$: Actions,
    private readonly phrasesService: PhrasesService
  ) {}
}
