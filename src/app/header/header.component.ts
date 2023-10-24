import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage-service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub : Subscription;

  constructor(private dataStorageSer: DataStorageService, private authService:AuthService){}
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      user=>{
         this.isAuthenticated=!user ?false : true;
      }
    );
  }

  onSaveData(){
    this.dataStorageSer.storeRecipe();
  }

  onFetchData(){
    this.dataStorageSer.fetchRecipe().subscribe();
  }
  logout(){
    this.authService.logout();
    
  }
}
