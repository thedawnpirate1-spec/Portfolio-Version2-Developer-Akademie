import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Reveal } from '../../shared/reveal';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  // true, sobald abgeschickt wurde (zeigt die Danke-Meldung).
  readonly sent = signal(false);

  // Reactive Form: jedes Feld hat Validierungsregeln. Der "Say hello"-Button
  // ist erst aktiv, wenn das ganze Formular gueltig ist (inkl. Privacy-Haken).
  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue], // requiredTrue = Haken Pflicht
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();   // zeigt alle Fehlermeldungen
      return;
    }
    const { name, email, message } = this.form.getRawValue();
    // Ohne Backend: das Mailprogramm mit vorausgefuellter Nachricht oeffnen.
    const subject = encodeURIComponent(`Portfolio-Kontakt von ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}
