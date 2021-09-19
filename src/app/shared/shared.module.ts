import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { InfiniteLoadingComponent } from './infinite-loading/infinite-loading.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
// import { InputTestComponent } from './input/input-test-component';

@NgModule({
  declarations: [InputComponent, InfiniteLoadingComponent, SpinnerComponent, MessageModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent, InfiniteLoadingComponent, SpinnerComponent],
})
export class SharedModule {}
