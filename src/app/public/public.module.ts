import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { PresentationComponent } from './components/presentation/presentation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    TitleComponent,
    PresentationComponent
   ]
})
export class PublicModule { }
