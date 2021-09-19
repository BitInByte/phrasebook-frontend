import { Component, Input, OnInit } from '@angular/core';
import { faThumbsUp, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import Phrase from '../phrase.model';
import * as PhrasesActions from '../store/phrase.actions';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.scss'],
})
export class PhraseComponent implements OnInit {
  public readonly faThumbsUp = faThumbsUp;
  public readonly faShareSquare = faShareSquare;
  @Input() phrase!: Phrase;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  public onLikeHandler(): void {
    this.store.dispatch(
      PhrasesActions.toggleLikePhrase({ phraseId: this.phrase.id })
    );
  }

  public onShareHandler(): void {
    this.store.dispatch(
      PhrasesActions.toggleSharePhrase({ phraseId: this.phrase.id })
    );
  }
}
