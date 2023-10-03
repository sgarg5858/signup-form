import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {

  constructor(
    private _matSnackBar:MatSnackBar,
    private ngZone:NgZone
    ) { }
  //unknown will force you to narrow the types
  handleError(error: unknown): void {
  // We are using ngZone.run method to open snackbar because
  // when exception occurs inside async code,  angular uses runOutsideAngular to call handleError
  // which doesn't run the code inside angular zone.
  // to make our snackbar work, we need to run inside angular zone.
   this.ngZone.run(()=>{
    this._matSnackBar.open(
      'Error was detected! We are already working on it.','Close',{duration:3000}
    )
   })
    console.warn(error);
  }
}
