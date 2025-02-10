import {Component, HostBinding, Input, OnInit} from '@angular/core';


export type VARIANT_TYPES =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

@Component({
    selector: 'app-info-box',
    templateUrl: './info-box.component.html',
    styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
    @Input() loading?: 'dark' | boolean;
    @Input() icon?: {
        content: '';
        variant?: VARIANT_TYPES;
    };
    @Input() variant?: VARIANT_TYPES;
    @Input() title: string = '';
    @Input() text: string = '';
    @Input() progressBar?: {
        description?: string;
        level: number;
        variant?: VARIANT_TYPES;
    };

    iconVariant: string;
    progressBarVariant: string;

    @HostBinding('class') class;

    ngOnInit() {
        this.class = `info-box bg-${this.variant}`;
        if(this.icon){
          this.iconVariant = this.icon.variant;
        }else{
          this.iconVariant = this.variant;
        }
        if(this.progressBar){
          this.progressBarVariant = this.progressBar.variant;
        }else{
          this.progressBarVariant =this.variant;
        }

    }

    public getLoadingPropType(): 'light' | 'dark' {
        return typeof this.loading === 'string' ? this.loading : 'light';
    }
}
