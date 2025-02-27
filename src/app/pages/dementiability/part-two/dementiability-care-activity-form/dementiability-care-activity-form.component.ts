import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dementiability-care-activity-form',
  templateUrl: './dementiability-care-activity-form.component.html',
  styleUrl: './dementiability-care-activity-form.component.scss'
})
export class DementiabilityCareActivityFormComponent {

  activityForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activityForm = this.fb.group({
      activePrograms: this.fb.array([]),
      cognitivePrograms: this.fb.array([]),
      leisureActivities: this.fb.array([]),
      chorePrograms: this.fb.array([]),
      socialActivities: this.fb.array([])
    });

    this.addInitialActivities();
  }

  get activePrograms(): FormArray {
    return this.activityForm.get('activePrograms') as FormArray;
  }

  get cognitivePrograms(): FormArray {
    return this.activityForm.get('cognitivePrograms') as FormArray;
  }

  get leisureActivities(): FormArray {
    return this.activityForm.get('leisureActivities') as FormArray;
  }

  get chorePrograms(): FormArray {
    return this.activityForm.get('chorePrograms') as FormArray;
  }

  get socialActivities(): FormArray {
    return this.activityForm.get('socialActivities') as FormArray;
  }

  addInitialActivities(): void {
    const activePrograms = [
      'Ball Toss', 'Fun & Fitness', 'Beanbag Toss', 'Twister Toss', 'Balloon Badminton', 'Devotions / Church', 'Movement to Music', 'Parachute Games'
    ];
    const cognitivePrograms = [
      'Memory Bingo', 'Reading Circle', 'Horse Race Game', 'Alphabet Game', 'Flower Arranging', 'Reach for the Colour', 'Shut the Box', 'Steeplechase Dice Game', 'Jack Pot Poker'
    ];
    const leisureActivities = [
      'Collage Creations', 'Painting Class', 'Sort & Match', 'Hidden Treasures', 'Sanding or Painting Wood-blocks', 'Polishing Silver', 'Japanese Gardens', 'Reading'
    ];
    const chorePrograms = [
      'Folding Towels', 'Making Stuffing', 'Utensil Sorting', 'Washing Dishes', 'Sweeping/Vacuuming', 'Laundry', 'Polishing Silver', 'Polishing Shoes', 'Setting Tables', 'Clearing Tables', 'Baking'
    ];
    const socialActivities = [
      'Reminiscing Group', 'Social Visiting Group', 'Java and Jokes', 'Lawrence Welk', 'Cider and Cheese Social', 'Pet Visitation', 'Doll Therapy', 'Tucking a Friend in at Bedtime', 'Reading a Book to A Friend'
    ];

    activePrograms.forEach(program => this.activePrograms.push(new FormControl(program)));
    cognitivePrograms.forEach(program => this.cognitivePrograms.push(new FormControl(program)));
    leisureActivities.forEach(activity => this.leisureActivities.push(new FormControl(activity)));
    chorePrograms.forEach(program => this.chorePrograms.push(new FormControl(program)));
    socialActivities.forEach(activity => this.socialActivities.push(new FormControl(activity)));
  }

  onSubmit(): void {
    console.log(this.activityForm.value);
  }

}
