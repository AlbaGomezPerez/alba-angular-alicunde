import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { Router } from '@angular/router';
import { ComponentFixture } from '@angular/core/testing';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormComponent
      ],
      declarations: [
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a label with text "Correo Electrónico" and email input', () => {
    const label = fixture.nativeElement.querySelector('label[for="email"]');
    const input = fixture.nativeElement.querySelector('input#email');

    expect(label).toBeTruthy();
    expect(label.textContent).toContain('Correo Electrónico');
    expect(input).toBeTruthy();
  });

  it('should have a label with text "Contraseña" and password input', () => {
    const label = fixture.nativeElement.querySelector('label[for="password"]');
    const input = fixture.nativeElement.querySelector('input#password');

    expect(label).toBeTruthy();
    expect(label.textContent).toContain('Contraseña');
    expect(input).toBeTruthy();
  });

  it('should display the error message when password is required', () => {
    const passwordControl = component.loginForm.controls['password'];
    passwordControl.markAsTouched();
    passwordControl.setValue('');
    passwordControl.updateValueAndValidity();

    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector('.section:nth-child(2) .error-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('La contraseña es obligatoria.');
  });

  it('should display the error message when email is required', () => {
    const emailControl = component.loginForm.controls['email'];
    emailControl.markAsTouched();
    emailControl.setValue('');
    emailControl.updateValueAndValidity();

    fixture.detectChanges();

    const emailMessage = fixture.nativeElement.querySelector('.section:nth-child(1) .error-message');
    expect(emailMessage).toBeTruthy();
    expect(emailMessage.textContent).toContain('El correo es obligatorio.');
  });

  it('should display the error message when password is shorter than 6 characters', () => {
    const passwordControl = component.loginForm.controls['password'];
    passwordControl.setValue('123');
    passwordControl.markAsTouched();
    passwordControl.updateValueAndValidity();

    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector('.section:nth-child(2) .error-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Debe tener al menos 6 caracteres.');
  });

  it('should disable the submit button when the form is invalid', () => {
    fixture.detectChanges();

    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should enable the submit button when the form is valid', () => {
    component.loginForm.controls['email'].setValue('test@example.com');
    component.loginForm.controls['password'].setValue('123456');
    component.loginForm.updateValueAndValidity();

    fixture.detectChanges();

    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeFalsy();
  });

  it('should navigate to "/success" if the form is valid', () => {
    component.loginForm.controls['email'].setValue('test@example.com');
    component.loginForm.controls['password'].setValue('123456');
    component.loginForm.markAllAsTouched();
    component.loginForm.updateValueAndValidity();

    spyOn(router, 'navigate');

    component.onSubmit();

    expect(router.navigate).toHaveBeenCalledWith(['/success']);
  });
});
