import { Component, OnInit, ViewChild } from '@angular/core';
import { Config } from 'protractor/built/config';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ManagerServices } from '../../http-services/http-services';
import { MyDataSource, ReusableTableComponent } from '../../components/reusable-table/reusable-table.component';
import { routerTransition } from '../../router.animations';
import { api } from '../../components/utils/api-endpoints';
import { MatDialog } from '@angular/material/dialog';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewPhotoUserComponent } from './view-photo-user/view-photo-user.component';
import { Router } from '@angular/router';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    @ViewChild('tableChild', { static: false }) tableChild: ReusableTableComponent;

    funcoesIconesTicket = [
        { funcao: this.visualizarTicket.bind(this), icone: this.iconeVisualizarTicket.bind(this), show: this.mostrarIcone.bind(this), disable: this.desabilitarVisualizacaoTicket.bind(this), tip: () => 'View User' },
        { funcao: this.editUser.bind(this), icone: this.iconEditUser.bind(this), show: this.mostrarIcone.bind(this), disable: this.desableEditUser.bind(this), tip: () => 'Edit User' },
        { funcao: this.visualizarPhoto.bind(this), icone: this.iconeVisualizarPhoto.bind(this), show: this.mostrarIcone.bind(this), disable: this.desabilitarVisualizacaoPhoto.bind(this), tip: () => 'View Photo' },
    ];
    
    dataSource = ELEMENT_DATA;
    expandedElement: PeriodicElement | null;
    dataSubject = new BehaviorSubject<any[]>([]);
    colunasExibidasTexto = {first_name: 'Name', email: 'Email', avatar: 'Photo', action: 'Actions'};
    columnsToDisplay =  ['first_name', 'last_name', 'email', 'avatar', 'action'];
    colunasAcoes = [{nome: 'action', funcaoIcone: this.funcoesIconesTicket, ocultavel: false}];
    ordenacao = [{coluna: 'first_name', direcao: 'asc'}];
    loaded = false;

    constructor(
        public apiService: ManagerServices,
        public dialog: MatDialog,
        public route: Router
    ) {}

    ngOnInit() {
        this.apiService.get(api.listUsers + '?page=2').subscribe(response => {
            response.data
            this.dataSource = response.data.map(res => {
                return{
                    id: res.id,
                    email: res.email,
                    first_name: res.first_name+" "+ res.last_name,
                    avatar: res.avatar
                }
            })
        });
    }

    ngAfterViewInit(): void {
        this.tableChild.onChange();
    }

    createUser(){
        this.route.navigate(['create']);
    }

    mostrarIcone(row) { return true; }

    visualizarTicket(row) { this.route.navigate([`${row.id}/view`]); }
    iconeVisualizarTicket(row) { return { icone: 'search', externo: false }; }
    desabilitarVisualizacaoTicket(row) { return false;}

    editUser(row) { this.route.navigate([`${row.id}/edit`]); }
    iconEditUser(row) { return { icone: 'edit', externo: false }; }
    desableEditUser(row) { return false;}

    visualizarPhoto(row) {
        this.dialog.open(ViewPhotoUserComponent, {
            data: row.avatar
        })
    }
    iconeVisualizarPhoto(row) { return { icone: 'photo_camera', externo: false }; }
    desabilitarVisualizacaoPhoto(row) { return false;}
}

