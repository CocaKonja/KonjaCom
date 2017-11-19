import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsSocialComponent } from './bs-social.component';

describe('BsSocialComponent', () => {
  let component: BsSocialComponent;
  let fixture: ComponentFixture<BsSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
