import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { BlankPageComponent } from './blankPage.component';

import { LightboxModule } from 'angular2-lightbox';

@NgModule({
    imports: [LightboxModule, CommonModule, Ng2BootstrapModule.forRoot()],
    declarations: [BlankPageComponent],
    exports: [BlankPageComponent]
})

export class BlankPageModule { }
