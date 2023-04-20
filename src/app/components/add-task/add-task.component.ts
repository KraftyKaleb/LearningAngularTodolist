import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ height: '*' }),
                animate(250, style({ height: 0 }))
            ]),
            transition(':leave', [
                animate('100ms', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class AddTaskComponent {
    @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

    text!: string;
    day!: string;
    reminder: boolean = false;
    showAddTask!: boolean;
    subscription!: Subscription;

    constructor(private uiService: UiService) {
        this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value));
    }

    onSubmit() {
        if (!this.text) {
            alert("Please add a task!")
            return;
        }

        const newTask = {
            text: this.text,
            day: this.day,
            reminder: this.reminder
        }

        this.onAddTask.emit(newTask);

        this.text = '';
        this.day = '';
        this.reminder = false;
    }
}
