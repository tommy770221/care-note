import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-caregiver-checklist',
  templateUrl: './caregiver-checklist.component.html',
  styleUrl: './caregiver-checklist.component.scss'
})
export class CaregiverChecklistComponent {
  checklistForm: FormGroup;
  tasks = [
    'Bathing',
    'Going to the Bathroom',
    'Grooming',
    'Dressing',
    'Eating',
    'Medication Management',
    'Transportation',
    'Nursing Care',
    'Physical therapy',
    'Occupational therapy',
    'Monitoring vitals',
    'Scheduling Appointments',
    'Making the bed',
    'Changing bed linens',
    'Cleaning bathroom',
    'Cleaning kitchen',
    'Taking out the trash',
    'Doing Laundry',
    'Vacuuming/Cleaning',
    'Yardwork',
    'Prepare list',
    'Running errands',
    'Buying supplies',
    'Storing food',
    'Planning a menu',
    'Preparing meals',
    'Transportation',
    'Games',
    'Outdoor activity',
    'Reading aloud',
    'Communication',
    'Pay bills',
    'Managing finances',
    'Meetings'
  ];

  constructor(private fb: FormBuilder) {
    this.checklistForm = this.fb.group({
      caregiverTasks: this.fb.array([]),
      patientTasks: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  caregiverTasks(): FormArray {
    return this.checklistForm.get("caregiverTasks") as FormArray
  }

  patientTasks(): FormArray {
    return this.checklistForm.get("patientTasks") as FormArray
  }

  newTask(): FormGroup {
    return this.fb.group({
      task: ['', Validators.required],
      assistanceRequired: [false],
      notes: ['']
    })
  }

  addTask(formArray: FormArray) {
    formArray.push(this.newTask());
  }

  removeTask(formArray: FormArray, i: number) {
    formArray.removeAt(i);
  }

  loadTasks() {
    this.tasks.forEach(task => {
      const caregiverTask = this.newTask();
      caregiverTask.patchValue({ task: task });
      this.caregiverTasks().push(caregiverTask);

      const patientTask = this.newTask();
      patientTask.patchValue({ task: task });
      this.patientTasks().push(patientTask);
    });
  }

  onSubmit() {
    console.log(this.checklistForm.value);
  }
}
