import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dementiability-previous-roles',
  templateUrl: './dementiability-previous-roles.component.html',
  styleUrl: './dementiability-previous-roles.component.scss'
})
export class DementiabilityPreviousRolesComponent {

  previousRolesForm: FormGroup;
  pastRoles: string[] = []; // 先前擔任的角色
  currentRoles: string[] = []; // 現在可以獲得的角色
  tasks: string[] = [ // 待辦事項 [1, 2]
    'Put dishes in the dishwasher',
    'Fold laundry',
    'Make lunches',
    'Set the table',
    'Vacuum',
    'Polish silver',
    'Decide what to have for dinner',
    'Grocery shopping – picking things up from the store',
    'Make a bed',
    'Dust furniture',
    'Home repairs',
    'Sorting out drawers',
    'Make coffee',
    'Wash dishes',
    'Cut the lawn/shovel the snow',
    'Cook dinner',
    'Wash floors',
    'Clean the toilet',
    'Clean the sink',
    'Ironing',
    'Lead the meal and/or bedtime prayer',
    'Make lunch',
    'Tidy up the house',
    'Rake the leaves',
    'Put children to bed',
    'Greeting people (e.g. at church/in the dining room)',
    'Handing out hand sanitizer',
    'Cleaning hand rails/knobs',
    'Doing email',
    'Searching internet for information'
  ];
  otherTasks: string[] = []; // 其他事項 [3]

  constructor(private fb: FormBuilder) {
    this.previousRolesForm = this.fb.group({
      name: ['', Validators.required],
      pastRole: [''],
      currentRole: [''],
      newTask: [''],
      otherTask: ['']
    });
  }

  ngOnInit(): void {
  }

  addPastRole(): void {
    const pastRole = this.previousRolesForm.get('pastRole')?.value;
    if (pastRole && !this.pastRoles.includes(pastRole)) {
      this.pastRoles.push(pastRole);
      this.previousRolesForm.get('pastRole')?.setValue('');
    }
  }

  addCurrentRole(): void {
    const currentRole = this.previousRolesForm.get('currentRole')?.value;
    if (currentRole && !this.currentRoles.includes(currentRole)) {
      this.currentRoles.push(currentRole);
      this.previousRolesForm.get('currentRole')?.setValue('');
    }
  }

  addTask(): void {
    const newTask = this.previousRolesForm.get('newTask')?.value;
    if (newTask && !this.tasks.includes(newTask)) {
      this.tasks.push(newTask);
      this.previousRolesForm.get('newTask')?.setValue('');
    }
  }

    addOtherTask(): void {
    const otherTask = this.previousRolesForm.get('otherTask')?.value;
    if (otherTask && !this.otherTasks.includes(otherTask)) {
      this.otherTasks.push(otherTask);
      this.previousRolesForm.get('otherTask')?.setValue('');
    }
  }

  removePastRole(role: string): void {
    this.pastRoles = this.pastRoles.filter(r => r !== role);
  }

  removeCurrentRole(role: string): void {
    this.currentRoles = this.currentRoles.filter(r => r !== role);
  }

  removeTask(task: string): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }

    removeOtherTask(task: string): void {
    this.otherTasks = this.otherTasks.filter(t => t !== task);
  }

  onSubmit(): void {
    // 在此處理表單提交
    console.log(this.previousRolesForm.value);
  }

}
