import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerServices } from '../../../http-services/http-services';
import { api } from '../../../components/utils/api-endpoints';
import { CreateUserComponent } from '../create-user/create-user.component';
import { Location } from '@angular/common';

@Component({
  selector: 'edit-user',
  templateUrl: '../create-user/create-user.component.html',
  styleUrls: ['../create-user/create-user.component.scss']
})
export class EditUserComponent extends CreateUserComponent implements OnInit {

  make = 'Edit';

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ManagerServices,
    // public dialog: DialogService,
    public router: Router,
    public location: Location
  ) { 
    super(formBuilder, apiService, router, location)
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
