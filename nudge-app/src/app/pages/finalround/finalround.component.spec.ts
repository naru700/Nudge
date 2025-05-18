import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalroundComponent } from './finalround.component';

describe('FinalroundComponent', () => {
  let component: FinalroundComponent;
  let fixture: ComponentFixture<FinalroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
