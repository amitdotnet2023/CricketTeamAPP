import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUrllinkService } from '../../services/api-urllink.service';
import { ApihttpService } from '../../services/apihttp.service';

@Component({
  selector: 'app-criket-team-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgForOf, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './criket-team-view.component.html',
  styleUrls: ['./criket-team-view.component.scss']
})
export class CriketTeamViewComponent implements OnInit {

  CriketList: any = []

  constructor(private router: Router,
    private httpurl: ApihttpService,
    private apiUrlSer: ApiUrllinkService) {
  }


  ngOnInit(): void {
    this.httpurl.get(this.apiUrlSer.CriketTeamList).subscribe(
      {
        next: (value) => {
          console.log(value);
          this.CriketList = value;
        },
      }
    )
  }



}
