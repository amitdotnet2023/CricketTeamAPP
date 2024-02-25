import { Routes } from '@angular/router';
import { TeamLoginComponent } from './views/team-login/team-login.component';
import { CriketTeamRegistrationComponent } from './views/criket-team-registration/criket-team-registration.component';
import { CriketTeamViewComponent } from './views/criket-team-view/criket-team-view.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

export const routes: Routes = [

    { path: '', redirectTo: 'landingpage', pathMatch: 'full' },

    { path: 'teamlogin', component: TeamLoginComponent },
    { path: 'teamregistration', component: CriketTeamRegistrationComponent },
    { path: 'teamview', component: CriketTeamViewComponent },
    { path: 'landingpage', component: LandingPageComponent }

];
