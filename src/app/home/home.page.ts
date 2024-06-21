import { Component } from '@angular/core';
import { LoaderServiceService } from '../services/loader-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loaderFlag:boolean=false;
  timer:number=7000;

  constructor(public loaderService: LoaderServiceService) {}


  showLoader(){
this.loaderService.$divFlag.emit(true);
this.loaderFlag=true;
setTimeout(() => {
  this.loaderService.$divFlag.emit(false);
  this.loaderFlag=false;
}, this.timer);
  }

}
