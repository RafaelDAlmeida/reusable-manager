import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CollectionViewer, DataSource, SelectionChange} from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

@Component({
  selector: 'reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input() dataSource;
  dataSubject = new BehaviorSubject<any[]>([]);
  @Input() columnsToDisplay = [];
  @Input() expandedElement: PeriodicElement | null;
  // @Input() columnsToDisplayWithExpand = [];
  @Input() ordenacao: [{coluna: string, direcao: string}];
  @Input() colunasExibidasTexto;
  @Input() funcaoIcone = () => null;
  @Input() funcaoIconeCor = () => null;
  @Input() colunasAcoes: any[] = [];

  detalhes = null;

  constructor() {
    if (this.ordenacao && this.ordenacao.length > 0) {
      this.sort.active = this.ordenacao[0].coluna;
      this.sort.direction = this.ordenacao[0].direcao === 'asc' ? 'asc' : 'desc';
      this.sort._stateChanges.next();
    }
  }

  ngOnInit(): void {}

  public idealColumnNumber(size = window.innerWidth) {
    return Math.round(size * 0.0047);
  }

  public onChange(){
    this.tratarRespostaInternamente(this.dataSource)
    console.log('sadiajsdias',this.colunasAcoes)
  }

  private tratarRespostaInternamente (response: any) {
    const responseTratada = response;
    this.dataSource.count = responseTratada.total;
    this.dataSubject.next(responseTratada);
  }

  textoExibicao(coluna) {
    let textoExibicao = '';
    for (const property in this.colunasExibidasTexto) {
      if (this.colunasExibidasTexto.hasOwnProperty(property)) {
        if (property === coluna) {
          textoExibicao = this.colunasExibidasTexto[property];
          break;
        }
      }
    }

    return textoExibicao;
  }
}

export class MyDataSource extends DataSource<any[]> {
  count: number;
  constructor(private subject: BehaviorSubject<any[]>) {
    super ();
  }
  connect(collectionViewer: CollectionViewer): Observable<any[]> {
      return this.subject.asObservable();
  }
  disconnect (  ): void {}
}