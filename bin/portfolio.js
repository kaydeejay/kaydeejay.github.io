const portImages = document.querySelectorAll(".width-wrapper");

const projects = [
  {
    name: 'game-finder',
    title: 'GameFinder',
    description: 'Find a new gaming group: Create posts looking for games or players, or comment on games you\'d like to join',
    screenshot: './assets/images/portfolio-images/game-finder.png',
    repoURL: 'https://github.com/kaydeejay/Game-Finder',
    deployedURL: 'https://game-finder-2020.herokuapp.com/'
  },
  {
    name: 'appetizer',
    title: 'APPetizer',
    description: 'Create your own online cookbook: search for recipes and save your favorites',
    screenshot: './assets/images/portfolio-images/appetizer.png',
    repoURL: 'https://github.com/kaydeejay/app-etizer',
    deployedURL: 'https://recipe-track.herokuapp.com/'
  },
  {
    name: 'dnd-char-gen',
    title: 'Dungeons & Dragons Character Generator',
    description: 'Quickly and easily create a character for D&D 5th Edition',
    screenshot: './assets/images/portfolio-images/dnd-char-gen.jpg',
    repoURL: 'https://github.com/kaydeejay/dnd-char-gen/',
    deployedURL: 'https://kaydeejay.github.io/dnd-char-gen/'
  },
  {
    name: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'View the current 5-day forecast from a search by city. Powered by the openweathermap.org API.',
    screenshot: './assets/images/portfolio-images/weather-dashboard.jpg',
    repoURL: 'https://github.com/kaydeejay/weather-dashboard',
    deployedURL: 'https://kaydeejay.github.io/weather-dashboard/'
  },
  {
    name: 'burger-logger',
    title: 'Burger Logger',
    description: 'Record burgers you want to eat and have eaten. Uses a persistent MySQL database and a custom ORM.',
    screenshot: './assets/images/portfolio-images/burger-logger.jpg',
    repoURL: 'https://github.com/kaydeejay/burger-logger',
    deployedURL: 'https://shrouded-island-52694.herokuapp.com/'
  },
  {
    name: 'employee-tracker',
    title: 'Employee Tracker',
    description: 'A Node CLI content management system that allows the user to create, read, update, and delete entries in an employee roster.',
    screenshot: './assets/images/portfolio-images/employee-tracker.jpg',
    repoURL: 'https://github.com/kaydeejay/employee-tracker',
    deployedURL: null
  },
  {
    name: 'team-roster-gen',
    title: 'Team Roster Generator',
    description: 'A Node CLI application that generates a graphical project team roster based on user inputs.',
    screenshot: './assets/images/portfolio-images/team-roster-gen.jpg',
    repoURL: 'https://github.com/kaydeejay/team-roster-gen',
    deployedURL: null
  },
  {
    name: 'passport-tutorial',
    title: 'Passport Tutorial',
    description: 'A markdown tutorial going through the steps to make a simple login and user authentication page using passportjs.',
    screenshot: './assets/images/portfolio-images/passport-tutorial.jpg',
    repoURL: 'https://github.com/kaydeejay/passport-tutorial',
    deployedURL: null
  }
];

const makeProjects = () => {
  portImages.forEach((el) => {
    const thisIndex = el.getAttribute('data-index');
    const thisProject = projects[thisIndex];

    el.setAttribute("data-toggle", "modal");
    el.setAttribute("data-target", "#portfolioModal");

    if (!thisProject) {
      el.style.display = "none";
    } else {
      // make the image and caption
      const img = document.createElement('img');
      const caption = document.createElement('p');
      img.setAttribute('src', thisProject.screenshot);
      img.setAttribute('class', 'img-fluid');
      caption.textContent = thisProject.title;
      caption.setAttribute('class', 'img-caption');
      el.appendChild(img);
      el.appendChild(caption);
      el.addEventListener('click', populateModal);
    }
  });
}

function populateModal() {
  const project = projects[this.getAttribute('data-index')];
  const modalFooter = document.getElementById('modalFooter');
  const modalTitle = document.getElementById('portfolioModalTitle');
  const modalImg = document.getElementById('modalImg');
  const modalDesc = document.getElementById('modalDesc');
  const repoBtn = document.createElement('button');

  modalFooter.innerHTML = '';

  repoBtn.setAttribute('class', 'btn');
  repoBtn.textContent = 'Visit Repository';
  repoBtn.addEventListener('click', () => {
    const win = window.open(project.repoURL, 'blank');
    win.focus();
  });
  if (project.deployedURL) {
    const deployedBtn = document.createElement('button');
    deployedBtn.setAttribute('class', 'btn');
    deployedBtn.textContent = 'Deployed Application';
    deployedBtn.addEventListener('click', () => {
      const win = window.open(project.deployedURL, 'blank');
      win.focus();
    });
    modalFooter.appendChild(deployedBtn);
  }
  modalTitle.textContent = project.title;
  modalImg.setAttribute('src', project.screenshot);
  modalDesc.textContent = project.description;
  modalFooter.appendChild(repoBtn);
}

document.body.onload = makeProjects;