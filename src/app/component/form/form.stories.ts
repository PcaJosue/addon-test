import { ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata } from '@storybook/angular';
import { FormComponent } from './form.component'
export default {
    title: 'Form',
    component: FormComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule],
            providers: [],
            declarations: [
                FormComponent
            ]
        }),
    ],
} as Meta;

export const basic = () => ({
    component: FormComponent,
    props: {
        addon: null
    }
});