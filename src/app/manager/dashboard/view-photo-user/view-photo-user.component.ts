import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'view-photo-user',
  templateUrl: './view-photo-user.component.html',
  styleUrls: ['./view-photo-user.component.scss']
})
export class ViewPhotoUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewPhotoUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }
}
