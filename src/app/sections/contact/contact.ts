import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Reveal } from '../../shared/reveal';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Reveal, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  readonly ts = inject(TranslationService);

  private readonly endpoint = 'send_mail.php';

  readonly sending = signal(false);
  readonly sent = signal(false);
  readonly error = signal(false);

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue],
  });

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.error.set(false);
    this.sent.set(false);

    const { name, email, message } = this.form.getRawValue();

    try {
      const res = await firstValueFrom(
        this.http.post<{ success: boolean }>(this.endpoint, { name, email, message }),
      );

      if (!res?.success) {
        throw new Error('Server meldete keinen Erfolg');
      }

      this.sent.set(true);
      this.form.reset();
    } catch {
      this.error.set(true);
    } finally {
      this.sending.set(false);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
