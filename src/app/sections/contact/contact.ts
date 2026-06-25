import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Reveal, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  // Endpunkt: relativ -> liegt im Build neben index.html. Auf dem PHP-Host
  // (z. B. deine Domain) wird send_mail.php dann tatsaechlich ausgefuehrt.
  private readonly endpoint = 'send_mail.php';

  // Zustaende fuer die UI (Signals -> Template reagiert automatisch).
  readonly sending = signal(false);
  readonly sent = signal(false);
  readonly error = signal(false);

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue],
  });
  // async/await + try/catch = der saubere "fetch mit Fehlerbehandlung"-Weg.
  // firstValueFrom() macht aus dem HttpClient-Observable ein Promise.
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
      this.form.reset();          // Formular leeren -> Button wieder deaktiviert
    } catch {
      this.error.set(true);       // Netz-/Serverfehler abgefangen
    } finally {
      this.sending.set(false);    // laeuft IMMER (Erfolg wie Fehler)
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
