import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCopmonentComponent } from './about-copmonent.component';

describe('AboutCopmonentComponent', () => {
  let component: AboutCopmonentComponent;
  let fixture: ComponentFixture<AboutCopmonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCopmonentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCopmonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
