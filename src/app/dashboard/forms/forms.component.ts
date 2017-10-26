import {Component} from '@angular/core';

import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-form-cmp',
    templateUrl: './forms.component.html'
})

export class FormComponent {
    
    constructor(private router: Router, private route: ActivatedRoute) {}
    
     albumName = ['Event 2015',
                  'Event 2016',
                  'Event 2017',
                  'Event 2018'];
   
    imgUrl = [`./assets/img/Ramaphotos/rama5.jpg`,
              `./assets/img/Ramaphotos/rama2.jpg`,
              `./assets/img/Ramaphotos/rama3.jpg`,
              `./assets/img/Ramaphotos/rama4.jpg`];
    
    
    /* END */


    onclk(eventName){
        console.log(eventName);
        this.router.navigate(['../blankpage',{AlbumName:eventName}], { relativeTo: this.route });
   //     Router.navigate(['/myRoute',{someProperty:"SomeValue"}]
    }

    
}
