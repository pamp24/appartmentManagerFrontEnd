import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For ngModel in the form

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.less']
})
export class SupportComponent {
  // FAQs
  faqs = [
    { question: 'Πως μπορώ να πληρώσω τα κοινόχρηστα μου?', answer: 'Μπορείτε να εκτελέσετε την πληρωμή από το Dashboard', open: false },
    { question: 'Τι πρέπει να κάνω αν αντιμετωπίσω κάποιο πρόβλημα με την πληρωμή?', answer: 'Παρακαλώ επικοινωνήστε μαζί μας, μέσω της φόρμας παρακάτω.', open: false },
    { question: 'Πως μπορώ να κατεβάσω την αποδείξη πληρωμής μου?', answer: 'Όλες οι αποδείξεις αποθηκεύονται στο Ιστορικό.', open: false },
  ];

  // Support form model
  supportForm = {
    name: '',
    email: '',
    message: ''
  };

  // Submit support request
  submitSupportRequest() {
    console.log('Support request submitted:', this.supportForm);
    alert('Your support request has been submitted!');
    this.supportForm = { name: '', email: '', message: '' }; // Reset the form
  }

  // Toggle FAQ visibility
  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
