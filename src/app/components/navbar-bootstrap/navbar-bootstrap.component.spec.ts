import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBootstrapComponent } from './navbar-bootstrap.component';

describe('NavbarBootstrapComponent', () => {
  let component: NavbarBootstrapComponent;
  let fixture: ComponentFixture<NavbarBootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarBootstrapComponent]
    });
    fixture = TestBed.createComponent(NavbarBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
