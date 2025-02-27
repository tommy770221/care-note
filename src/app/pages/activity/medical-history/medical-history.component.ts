import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FireStoreService } from '@services/fire-store.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.scss'
})
export class MedicalHistoryComponent {

  medicalForm: FormGroup;
  diseases = [
    { id: '01', name: '高血壓', controlName: 'hypertension' },
    { id: '02', name: '糖尿病', controlName: 'diabetes' },
    { id: '03', name: '骨骼系統 (關節炎、骨折、骨質疏鬆症)', controlName: 'skeletalSystem' },
    { id: '04', name: '視覺疾病 (白內障、視網膜病變、青光眼或黃斑部退化等)', controlName: 'visionDisorders' },
    { id: '05', name: '腦血管外 (中風)、暫時性腦部缺血（小中風）', controlName: 'cerebrovascular' },
    { id: '06', name: '冠狀動脈病 (如心絞病、心臟衰竭、動脈硬化性心臟病)', controlName: 'coronaryArtery' },
    { id: '07', name: '心房顫動或其他心律障礙', controlName: 'arrhythmia' },
    { id: '08', name: '癌症 (過去五年內)', controlName: 'cancer' },
    { id: '09', name: '慢性肺疾病 (氣喘、慢性肺病、肺阻塞等)', controlName: 'chronicLung' },
    { id: '10', name: '消化系統疾病 (胃、腸、肝、胰)', controlName: 'digestiveSystem' },
    { id: '11', name: '泌尿生殖系統 (慢性腎病、攝護腺肥大、腎衰竭等)', controlName: 'urogenitalSystem' },
    { id: '12', name: '失智症', controlName: 'dementia' },
    { id: '13', name: '精神疾病 (思覺失調症、躁鬱性精神障礙、憂鬱症等)', controlName: 'mentalDisorders' },
    { id: '14', name: '自體免疫疾病', controlName: 'autoimmune' },
    { id: '15', name: '智能不足 (輕度、中度、重度、極重度、其他及非特定智能不足)', controlName: 'intellectualDisability' },
    { id: '16', name: '癲癇', controlName: 'epilepsy' },
    { id: '17', name: '急性全身症', controlName: 'acuteSystemic' },
    { id: '18', name: '骨髓炎', controlName: 'osteomyelitis' },
    { id: '19', name: '運動神經元疾病 (最常見為肌萎縮性脊髓側索硬化症, ALS)', controlName: 'motorNeuron' },
    { id: '20', name: '傳染性疾病 (肺結核、肝炎、性病、愛滋病等)', controlName: 'infectiousDisease' },
    { id: '21', name: '放射性疾病 (過去一個月內)', controlName: 'radiationDisease' },
    { id: '22', name: '罕見疾病', controlName: 'rareDisease' },
    { id: '23', name: '其他', controlName: 'others' },
    { id: '24', name: '腦性麻痺', controlName: 'cerebralPalsy' },
    { id: '25', name: '帕金森氏症', controlName: 'parkinsons' },
    { id: '26', name: '脊髓損傷', controlName: 'spinalCordInjury' },
    { id: '27', name: '自閉症', controlName: 'autism' }
  ];
  newDiseaseName: string = ''; // 用於儲存新增疾病名稱
  nextId: number = 28; // 用於生成新疾病的 ID

  constructor(private fb: FormBuilder,
              private fireStoreService:FireStoreService) {}

  ngOnInit(): void {
    this.medicalForm = this.fb.group({
      hasCondition: [false],
      diseaseRecords: this.fb.array([]) // 用於儲存多個疾病記錄
    });

   // this.onHasConditionChange();
  }

  get diseaseRecords(): FormArray {
    return this.medicalForm.get('diseaseRecords') as FormArray;
  }

  addDiseaseRecord() {
    const diseaseGroup = this.fb.group({
      selectedDisease: [{ value: '', disabled: !this.medicalForm.get('hasCondition')?.value }],
      underTreatment: [{ value: '', disabled: true }],
      onMedication: [{ value: '', disabled: true }],
      diseaseDescription: [{ value: '', disabled: true }],
      medDescription: [{ value: '', disabled: true }]
    });

    this.diseaseRecords.push(diseaseGroup);
    this.setupDiseaseChangeListener(this.diseaseRecords.length - 1);
  }

  removeDiseaseRecord(index: number) {
    this.diseaseRecords.removeAt(index);
  }

  onHasConditionChange() {
    this.medicalForm.get('hasCondition')?.valueChanges.subscribe(value => {
      this.diseaseRecords.controls.forEach(control => {
        if (value) {
          control.get('selectedDisease')?.enable();
        } else {
          control.get('selectedDisease')?.disable();
          control.get('underTreatment')?.disable();
          control.get('onMedication')?.disable();
          control.get('diseaseDescription')?.disable();
          control.get('medDescription')?.disable();
          control.patchValue({
            selectedDisease: '',
            underTreatment: '',
            onMedication: '',
            diseaseDescription: '',
            medDescription: ''
          });
        }
      });
    });
  }

  setupDiseaseChangeListener(index: number) {
    const control = this.diseaseRecords.at(index);
    control.get('selectedDisease')?.valueChanges.subscribe(value => {
      if (value && value !== '') {
        control.get('underTreatment')?.enable();
        control.get('onMedication')?.enable();
        control.get('diseaseDescription')?.enable();
        control.get('medDescription')?.enable();
      } else {
        control.get('underTreatment')?.disable();
        control.get('onMedication')?.disable();
        control.get('diseaseDescription')?.disable();
        control.get('medDescription')?.disable();
        control.patchValue({
          underTreatment: '',
          onMedication: '',
          diseaseDescription: '',
          medDescription: ''
        });
      }
    });
  }

  addNewDisease() {
    if (this.newDiseaseName.trim()) {
      const newControlName = this.newDiseaseName.toLowerCase().replace(/\s+/g, '');
      const newDisease = {
        id: this.nextId.toString().padStart(2, '0'),
        name: this.newDiseaseName,
        controlName: newControlName
      };

      this.diseases.push(newDisease);
      this.nextId++;
      this.newDiseaseName = ''; // 清空輸入框
    }
  }

  onSubmit() {
    this.fireStoreService.saveOne('/medical-historys/JzJtQCPzYYUv9mxRNdb7', this.medicalForm.value);
    console.log(this.medicalForm.value);
  }
}
