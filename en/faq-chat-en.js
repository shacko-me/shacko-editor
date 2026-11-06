// faq-chat-en.js - SHACKO guided FAQ chatbot (ENGLISH version, no API)

(function () {
  // === CATEGORIES + QUESTIONS (ENGLISH) ===
  const cats = [
    {
      id: "general",
      label: "General / Info",
      icon: "ℹ️",
      questions: [
        { q: "How does the service work?", a: "The services are completely digital, so there is no physical location. A 50% advance payment is required (PayPal / ACH). When the work is finished, a sample with a watermark and lower resolution will be sent to your email or WhatsApp. Once the full payment (100%) is made, the material will be sent without the watermark and in the corresponding resolution. No physical shipments of any kind are made, everything is digital." },
        { q: "What are the payment methods?", a: "Transfer via Banco General only (the account is sent via WhatsApp). PayPal for international payments." },
        { q: "What is the delivery time?", a: "It may vary according to the amount of work I have at the moment. I make sure to inform you of my availability in advance. Delivery can be within 1 to 5 days." },
        { q: "How much does it cost / pricing?", a: "The tasks have different costs, as each one usually has different procedures. Please visit the Prices / Payments section for more detailed information, or write to me for an exact quote for your project." },
        { q: "How will I receive the files?", a: "By email (high quality), WhatsApp (standard quality), or cloud hosting in the case of large files. Be specific in your request and provide the necessary information from the start; any requested change not previously established has an additional cost." },
        { q: "Do you work internationally / in English?", a: "Both national and international. Spanish or English language." },
        { q: "How can I contact you?", a: "If you see any phone number or WhatsApp link on this website, use that one. Otherwise, please contact me only by email. You can find the email address in the Contact section of the site." },
        { q: "Why the 50% advance payment?", a: "To start any project, we require an advance payment of 50% of the total service cost. This initial payment ensures that your time is reserved and guarantees that the work will be done efficiently. The remaining 50% must be paid upon project completion and before the final delivery of the files." },
        { q: "Who are you / About me?", a: "My name is Juan Pablo (JP). Since I was 15 years old I started using multimedia editing tools, both for video and image. I use (Shacko) as a pseudonym to offer my editing services. My work covers multimedia editing and the IT sector (Windows). 🇵🇦 1995 🇵🇦" }
      ]
    },
    {
      id: "imagen",
      label: "Image / Photos",
      icon: "🖼️",
      questions: [
        { q: "Can any photo be restored?", a: "No, there are photos that are too deteriorated to be restored. It is necessary to analyze their condition first to determine if they can be restored or not." },
        { q: "How much does photo restoration cost?", a: "Each restoration has a different cost, depending on the damage and the edits to be made. The photo is always evaluated beforehand to determine the price. Visit the Pricing / Payments section." },
        { q: "How should I send the photo to restore?", a: "It is recommended that the photos be scanned with a physical scanner. Applications such as CamScanner or photographs taken with a cell phone do not guarantee adequate work, as the photo loses many details in terms of quality and sharpness." },
        { q: "What types of photo editing do you offer?", a: "We offer everything from basic color adjustments, brightness, removal of unwanted elements, red-eye correction, and detailed touch-ups such as skin improvements and background changes, passport photo, festive events, etc. Visit the Photo Editing section for some samples." },
        { q: "Can you remove objects or people from a photo?", a: "Yes, we can remove unwanted elements from a photograph, as long as the affected area allows realistic editing. Otherwise it is preferable not to carry out the editing." },
        { q: "What photo formats do you accept and deliver?", a: "We accept a wide variety of formats, including JPEG, PNG, TIFF, and RAW, but we prefer to work with high-quality files. We deliver the photos in the format preferred by the customer (JPEG, TIFF, PNG, etc.) and can also adjust the resolution according to your needs." },
        { q: "How much does photo editing cost?", a: "The price varies depending on the complexity of the edition. Check the price brochure in the Pricing / Payments section." },
        { q: "Do you make mobile wallpapers?", a: "Yes, I can create custom mobile wallpapers. Tell me the style, colors or theme you want and I'll prepare options adapted to your device's resolution." }
      ]
    },
    {
      id: "video",
      label: "Video",
      icon: "🎬",
      questions: [
        { q: "What types of videos do you edit?", a: "We edit a wide range of videos, from promotional and corporate content to videos for social media, weddings, special events, cooking, school work, college, university, podcasts, desktop screen recordings and much more." },
        { q: "How should I send my video files?", a: "You can send us your files through platforms such as Google Drive, WeTransfer or any other cloud storage service. If there are several videos recorded and they must be in sequence, it is recommended that the file names be ordered (example: video_01.mp4, video_02.mp4, etc.)." },
        { q: "Do you accept videos from phone or camera?", a: "Yes, we accept videos recorded from any device. Just make sure the quality is as good as possible, and check that the recordings are in the right format (Vertical or Horizontal) to avoid a wrong final format." },
        { q: "What video formats do you accept?", a: "We work with the most common video formats, such as MP4, MOV, AVI, and WMV. If you have a different format, please contact us to check its compatibility." },
        { q: "How long does video editing take?", a: "Delivery time depends on the complexity of the project and the length of the video. Generally, the simplest projects can be ready in 1-5 business days. For more elaborate projects, we provide an estimate after reviewing the details." },
        { q: "Can I request revisions after editing?", a: "Yes, we offer a limited number of free revisions depending on the job you request. Additional revisions may have an extra cost." },
        { q: "What elements can be included in the video?", a: "We can add music, subtitles, transitions, audio enhancements, special effects, animated graphics, color correction, among others. Tell us what you need and we will include it. You can provide the music or choose from our royalty-free music library." },
        { q: "What level of confidentiality do my videos have?", a: "We guarantee total confidentiality and security with your content. Your videos will not be shared with third parties and will be stored securely during the editing process." }
      ]
    },
    {
      id: "documentos",
      label: "Documents",
      icon: "📄",
      questions: [
        { q: "What document editing services do you offer?", a: "We offer services such as text correction, formatting, restoration of damaged documents, and visual modifications to documents (titles, logos, stamps) in tools such as Photoshop, Word or PDF." },
        { q: "Do the documents have legal character?", a: "No document has a legal character. These documents are intended to be kept personally or for work for school, college or university." },
        { q: "Can you edit images inside documents?", a: "Yes, we can modify, add or delete images, graphics and any other visual elements in documents such as PDF or Word files." },
        { q: "Is it possible to translate / change the language of a document?", a: "Yes, we can translate documents maintaining the original design, without altering the content, only adapting it to the requested language." },
        { q: "How long does it take to edit a document?", a: "The time depends on the type of editing your document needs. Small fixes can be done in a few hours, while more detailed work can take days." },
        { q: "Do you offer spelling and grammar correction?", a: "Yes, we offer proofreading to correct spelling and grammatical errors in documents." },
        { q: "Can I request modifications after receiving the document?", a: "Yes, you can request additional revisions or modifications, and we will be happy to make the necessary adjustments based on your instructions, but it will have an additional price since it was not previously established." }
      ]
    },
    {
      id: "stickers",
      label: "Stickers / Vectors",
      icon: "✨",
      questions: [
        { q: "What kind of stickers or vectors can I request?", a: "We offer custom stickers and vectors for any purpose, from simple designs to detailed graphics. You can order icons, characters, illustrations for printing or digital use, etc." },
        { q: "In what format are stickers and vectors delivered?", a: "We deliver the stickers and vectors in formats such as SVG, EPS, PNG, and PDF, ensuring that they can be used for both print and web." },
        { q: "Can you convert an image to vector?", a: "Yes, we can convert your stickers or low-resolution images into scalable vectors, preserving the quality and details of the original design." },
        { q: "Do you make logos?", a: "No, I do not make logos or create personal brands. The vectorizations are usually of elements that have already been created." },
        { q: "What is the delivery time for stickers/vectors?", a: "Delivery time varies depending on the complexity of the design, but on average it takes between 1 to 7 business days." },
        { q: "Can I request adjustments after receiving the design?", a: "We offer a limited number of free revisions. If you need additional changes, we can make them for an additional fee." },
        { q: "Do you make WhatsApp stickers?", a: "Yes, I can create custom WhatsApp sticker packs. They are delivered ready to use (proper format and transparent background when needed)." },
        { q: "Do you offer Print on Demand (POD)?", a: "Yes, I offer Print on Demand (POD) service. I can prepare your designs (stickers, illustrations, etc.) ready to be printed on demand. Contact me with the details of your project." },
        { q: "Do you make mobile wallpapers?", a: "Yes, I can create custom mobile wallpapers. Tell me the style, colors or theme you want and I'll prepare options adapted to your device's resolution." }
      ]
    },
    {
      id: "menus",
      label: "Menus & Cards",
      icon: "🍽️",
      questions: [
        { q: "What information do I need for a food menu?", a: "To create a menu we need: the name of the restaurant, the logo (if it has one, in good quality), the complete list of dishes with descriptions and prices. You can provide a draft in a notebook or digital document." },
        { q: "Can I include images of the dishes on the menu?", a: "Yes, you can include images of your dishes. Make sure you provide them in high quality so that they look professional and attractive in the final design." },
        { q: "What menu formats do you offer?", a: "We offer menus in digital format (PDF, JPG, PNG) to share online or to print. We can also design menus adapted to social networks or mobile applications." },
        { q: "Is it possible to update an existing menu?", a: "Yes, we can make updates to already designed menus, whether to change prices, add new dishes or make any other modifications you need." },
        { q: "What information should a business card include?", a: "It is recommended that you include your name, title or position, company name, logo, phone number, email, and website. You can also include social media or a physical address if it is relevant to your business." },
        { q: "Do you make digital business cards?", a: "Business cards are digital so you can take the design to a printing location, while they can also be used digitally. They are delivered in formats such as PNG, JPG or PDF according to your preference." },
        { q: "What are the advantages of digital cards?", a: "Digital cards are easier to share, environmentally friendly, can be updated without reprinting and offer more interactivity (links and QR codes). They can be shared by mail, WhatsApp, social networks, etc." }
      ]
    },
    {
      id: "otros",
      label: "Other / Computers",
      icon: "💻",
      questions: [
        { q: "Do you offer computer services (PC / Windows)?", a: "Yes, I offer computer services focused on PC (Windows). You can tell me exactly what you need (optimization, maintenance, setup, troubleshooting, etc.) so I can see how I can help you." },
        { q: "Do you make WhatsApp stickers?", a: "Yes, I can create custom WhatsApp sticker packs. They are delivered ready to use (proper format and transparent background when needed)." },
        { q: "Do you offer Print on Demand (POD)?", a: "Yes, I offer Print on Demand (POD) service. I can prepare your designs (stickers, illustrations, etc.) ready to be printed on demand. Contact me with the details of your project." },
        { q: "Do you make mobile wallpapers?", a: "Yes, I can create custom mobile wallpapers. Tell me the style, colors or theme you want and I'll prepare options adapted to your device's resolution." }
      ]
    }
  ];

  // === UI TEXTS (ENGLISH) ===
  const t = {
    title: "SHACKO Assistant",
    greeting: "Hi! I'm the SHACKO assistant.\n\nChoose a category to see the most common questions:",
    back: "← Back",
    clear: "🗑️ Clear",
    random: "🎲 More questions",
    chooseCategory: "Choose a category:",
    chooseQuestion: "Choose a question:",
    freeInput: "Or type your question freely...",
    send: "Send",
    notFound: "I couldn't find an exact answer. You can choose another question from the category or contact me by email (or via the phone/WhatsApp number shown on this website).",
    placeholder: "Type here..."
  };

  // === STATE ===
  let currentCategory = null;

  // === UTILITIES ===
  function normalize(text) {
    return text.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[¿?¡!.,;:()\"']/g, " ")
      .replace(/\s+/g, " ").trim();
  }

  function findBestAnswer(userQuestion) {
    const q = normalize(userQuestion);
    if (q.length < 2) return null;

    let bestScore = 0;
    let bestAnswer = null;

    cats.forEach(cat => {
      cat.questions.forEach(item => {
        let score = 0;
        const words = normalize(item.q).split(" ");
        words.forEach(w => {
          if (w.length > 2 && q.includes(w)) score += 1.8;
        });
        if (q.includes(normalize(item.q).substring(0, 12))) score += 3;
        if (score > bestScore) {
          bestScore = score;
          bestAnswer = item.a;
        }
      });
    });

    return bestScore >= 2.5 ? bestAnswer : null;
  }

  // === UI ===
  function createChatUI() {
    const btn = document.createElement("div");
    btn.id = "shacko-chat-btn";
    btn.innerHTML = "💬";
    btn.title = t.title;
    btn.style.cssText = `
      position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px;
      background: #e85d04; color: white; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 26px; cursor: pointer; z-index: 99999;
      box-shadow: 0 4px 14px rgba(0,0,0,0.35); transition: transform 0.2s, box-shadow 0.2s;
    `;
    btn.onmouseover = () => { btn.style.transform = "scale(1.08)"; btn.style.boxShadow = "0 6px 20px rgba(232,93,4,0.45)"; };
    btn.onmouseout  = () => { btn.style.transform = "scale(1)"; btn.style.boxShadow = "0 4px 14px rgba(0,0,0,0.35)"; };

    const chat = document.createElement("div");
    chat.id = "shacko-chat-window";
    chat.style.cssText = `
      position: fixed; bottom: 90px; right: 24px; width: 360px; max-width: 95vw;
      height: 520px; background: #1a1a1a; border-radius: 16px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.55); display: none;
      flex-direction: column; z-index: 99999; overflow: hidden;
      border: 1px solid #333; font-family: system-ui, -apple-system, sans-serif;
    `;

    chat.innerHTML = `
      <div style="background:#e85d04; color:white; padding:12px 14px; font-weight:600; display:flex; justify-content:space-between; align-items:center; flex-shrink:0;">
        <span>${t.title}</span>
        <div style="display:flex; gap:10px; align-items:center;">
          <button id="shacko-clear" title="${t.clear}" style="background:transparent; border:none; color:white; cursor:pointer; font-size:15px; padding:2px 4px;">🗑️</button>
          <span id="shacko-chat-close" style="cursor:pointer; font-size:22px; line-height:1; padding:0 4px;">×</span>
        </div>
      </div>
      <div id="shacko-chat-messages" style="flex:1; overflow-y:auto; padding:14px; display:flex; flex-direction:column; gap:10px; background:#161616;"></div>
      <div id="shacko-nav" style="padding:8px 12px; border-top:1px solid #333; display:none; gap:8px; background:#1a1a1a; flex-shrink:0;"></div>
      <div style="padding:10px 12px; border-top:1px solid #333; display:flex; gap:8px; background:#1a1a1a; flex-shrink:0;">
        <input id="shacko-chat-input" type="text" placeholder="${t.placeholder}" autocomplete="off"
          style="flex:1; padding:10px 12px; border-radius:10px; border:1px solid #444; background:#2a2a2a; color:#fff; outline:none; font-size:13.5px;">
        <button id="shacko-chat-send" style="background:#e85d04; color:white; border:none; padding:0 16px; border-radius:10px; cursor:pointer; font-weight:600; font-size:13.5px;">
          ${t.send}
        </button>
      </div>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(chat);

    const messages = chat.querySelector("#shacko-chat-messages");
    const input = chat.querySelector("#shacko-chat-input");
    const sendBtn = chat.querySelector("#shacko-chat-send");
    const closeBtn = chat.querySelector("#shacko-chat-close");
    const clearBtn = chat.querySelector("#shacko-clear");
    const nav = chat.querySelector("#shacko-nav");

    function addMessage(text, isUser = false) {
      const div = document.createElement("div");
      div.style.cssText = `
        max-width: 90%; padding: 10px 13px; border-radius: 14px; line-height: 1.45; font-size: 13.5px;
        white-space: pre-wrap; word-break: break-word;
        ${isUser
          ? "align-self:flex-end; background:#e85d04; color:white; border-bottom-right-radius:4px;"
          : "align-self:flex-start; background:#2c2c2c; color:#eee; border-bottom-left-radius:4px;"}
      `;
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      return div;
    }

    function clearMessages() {
      messages.innerHTML = "";
    }

    function chipStyle(primary = false) {
      return `
        background: ${primary ? "#e85d04" : "#2c2c2c"};
        color: white; border: 1px solid ${primary ? "#e85d04" : "#444"};
        border-radius: 20px; padding: 6px 12px; font-size: 12.5px;
        cursor: pointer; transition: background 0.15s;
      `;
    }

    function showNav(showBack = true) {
      nav.style.display = "flex";
      nav.innerHTML = "";

      if (showBack) {
        const backBtn = document.createElement("button");
        backBtn.textContent = t.back;
        backBtn.style.cssText = chipStyle(true);
        backBtn.onclick = () => goBack();
        nav.appendChild(backBtn);
      }

      if (currentCategory) {
        const randBtn = document.createElement("button");
        randBtn.textContent = t.random;
        randBtn.style.cssText = chipStyle(false);
        randBtn.onclick = () => showQuestions(currentCategory, true);
        nav.appendChild(randBtn);
      }
    }

    function hideNav() {
      nav.style.display = "none";
      nav.innerHTML = "";
    }

    function showCategories() {
      currentCategory = null;
      hideNav();
      clearMessages();
      addMessage(t.greeting);

      const wrap = document.createElement("div");
      wrap.style.cssText = "display:flex; flex-direction:column; gap:8px; margin-top:6px;";

      cats.forEach(cat => {
        const b = document.createElement("button");
        b.type = "button";
        b.innerHTML = `${cat.icon}  ${cat.label}`;
        b.style.cssText = `
          background:#2c2c2c; color:#eee; border:1px solid #444;
          border-radius:12px; padding:11px 14px; font-size:14px;
          cursor:pointer; text-align:left; transition: background 0.15s, border-color 0.15s;
        `;
        b.onmouseover = () => { b.style.background = "#3a3a3a"; b.style.borderColor = "#e85d04"; };
        b.onmouseout  = () => { b.style.background = "#2c2c2c"; b.style.borderColor = "#444"; };
        b.onclick = () => {
          currentCategory = cat.id;
          showQuestions(cat.id);
        };
        wrap.appendChild(b);
      });

      messages.appendChild(wrap);
      messages.scrollTop = messages.scrollHeight;
    }

    function showQuestions(catId, randomize = false) {
      const cat = cats.find(c => c.id === catId);
      if (!cat) return;

      clearMessages();
      addMessage(`${cat.icon} ${cat.label}\n\n${t.chooseQuestion}`);

      let list = [...cat.questions];

      if (randomize && list.length > 4) {
        list = list.sort(() => Math.random() - 0.5).slice(0, Math.min(5, list.length));
      }

      const wrap = document.createElement("div");
      wrap.style.cssText = "display:flex; flex-direction:column; gap:7px; margin-top:6px;";

      list.forEach((item) => {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = item.q;
        b.style.cssText = `
          background:#2c2c2c; color:#eee; border:1px solid #444;
          border-radius:12px; padding:10px 13px; font-size:13px;
          cursor:pointer; text-align:left; transition: background 0.15s, border-color 0.15s;
          line-height:1.35;
        `;
        b.onmouseover = () => { b.style.background = "#3a3a3a"; b.style.borderColor = "#e85d04"; };
        b.onmouseout  = () => { b.style.background = "#2c2c2c"; b.style.borderColor = "#444"; };
        b.onclick = () => showAnswer(item);
        wrap.appendChild(b);
      });

      messages.appendChild(wrap);
      showNav(true);
      messages.scrollTop = messages.scrollHeight;
    }

    function showAnswer(item) {
      clearMessages();
      addMessage(item.q, true);

      setTimeout(() => {
        addMessage(item.a);
        showNav(true);
      }, 350);
    }

    function goBack() {
      showCategories();
    }

    function handleSend() {
      const text = input.value.trim();
      if (!text) return;

      addMessage(text, true);
      input.value = "";
      input.focus();

      setTimeout(() => {
        const answer = findBestAnswer(text);
        if (answer) {
          addMessage(answer);
        } else {
          addMessage(t.notFound);
        }
        showNav(true);
      }, 400);
    }

    // Events
    sendBtn.onclick = handleSend;
    input.onkeydown = (e) => { if (e.key === "Enter") handleSend(); };

    clearBtn.onclick = () => {
      currentCategory = null;
      showCategories();
    };

    btn.onclick = () => {
      const isOpen = chat.style.display === "flex";
      chat.style.display = isOpen ? "none" : "flex";
      if (!isOpen) {
        if (messages.children.length === 0) showCategories();
        setTimeout(() => input.focus(), 50);
      }
    };

    closeBtn.onclick = () => { chat.style.display = "none"; };

    // Start
    showCategories();
  }

  // === INIT ===
  function initShackoChat() {
    if (document.getElementById("shacko-chat-btn")) return;
    createChatUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initShackoChat);
  } else {
    initShackoChat();
  }
})();