import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProporsalComponent } from './proporsal.component';

describe('ProporsalComponent', () => {
  let component: ProporsalComponent;
  let fixture: ComponentFixture<ProporsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProporsalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProporsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
