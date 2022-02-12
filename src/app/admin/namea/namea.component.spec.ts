import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameaComponent } from './namea.component';

describe('NameaComponent', () => {
  let component: NameaComponent;
  let fixture: ComponentFixture<NameaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
