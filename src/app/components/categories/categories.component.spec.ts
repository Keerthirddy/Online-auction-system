import { ActivatedRoute } from '@angular/router';

await TestBed.configureTestingModule({
  declarations: [CategoriesComponent],
  imports: [HttpClientTestingModule],
  providers: [
    { provide: ActivatedRoute, useValue: {} }
  ]
}).compileComponents(); 