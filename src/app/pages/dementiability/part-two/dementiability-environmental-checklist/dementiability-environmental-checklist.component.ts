import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-environmental-checklist',
  templateUrl: './dementiability-environmental-checklist.component.html',
  styleUrl: './dementiability-environmental-checklist.component.scss'
})
export class DementiabilityEnvironmentalChecklistComponent {
  checklistForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checklistForm = this.fb.group({
      checklistItems: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadChecklistItems();
  }

  checklistItems(): FormArray {
    return this.checklistForm.get("checklistItems") as FormArray
  }

  newItem(): FormGroup {
    return this.fb.group({
      area: ['', Validators.required],
      description: ['', Validators.required],
      complete: [false],
      targetDate: [''],
      responsible: [''],
      needsToBeDone: [''],
      dateCompleted: ['']
    })
  }

  addItem() {
    this.checklistItems().push(this.newItem());
  }

  removeItem(i: number) {
    this.checklistItems().removeAt(i);
  }

  onSubmit() {
    console.log(this.checklistForm.value);
  }

  loadChecklistItems() {
    const items = [
      {
        area: 'Rooms look like their purpose',
        description: 'The family "Welcome” package includes a request for families to decorate the resident\'s room to look like home.',
      },
      {
        area: 'Rooms look like their purpose',
        description: 'Bedrooms look like a bedroom with living space, personal belongings, pictures and comfortable seating.',
      },
      {
        area: 'Rooms look like their purpose',
        description: 'Washrooms and toileting areas look like their purpose, and hold the look and feel of home, with memory supports to trigger independence.',
      },
      {
        area: 'Rooms look like their purpose',
        description: 'Dining areas look like a place one would want to enjoy the dining experience.',
      },
      {
        area: 'Rooms look like their purpose',
        description: 'Living spaces look and feel like home and are arranged to connect people comfortably, with sufficient lighting and without unnecessary background noise.',
      },
      {
        area: 'Rooms look like their purpose',
        description: 'Themed areas connect to the population residing in the home area/unit.',
      },
      {
        area: 'Navigational Wayfinding and Visual Cues',
        description: 'Directional signs are posted at eyelevel.',
      },
      {
        area: 'Navigational Wayfinding and Visual Cues',
        description: 'Directional signs point the way to the common spaces.',
      },
      {
        area: 'Navigational Wayfinding and Visual Cues',
        description: 'Picture signs/images are used in conjunction with words.',
      },
      {
        area: 'Navigational Wayfinding and Visual Cues',
        description: 'Resident\'s rooms are clearly marked, in their line of vision, with their names, photo (past and present) and/or a door decoration visible and recognizable to resident.',
      },
      {
        area: 'Navigational Wayfinding and Visual Cues',
        description: 'Each resident\'s room has signs on closets and drawers prompting action based on cueing.',
      },
      {
        area: 'Navigational Wayfinding and Visual Cues',
        description: 'Residents\' rooms have cues that assist with supporting independence related to completion of tasks.',
      },
      {
        area: 'Prepared Environment - Fostering Independence',
        description: 'Public and private bathroom doors are clearly identified with a picture/sign.',
      },
      {
        area: 'Prepared Environment - Fostering Independence',
        description: 'Signs on doors are person-centred.',
      },
      {
        area: 'Prepared Environment - Fostering Independence',
        description: 'Staff facilitate the use of personal agendas / schedules.',
      },
      {
        area: 'Prepared Environment - Fostering Independence',
        description: '"Today\'s Schedule” and/or large numbered calendars are posted in each resident\'s room.',
      },
      {
        area: 'Lighting is Managed',
        description: 'Light is bright enough for residents to see.',
      },
      {
        area: 'Lighting is Managed',
        description: 'Hallways, public and private rooms are well lit during waking hours.',
      },
      {
        area: 'Lighting is Managed',
        description: 'Curtains are pulled open in public and private rooms during daylight hours (lace curtain should be avoided).',
      },
      {
        area: 'Lighting is Managed',
        description: 'Blinds are used to diffuse brightness from outside when required.',
      },
      {
        area: 'Lighting is Managed',
        description: 'Light switches have visual cues to “Turn lights on”.',
      },
      {
        area: 'Lighting is Managed',
        description: 'Light switches have a sign above the switch that says “On” and one below that says “Off”.',
      },
      {
        area: 'Lighting is Managed',
        description: 'Glare is managed with “satin or matte” finishes on surfaces like tables and floors and pictures are on canvas rather than ones framed in glass.',
      },
      {
        area: 'Lighting is Managed',
        description: 'Lights are dimmed at bedtime as a cue of nightfall, with adequate lighting for finding toilet.',
      },
      {
        area: 'Lighting is Managed',
        description: 'Area has natural light and outdoor views.',
      },
      {
        area: 'Lighting is Managed',
        description: 'Private living spaces have windows.',
      },
      {
        area: 'Lighting is Managed',
        description: 'All common spaces (dining and living spaces) have windows.',
      },
      {
        area: 'Functional Environment Accommodates Deficits',
        description: 'There is visible contrast in colour between floors and walls and walls and handrails.',
      },
      {
        area: 'Functional Environment Accommodates Deficits',
        description: 'There is a visible contrast in colours of important cues.',
      },
      {
        area: 'Functional Environment Accommodates Deficits',
        description: 'Chair seats contrast to floor colour to enhance depth perception.',
      },
      {
        area: 'Functional Environment Accommodates Deficits',
        description: 'Colourful bedspreads are used for personal room identification.',
      },
      {
        area: 'Functional Environment Accommodates Deficits',
        description: 'Halls are free from the clutter of carts, lifts and unused mobility equipment and soiled laundry.',
      },
      {
        area: 'Functional Environment Accommodates Deficits',
        description: 'Rest areas with comfortable chairs and end tables are placed along walking paths with things to do on tables.',
      },
      {
        area: 'Functional Environment Accommodates Deficits',
        description: 'Lounges are arranged with chairs and couches facing each other or angled to encourage conversation and interaction.',
      },
      {
        area: 'Functional Environment Accommodates Deficits',
        description: 'End tables with lamps are used to light corners and encourage reading and socializing.',
      },
      {
        area: 'Entrances, Exits and Hallways',
        description: 'Welcome signs, plants, flowers and seating areas enhance the homelike entrance.',
      },
      {
        area: 'Entrances, Exits and Hallways',
        description: 'Halls have pictures with non-glare glass and points of interest to engage residents.',
      },
      {
        area: 'Entrances, Exits and Hallways',
        description: 'Name badges are available for visitors to fill out and use upon entry to home/unit.',
      },
      {
        area: 'Entrances, Exits and Hallways',
        description: 'In each home area/unit, staff and visitors use alternate entrances/exits, if available.',
      },
      {
        area: 'Entrances, Exits and Hallways',
        description: 'Exits are disguised with murals or painted the same colour as the surrounding walls.',
      },
      {
        area: 'Entrances, Exits and Hallways',
        description: 'Outdoor entrances and exits are clearly marked and visible to those who will use them.',
      },
      {
        area: 'Entrances, Exits and Hallways',
        description: 'Outdoor gates are disguised.',
      },
      {
        area: 'Entrances, Exits and Hallways',
        description: 'Staff enters and exits the unit/home area without wearing coats or carrying bags.',
      },
      {
        area: 'Entrances, Exits and Hallways',
        description: 'Residents are encouraged to spend time off of the unit with the companionship of staff, volunteers or family.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'All bathroom doors are clearly identified with pictures and/or signage.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Bathing areas have a sign, or signs, that indicates the purpose of the room.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Toileting areas are clearly marked with words and/or clear images.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Lights are turned on in the bathrooms and shower areas before the person enters.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Staff uniforms are professional and reinforce that they are the health care worker.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Name badges are worn to identify staff and role.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Staff offers residents choices re preference for shower or bath.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Staff is compassionate and understanding of the personal nature of a resident unclothing in front of another person.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'When using bathing lifts staff ensure residents that they are safe and are there to help.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Knowing that depth perception is a problem for many residents, the bottom of the bathtub is coloured/painted or a bright colour towel, with weights on the corners, is placed on the bottom of the tub and resident it told it is there for comfort.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Staff encourages residents to participate in personal care tasks breaking down tasks as per abilities of the individual.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'When resident is unable to participate in personal care during a bath, resident is offered something to look at (laminated pictures or stories) as per the needs and preferences of the resident.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'A book with bathing preferences is in the bathing area for staff to discover needs, wants and preferences of each resident.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Bathing areas look warm and inviting, cozy and homelike.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Curtains offer privacy and make the large rooms/bathing areas appear smaller.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Colourful, plush towels are hung to create a homelike area.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Towels that will be used by residents are soft and comforting when touching skin.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Pictures or a mural representative of a bath environment reinforce the homelike feeling and connect to the purpose of the location.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'Industrial tubs or showers may have a large electronic display and a number of buttons; this area is covered with waterproof, washable fabric using Velcro, enabling easy cleaning.',
      },
      {
        area: 'Bathrooms Promote Independence',
        description: 'A bench or other comfortable/safe seat, with grab rail, in the shower area enables independence.',
      },
      {
        area: 'Toileting is Connected to Words and Images of Toilet',
        description: 'Toilet seat colour contrasts the toilet bowl and floor.',
      },
      {
        area: 'Toileting is Connected to Words and Images of Toilet',
        description: 'Places where people go to the toilet are called a “Toilet” (not a washroom).',
      },
      {
        area: 'Toileting is Connected to Words and Images of Toilet',
        description: 'Memory cues are positioned by the toilet, in images and/or words.',
      },
      {
        area: 'Toileting is Connected to Words and Images of Toilet',
        description: 'Staff are respectful of the personal nature of the toileting experience.',
      },
      {
        area: 'Toileting is Connected to Words and Images of Toilet',
        description: 'Memory cues for washing hands are positioned by the sink.',
      },
      {
        area: 'Toileting is Connected to Words and Images of Toilet',
        description: 'A sign on the door that says, “Exit when finished” is placed on the back of the door/where it can be clearly seen when the person is ready to exit.',
      },
      {
        area: 'Toileting is Connected to Words and Images of Toilet',
        description: 'Visual cue cards within sight lines lead residents through the steps for toileting and hand washing.',
      },
      {
        area: 'Toileting is Connected to Words and Images of Toilet',
        description: 'A policy is adopted requiring cueing to be posted for all residents.',
      },
      {
        area: 'Toileting is Connected to Words and Images of Toilet',
        description: 'Grab bars are visible and within reach.',
      }
    ];

    items.forEach(() => {
      this.addItem();
    });

    this.checklistForm.patchValue({
      checklistItems: items
    });
  }
}
