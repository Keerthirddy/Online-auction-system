import { HttpClientTestingModule } from '@angular/common/http/testing';

await TestBed.configureTestingModule({
  declarations: [BiddingFormComponent],
  imports: [ReactiveFormsModule, HttpClientTestingModule],
  providers: [
    { provide: ActivatedRoute, useValue: {} }
  ]
}).compileComponents(); 