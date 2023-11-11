/* Implementare la funzione firstUncompletedNote che, dato un array di
 note, restituisce la prima nota non completata. Una nota viene considerata 
 completata se tutti i todo presenti hanno il flag done impostato a true.
  */


 /* 
function firstUncompletedNote(notes) {
  const noteInProgress = notes.todos.find(todos => todos.done === false);
  return noteInProgress;
}
 */

function firstUncompletedNote(notes) {
  const uncompletedNote = notes.find(note => {
    const uncompletedTodo = note.todos.find(todo => todo.done === false);
    return uncompletedTodo !== undefined; // Ritorna la nota se esiste un todo non completato
  });

  return uncompletedNote || null; // Se non ci sono note con todos non completati, ritorna null
}

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: true
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: false
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: false
      }
    ]
  },
  {
    id: 3,
    description: 'My Movies Library',
    todos: [
      {
        id: 1,
        name: 'La città incantata',
        done: true
      },
      {
        id: 2,
        name: 'Avatar',
        done: true
      },
      {
        id: 3,
        name: 'Titanic',
        done: false
      }
    ]
  }
]

const noteInProgress = firstUncompletedNote(notes);
console.log('All notes: ', notes); 
console.log('First note in progress: ', noteInProgress);