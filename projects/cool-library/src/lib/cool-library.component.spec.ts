import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolLibraryComponent } from './cool-library.component';

describe('CoolLibraryComponent', () => {
  let component: CoolLibraryComponent;
  let fixture: ComponentFixture<CoolLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
