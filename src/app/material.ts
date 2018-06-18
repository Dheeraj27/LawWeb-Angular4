import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavContainer, MatCardModule, MatFormField, getMatFormFieldMissingControlError, MatFormFieldModule, MatInputModule, MatDividerModule, MatGridListModule, MatGridTile} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatButtonModule, MatCheckboxModule, MatMenuModule, MatButtonModule, MatIconModule, 
    MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatGridListModule],
  exports: [ MatButtonModule, MatCheckboxModule, MatMenuModule, MatButtonModule, MatIconModule, 
    MatToolbarModule,MatCardModule,MatFormFieldModule, MatInputModule, MatDividerModule, MatGridListModule
     ],
})
export class MaterialModule { }
