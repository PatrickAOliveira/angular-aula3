import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule, ReactiveFormsModule,
    FormsModule],
  declarations: [
    AppComponent,
    FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
