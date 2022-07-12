import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { ManagerServices } from '../../../http-services/http-services';
import { api } from '../../../components/utils/api-endpoints';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  funcionarioFormGroup: FormGroup;
  tipoFuncionarios: any[];
  values$: Observable<any[]>;

  public nomeFuncionario: string = '';
  tituloBreadcumb: string = 'Incluir';
  make = 'Create';

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ManagerServices,
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() {
    this.funcionarioFormGroup = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      tipoFuncionario: new FormControl('', Validators.required),
    });
  }

  executarServico() {
    if (this.funcionarioFormGroup.valid) {
      // this.dialog.showLoading();

      const novoFuncionario: any = {
        nome: this.funcionarioFormGroup.get('nome').value,
        tipoFuncionario: this.funcionarioFormGroup.get('tipoFuncionario').value
      };

      this.apiService.post(
        api.listUsers,
        novoFuncionario
      ).subscribe(
        response => {
          // this.dialog.showSuccess(response.mensagem).then(response => {
          //   this.router.navigate(['funcionarios']);
          // })
          console.log(response)
        },
        error => {
          // this.dialog.showError(error.error.mensagem);
          console.log(error.error.mensagem)
        }
      );
    }
  }

  cancelar() {
    this.location.back();
  }
}
