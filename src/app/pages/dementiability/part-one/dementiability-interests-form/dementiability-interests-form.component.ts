import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dementiability-interests-form',
  templateUrl: './dementiability-interests-form.component.html',
  styleUrl: './dementiability-interests-form.component.scss'
})
export class DementiabilityInterestsFormComponent {
  interestsForm: FormGroup;
  interestsList = [
    '園藝', '玩牌', '烹飪', '烘焙', '動物', '兒童', '志願服務', '幫助他人',
    '聽音樂 (什麼類型？)', '閱讀 (他/她喜歡閱讀什麼？)', '游泳', '瀏覽網路', '瑜珈',
    '手工藝 (最喜歡的類型？)', '跳舞 (最喜歡的類型？)', '木工 (什麼類型的專案？)', '大自然 (具體說明)',
    '收藏 (郵票、硬幣等)', '看電影 (什麼類型？)', '旅行 (最喜歡的目的地？)', '釣魚',
    '編織 (基礎/進階？)', '曲棍球 (打球或觀看)', '保齡球', '計畫派對', '參加派對',
    '外太空/天文學', '剪貼簿', '營養與健康', '品酒', '攝影', '演奏樂器 (吉他、鋼琴等)',
    '露營', '騎摩托車', '鍛鍊 (具體說明)', '高爾夫', '時尚 (髮型和化妝)',
    '購物 (為了什麼？)', '名人新聞', '賓果遊戲', '喜劇 (詳細說明)', '去小屋',
    '去劇院', '在戲劇中表演', '健行', '拼圖', '繪畫 (什麼類型？)', '創意藝術 (詳細說明)',
    '寫作 (他/她喜歡寫什麼？)', '賞鳥', '學習新事物', '保持我的大腦活躍', '講電話',
    '發電子郵件', '在電腦上瀏覽', '使用平板電腦/iPad 等', '傳送簡訊', '冷知識', '唱歌'
  ];

  constructor(private fb: FormBuilder) {
    this.interestsForm = this.fb.group({});
    this.interestsList.forEach(interest => {
      this.interestsForm.addControl(`past_${this.sanitizeName(interest)}`, this.fb.control(false));
      this.interestsForm.addControl(`present_${this.sanitizeName(interest)}`, this.fb.control(false));
      this.interestsForm.addControl(`notes_${this.sanitizeName(interest)}`, this.fb.control(''));
    });
  }

  ngOnInit(): void {
  }

  sanitizeName(name: string): string {
    return name.replace(/[^a-zA-Z0-9]/g, '_');
  }

  onSubmit() {
    console.log(this.interestsForm.value);
  }
}
