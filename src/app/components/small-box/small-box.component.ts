import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {VARIANT_TYPES} from '@components/info-box/info-box.component';

@Component({
    selector: 'app-small-box',
    templateUrl: './small-box.component.html',
    styleUrls: ['./small-box.component.scss']
})
export class SmallBoxComponent implements OnInit {
    @Input() loading?: 'dark' | boolean;
    @Input() variant: VARIANT_TYPES = 'info';
    @Input() icon?: {content: ''; variant?: VARIANT_TYPES};
    @Input() text: string;
    @Input() title: string;
    @Input() navigateTo: string;
    @HostBinding('class') class;
    @Input() buttonInfo: string;

    ngOnInit(): void {
        this.class = `small-box bg-${this.variant}`;
    }

    public getLoadingPropType(): 'light' | 'dark' {
        return typeof this.loading === 'string' ? this.loading : 'light';
    }
}
