import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUrllinkService } from '../../services/api-urllink.service';
import { ApihttpService } from '../../services/apihttp.service';

@Component({
  selector: 'app-team-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgForOf, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './team-login.component.html',
  styleUrls: ['./team-login.component.scss']
})
export class TeamLoginComponent implements OnInit {

  loginFrom!: FormGroup
  isSubmit = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private httpurl: ApihttpService,
    private apiUrlSer: ApiUrllinkService,
  ) {
  }

  ngOnInit(): void {
    this.loginFrom = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }



  Login() {

    this.isSubmit = true

    if (this.loginFrom.valid) {
      this.httpurl.post(this.apiUrlSer.TeamLogin, this.loginFrom.value).subscribe({
        next: (value) => {
          console.log(value);
          this.router.navigateByUrl("teamview");
        },
        error: (err) => {
          console.log(err);
          alert(err.error.message)
        },
      })
    }
    else {
      alert("Please fill login form!")
    }
  }


}
