import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatCheckboxModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatCheckboxModule]
})
export class MaterialModule {
}
