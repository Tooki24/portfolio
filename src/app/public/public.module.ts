import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    TitleComponent
   ]
})
export class PublicModule { }
