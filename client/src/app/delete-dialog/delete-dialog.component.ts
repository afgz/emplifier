import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  public title: string;
  public message: string;

  constructor(public dialogRef: MdDialogRef<DeleteDialogComponent>) {

  }

}
