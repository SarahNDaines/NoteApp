import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NoteService, Note } from '../../services/note.service';

@Component({
  standalone: true,
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  imports: [CommonModule, IonicModule]
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
      console.log(this.notes); // Verify data loading
      this.cdr.detectChanges(); // Trigger change detection
    });
  }
}
