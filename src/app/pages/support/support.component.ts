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
    { question: 'How can I pay my utility bills?', answer: 'You can pay through the Payments section.', open: false },
    { question: 'What should I do if I encounter a technical issue?', answer: 'Please contact support through the form below.', open: false },
    { question: 'Can I download my payment receipts?', answer: 'Yes, receipts are available in the Payments section.', open: false },
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
