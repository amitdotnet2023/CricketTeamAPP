import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrllinkService {

  TeamLogin:any;
  CriketTeamReg:any;
  CriketTeamList:any;
  
  constructor() {

    this.TeamLogin = environment.apiKey + 'CricketTeamMaster/CriketTeam-Login'
    this.CriketTeamReg = environment.apiKey + 'CricketTeamMaster/CriketTeam-Registration'
    this.CriketTeamList = environment.apiKey + 'CricketTeamMaster/CriketTeam-List'

   }
}
