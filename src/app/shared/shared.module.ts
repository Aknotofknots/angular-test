import { NgModule} from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [CapitalizePipe], //it needs to be declared here
  exports: [CapitalizePipe] // if added here it can be imported via the SharedModule into any component that might need it.
})
export class SharedModule {}