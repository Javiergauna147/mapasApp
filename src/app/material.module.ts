import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**
 * Angular Material Imports
 */
 import { MatSliderModule } from '@angular/material/slider';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import {MatButtonModule} from '@angular/material/button';
 import { MatProgressBarModule } from '@angular/material/progress-bar';
 import { MatCardModule } from '@angular/material/card';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { MatDialogModule } from '@angular/material/dialog';
 import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule { }
