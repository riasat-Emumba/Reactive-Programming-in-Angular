import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentComponent } from './components/content/content.component';
import { ErrorSnackbarComponent } from './components/error-snackbar/error-snackbar.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SidenavComponent,
    ContentComponent,
    ErrorSnackbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
