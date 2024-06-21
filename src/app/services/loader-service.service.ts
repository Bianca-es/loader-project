import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {
  $divFlag = new EventEmitter<boolean>();
  constructor() { }
}
