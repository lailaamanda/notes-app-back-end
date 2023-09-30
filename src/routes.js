/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/newline-after-import
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  /*
  untuk menyimpan data
  */

  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  /**
   * menaampilkan data
   */
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  /* menampilkan data yang dimasukan dengan id */
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  /* untuk mengubah catatan */
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  /* menghapus data pada web */
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];
module.exports = routes;
