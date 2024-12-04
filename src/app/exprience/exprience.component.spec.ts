import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXPRIENCEComponent } from './exprience.component';

describe('EXPRIENCEComponent', () => {
  let component: EXPRIENCEComponent;
  let fixture: ComponentFixture<EXPRIENCEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EXPRIENCEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EXPRIENCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
