import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata } from '@storybook/angular';
import { AddonComponent } from './addon.component';


export default {
    title: 'Addon',
    component: AddonComponent,
    decorators: [
        moduleMetadata({
            imports: [],
            providers: [],
            declarations: [
                AddonComponent
            ]
        }),
    ],
} as Meta;



export const angle = () => ({
    component: AddonComponent,
    props: {
        addon: {
            author: 'Josue Pacheco',
            characteristics: [{
                label: 'angle',
                maxLabel: 'Directly above',
                medLabel: '',
                icon: 'angle',
                minLabel: 'Front on',
                value: {
                    min: 0,
                    max: 100
                }
            }],

            id: 'adf-asdf-asdf-as',
            name: 'Angle abc'
        }
    },
});
export const distance = () => ({
    component: AddonComponent,
    props: {
        addon: {
            author: 'Josue Pacheco',
            characteristics: [{
                label: 'distance',
                maxLabel: 'Long distance',
                medLabel: 'City block',
                icon: 'distance',
                minLabel: 'Face-to-face',
                value: {
                    min: 0,
                    max: 100
                }
            }],

            id: 'adf-asdf-asdf-as',
            name: 'Distance abc'
        }
    },
});
export const lighting = () => ({
    component: AddonComponent,
    props: {
        addon: {
            author: 'Josue Pacheco',
            characteristics: [{
                label: 'lighting',
                maxLabel: 'Night',
                medLabel: 'Shadowy',
                minLabel: 'Daytime',
                icon: 'lighting',
                value: {
                    min: 0,
                    max: 100
                }
            }],

            id: 'adf-asdf-asdf-as',
            name: 'lighting abc'
        }
    },
});
export const visibility = () => ({
    component: AddonComponent,
    props: {
        addon: {
            author: 'Josue Pacheco',
            characteristics: [{
                label: 'visibility',
                maxLabel: 'Crowded',
                medLabel: 'Some groups',
                minLabel: 'Clear scene',
                icon: 'visibility',
                value: {
                    min: 0,
                    max: 100
                }
            }],

            id: 'adf-asdf-asdf-as',
            name: 'visibility abc'
        }
    },
});