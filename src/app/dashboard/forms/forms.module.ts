import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { FormComponent } from './forms.component';

@NgModule({

    imports: [CommonModule, Ng2BootstrapModule.forRoot(),
        RouterModule
    ],
    declarations: [FormComponent],
    exports: [FormComponent]
})

export class FormModule { }
