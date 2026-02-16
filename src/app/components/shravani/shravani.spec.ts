import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shravani } from './shravani';

describe('Shravani', () => {
  let component: Shravani;
  let fixture: ComponentFixture<Shravani>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shravani]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shravani);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
