import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirective,
  ],
  imports:[
   CommonModule
  ],
  exports:[
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirective,
    CommonModule
  ],
  entryComponents:[AlertComponent]
})
export class SharedModule {}
