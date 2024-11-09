import { Component } from '@angular/core';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteCreateComponent } from './components/note-create/note-create.component';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, NoteListComponent, NoteCreateComponent, IonicModule]
})
export class AppComponent {}
