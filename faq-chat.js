// faq-chat.js - Chatbot FAQ guiado por categorías para SHACKO (versión ESPAÑOL, sin API)

(function () {
  // === CATEGORÍAS + PREGUNTAS (ESPAÑOL) ===
  const cats = [
    {
      id: "general",
      label: "General / Información",
      icon: "ℹ️",
      questions: [
        { q: "¿Cómo funciona el servicio?", a: "Los servicios son completamente digitales, no existe un local. Se paga el 50% por adelantado (PayPal / ACH). Cuando el trabajo esté terminado se envía una muestra con marca de agua y en resolución inferior a tu correo o WhatsApp. Al realizar el pago total (100%) se envía el material final sin marca de agua y en la resolución correspondiente. No se hacen envíos físicos de ningún tipo, todo es digital." },
        { q: "¿Cuáles son las formas de pago?", a: "Transferencia por Banco General únicamente (la cuenta se envía por WhatsApp). PayPal para pagos internacionales." },
        { q: "¿Cuánto tarda la entrega?", a: "Puede variar de acuerdo con la cantidad de trabajo que tenga en el momento. Antes me aseguro de avisarte mi disponibilidad. Generalmente la entrega es de 1 a 5 días." },
        { q: "¿Cuánto cuesta / precios?", a: "Los trabajos tienen diversos costos porque cada uno suele tener diferentes procedimientos. Visita la sección de Precios / Pagos para información más detallada, o escríbeme para darte un presupuesto exacto según tu proyecto." },
        { q: "¿Cómo recibo los archivos?", a: "Por correo (alta calidad), WhatsApp (calidad estándar), o alojamiento en la nube en el caso de archivos pesados. Sé específico en tu solicitud desde el principio; cualquier cambio no establecido previamente tiene costo adicional." },
        { q: "¿Trabajas internacionalmente / en inglés?", a: "Trabajo tanto a nivel nacional como internacional. Idioma español o inglés." },
        { q: "¿Cómo te contacto?", a: "Si ves algún número de teléfono o enlace de WhatsApp en esta web, úsalo. De lo contrario, contáctame únicamente por correo electrónico. Encontrarás el correo en la sección de Contacto del sitio." },
        { q: "¿Por qué el pago del 50% por adelantado?", a: "Para iniciar cualquier proyecto solicitamos un pago del 50% del costo total por adelantado. Este pago reserva tu tiempo y garantiza que el trabajo se realice de manera eficiente. El restante 50% se paga al finalizar el proyecto y antes de la entrega final de los archivos." },
        { q: "¿Quién eres / Sobre mí?", a: "Mi nombre es Juan Pablo (JP). Desde los 15 años empecé a utilizar herramientas de edición multimedia, tanto de video como imagen. Utilizo (Shacko) como seudónimo para ofrecer mis servicios de edición. Mi trabajo abarca la edición multimedia y el sector de informática (Windows). 🇵🇦 1995 🇵🇦" }
      ]
    },
    {
      id: "imagen",
      label: "Imagen / Fotos",
      icon: "🖼️",
      questions: [
        { q: "¿Se puede restaurar cualquier foto?", a: "No todas las fotos se pueden restaurar. Hay fotos que están muy deterioradas y no es posible restaurarlas. Se debe analizar el estado en el que se encuentra para determinar si es apta para ser restaurada o no." },
        { q: "¿Cuánto cuesta restaurar una foto?", a: "Cada restauración tiene un costo diferente, depende del daño y las ediciones a realizar. Siempre se evalúa la foto antes para poder determinar el precio. Visita la sección de Precios / Pagos." },
        { q: "¿Cómo debo enviar la foto a restaurar?", a: "Se recomienda que las fotos estén escaneadas con un escáner físico. Aplicaciones como CamScanner o fotografías tomadas con el celular no garantizan un trabajo adecuado, ya que la foto pierde muchos detalles de calidad y nitidez." },
        { q: "¿Qué tipos de edición de fotos ofrecen?", a: "Ofrecemos desde ajustes básicos de color, brillo, eliminación de elementos no deseados, corrección de ojos rojos, y retoques detallados como mejoras en la piel y cambios de fondo, foto carné, eventos festivos, etc. Visita la sección de Edición de Fotografías para ver algunas muestras." },
        { q: "¿Pueden eliminar objetos o personas de una foto?", a: "Sí, podemos eliminar elementos no deseados de una fotografía, siempre que el área afectada permita una edición realista. De lo contrario es preferible no llevar a cabo la edición." },
        { q: "¿Qué formatos de foto aceptan y en qué formato entregan?", a: "Aceptamos una amplia variedad de formatos, incluidos JPEG, PNG, TIFF y RAW, pero preferimos trabajar con archivos de alta calidad. Entregamos las fotografías en el formato que prefiera el cliente (JPEG, TIFF, PNG, etc.) y podemos ajustar la resolución según sus necesidades." },
        { q: "¿Cuánto cuesta editar una fotografía?", a: "El precio varía según la complejidad de la edición. Consulta el folleto de precios en la sección Precios / Pagos." },
        { q: "¿Haces fondos de pantalla para móvil?", a: "Sí, puedo crear fondos de pantalla personalizados para móvil. Dime el estilo, colores o temática que deseas y te preparo opciones adaptadas a la resolución de tu dispositivo." }
      ]
    },
    {
      id: "video",
      label: "Video",
      icon: "🎬",
      questions: [
        { q: "¿Qué tipos de videos editan?", a: "Editamos una amplia gama de videos: contenido promocional y corporativo, videos para redes sociales, bodas, eventos especiales, cocina, trabajos escolares, universidad, podcast, grabaciones de pantalla y mucho más." },
        { q: "¿Cómo debo enviar mis archivos de video?", a: "Puedes enviarnos tus archivos a través de Google Drive, WeTransfer o cualquier otro servicio de almacenamiento en la nube. Si son varios videos que deben ir en secuencia, nómbralos ordenadamente (ejemplo: video_01.mp4, video_02.mp4, etc.)." },
        { q: "¿Aceptan videos del celular o cámara?", a: "Sí, aceptamos videos grabados desde cualquier dispositivo. Solo asegúrate de que la calidad sea lo mejor posible y verifica que las grabaciones estén en el formato adecuado (Horizontal o Vertical) para evitar un formato final erróneo." },
        { q: "¿Qué formatos de video aceptan?", a: "Trabajamos con los formatos de video más comunes: MP4, MOV, AVI y WMV. Si tienes un formato diferente, contáctanos para verificar su compatibilidad." },
        { q: "¿Cuánto tiempo tarda la edición de un video?", a: "El tiempo de entrega depende de la complejidad del proyecto y la duración del video. Generalmente los proyectos más sencillos pueden estar listos en 1-5 días laborales. Para proyectos más elaborados proporcionamos un estimado una vez revisados los detalles." },
        { q: "¿Puedo pedir revisiones después de editar?", a: "Sí, ofrecemos un número limitado de revisiones gratuitas dependiendo del trabajo que solicites. Revisiones adicionales pueden tener un costo extra." },
        { q: "¿Qué elementos se pueden incluir en el video?", a: "Podemos agregar música, subtítulos, transiciones, mejoras de audio, efectos especiales, gráficos animados, corrección de color, entre otros. Cuéntanos qué necesitas y lo incluiremos en la edición. Puedes proporcionar la música o elegir de nuestra biblioteca libre de derechos." },
        { q: "¿Qué nivel de confidencialidad tienen mis videos?", a: "Garantizamos total confidencialidad y seguridad con tu contenido. Tus videos no serán compartidos con terceros y se almacenarán de manera segura durante el proceso de edición." }
      ]
    },
    {
      id: "documentos",
      label: "Documentos",
      icon: "📄",
      questions: [
        { q: "¿Qué servicios de edición de documentos ofrecen?", a: "Ofrecemos servicios como corrección de textos, cambio de formato, restauración de documentos dañados y modificaciones visuales (títulos, logos, sellos) en herramientas como Photoshop, Word o PDF." },
        { q: "¿Los documentos tienen carácter legal?", a: "Ningún documento posee carácter legal. Estos documentos tienen como objetivo ser conservados personalmente o para trabajos de escuela, colegio o universidad." },
        { q: "¿Pueden editar imágenes dentro de documentos?", a: "Sí, podemos modificar, agregar o eliminar imágenes, gráficos y cualquier otro elemento visual en documentos como PDF o archivos de Word." },
        { q: "¿Es posible traducir / cambiar el idioma de un documento?", a: "Sí, podemos traducir documentos manteniendo el diseño original, sin alterar el contenido, solo adaptándolo al idioma solicitado." },
        { q: "¿Cuánto tiempo toma editar un documento?", a: "El tiempo depende del tipo de edición que necesite tu documento. Pequeñas correcciones pueden hacerse en unas horas, mientras que trabajos más detallados pueden tardar días." },
        { q: "¿Ofrecen corrección ortográfica y gramatical?", a: "Sí, ofrecemos revisión de textos para corregir errores ortográficos y gramaticales en documentos." },
        { q: "¿Puedo solicitar modificaciones después de recibir el documento?", a: "Sí, puedes solicitar revisiones o modificaciones adicionales, y estaremos encantados de hacer los ajustes necesarios según tus indicaciones, pero tendrá un precio adicional, ya que no fue establecido previamente." }
      ]
    },
    {
      id: "stickers",
      label: "Stickers / Vectores",
      icon: "✨",
      questions: [
        { q: "¿Qué tipo de stickers o vectores puedo solicitar?", a: "Ofrecemos stickers y vectores personalizados para cualquier propósito: desde diseños simples hasta gráficos detallados. Puedes pedir íconos, personajes, ilustraciones para impresión o uso digital, etc." },
        { q: "¿En qué formato entregan los stickers y vectores?", a: "Entregamos los stickers y vectores en formatos como SVG, EPS, PNG y PDF, garantizando que se puedan utilizar tanto para impresión como para web." },
        { q: "¿Pueden convertir una imagen a vector?", a: "Sí, podemos convertir tus stickers o imágenes de baja resolución en vectores escalables, preservando la calidad y los detalles del diseño original." },
        { q: "¿Haces logos?", a: "No, no hago logos ni creo marcas personales. Las vectorizaciones suelen ser de elementos que ya han sido creados." },
        { q: "¿Cuál es el tiempo de entrega de stickers/vectores?", a: "El tiempo de entrega varía según la complejidad del diseño, pero en promedio tardamos entre 1 a 7 días hábiles." },
        { q: "¿Puedo pedir ajustes después de recibir el diseño?", a: "Ofrecemos un número limitado de revisiones gratuitas. Si necesitas cambios adicionales, podemos hacerlos por una tarifa adicional." },
        { q: "¿Haces stickers para WhatsApp?", a: "Sí, puedo crear packs de stickers personalizados para WhatsApp. Se entregan listos para usar (formato adecuado y con fondo transparente cuando sea necesario)." },
        { q: "¿Ofreces impresión bajo demanda (POD)?", a: "Sí, ofrezco servicio de Impresión Bajo Demanda (POD). Puedo preparar tus diseños (stickers, ilustraciones, etc.) listos para ser impresos bajo demanda. Consúltame los detalles de tu proyecto." },
        { q: "¿Haces fondos de pantalla para móvil?", a: "Sí, puedo crear fondos de pantalla personalizados para móvil. Dime el estilo, colores o temática que deseas y te preparo opciones adaptadas a la resolución de tu dispositivo." }
      ]
    },
    {
      id: "menus",
      label: "Menús y Tarjetas",
      icon: "🍽️",
      questions: [
        { q: "¿Qué información necesito para un menú de comida?", a: "Para crear un menú necesitamos: el nombre del restaurante, el logo (si lo tiene, en buena calidad), la lista completa de platos con descripciones y precios. Puedes proporcionar un borrador en cuaderno o documento digital." },
        { q: "¿Puedo incluir imágenes de los platos en el menú?", a: "Sí, puedes incluir imágenes de tus platos. Asegúrate de proporcionarlas en alta calidad para que se vean profesionales y atractivas en el diseño final." },
        { q: "¿Qué formatos de menú ofrecen?", a: "Ofrecemos menús en formato digital (PDF, JPG, PNG) para compartir online o para imprimir. También podemos diseñar menús adaptados a redes sociales o aplicaciones móviles." },
        { q: "¿Es posible actualizar un menú ya existente?", a: "Sí, podemos realizar actualizaciones en menús ya diseñados, ya sea para cambiar precios, agregar nuevos platos o hacer cualquier otra modificación que necesites." },
        { q: "¿Qué información debe llevar una tarjeta de presentación?", a: "Se recomienda incluir: nombre, título o cargo, nombre de la empresa, logotipo, número de teléfono, correo electrónico y sitio web. También puedes incluir redes sociales o una dirección física si es relevante." },
        { q: "¿Hacen tarjetas de presentación digitales?", a: "Las tarjetas de presentación son digitales. Puedes llevar el diseño a un lugar de impresión y también utilizarlas de manera digital. Se entregan en formatos como PNG, JPG o PDF según tu preferencia." },
        { q: "¿Cuáles son las ventajas de las tarjetas digitales?", a: "Las tarjetas digitales son más fáciles de compartir, ecológicas, se pueden actualizar sin volver a imprimir y ofrecen más interactividad (enlaces y códigos QR). Se pueden compartir por correo, WhatsApp, redes sociales, etc." }
      ]
    },
    {
      id: "otros",
      label: "Otros / Computadoras",
      icon: "💻",
      questions: [
        { q: "¿Ofreces servicios de computación (PC / Windows)?", a: "Sí, ofrezco servicios de computación orientados a PC (Windows). Puedes contarme qué necesitas exactamente (optimización, mantenimiento, configuración, resolución de problemas, etc.) para ver cómo puedo ayudarte." },
        { q: "¿Haces stickers para WhatsApp?", a: "Sí, puedo crear packs de stickers personalizados para WhatsApp. Se entregan listos para usar (formato adecuado y con fondo transparente cuando sea necesario)." },
        { q: "¿Ofreces impresión bajo demanda (POD)?", a: "Sí, ofrezco servicio de Impresión Bajo Demanda (POD). Puedo preparar tus diseños (stickers, ilustraciones, etc.) listos para ser impresos bajo demanda. Consúltame los detalles de tu proyecto." },
        { q: "¿Haces fondos de pantalla para móvil?", a: "Sí, puedo crear fondos de pantalla personalizados para móvil. Dime el estilo, colores o temática que deseas y te preparo opciones adaptadas a la resolución de tu dispositivo." }
      ]
    }
  ];

  // === TEXTOS DE INTERFAZ (ESPAÑOL) ===
  const t = {
    title: "Asistente SHACKO",
    greeting: "¡Hola! Soy el asistente de SHACKO.\n\nElige una categoría para ver las preguntas más comunes:",
    back: "← Atrás",
    clear: "🗑️ Limpiar",
    random: "🎲 Más preguntas",
    chooseCategory: "Elige una categoría:",
    chooseQuestion: "Elige una pregunta:",
    freeInput: "O escribe tu pregunta libremente...",
    send: "Enviar",
    notFound: "No encontré una respuesta exacta. Puedes elegir otra pregunta de la categoría o contactarme por correo (o por el número/WhatsApp que aparezca en esta web).",
    placeholder: "Escribe aquí..."
  };

  // === ESTADO ===
  let currentCategory = null;

  // === UTILIDADES ===
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

    // Eventos
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

    // Iniciar
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