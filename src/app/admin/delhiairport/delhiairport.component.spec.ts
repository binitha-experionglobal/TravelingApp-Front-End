import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiairportComponent } from './delhiairport.component';

describe('DelhiairportComponent', () => {
  let component: DelhiairportComponent;
  let fixture: ComponentFixture<DelhiairportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelhiairportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiairportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
