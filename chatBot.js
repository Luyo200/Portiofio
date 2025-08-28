document.getElementById('chatbotBtn').addEventListener('click', () => {
  if (!document.getElementById('chat-widget')) {
    createChatWidget();
  }
});

function createChatWidget() {
  const chatWidget = document.createElement('div');
  chatWidget.id = 'chat-widget';
  Object.assign(chatWidget.style, {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    width: '420px',
    maxHeight: '520px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    zIndex: '10000',
  });

  const chatHeader = document.createElement('div');
  chatHeader.id = 'chat-header';
  chatHeader.textContent = 'Chat with Me';
  Object.assign(chatHeader.style, {
    backgroundColor: '#001f3f',
    color: 'white',
    padding: '15px 20px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });
  chatWidget.appendChild(chatHeader);

  const closeIcon = document.createElement('span');
  closeIcon.textContent = '×';
  Object.assign(closeIcon.style, {
    cursor: 'pointer',
    fontSize: '22px',
    fontWeight: 'bold',
  });
  chatHeader.appendChild(closeIcon);

  const chatBody = document.createElement('div');
  chatBody.id = 'chat-body';
  Object.assign(chatBody.style, {
    flexGrow: '1',
    padding: '15px',
    overflowY: 'auto',
    borderBottom: '1px solid #ddd',
    maxHeight: '350px',
  });
  chatWidget.appendChild(chatBody);

  const messages = document.createElement('div');
  messages.id = 'chat-messages';
  messages.setAttribute('aria-live', 'polite');
  messages.setAttribute('aria-relevant', 'additions');
  chatBody.appendChild(messages);

  const chatForm = document.createElement('form');
  chatForm.id = 'chat-form';
  chatForm.style.display = 'flex';
  chatForm.style.padding = '10px 15px';

  const chatInput = document.createElement('input');
  chatInput.type = 'text';
  chatInput.id = 'chat-input';
  chatInput.placeholder = 'Type your question...';
  chatInput.setAttribute('aria-label', 'Chat input');
  chatInput.autocomplete = 'off';
  Object.assign(chatInput.style, {
    flexGrow: '1',
    padding: '12px',
    borderRadius: '8px',
    border: '1.5px solid #ccc',
    fontSize: '16px',
  });

  const sendBtn = document.createElement('button');
  sendBtn.type = 'submit';
  sendBtn.textContent = 'Send';
  Object.assign(sendBtn.style, {
    padding: '10px 20px',
    backgroundColor: '#001f3f',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    marginLeft: '10px',
  });

  chatForm.appendChild(chatInput);
  chatForm.appendChild(sendBtn);
  chatWidget.appendChild(chatForm);

  document.body.appendChild(chatWidget);

  closeIcon.addEventListener('click', () => {
    chatWidget.remove();
  });

  chatHeader.addEventListener('click', () => {
    const display = chatBody.style.display === 'none' ? 'block' : 'none';
    chatBody.style.display = display;
    chatForm.style.display = display === 'block' ? 'flex' : 'none';
  });

  chatForm.addEventListener('submit', sendMessage);

  appendMessage('Bot', "Hello! I'm here to help you learn about me and my portfolio. Feel free to ask!");
}

function sendMessage(event) {
  event.preventDefault();
  const input = document.getElementById('chat-input');
  const userMessage = input.value.trim();
  if (!userMessage) return;

  clearMessages();
  appendMessage('You', userMessage);

  input.value = '';
  input.disabled = true;

  setTimeout(() => {
    const response = getBotResponse(userMessage);
    appendMessage('Bot', response);
    input.disabled = false;
    input.focus();
  }, 600);
}

function clearMessages() {
  const messages = document.getElementById('chat-messages');
  if (messages) messages.innerHTML = '';
}

function appendMessage(sender, text) {
  const messages = document.getElementById('chat-messages');
  const msgDiv = document.createElement('div');
  msgDiv.style.marginBottom = '12px';

  const senderSpan = document.createElement('strong');
  senderSpan.textContent = sender + ': ';
  senderSpan.style.color = sender === 'Bot' ? '#001f3f' : '#4CAF50';

  const textSpan = document.createElement('span');
  textSpan.textContent = text;
  textSpan.style.color = 'black';

  msgDiv.appendChild(senderSpan);
  msgDiv.appendChild(textSpan);
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(message) {
  const msg = message.toLowerCase();

  const greetings = ['hi', 'hello', 'hey', 'how are you', 'how are you doing', 'how are', 'what\'s up', 'good morning', 'good afternoon'];
  for (const greet of greetings) {
    if (msg.includes(greet)) {
      return "Hello! I'm here to help you learn about me and my portfolio. Feel free to ask!";
    }
  }

  if (msg.includes('help') || msg.includes('assist') || msg.includes('support')) {
    return "Sure! You can ask me about my projects, skills, experience, education, certificates, or contact info.";
  }

  if (msg.includes('project') || msg.includes('portfolio') || msg.includes('work') || msg.includes('experience')) {
    return `I have experience building front-end, UI/UX, and full-stack projects including a responsive portfolio website, an inventory management system, and a school website. Would you like details on any specific project?`;
  }

  if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach')) {
    return `You can contact me via email at luyolomahamba7@gmail.com, WhatsApp at +27710066573, LinkedIn, or GitHub.`;
  }

  if (msg.includes('education') || msg.includes('degree') || msg.includes('university') || msg.includes('study') || msg.includes('student') || msg.includes('bsc') || msg.includes('mathematics') || msg.includes('chemistry')) {
    return `I am a creative and driven BSc student in Mathematics and Chemistry at the University of Johannesburg (2023 - 2026), with a growing passion for UI/UX design, full-stack development, and user-centered digital experiences.`;
  }

  if (msg.includes('coursework') || msg.includes('subjects') || msg.includes('classes') || msg.includes('studies')) {
    return `Relevant Coursework includes: Data Structures & Algorithms, Data Communications, Object-Oriented Programming, Real Analysis, Discrete Mathematics, Linear Algebra, Calculus, Complex Analysis, and Introductory Abstract Algebra.`;
  }

  if (msg.includes('certificate') || msg.includes('certification') || msg.includes('academy') || msg.includes('skills') || msg.includes('topics')) {
    return `I hold a Full Stack Development Certificate from FNB App Academy (Completed July 2025). Skills include App Strategies, GitHub Collaboration, HTML SDLC, UX Design Principles, Design Thinking, APIs, User-Centric App Development, Backend Development (including APIs), AI in Development, Business Funding, and Marketing.`;
  }

  if (msg.includes('goal') || msg.includes('aim') || msg.includes('passion') || msg.includes('vision')) {
    return `My goal is to simplify complex systems through intuitive, inclusive design and efficient architecture. I bring analytical rigor, creative problem-solving, and hands-on experience with both front-end interfaces and back-end logic, particularly in projects that bridge design, technology, and financial services.`;
  }

  // ✅ FULL "ABOUT ME" fallback
  return `I am a creative and driven BSc student in Mathematics and Chemistry at the University of Johannesburg,
with a growing passion for UI/UX design, full-stack development, and user-centered digital experiences.
While I have a strong foundation in front-end technologies, I’m also expanding into back-end development — exploring server-side frameworks, REST APIs, and databases to build complete, scalable applications.

My goal is to simplify complex systems through intuitive, inclusive design and efficient architecture.
I bring analytical rigor, creative problem-solving, and hands-on experience with both front-end interfaces and back-end logic, particularly in projects that bridge design, technology, and financial services.`;
}
