// import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Lightbox } from 'angular2-lightbox';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html'
})

export class BlankPageComponent implements OnInit{
    
    /* Carousel Variable */
    private _albums: Array <any>= [];
    myInterval = 5000;
    index = 0;
    albname = "";
    slides: Array<any> = [];
    imgUrl: Array<any> = [
      `assets/img/Ramaphotos/rama5.jpg`,
      `assets/img/Ramaphotos/rama2.jpg`,
      `assets/img/Ramaphotos/rama3.jpg`,
      `assets/img/Ramaphotos/rama4.jpg`
    
    ];
    
    constructor(private _lightbox: Lightbox,private route: ActivatedRoute
          ) {
        
        
        for (let i = 0; i < 4; i++) {
            this.addSlide();
          }
        
    
    }
    
    ngOnInit() {

        this.albname = this.route.snapshot.paramMap.get('AlbumName');  
        console.log(this.albname);
        
        for (let i = 1; i <= 5; i++) {
            const src = 'assets/img/'+ this.albname +'/rama' + i + '.jpg';
            const caption = 'Image ' + i + ' caption here';
          //  const thumb = 'assets/img/Ramaphotos/rama' + i + '-thumb.jpg';
            const album = {
               src: src,
               caption: caption,
            //   thumb: thumb
            };

            this._albums.push(album);
          }
    } 
    
    /* Carousel */
    addSlide() {
      let i = this.slides.length;
      this.slides.push({
        image: this.imgUrl[i],
        text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
              ${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
      });
    }
    open(index: number): void {
        // open lightbox
        this._lightbox.open(this._albums, index);
      }
    

}
