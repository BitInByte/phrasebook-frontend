import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'app-infinite-loading',
  templateUrl: './infinite-loading.component.html',
  styleUrls: ['./infinite-loading.component.scss'],
})
export class InfiniteLoadingComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('sentinel') sentinel!: ElementRef<HTMLDivElement>;
  @Input() isLoading!: boolean;
  @Output() onEndReached = new EventEmitter<void>();

  private theSentinelSubscription!: IntersectionObserver;

  constructor(public readonly spinnerService: SpinnerService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.theSentinelSubscription = new IntersectionObserver(async (entries) => {
      const [entry] = entries;
      console.log('Entries: ', entries);
      console.log('Entry: ', entry);

      if (!entry.isIntersecting) {
        return;
      }

      setTimeout(() => {
        this.onEndReached.next();
      }, 1000);
    });
    console.log('Element: ', this.sentinel);
    if (this.sentinel.nativeElement) {
      this.theSentinelSubscription.observe(this.sentinel.nativeElement);
    }
  }
  ngOnDestroy(): void {
    this.theSentinelSubscription.unobserve(this.sentinel.nativeElement);
  }

  setLoadingOn(): void {
    this.spinnerService.loadingOn();
  }
  setLoadingOff(): void {
    this.spinnerService.loadingOff();
  }

  // private onEndReached(): void {
  // console.log('Reached the end');
  // }
}
