import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListBecariosComponent } from './shared/components/list-becarios/list-becarios.component';
import { HttpClientModule } from '@angular/common/http';
import { EditBecariosComponent } from './shared/components/edit-becarios/edit-becarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListBecariosComponent,
    EditBecariosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
