import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisderechosBeneficiosPage } from './misderechos-beneficios.page';

describe('MisderechosBeneficiosPage', () => {
  let component: MisderechosBeneficiosPage;
  let fixture: ComponentFixture<MisderechosBeneficiosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisderechosBeneficiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisderechosBeneficiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
