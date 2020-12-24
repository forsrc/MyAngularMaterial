import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**

import { DialogConfirmedComponent } from '../dialog-confirmed/dialog-confirmed.component';

@NgModule({
  imports: [
    MatDialogModule
  ],
  declarations: [
    DialogConfirmedComponent
  ],
  entryComponents: [DialogConfirmedComponent]
})
export class UserModule {
}

 */

@Component({
  selector: 'dialog-confirmed.component',
  templateUrl: 'dialog-confirmed.component.html',
  styleUrls: ['./dialog-confirmed.component.scss'],
})
export class DialogConfirmedComponent implements OnInit {
  title: string;
  key: string;
  message: string;


  constructor(
    public dialogRef: MatDialogRef<DialogConfirmedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
    this.title = this.data.title;
    this.key = this.data.key || "";
    this.message = this.data.message || "Are you sure?";

  }

}