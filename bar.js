const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "записать блок про массивы",
    completed: false,
  },
  {
    title: "рассказать теорию обьектов",
    completed: true,
  },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = "<p>Нет элементов</p>";
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}
render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }
    render();
  }
};

function getNoteTemplate(note, index) {
  console.log(note.completed);
  return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="${
              note.completed ? "text-decoration-line-through" : ""
            }">${note.title}</span>
            <span>
                <span class="btn btn-small btn-${
                  note.completed ? "warning" : "success"
                }" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-type="remove"
                data-index="${index}">&times;</span>
            </span>
        </li>
    `;
}

/*    Object Theory 
const person = {
  firstName: "Vladimir",
  lastName: "Minin",
  year: 1993,
  hasGirlFriend: false,
  languages: ["ru", "en", "de"],
  getFullName: function () {
    console.log(person.firstName);
  },
};
*/

//function render() {
//  for (let note of notes) {
//    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
//  }
//}

//console.log(inputElement.value);

//creatBtn.onclick = function () {
//  if (inputElement.value.length === 0) {
//    return "nnn";
//  }
//  //listElement.innerHTML = ``;
//
//  listElement.insertAdjacentHTML(
//    "beforeend",
//    getNoteTemplate(inputElement.value)
//  );
//};

//const notes = [
//  "записать блок про массивы",
//  "рассказать теорию обьектов",
//  "oha",
//];
