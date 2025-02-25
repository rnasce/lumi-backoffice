// Função para alternar abas
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

// Funções para Links
function addLink() {
    const name = document.getElementById('linkName').value;
    const url = document.getElementById('linkUrl').value;
    if (name && url) {
        const links = JSON.parse(localStorage.getItem('links') || '[]');
        links.push({ name, url });
        localStorage.setItem('links', JSON.stringify(links));
        displayLinks();
        document.getElementById('linkName').value = '';
        document.getElementById('linkUrl').value = '';
    }
}

function displayLinks() {
    const links = JSON.parse(localStorage.getItem('links') || '[]');
    const list = document.getElementById('linkList');
    list.innerHTML = '';
    links.forEach((link, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a> <button onclick="removeLink(${index})">Remover</button>`;
        list.appendChild(li);
    });
}

function removeLink(index) {
    const links = JSON.parse(localStorage.getItem('links') || '[]');
    links.splice(index, 1);
    localStorage.setItem('links', JSON.stringify(links));
    displayLinks();
}

// Funções para E-mails
function addEmail() {
    const subject = document.getElementById('emailSubject').value;
    const address = document.getElementById('emailAddress').value;
    if (subject && address) {
        const emails = JSON.parse(localStorage.getItem('emails') || '[]');
        emails.push({ subject, address });
        localStorage.setItem('emails', JSON.stringify(emails));
        displayEmails();
        document.getElementById('emailSubject').value = '';
        document.getElementById('emailAddress').value = '';
    }
}

function displayEmails() {
    const emails = JSON.parse(localStorage.getItem('emails') || '[]');
    const list = document.getElementById('emailList');
    list.innerHTML = '';
    emails.forEach((email, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${email.subject} - ${email.address} <button onclick="removeEmail(${index})">Remover</button>`;
        list.appendChild(li);
    });
}

function removeEmail(index) {
    const emails = JSON.parse(localStorage.getItem('emails') || '[]');
    emails.splice(index, 1);
    localStorage.setItem('emails', JSON.stringify(emails));
    displayEmails();
}

// Funções para Fotos
function addPhoto() {
    const fileInput = document.getElementById('photoInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photos = JSON.parse(localStorage.getItem('photos') || '[]');
            photos.push(e.target.result);
            localStorage.setItem('photos', JSON.stringify(photos));
            displayPhotos();
            fileInput.value = '';
        };
        reader.readAsDataURL(file);
    }
}

function displayPhotos() {
    const photos = JSON.parse(localStorage.getItem('photos') || '[]');
    const gallery = document.getElementById('photoGallery');
    gallery.innerHTML = '';
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        gallery.appendChild(img);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = () => removePhoto(index);
        gallery.appendChild(removeBtn);
    });
}

function removePhoto(index) {
    const photos = JSON.parse(localStorage.getItem('photos') || '[]');
    photos.splice(index, 1);
    localStorage.setItem('photos', JSON.stringify(photos));
    displayPhotos();
}

// Funções para Calendário
function addEvent() {
    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    if (name && date) {
        const events = JSON.parse(localStorage.getItem('events') || '[]');
        events.push({ name, date });
        localStorage.setItem('events', JSON.stringify(events));
        displayEvents();
        document.getElementById('eventName').value = '';
        document.getElementById('eventDate').value = '';
    }
}

function displayEvents() {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const list = document.getElementById('eventList');
    list.innerHTML = '';
    events.forEach((event, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${event.name} - ${event.date} <button onclick="removeEvent(${index})">Remover</button>`;
        list.appendChild(li);
    });
}

function removeEvent(index) {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    displayEvents();
}

// Funções para Notas
function addNote() {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    if (title && content) {
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes.push({ title, content });
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
    }
}

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const list = document.getElementById('noteList');
    list.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${note.title}: ${note.content} <button onclick="removeNote(${index})">Remover</button>`;
        list.appendChild(li);
    });
}

function removeNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

// Funções para Tarefas
function addTask() {
    const name = document.getElementById('taskName').value;
    if (name) {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.push({ name, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        document.getElementById('taskName').value = '';
    }
}

function displayTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})"> ${task.name} <button onclick="removeTask(${index})">Remover</button>`;
        list.appendChild(li);
    });
}

function toggleTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Funções para Exportar/Importar
function exportData() {
    const data = {
        links: JSON.parse(localStorage.getItem('links') || '[]'),
        emails: JSON.parse(localStorage.getItem('emails') || '[]'),
        photos: JSON.parse(localStorage.getItem('photos') || '[]'),
        events: JSON.parse(localStorage.getItem('events') || '[]'),
        notes: JSON.parse(localStorage.getItem('notes') || '[]'),
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
    };
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'backoffice-data.json';
    a.click();
}

function importData() {
    const fileInput = document.getElementById('importFile');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = JSON.parse(e.target.result);
            localStorage.setItem('links', JSON.stringify(data.links || []));
            localStorage.setItem('emails', JSON.stringify(data.emails || []));
            localStorage.setItem('photos', JSON.stringify(data.photos || []));
            localStorage.setItem('events', JSON.stringify(data.events || []));
            localStorage.setItem('notes', JSON.stringify(data.notes || []));
            localStorage.setItem('tasks', JSON.stringify(data.tasks || []));
            displayLinks();
            displayEmails();
            displayPhotos();
            displayEvents();
            displayNotes();
            displayTasks();
            fileInput.value = '';
            alert('Dados importados com sucesso!');
        };
        reader.readAsText(file);
    }
}

// Inicializar exibição
displayLinks();
displayEmails();
displayPhotos();
displayEvents();
displayNotes();
displayTasks();
