import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MudaClasseService {

constructor() { }

  private acaoSource = new Subject<boolean>();
  acao$ = this.acaoSource.asObservable();

  emitirAcao(estado: boolean): void {
    this.acaoSource.next(estado);
  }
}
