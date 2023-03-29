import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPgComponent } from './ticket-pg.component';

describe('TicketPgComponent', () => {
  let component: TicketPgComponent;
  let fixture: ComponentFixture<TicketPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
