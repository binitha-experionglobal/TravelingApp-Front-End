import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerlistComponent } from './travelerlist.component';

describe('TravelerlistComponent', () => {
  let component: TravelerlistComponent;
  let fixture: ComponentFixture<TravelerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
