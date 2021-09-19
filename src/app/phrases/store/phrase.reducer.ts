import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import Phrase from '../phrase.model';
import * as PhrasesActions from './phrase.actions';

export const TASK_FEATURE_KEY = 'phrases';

export interface State {
  phrases: Phrase[];
}

export interface PhraseState {
  [TASK_FEATURE_KEY]: State;
}

// Expose the entire tasks state
export const selectFeature =
  createFeatureSelector<PhraseState, State>(TASK_FEATURE_KEY);

// Expose the tasks object
export const selectFeatureTasks = createSelector(
  selectFeature,
  (state) => state.phrases
);

const initialState: State = {
  phrases: [
    new Phrase(
      'id1',
      'Thiago Broda',
      53,
      50,
      'yesterday',
      true,
      true,
      false,
      'Thiago is an amazing dev',
      true
    ),
    new Phrase(
      'id2',
      'Thiago Broda',
      53,
      50,
      'yesterday',
      true,
      true,
      false,
      'Thiago is an amazing dev',
      true
    ),
    new Phrase(
      'id3',
      'Thiago Broda',
      53,
      50,
      'yesterday',
      true,
      true,
      false,
      'Thiago is an amazing dev',
      true
    ),
    new Phrase(
      'id4',
      'Thiago Broda',
      53,
      50,
      'yesterday',
      true,
      true,
      false,
      'Thiago is an amazing dev',
      true
    ),
  ],
  // phrases: [
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // new Phrase(
  // 'id1',
  // 'Thiago Broda',
  // 53,
  // 50,
  // 'yesterday',
  // true,
  // true,
  // false,
  // 'Thiago is an amazing dev',
  // true
  // ),
  // ],
};

const _phraseReducer = createReducer(
  initialState,
  on(PhrasesActions.toggleLikePhrase, (state, { phraseId }) => {
    // const phrases = state.phrases.slice();
    const phrases: Phrase[] = JSON.parse(JSON.stringify(state.phrases));

    const phraseIndex = phrases.findIndex((phrase) => phrase.id === phraseId);

    if (phraseIndex > -1) {
      console.log('Changing', phraseIndex);
      // const phrase = Object.assign({}, phrases[phraseIndex]);
      const phrase = phrases[phraseIndex];
      // const phrase = {
      // ...phrases[phraseIndex],
      // };
      // phrase.toggleLiked();

      // phrases[phraseIndex].toggleLiked();
      phrase.isLiked = !phrase.isLiked;
      phrases[phraseIndex] = phrase;
    }

    return {
      ...state,
      phrases: [...phrases],
    };
  }),

  on(PhrasesActions.toggleSharePhrase, (state, { phraseId }) => {
    // const phrases = state.phrases.slice();
    const phrases: Phrase[] = JSON.parse(JSON.stringify(state.phrases));

    const phraseIndex = phrases.findIndex((phrase) => phrase.id === phraseId);

    if (phraseIndex > -1) {
      console.log('Changing', phraseIndex);
      // const phrase = Object.assign({}, phrases[phraseIndex]);
      const phrase = phrases[phraseIndex];
      // const phrase = {
      // ...phrases[phraseIndex],
      // };
      // phrase.toggleLiked();

      // phrases[phraseIndex].toggleLiked();
      phrase.isShared = !phrase.isShared;
      phrases[phraseIndex] = phrase;
    }

    return {
      ...state,
      phrases: [...phrases],
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _phraseReducer(state, action);
}
