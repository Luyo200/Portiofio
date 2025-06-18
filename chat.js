// Navigation menu toggle for small screens
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('active');
  });
}

// Chat widget elements
const chatWidget = document.getElementById('chat-widget');
const chatHeader = document.getElementById('chat-header');
const chatBody = document.getElementById('chat-body');
const chatToggleIcon = document.getElementById('chat-toggle-icon');
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

// Create a button to show/hide the entire chat widget
const toggleWidgetBtn = document.createElement('button');
toggleWidgetBtn.textContent = 'Show Chat Assistant';
toggleWidgetBtn.setAttribute('aria-pressed', 'false');
toggleWidgetBtn.setAttribute('aria-label', 'Toggle chat assistant visibility');
toggleWidgetBtn.style.position = 'fixed';
toggleWidgetBtn.style.bottom = '80px';
toggleWidgetBtn.style.right = '20px';
toggleWidgetBtn.style.zIndex = '1100';
toggleWidgetBtn.style.padding = '0.5rem 1rem';
toggleWidgetBtn.style.backgroundColor = '#00aaff';
toggleWidgetBtn.style.color = 'white';
toggleWidgetBtn.style.border = 'none';
toggleWidgetBtn.style.borderRadius = '5px';
toggleWidgetBtn.style.cursor = 'pointer';
document.body.appendChild(toggleWidgetBtn);

// Initially hide the chat widget
chatWidget.style.display = 'none';

toggleWidgetBtn.addEventListener('click', () => {
  if (chatWidget.style.display === 'none') {
    chatWidget.style.display = 'block';
    toggleWidgetBtn.textContent = 'Hide Chat Assistant';
    toggleWidgetBtn.setAttribute('aria-pressed', 'true');
    showOptionsMenu();
  } else {
    chatWidget.style.display = 'none';
    toggleWidgetBtn.textContent = 'Show Chat Assistant';
    toggleWidgetBtn.setAttribute('aria-pressed', 'false');
  }
});

// Chat body toggle: open/close chat window inside the widget
function toggleChat() {
  if (!chatBody) return;
  const isHidden = chatBody.hasAttribute('hidden');
  if (isHidden) {
    chatBody.removeAttribute('hidden');
    if (chatToggleIcon) chatToggleIcon.textContent = '▲'; // up arrow
    chatHeader.setAttribute('aria-pressed', 'true');
  } else {
    chatBody.setAttribute('hidden', '');
    if (chatToggleIcon) chatToggleIcon.textContent = '▼'; // down arrow
    chatHeader.setAttribute('aria-pressed', 'false');
  }
}

if (chatHeader) {
  chatHeader.addEventListener('click', toggleChat);
  chatHeader.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleChat();
    }
  });
}

// Append a message to chat
function appendMessage(sender, message) {
  if (!chatMessages) return;
  const messageElem = document.createElement('div');
  messageElem.classList.add('chat-message', sender);
  messageElem.textContent = message;
  chatMessages.appendChild(messageElem);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show options menu to user
function showOptionsMenu() {
  const menu = 
`Hi! Here are some things you can ask me about:
1. About Me
2. Education
3. Projects
4. Skills & Technologies
5. Contact Information

Please type the topic name or the number.`;
  appendMessage('bot', menu);
}

// Handle user's message and reply accordingly
function getAIResponse(userMessage) {
  const lower = userMessage.toLowerCase().trim();

  // If user wants to see options menu again
  if (lower === 'help' || lower === 'options' || lower === 'menu') {
    return `Sure! Here are some things you can ask me about:
1. About Me
2. Education
3. Projects
4. Skills & Technologies
5. Contact Information

Type the topic name or number.`;
  }

  // Map input to response
  switch(lower) {
    case '1':
    case 'about me':
    case 'about':
      return "I'm Luyolo Mahamba, a dedicated software development student passionate about creating efficient and scalable applications. I enjoy front-end development and exploring the latest tech trends.";

    case '2':
    case 'education':
    case 'school':
    case 'university':
      return "I am currently pursuing a Bachelor of Science in Mathematics and Chemistry at the University of Johannesburg from 2023 to 2026. My coursework includes Data Structures & Algorithms, Data Communications, Database Systems, Object-Oriented Programming, Real Analysis, Discrete Mathematics, Linear Algebra, Calculus, Complex Analysis, and Introductory Abstract Algebra.";

    case '3':
    case 'projects':
      return "I have built projects using JavaFX and MySQL, such as an Inventory Management System. Feel free to ask me more about any project.";

    case '4':
    case 'skills':
    case 'technologies':
    case 'skills & technologies':
      return "I'm skilled in Java, HTML, CSS, JavaScript, JavaFX, C++, MySQL, and use tools like GitHub, Eclipse, Code::Blocks, Notepad++, and Brackets.";

    case '5':
    case 'contact':
    case 'contact information':
      return "You can reach me at luyolomahamba7@gmail.com or via LinkedIn at linkedin.com/in/luyolo-mahamba.";

    default:
      // Fallback for unknown queries
      return "Sorry, I didn't understand that. Please type 'help' to see the list of topics you can ask about.";
  }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(err => {
        console.error('Service Worker registration failed:', err);
      });
  });
}
// Handle form submission
if (chatForm && chatInput) {
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    appendMessage('user', userMessage);
    chatInput.value = '';
    chatInput.focus();

    // Simulate AI response delay
    setTimeout(() => {
      const aiReply = getAIResponse(userMessage);
      appendMessage('bot', aiReply);
    }, 700);
  });
}
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = this;
  const submitBtn = form.querySelector('.submit-btn');
  const feedback = document.getElementById('form-feedback');

  // Disable button and show sending
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  // Hide feedback
  feedback.style.display = 'none';
  feedback.className = '';

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
      feedback.textContent = 'Message sent successfully! Thank you for contacting us.';
      feedback.className = 'success';
      feedback.style.display = 'block';
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    feedback.textContent = 'Sorry, there was an error sending your message. Please try again.';
    feedback.className = 'error';
    feedback.style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 5000);
  }
});

const words = [
  "Aspiring Software Developer",
  "Aspiring Analyst",
  "Aspiring Data Scientist",
  "Aspiring Mathematic Analyst",
];

const speed = 100;       // Speed per letter (ms)
const delayBetween = 1000; // Delay between paragraphs

let currentWord = 0;
let currentChar = 0;

const typewriter = document.getElementById("typewriter");

function typeLetter() {
  if (currentChar < words[currentWord].length) {
    typewriter.textContent += words[currentWord].charAt(currentChar);
    currentChar++;
    setTimeout(typeLetter, speed);
  } else {
    // Done typing one paragraph
    setTimeout(() => {
      currentWord++;
      if (currentWord < words.length) {
        typewriter.textContent = "";
        currentChar = 0;
        typeLetter();
      }
    }, delayBetween);
  }
}

typeLetter();
