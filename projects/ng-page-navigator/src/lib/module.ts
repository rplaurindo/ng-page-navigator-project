import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageNavigatorComponent } from './components/page-navigator/component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot([])
    ],
    declarations: [
        PageNavigatorComponent
    ],
    exports: [
        PageNavigatorComponent
    ]
})
export class NgPageNavigatorModule { }
