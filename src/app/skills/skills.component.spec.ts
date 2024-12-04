import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SKILLSComponent } from './skills.component';

describe('SKILLSComponent', () => {
  let component: SKILLSComponent;
  let fixture: ComponentFixture<SKILLSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SKILLSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SKILLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
