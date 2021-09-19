import { createAction, props } from '@ngrx/store';
import Phrase from '../phrase.model';

export const getPhraseStart = createAction('[Phrase Page] Get Phrase Start');
export const getPhraseSuccess = createAction(
  '[Phrase API] Get Phrase Success',
  props<{ phrases: Phrase[] }>()
);
export const getPhraseError = createAction('[Phrase API] Get Phrase Error');

export const toggleLikePhrase = createAction(
  '[Phrase Page] Toggle Like Phrase',
  props<{ phraseId: string }>()
);

export const toggleSharePhrase = createAction(
  '[Phrase Page] Toggle Share Phrase',
  props<{ phraseId: string }>()
);
