import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AuthenticationComponent },
    ]),
  ],
})
export class AuthModule {}
