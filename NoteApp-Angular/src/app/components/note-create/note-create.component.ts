import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NoteService, Note } from '../../services/note.service';

@Component({
  standalone: true,
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss'],
  imports: [CommonModule, IonicModule, FormsModule]  // Ensure IonicModule is included here
})
export class NoteCreateComponent {
  note: Note = {
    id: 0,
    title: '',
    content: '',
  };

  constructor(private noteService: NoteService, private router: Router) {}

  createNote() {
    this.noteService.createNote(this.note).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  }
}
