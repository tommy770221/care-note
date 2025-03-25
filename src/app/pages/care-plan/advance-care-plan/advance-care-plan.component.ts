import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-advance-care-plan',
  templateUrl: './advance-care-plan.component.html',
  styleUrl: './advance-care-plan.component.scss'
})
export class AdvanceCarePlanComponent {
  carePlanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.carePlanForm = this.fb.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      emergencyContacts: this.fb.array([this.createEmergencyContact()], Validators.required),
      agents: this.fb.array([this.createAgent()], Validators.required),
      lifeSupport: ['', Validators.required],
      painManagement: ['', Validators.required],
      physicalPreferences: this.fb.group({
        diet: [''],
        hygiene: [''],
        comfort: ['']
      }),
      emotionalSocial: this.fb.group({
        emotionalSupport: [''],
        socialInteraction: ['']
      }),
      spiritualNeeds: this.fb.group({
        faithRituals: [''],
        peace: ['']
      }),
      location: ['', Validators.required]
    });
  }

  ngOnInit() {
    const savedPlan = localStorage.getItem('carePlan');
    if (savedPlan) {
      this.carePlanForm.patchValue(JSON.parse(savedPlan));
    }
  }

  // Getter for emergencyContacts FormArray
  get emergencyContacts() {
    return this.carePlanForm.get('emergencyContacts') as FormArray;
  }

  // Getter for agents FormArray
  get agents() {
    return this.carePlanForm.get('agents') as FormArray;
  }

  createEmergencyContact(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  createAgent(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      relation: ['', Validators.required],
      contact: ['', Validators.required]
    });
  }

  addEmergencyContact() {
    this.emergencyContacts.push(this.createEmergencyContact());
  }

  removeEmergencyContact(index: number) {
    if (this.emergencyContacts.length > 1) {
      this.emergencyContacts.removeAt(index);
    }
  }

  addAgent() {
    this.agents.push(this.createAgent());
  }

  removeAgent(index: number) {
    if (this.agents.length > 1) {
      this.agents.removeAt(index);
    }
  }

  formErrors(field: string): boolean {
    const control = this.carePlanForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  formArrayErrors(arrayName: string, index: number, field: string): boolean {
    const control = (this.carePlanForm.get(arrayName) as FormArray).at(index).get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  onSubmit() {
    if (this.carePlanForm.valid) {
      console.log('提交的預立照顧計畫:', this.carePlanForm.value);
      localStorage.setItem('carePlan', JSON.stringify(this.carePlanForm.value));
      alert('計畫已提交並儲存至本地！請檢查控制台以查看詳細資料。');
    }
  }
}
