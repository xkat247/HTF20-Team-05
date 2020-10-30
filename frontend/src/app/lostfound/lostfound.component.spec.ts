import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostfoundComponent } from './lostfound.component';

describe('LostfoundComponent', () => {
  let component: LostfoundComponent;
  let fixture: ComponentFixture<LostfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
