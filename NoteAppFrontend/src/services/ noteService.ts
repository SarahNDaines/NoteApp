import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

export interface Note {
  id: number;
  title: string;
  content: string;
}

export const getNotes = async () => {
  const response = await axios.get<Note[]>(API_URL);
  return response.data;
};

export const createNote = async (note: Note) => {
  const response = await axios.post<Note>(API_URL, note);
  return response.data;
};

export const updateNote = async (note: Note) => {
  const response = await axios.put(`${API_URL}/${note.id}`, note);
  return response.data;
};

export const deleteNote = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
