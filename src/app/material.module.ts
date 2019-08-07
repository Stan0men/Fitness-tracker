import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule]
})
export class MaterialModule {
}
