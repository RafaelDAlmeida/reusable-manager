import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { ChatComponent, NotificationComponent, TimelineComponent } from './components';
import {MatCardModule} from '@angular/material/card'; 

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { ReusableTableModule } from '../../components/reusable-table/reusable-table.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewUserComponent } from './view-user/view-user.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import { ViewPhotoUserComponent } from './view-photo-user/view-photo-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 

@NgModule({
    imports: [
        CommonModule, 
        NgbCarouselModule, 
        NgbAlertModule, 
        DashboardRoutingModule, 
        StatModule, 
        MatTableModule, 
        MatCardModule, 
        ReusableTableModule, 
        MatIconModule,
        HttpClientModule,
        MatTooltipModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    declarations: [DashboardComponent, TimelineComponent, NotificationComponent, ChatComponent, ViewUserComponent, ViewPhotoUserComponent, CreateUserComponent, EditUserComponent]
})
export class DashboardModule {}
