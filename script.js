document.querySelector('button[onclick="alert(\'About Me clicked!\')"]').addEventListener('click', function() {
  const mainContent = document.querySelector('.main-content');

  // Clear existing content
  mainContent.innerHTML = '';

  // Create and add heading
  const h1 = document.createElement('h1');
  h1.textContent = 'About Me';
  mainContent.appendChild(h1);

  // Create paragraph with styles but empty text for now
  const p = document.createElement('p');
  p.style.fontSize = '1.1rem';
  p.style.lineHeight = '1.5';
  p.style.textAlign = 'justify';
  p.textContent = ''; // start empty
  mainContent.appendChild(p);

  // The text to type
  const textToType = `I am a creative and driven BSc student in Mathematics and Chemistry at the University of Johannesburg,
with a growing passion for UI/UX design, software development, and user-centered digital experiences.
While I have a strong foundation in front-end technologies, I’m also expanding into back-end
development — exploring server-side frameworks, REST APIs, and databases to build complete, scalable
applications.

My goal is to simplify complex systems through intuitive, inclusive design and efficient architecture.
I bring analytical rigor, creative problem-solving, and hands-on experience with both front-end interfaces
and back-end logic, particularly in projects that bridge design, technology, and financial services.`;

  let i = 0;
  function type() {
    if (i < textToType.length) {
      p.textContent += textToType.charAt(i);
      i++;
      setTimeout(type, 30); // type speed (ms)
    } else {
      // After typing finishes, add the chatbot button
      addChatbotButton(mainContent);
    }
  }

  // Start typing effect
  type();

  // Function to create and append chatbot button
  function addChatbotButton(container) {
    const chatbotBtn = document.createElement('button');
    chatbotBtn.id = 'chatbotBtn';
    chatbotBtn.textContent = 'Open Chatbot';
    Object.assign(chatbotBtn.style, {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      padding: '12px 25px',
      backgroundColor: '#001f3f',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    });
    container.appendChild(chatbotBtn);

    chatbotBtn.addEventListener('mouseover', () => {
      chatbotBtn.style.backgroundColor = '#003366';
    });
    chatbotBtn.addEventListener('mouseout', () => {
      chatbotBtn.style.backgroundColor = '#001f3f';
    });

    chatbotBtn.addEventListener('click', () => {
      alert('Chatbot button clicked!');
    });
  }
});

// Initial content setup
document.querySelector('button[onclick="alert(\'Education clicked!\')"]').addEventListener('click', function() {
  const mainContent = document.querySelector('.main-content');

  // Clear existing content
  mainContent.innerHTML = '';

  // Create and add heading
  const h1 = document.createElement('h1');
  h1.textContent = 'Education';
  mainContent.appendChild(h1);

  // Create first paragraph with static info
  const p1 = document.createElement('p');
  p1.style.fontSize = '1.1rem';
  p1.innerHTML = `
    <strong>🎓 Bachelor of Science in Mathematics and Chemistry</strong><br />
    University of Johannesburg<br />
    2023 - 2026
  `;
  mainContent.appendChild(p1);

  // Create second paragraph with empty text for typing effect
  const p2 = document.createElement('p');
  p2.style.lineHeight = '1.8';
  p2.style.fontSize = '0.95rem';
  p2.textContent = '';
  mainContent.appendChild(p2);

  // Text to type out for coursework
  const textToType = `Relevant Coursework: Data Structures & Algorithms | Data Communications | Object-Oriented Programming | Real Analysis | Discrete Mathematics | Linear Algebra | Calculus | Complex Analysis | Introductory Abstract Algebra`;

  let i = 0;
  function type() {
    if (i < textToType.length) {
      p2.textContent += textToType.charAt(i);
      i++;
      setTimeout(type, 30); // typing speed in ms
    } else {
      // After typing finishes, add chatbot button
      addChatbotButton(mainContent);
    }
  }

  type();

  // Function to create and append chatbot button
  function addChatbotButton(container) {
    const chatbotBtn = document.createElement('button');
    chatbotBtn.id = 'chatbotBtn';
    chatbotBtn.textContent = 'Open Chatbot';
    Object.assign(chatbotBtn.style, {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      padding: '12px 25px',
      backgroundColor: '#001f3f',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    });
    container.appendChild(chatbotBtn);

    chatbotBtn.addEventListener('mouseover', () => {
      chatbotBtn.style.backgroundColor = '#003366';
    });
    chatbotBtn.addEventListener('mouseout', () => {
      chatbotBtn.style.backgroundColor = '#001f3f';
    });

    chatbotBtn.addEventListener('click', () => {
      alert('Chatbot button clicked!');
    });
  }
});
// Load default content (About Me) on page load
document.querySelector('button[onclick="alert(\'Certifications clicked!\')"]').addEventListener('click', function () {
  const mainContent = document.querySelector('.main-content');

  // Clear existing content
  mainContent.innerHTML = '';

  // Create and add heading
  const h1 = document.createElement('h1');
  h1.textContent = 'Certifications';
  mainContent.appendChild(h1);

  // First paragraph - certificate title and completion date
  const p1 = document.createElement('p');
  p1.style.marginBottom = '0.5rem';
  p1.style.fontSize = '1.1rem';
  p1.textContent = '';
  mainContent.appendChild(p1);

  const text1 = `🎓 FNB App Academy - Certificate in Full Stack Development\nCompleted: July 2025`;

  // Second paragraph - list of skills and topics
  const p2 = document.createElement('p');
  p2.style.lineHeight = '1.8';
  p2.style.fontSize = '0.95rem';
  p2.textContent = '';
  mainContent.appendChild(p2);

  const text2 = `App Strategies | GitHub and Collaboration | Build an App with HTML (The SDLC) | Principles of UX Design + Basic Layouts + Transitions | Design Thinking | APIs + Data Input + Processing | User-Centric App Development | Data Management and Analysis | Business Development | Backend Development Intro | Backend Development (Build an API) | AI in Development | Business Funding | Marketing Your App Business`;

  // Typing function for first paragraph
  let i = 0;
  let j = 0;

  function typeFirst() {
    if (i < text1.length) {
      const char = text1.charAt(i);
      if (char === '\n') {
        p1.appendChild(document.createElement('br'));
      } else {
        p1.textContent += char;
      }
      i++;
      setTimeout(typeFirst, 30);
    } else {
      setTimeout(typeSecond, 500);
    }
  }

  function typeSecond() {
    if (j < text2.length) {
      p2.textContent += text2.charAt(j);
      j++;
      setTimeout(typeSecond, 30);
    } else {
      addChatbotButton(mainContent);
    }
  }

  typeFirst();

  // Chatbot button (as before)
  function addChatbotButton(container) {
    const chatbotBtn = document.createElement('button');
    chatbotBtn.id = 'chatbotBtn';
    chatbotBtn.textContent = 'Open Chatbot';
    Object.assign(chatbotBtn.style, {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      padding: '12px 25px',
      backgroundColor: '#001f3f',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    });
    container.appendChild(chatbotBtn);

    chatbotBtn.addEventListener('mouseover', () => {
      chatbotBtn.style.backgroundColor = '#003366';
    });
    chatbotBtn.addEventListener('mouseout', () => {
      chatbotBtn.style.backgroundColor = '#001f3f';
    });

    chatbotBtn.addEventListener('click', () => {
      alert('Chatbot button clicked!');
    });
  }
});
document.querySelector('button[onclick="alert(\'Skills clicked!\')"]').addEventListener('click', function () {
  const mainContent = document.querySelector('.main-content');

  // Clear existing content
  mainContent.innerHTML = '';

  // Create and add heading
  const h1 = document.createElement('h1');
  h1.textContent = 'Programming Languages and Technologies';
  mainContent.appendChild(h1);

  // Create container for skill icons
  const skillsContainer = document.createElement('div');
  skillsContainer.className = 'skills-icons';

  // Style the container to display grid with 4 columns
  Object.assign(skillsContainer.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '10px 0',
  });

  // Define skills with icon URLs and labels
  const skills = [
    { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Spring boot', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'JavaFX', img: 'images/javafx-training.png' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'XAMPP', img: 'images/xampp-svgrepo-com.svg' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'Material-UI', img: 'images/icons8-material-ui-48.png' },
    { name: 'Bootstrap', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    { name: 'PostMan', img: 'images/postman-icon-svgrepo-com (1).svg' },
    { name: 'Eclipse', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg' },
    { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' }
  ];

  // Loop through skills and create skill-item elements
  skills.forEach((skill, index) => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';

    // Style skill item to center content vertically & horizontally, stacked column
    Object.assign(skillItem.style, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '8px',
    });

    const img = document.createElement('img');
    img.src = skill.img;
    img.alt = skill.name;
    img.style.width = '80px';  // increased size
    img.style.height = '80px'; // increased size
    img.style.objectFit = 'contain';

    const label = document.createElement('span');
    label.textContent = skill.name;
    label.style.fontSize = '1.2rem'; // bigger font size
    label.style.fontWeight = '600';

    skillItem.appendChild(img);
    skillItem.appendChild(label);
    skillsContainer.appendChild(skillItem);
  });

  mainContent.appendChild(skillsContainer);

  // Re-add the chatbot button
  const chatbotBtn = document.createElement('button');
  chatbotBtn.id = 'chatbotBtn';
  chatbotBtn.textContent = 'Open Chatbot';
  Object.assign(chatbotBtn.style, {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    padding: '12px 25px',
    backgroundColor: '#001f3f',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  });

  chatbotBtn.addEventListener('mouseover', () => {
    chatbotBtn.style.backgroundColor = '#003366';
  });
  chatbotBtn.addEventListener('mouseout', () => {
    chatbotBtn.style.backgroundColor = '#001f3f';
  });
  chatbotBtn.addEventListener('click', () => {
    alert('Chatbot button clicked!');
  });

  mainContent.appendChild(chatbotBtn);
});


document.querySelector('button[onclick="alert(\'Personal Projects clicked!\')"]').addEventListener('click', function () {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = '';

  // Section title
  const title = document.createElement('h2');
  title.className = 'section-title';
  title.id = 'projects-title';
  title.textContent = 'Front-end, UI/UX, & Full-stack Projects';
  mainContent.appendChild(title);

  // Projects data (calculator project removed)
  const projects = [
    {
      imgSrc: './images/envato-labs-ai-2cd20c14-0097-4d37-a3b1-3588db78e797.jpg',
      imgAlt: 'Portfolio Website',
      description: `My portfolio is a responsive website built with HTML, CSS, and JavaScript,
      focusing on clean UI, smooth navigation, and user-friendly design. It reflects
      my skills in front-end development and creating intuitive, accessible user experiences.`,
      githubLink: 'https://github.com/Luyo200/Portiofio.git',
      visitLink: null,
    },
    {
      imgSrc: './images/image.jpg',
      imgAlt: 'Inventory Management System',
      description: `A JavaFX desktop app for small business inventory,
      supplier, and transaction management, featuring secure
      MySQL integration, intuitive UI, and strong input validation.`,
      githubLink: 'https://github.com/Luyo200/Inventory-Management-System',
      visitLink: null,
    },
    {
      imgSrc: './images/Screenshot 2025-07-17 202107.png',
      imgAlt: 'Bright Future High School',
      description: `A responsive website for Bright Future High School in Khayelitsha,
      Cape Town, built with HTML, CSS, JavaScript and Spring Boot. Showcasing the
      school’s values, academic streams, and key information.`,
      githubLink: 'https://github.com/Luyo200/High-School-website.git',
      visitLink: 'https://brighthighschool.netlify.app/',
    },
  ];

  // Container for all projects - flex wrap to form rows of 3
  const projectsContainer = document.createElement('div');
  Object.assign(projectsContainer.style, {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
  });

  // Each project box
  projects.forEach(proj => {
    const projectDiv = document.createElement('div');
    Object.assign(projectDiv.style, {
      flex: '0 0 calc((100% - 4rem) / 3)', // 3 per row with gap compensation
      minHeight: '360px',
      boxSizing: 'border-box',
    });

    const cardDiv = document.createElement('div');
    Object.assign(cardDiv.style, {
      height: '100%',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      border: 'none',
      backgroundColor: '#fff',
    });

    // Image
    const img = document.createElement('img');
    img.src = proj.imgSrc;
    img.alt = proj.imgAlt;
    Object.assign(img.style, {
      height: '160px',
      objectFit: 'cover',
      width: '100%',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
    });

    // Card body
    const cardBody = document.createElement('div');
    Object.assign(cardBody.style, {
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: '1',
    });

    // Description paragraph with black text
    const p = document.createElement('p');
    p.style.cssText = 'font-size: 0.9rem; line-height: 1.5; text-align: justify; color: black;';
    p.textContent = proj.description.trim();

    // Links container
    const linksDiv = document.createElement('div');
    linksDiv.style.marginTop = 'auto';
    linksDiv.style.display = 'flex';
    linksDiv.style.gap = '0.5rem';
    linksDiv.style.alignItems = 'center';

    if (proj.visitLink) {
      const visitLink = document.createElement('a');
      visitLink.href = proj.visitLink;
      visitLink.target = '_blank';
      visitLink.className = 'btn btn-secondary me-2';
      visitLink.textContent = '🔗 Visit Project';
      Object.assign(visitLink.style, {
        padding: '6px 12px',
        backgroundColor: '#6c757d',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '0.375rem',
      });
      linksDiv.appendChild(visitLink);
    }

    if (proj.githubLink) {
      const githubLink = document.createElement('a');
      githubLink.href = proj.githubLink;
      githubLink.target = '_blank';

      const githubIcon = document.createElement('img');
      githubIcon.src = 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg';
      githubIcon.alt = 'GitHub';
      githubIcon.style.width = '20px';
      githubIcon.style.height = '20px';
      githubIcon.style.cursor = 'pointer';

      githubLink.appendChild(githubIcon);
      linksDiv.appendChild(githubLink);
    }

    cardBody.appendChild(p);
    cardBody.appendChild(linksDiv);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    projectDiv.appendChild(cardDiv);
    projectsContainer.appendChild(projectDiv);
  });

  mainContent.appendChild(projectsContainer);

  // Chatbot button (optional)
  const chatbotBtn = document.createElement('button');
  chatbotBtn.id = 'chatbotBtn';
  chatbotBtn.textContent = 'Open Chatbot';
  Object.assign(chatbotBtn.style, {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    padding: '12px 25px',
    backgroundColor: '#001f3f',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  });
  chatbotBtn.addEventListener('mouseover', () => {
    chatbotBtn.style.backgroundColor = '#003366';
  });
  chatbotBtn.addEventListener('mouseout', () => {
    chatbotBtn.style.backgroundColor = '#001f3f';
  });
  chatbotBtn.addEventListener('click', () => {
    alert('Chatbot button clicked!');
  });
  mainContent.appendChild(chatbotBtn);
});
document.querySelector('li > button[onclick="alert(\'Contact Info clicked!\')"]').addEventListener('click', () => {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = `
    <div class="hover-box"
      style="
        padding: 1rem; 
        border-radius: 10px; 
        background-color: #001f3f; 
        border-left: 6px solid #4CAF50; 
        color: white; 
        margin-top: 1rem;
        font-family: Arial, sans-serif;
      ">
      <section class="section contact" id="contact" aria-labelledby="contact-title" style="max-width: 900px; margin: auto;">
        <h2 class="section-title" id="contact-title" style="font-size: 1.8rem; margin-bottom: 0.8rem; font-weight: 700;">Let's Work Together</h2>
        <p class="section-content" style="font-size: 1rem; margin-bottom: 1.5rem;">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div style="display: flex; flex-wrap: wrap; gap: 2rem; justify-content: space-between;">
          <section class="contact-info" aria-label="Contact Information" style="flex: 1 1 320px; min-width: 280px;">
            <div class="containerl" style="display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: start;">
              <a href="mailto:luyolomahamba7@gmail.com" target="_blank" rel="noopener noreferrer" class="icon-link" style="display: inline-block;">
                <img src="https://img.icons8.com/fluency/48/000000/new-post.png" alt="Email" />
              </a>
              <a href="https://wa.me/27710066573" target="_blank" rel="noopener noreferrer" class="icon-link" style="display: inline-block;">
                <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
              </a>
              <a href="https://www.linkedin.com/in/luyolo-mahamba-b8ab48300" target="_blank" rel="noopener noreferrer" class="icon-link" style="display: inline-block;">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Luyo200" target="_blank" rel="noopener noreferrer" class="icon-link" style="display: inline-block;">
                <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt="GitHub" />
              </a>
            </div>
          </section>

          <div class="contact-form" style="flex: 2 1 550px; min-width: 280px;">
            <h3 class="form-title" style="font-size: 1.4rem; margin-bottom: 0.8rem; font-weight: 600;">Send Me a Message</h3>
            <form id="contact-form" action="https://formspree.io/f/mgvyygna" method="POST" novalidate style="display: flex; flex-direction: column; gap: 0.75rem;">
              <input type="text" name="name" placeholder="Your Name" class="form-input" required aria-required="true" 
                style="padding: 0.6rem 0.75rem; font-size: 1rem; border-radius: 6px; border: none; outline: none;"/>
              <input type="email" name="email" placeholder="Your Email" class="form-input" required aria-required="true" 
                style="padding: 0.6rem 0.75rem; font-size: 1rem; border-radius: 6px; border: none; outline: none;"/>
              <input type="text" name="subject" placeholder="Subject" class="form-input" 
                style="padding: 0.6rem 0.75rem; font-size: 1rem; border-radius: 6px; border: none; outline: none;"/>
              <textarea name="message" placeholder="Your Message" class="form-textarea" required aria-required="true" 
                style="padding: 0.6rem 0.75rem; font-size: 1rem; border-radius: 6px; border: none; outline: none; resize: vertical; min-height: 100px;"></textarea>
              <button type="submit" class="submit-btn" 
                style="
                  background-color: #4CAF50; 
                  color: white; 
                  border: none; 
                  padding: 0.75rem 1.5rem; 
                  font-size: 1rem; 
                  border-radius: 8px; 
                  cursor: pointer;
                  transition: background-color 0.3s ease;
                "
                onmouseover="this.style.backgroundColor='#45a049';"
                onmouseout="this.style.backgroundColor='#4CAF50';"
              >Send Message</button>
              <p id="form-feedback" role="alert" aria-live="polite" style="margin-top: 0.3rem;"></p>
            </form>
          </div>
        </div>
      </section>
    </div>
  `;
});
