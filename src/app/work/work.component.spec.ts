import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WORKComponent } from './work.component';

describe('WORKComponent', () => {
  let component: WORKComponent;
  let fixture: ComponentFixture<WORKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WORKComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WORKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
