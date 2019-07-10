import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth : AuthService, private userService : UserService) { }

  canActivate(){

    return this.auth.appUser$   
      .map(appUser => appUser.isAdmin);

  }

}
