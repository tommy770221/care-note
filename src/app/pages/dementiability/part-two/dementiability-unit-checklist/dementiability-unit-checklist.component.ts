import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-unit-checklist',
  templateUrl: './dementiability-unit-checklist.component.html',
  styleUrl: './dementiability-unit-checklist.component.scss'
})
export class DementiabilityUnitChecklistComponent {
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
        area: 'Noise and Sounds on Unit are Managed',
        description: 'Noise from televisions, music players and staff routines are controlled.',
      },
      {
        area: 'Noise and Sounds on Unit are Managed',
        description: 'Overhead paging systems are discouraged for gaining attention of individuals.',
      },
      {
        area: 'Noise and Sounds on Unit are Managed',
        description: 'Paging systems may be used to play music before meals.',
      },
      {
        area: 'Noise and Sounds on Unit are Managed',
        description: 'Staff is aware of noise stimulation and when noise level is high staff work to actively reduce noise through dispersal of people, reducing use of some electronic equipment and managing personal call bell alarms in a timely manner.',
      },
      {
        area: 'Noise and Sounds on Unit are Managed',
        description: 'Staff assists residents who desire quiet, private spaces by moving them to appropriate locations.',
      },
      {
        area: 'Noise and Sounds on Unit are Managed',
        description: 'Unit work/staff stations provide clear sightlines for staff and afford the ability to hear resident interactions.',
      },
      {
        area: 'Noise and Sounds on Unit are Managed',
        description: 'Staff discuss the possibility of playing a song before meals to remind residents that it is time to get ready to eat.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Dining rooms hold the smells of foods that stimulate the appetite (prior to meals) and add to the “feel of home”.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'When possible, meals are prepared on the unit. If this is not possible, due to the age of the building, senses are stimulated using such things as a crock pot (e.g. – filled with apple juice and cinnamon or onions and garlic) and/or a bread maker and/or a coffee pot that fills the air with the smell of coffee brewing.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Dining rooms are well lit.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Windows have coverings that are familiar and add to the "look and feel" of home.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'A resident who is able to set the table – with necessary cueing - places tablecloths and utensils on the tables.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Clothing protectors look like clothing, not a bib.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Name plates (e.g. – small upright photo frames) are positioned on dining tables, which hold the name of each resident assisting with location identification (for residents to independently find their place) and for the purpose of facilitating social connections.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Residents fold face cloths, dietary staff warms them with water and a resident hands them out, with tongs, at the end of each meal.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Foods are displayed on plates in a way that appeals to the senses - with colour and textures that stimulate the appetite.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Residents are given a choice between at least 2 meal choices.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'When possible, residents serve themselves.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Residents, who are able, prepare their own food to eat, i.e. - cut own meat, butter own bread.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Dining tables and seating arrangements encourage residents to converse.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Gratitude rituals are practiced prior to meals by those who express interest (e.g. – saying grace).',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Activities such as “Work It” sheets, colouring sheets or books are available to those who would benefit from having something to do while they wait for meals.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Residents and staff are encouraged to wear nametags that can be clearly seen.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Intervention aides such as, “Paid in full” receipts, “Free Meals Today" or meal tickets are available and utilized as needed.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Residents are not rushed during mealtime.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Independence is encouraged through priming, coaching and hand over hand assistance, helping individuals to feed self independently.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Staff engages with residents at mealtimes.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Residents may eat breakfast in their pajamas if they wish.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Flexible dining times are offered at breakfast, so late sleepers can enjoy a later breakfast.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Snacks and beverages are accessible (on the unit) between meals.',
      },
      {
        area: 'Dining rooms promote ability and connectedness',
        description: 'Snacks and beverages are available to families when they come to visit, creating the feel of home.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Resident\'s name, photo (both past and present) and room numbers are clearly presented in their sight line on the door of their room.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Personal identifiers are displayed in a shadow box, and labeled accordingly.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Wayfinding is used to assist residents with finding their rooms.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Resident\'s room is set up as a cozy homelike personal space with pictures furnishings and personal artifacts displayed.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'A side table is available for use in independent activity.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'A comfortable chair is available for the resident and visitor.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Brightly coloured bedspread and extra blankets are available.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Lights are on during the daytime as needed.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Curtains add to the look and feel of home.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Curtains are open during the daytime, and glare from sun diffused with window coverings that let in light.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'A memory book and/or All About Me document is available to assist in personal memory recall, and is used by both resident and staff.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Posters, pictures and collages are hung to aid staff in knowing the person.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Cupboards and drawers are labeled with words and/or pictures identifying what is inside.',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Instructions/Details about what should be taken from drawers and cupboards are provided (e.g. take one pair of pants, take one pair of socks).',
      },
      {
        area: 'Resident rooms are homelike',
        description: 'Instructions for completing personal tasks are provided as needed and staff knows how to put them into practice (e.g - sit, put on underwear, put on pants, etc.).',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Activity tables are available in the home area/unit with a wide range of opportunities to enable meaningful engagement in the activities that are available and accessible for diverse interests and all levels of ability.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'All staff assumes the responsibility of taking residents to the activities that are available and accessible. (Staff act as the "Starter Button".)',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Furniture is arranged to encourage residents to join in activities.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Activities are consistently set up so that residents are able to recognize each designated area as an activity area.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Recreation staff creates the activities, with ideas and the input of the team.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Activities and resources required for completed roles are available and accessible in cupboards and bins that are labeled with words and/or images.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'A binder that holds a completed “Interests” forms is referenced by all staff to ensure that activities are connected to interests.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Staff knows who will put activities on tables each day and who will put them out ready for the morning and who will put them away at night.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Plants and animals (unit pet) enhance the area and make it more homelike.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Common spaces are clean, tidy and free of odour.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Common spaces have bright colours that stimulate the senses.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Pillows, decorations and knickknacks enhance the homelike appearance of common spaces.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Activities are present and available for residents to discover and to use in independently for leisure enjoyment.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Residents produce pieces of art that are used in their rooms and common spaces.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Themed areas are available (such as a nursery with laundry to fold and a “baby” to hold or a desk with office activities to enjoy).',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Staff disperses residents to various public and private areas, where activities are available, after care (staff do not deposit residents in one common area).',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'The WOW sheets inform staff of the needs, interests and abilities of each resident to guide decisions about what activities would be well suited for each resident.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Roles are created for each resident according to needs, skills, interests and abilities.',
      },
      {
        area: 'Public areas and common spaces promote activity',
        description: 'Routines are created based on needs, habits from the past, interests and abilities.',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Interactive themes areas are designed for discovery and activity.',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Men\'s Garage / Shop Room',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Kitchen area for washing dishes and assisting with food preparation',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Baby /doll nursery for nurturing',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Office area for occupational activity',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Hand massage station for residents to give massages to residents and staff',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Vintage kitchen and dining area',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Laundry room for household chores',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Barbershop',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Hair boutique (where residents brush and care for another resident\'s hair)',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Garden, clothesline area or an old vehicle for outdoor activity',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Sewing area',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Library area for quiet reading and thinking',
      },
      {
        area: 'Interactive / Themed Areas',
        description: 'Spiritual / religious area with props for quiet contemplation and prayer / rituals',
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
