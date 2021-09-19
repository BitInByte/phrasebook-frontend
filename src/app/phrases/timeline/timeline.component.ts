import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { SpinnerService } from '../../shared/spinner/spinner.service';
import Phrase from '../phrase.model';
import * as fromTask from '../store/phrase.reducer';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [SpinnerService],
})
export class TimelineComponent implements OnInit {
  public phrases$ = this.store.select(fromTask.selectFeatureTasks);
  // private subcsription!: Subscription;

  public tempPhrases: Phrase[] = [];
  public phrases: Phrase[] = [];
  private tempPosition = 0;
  constructor(private readonly store: Store<fromTask.PhraseState>) {}

  ngOnInit(): void {
    // this.subcsription = this.phrases$
    // .pipe(take(1))
    // .subscribe((phrases) => (this.tempPhrases = phrases));
    // this.phrases = this.tempPhrases.slice(this.tempPosition, 10);
    // this.tempPosition += 1;
    // console.log('phrases: ', this.phrases);
    // console.log('position: ', this.tempPosition);
  }

  // ngOnDestroy(): void {
  // this.subcsription.unsubscribe();
  // }

  onEndReached(): void {
    console.log('Please get me more!!!');
    const tempPhrases = this.tempPhrases.slice(this.tempPosition, 10);
    this.phrases.push(...tempPhrases);
    this.tempPosition += 1;
    console.log('phrases: ', this.phrases);
    console.log('position: ', this.tempPosition);
  }
}
