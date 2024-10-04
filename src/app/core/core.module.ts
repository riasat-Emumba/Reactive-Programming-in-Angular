import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentComponent } from './components/content/content.component';
import { ErrorSnackbarComponent } from './components/error-snackbar/error-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    SidenavComponent,
    ErrorSnackbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatSnackBarModule,
  ]
})
export class CoreModule { }
