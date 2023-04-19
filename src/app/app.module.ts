import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ButtonComponent} from './components/button/button.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {TaskItemComponent} from './components/task-item/task-item.component';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {ToggleButtonModule} from "primeng/togglebutton";
import {TableComponent} from './components/table/table.component';
import {RouterModule, Routes} from "@angular/router";
import {TableModule} from "primeng/table";

const appRoutes: Routes = [
    {path: '', component: TasksComponent},
    {path: 'table', component: TableComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ButtonComponent,
        TasksComponent,
        TaskItemComponent,
        AddTaskComponent,
        TableComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        ToggleButtonModule,
        RouterModule.forRoot(appRoutes),
        TableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
