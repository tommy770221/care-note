import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-caregiver-responsibility',
  templateUrl: './caregiver-responsibility.component.html',
  styleUrl: './caregiver-responsibility.component.scss'
})
export class CaregiverResponsibilityComponent {
  responsibilitiesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.responsibilitiesForm = this.fb.group({
      dressingHygiene: this.fb.array([]),
      eatingProperly: this.fb.array([]),
      helpGetAround: this.fb.array([]),
      companionship: this.fb.array([]),
      lightHousework: this.fb.array([]),
      medicineManagement: this.fb.array([]),
      communicateWithFamily: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadResponsibilities();
  }

  dressingHygiene(): FormArray {
    return this.responsibilitiesForm.get("dressingHygiene") as FormArray;
  }

  eatingProperly(): FormArray {
    return this.responsibilitiesForm.get("eatingProperly") as FormArray;
  }

  helpGetAround(): FormArray {
    return this.responsibilitiesForm.get("helpGetAround") as FormArray;
  }

  companionship(): FormArray {
    return this.responsibilitiesForm.get("companionship") as FormArray;
  }

  lightHousework(): FormArray {
    return this.responsibilitiesForm.get("lightHousework") as FormArray;
    }

  medicineManagement(): FormArray {
    return this.responsibilitiesForm.get("medicineManagement") as FormArray;
  }

  communicateWithFamily(): FormArray {
    return this.responsibilitiesForm.get("communicateWithFamily") as FormArray;
  }

  newResponsibility(description: string): FormGroup {
    return this.fb.group({
      description: [description, Validators.required],
      completed: [false]
    });
  }

  addResponsibility(formArray: FormArray, description: string) {
    formArray.push(this.newResponsibility(description));
  }

  loadResponsibilities() {
    // Dressing & Personal Hygiene
    this.addResponsibility(this.dressingHygiene(), 'Bath/Shower Assistance');
    this.addResponsibility(this.dressingHygiene(), 'Lotion Applied As Needed');
    this.addResponsibility(this.dressingHygiene(), 'Teeth Brushing & Dental Appliance Cleaning');
    this.addResponsibility(this.dressingHygiene(), 'Shaving & Hair Trimming');
    this.addResponsibility(this.dressingHygiene(), 'Brushing/Styling Hair');
    this.addResponsibility(this.dressingHygiene(), 'Makeup Application & Removal');
    this.addResponsibility(this.dressingHygiene(), 'Finger & Toenail Care');
    this.addResponsibility(this.dressingHygiene(), 'Pick Out Clothes & Dress');
    this.addResponsibility(this.dressingHygiene(), 'Toileting Assistance');
    this.addResponsibility(this.dressingHygiene(), 'Monitor & Change Incontinence Undergarments & Medical Devices');
    this.addResponsibility(this.dressingHygiene(), 'Change Soiled Clothing If Needed');

    // Eating Properly
    this.addResponsibility(this.eatingProperly(), 'Help With Or Do Grocery Shopping');
    this.addResponsibility(this.eatingProperly(), 'Prepare Meals & Snacks');
    this.addResponsibility(this.eatingProperly(), 'Assist With Eating');
    this.addResponsibility(this.eatingProperly(), 'Ensure Proper Daily Fluid Intake');

    // Help Get Around
    this.addResponsibility(this.helpGetAround(), 'Take To Doctor\'s Office, Grocery, Activities');
    this.addResponsibility(this.helpGetAround(), 'Transport To Social Activities, Church, Etc..');

    // Companionship
    this.addResponsibility(this.companionship(), 'Listen, Play Games, Watch TV, Read, Etc...');
    this.addResponsibility(this.companionship(), 'Encourage Others To Visit');

    // Light Housework
    this.addResponsibility(this.lightHousework(), 'Clean Kitchen After Food Prep');
    this.addResponsibility(this.lightHousework(), 'Vacuum/Mop Up Spills');
    this.addResponsibility(this.lightHousework(), 'Wash Dishes & Run Dishwasher');
    this.addResponsibility(this.lightHousework(), 'Do Laundry & Put Away Clothes');
    this.addResponsibility(this.lightHousework(), 'Take Out Trash');
    this.addResponsibility(this.lightHousework(), 'Make & Change Bed As Needed');
    this.addResponsibility(this.lightHousework(), 'Wipe Down Bathroom Sink & Shower');
    this.addResponsibility(this.lightHousework(), 'Retrieve Mail & Help With Bill Paying');
    this.addResponsibility(this.lightHousework(), 'Maintain File Of Receipts For Records');

    // Medicine & Medical Plan Management
    this.addResponsibility(this.medicineManagement(), 'Remind & Aid in Taking Medicine');
    this.addResponsibility(this.medicineManagement(), 'Refill & Sort/Organize Pills');
    this.addResponsibility(this.medicineManagement(), 'Monitor & Keep Record of Blood Pressure, Blood Sugar Readings, Etc..');
    this.addResponsibility(this.medicineManagement(), 'Assist With Home Exercises Prescribed By Medical Team');
    this.addResponsibility(this.medicineManagement(), 'Attend Medical Appointments & Provide Updates to Doctors & Nurses');

    // Communicate With Family
    this.addResponsibility(this.communicateWithFamily(), 'Update Family Members On Health & Behavior Changes');
    this.addResponsibility(this.communicateWithFamily(), 'Alert Family About Upcoming Doctor\'s Appointments & Outcomes');
  }

  onSubmit() {
    console.log(this.responsibilitiesForm.value);
  }
}
