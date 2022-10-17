import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisderechosEnfermedadesPage } from './misderechos-enfermedades.page';

describe('MisderechosEnfermedadesPage', () => {
  let component: MisderechosEnfermedadesPage;
  let fixture: ComponentFixture<MisderechosEnfermedadesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisderechosEnfermedadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisderechosEnfermedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
