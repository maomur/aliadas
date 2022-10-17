import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisderechosJornadalaboralPage } from './misderechos-jornadalaboral.page';

describe('MisderechosJornadalaboralPage', () => {
  let component: MisderechosJornadalaboralPage;
  let fixture: ComponentFixture<MisderechosJornadalaboralPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisderechosJornadalaboralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisderechosJornadalaboralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
