import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

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
