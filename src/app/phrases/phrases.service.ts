import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MessageModalService } from '../shared/message-modal/message-modal.service';
import Phrase from './phrase.model';

interface PhraseBody {
  data: {
    content: [
      {
        id: string;
        likes: number;
        shares: number;
        createdAt: number;
        liked: boolean;
        shared: boolean;
        ownPhrase: boolean;
        phrase: string;
        author: {
          authorName: string;
          friend: boolean;
        };
      }
    ];
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhrasesService {
  private readonly PHRASE_ENDPOINT = 'phrase';
  private readonly TIMELINE_ENDPOINT = 'timeline';
  private readonly timeline_url = `${environment.apiPath}/${this.TIMELINE_ENDPOINT}`;
  constructor(
    private readonly http: HttpClient,
    private readonly messageModalService: MessageModalService
  ) {}

  public getTimeline(): Observable<Phrase[]> {
    return this.http.get<PhraseBody>(this.timeline_url).pipe(
      take(1),
      shareReplay(),
      map((phraseData) =>
        phraseData.data.content.map(
          (phrasePayload) =>
            new Phrase(
              phrasePayload.id,
              phrasePayload.author.authorName,
              phrasePayload.likes,
              phrasePayload.shares,
              phrasePayload.createdAt,
              phrasePayload.liked,
              phrasePayload.shared,
              phrasePayload.ownPhrase,
              phrasePayload.phrase,
              phrasePayload.author.friend
            )
        )
      ),
      tap(
        () => {},
        (error) =>
          this.messageModalService.setMessage(error['error']['errors'], true)
      )
    );
  }
}
