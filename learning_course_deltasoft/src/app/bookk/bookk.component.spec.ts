import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookkComponent } from './bookk.component';

describe('BookkComponent', () => {
  let component: BookkComponent;
  let fixture: ComponentFixture<BookkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
