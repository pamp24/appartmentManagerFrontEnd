import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnalyticsComponent } from '../analytics/analytics.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.less'
})
export class ExpensesComponent extends AnalyticsComponent implements OnInit {
  valuesForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    super();
  }

  override ngOnInit(): void {
    this.valuesForm = this.fb.group({
      items: this.fb.array([]),
    });
    this.addItem(); // Add the first item by default
  }

  get items(): FormArray {
    return this.valuesForm.get('items') as FormArray;
  }

  addItem(): void {
    const itemGroup = this.fb.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      value: [0, [Validators.required, Validators.min(1)]],
    });
    this.items.push(itemGroup);
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  onUpload(index: number): void {
    // Implement the logic for uploading a file
    console.log(`Το αρχείο Ανέβηκε: ${index}`);
  }

  onSubmit(): void {
    if (this.valuesForm.valid) {
      console.log('Καταχωρήθηκε', this.valuesForm.value);
    } else {
      console.log('Μη έγκυρη φόρμα');
    }
  }
}