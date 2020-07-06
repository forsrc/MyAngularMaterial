import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatIconModule,
  MatTabsModule,
  MatTooltipModule,
} from '@angular/material';

import { ChatRoutingModule } from './chat.routing.module';
import { ChatComponent } from './chat.component';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    MatRippleModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    FlexLayoutModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatComponent,
    ChatUserListComponent,
    ChatMessageComponent
  ]
})
export class ChatModule {
}
