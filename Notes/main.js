/* eslint-disable no-undef */

const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote('Hlo'))

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `

      <div class="tools">
        <button class="edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="main ${text ? '' : 'hidden'}"></div>
      <textarea class = "${text ? 'hidden' : ''}"></textarea>
`

  const editBtn = note.querySelector('.edit')
  const delBtn = note.querySelector('.delete')
  const mainBtn = note.querySelector('.main')
  const textBtn = note.querySelector('textarea')

  textBtn.value = text
  mainBtn.innerHTML = marked(text)

  delBtn.addEventListener('click', () => {
    note.remove()
  })

  editBtn.addEventListener('click', () => {
    mainBtn.classList.toggle('hidden')
    textBtn.classList.toggle('hidden')
  })

  textBtn.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = marked(value)
  })

  document.body.appendChild(note)

}
