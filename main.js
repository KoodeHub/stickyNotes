let form = document.getElementById('form');
form.onsubmit = function addNotes(event){
    event.preventDefault();
    let note_text = document.getElementById('note').value;
    let note= document.createElement("p");
    note.setAttribute('id','notes');
    console.log(note.id);
    note.innerHTML = note_text;
    note.style.backgroundColor = "rgba(216, 219, 6,1)";
    note.style.width = "10rem";
    note.style.height = "10rem";
    note.style.display = "inline-block";
    note.style.marginRight = "2px";
    note.style.fontSize = "15px";
    note.style.fontFamily = "SanSherif"
    note.style.color= "rgb(172, 175, 175))";
    let board= document.getElementById('board');
    board.appendChild(note);
}
