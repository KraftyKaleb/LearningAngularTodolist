import {Component} from '@angular/core';
import {Task} from "../../Task";
import {TaskService} from "../../services/task.service";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {
    constructor(private taskService: TaskService) {
    }

    tasks: Task[] = [];

    ngOnInit(): void {
        this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    }

}
