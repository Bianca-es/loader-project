import { Component, OnInit,OnDestroy } from '@angular/core';
import { LoaderServiceService } from 'src/app/services/loader-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent  implements OnInit,OnDestroy {
  imagesArray:Array<string>=['./assets/images/img_1.JPG','./assets/images/img_2.JPG','./assets/images/img_3.JPG'];
  currentImageIndex:number=0;
  intervalId:any;
  loaderTimer:number=5000;

  constructor(public loaderService: LoaderServiceService,private router: Router) { }

  ngOnInit() {
    this.startImageSlider()
    this.loaderService.$divFlag.subscribe((data)=>{
      if(data==false){
        this.router.navigate(['/exit']);
      }
    })
  }

  ngOnDestroy() {
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
  }

  startImageSlider(){
    this.intervalId=setInterval(()=>{
      this.currentImageIndex=(this.currentImageIndex+1)%this.imagesArray.length
    },this.loaderTimer)
  }

}
