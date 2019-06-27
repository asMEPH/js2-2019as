import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasloComponent } from './haslo.component';

describe('HasloComponent', () => {
  let component: HasloComponent;
  let fixture: ComponentFixture<HasloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
