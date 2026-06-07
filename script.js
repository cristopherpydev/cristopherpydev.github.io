document.addEventListener("DOMContentLoaded", () => {
  const codeBlock = document.querySelector(".terminal-body code");  
  codeBlock.innerHTML = "";

  const lines = [
    { text: ">>> from cristopher import Developer", isCommand: true },
    { text: ">>> dev = Developer()", isCommand: true },
    { text: ">>> dev.status", isCommand: true },
    { text: "'Looking for a job!'", isCommand: false, className: "string" },
    { text: ">>> dev.location", isCommand: true },
    { text: "'Tenerife (Islas Canarias)'", isCommand: false, className: "string" },
    { text: ">>> dev.hobbies", isCommand: true },
    { text: "['D&D 5e', 'MTG', 'Animals', 'Books']", isCommand: false, className: "output" },
    { text: ">>> dev.specialization", isCommand: true },
    { text: "'Full Stack Multiplatform'", isCommand: false, className: "string" },
    { text: ">>> dev.studies", isCommand: true },
    { text: "'CFGS Desarrollo de Aplicaciones Multiplataforma'", isCommand: false, className: "string" },
    { text: ">>> dev.interests", isCommand: true },
    { text: "['AI & Machine Learning', 'Backend development', 'Databases', 'APIs']", isCommand: false, className: "output" },
    { text: ">>> dev.wants", isCommand: true },
    { text: "['Internship', 'Part-time job']", isCommand: false, className: "output" }
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentLineSpan = null;

  const cursor = document.createElement("span");
  cursor.textContent = "|";
  cursor.classList.add("cursor");

  function typeLine() {
    if (lineIndex >= lines.length) {
      return;
    }

    const currentLine = lines[lineIndex];

    if (currentLine.isCommand) {
      if (charIndex === 0) {
        currentLineSpan = document.createElement("span");
        if (lineIndex > 0) codeBlock.insertBefore(document.createTextNode("\n"), cursor);
        codeBlock.insertBefore(currentLineSpan, cursor);
      }

      if (charIndex < currentLine.text.length) {
        currentLineSpan.textContent += currentLine.text.charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, 35); 
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 400); 
      }
    } else {
      currentLineSpan = document.createElement("span");
      currentLineSpan.className = currentLine.className;
      currentLineSpan.textContent = currentLine.text;
      
      codeBlock.insertBefore(document.createTextNode("\n"), cursor);
      codeBlock.insertBefore(currentLineSpan, cursor);
      
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 200); 
    }
  }

  
  codeBlock.appendChild(cursor);
  setTimeout(typeLine, 800); 
});