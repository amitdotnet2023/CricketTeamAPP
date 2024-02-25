import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUrllinkService } from '../../services/api-urllink.service';
import { ApihttpService } from '../../services/apihttp.service';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-criket-team-registration',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgForOf, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './criket-team-registration.component.html',
  styleUrls: ['./criket-team-registration.component.scss']
})
export class CriketTeamRegistrationComponent {

  CriketRegFrom!: FormGroup
  isSubmit = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private httpurl: ApihttpService,
    private apiUrlSer: ApiUrllinkService,
  ) {
  }

  ngOnInit(): void {
    this.CriketRegFrom = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      totalMatchesPlayed: [''],
      contactNumber: ['', Validators.pattern(/^\d{10}$/)], // Pattern for 10-digit phone number
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: [''],
      height: [''], // Optional field
      weight: [''], // Optional field
      role: ['', Validators.required]
    });

  }



  submitRegistration() {

    if (this.CriketRegFrom.valid) {
      this.httpurl.post(this.apiUrlSer.CriketTeamReg, this.CriketRegFrom.value).subscribe({
        next: (value) => {
          console.log(value);
          alert(value.message)
          this.CriketRegFrom.reset();
        },
        error: (err) => {
          console.log(err);
          alert(err.error.message)
        },
      })
    }
    else {
      alert("Please fill Registration form!")
    }
  }


}
