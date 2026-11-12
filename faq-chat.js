// faq-chat.js - Chatbot FAQ SHACKO (ES/EN, sin API)
(function () {
  function detectLang() {
    const htmlLang = (document.documentElement.lang || "").toLowerCase();
    if (htmlLang.startsWith("en")) return "en";
    if (htmlLang.startsWith("es")) return "es";
    const path = (window.location.pathname || "").toLowerCase();
    if (path.includes("/en/") || path.startsWith("/en")) return "en";
    if (path.includes("/es/") || path.startsWith("/es")) return "es";
    return "es";
  }
  const LANG = detectLang();

  const SECTION_CONFIG = {
    es: {
      groups: {
        photography: { label: "fotografía",              patterns: ["fotografia","fotos","foto","imagen","imagenes"] },
        audio:       { label: "audio",                   patterns: ["audio","audios"] },
        video:       { label: "video",                   patterns: ["video","videos"] },
        document:    { label: "documentos",              patterns: ["documento","documentos"] },
        sticker:     { label: "stickers y vectores",     patterns: ["sticker","stickers","vector","vectores"] },
        card:        { label: "tarjetas de presentación", patterns: ["tarjeta","tarjetas"] },
        menu:        { label: "menús de comida",         patterns: ["menu","menus","menú"] },
        computer:    { label: "computadoras",
          patterns: ["computadora","computadoras","computador","computadores","ordenador","ordenadores","pc","pcs","laptop","laptops","portatil","portatiles","windows","formatear","formateo","teamviewer","soporte remoto","bloatware","diagnostico","equipo nuevo","configuracion de equipo nuevo"] },
        pod:         { label: "print on demand (POD)",   patterns: ["pod","print on demand","impresion bajo demanda"] },
        wallpaper:   { label: "fondos de pantalla",      patterns: ["fondo de pantalla","fondos de pantalla","wallpaper","fondo movil","fondos movil","modelo de movil","modelo de celular","fondo para tablet","fondo para pc"] },
        pricing:     { label: "precios y pagos",         patterns: ["precio","precios","costo","costos","tarifa","tarifas","pago","pagos","presupuesto"] },
        faq:         { label: "preguntas frecuentes",    patterns: ["faq","preguntas frecuentes"] }
      },
      pages: {
        photo_restoration: { label: "Restauración de Fotografías", group: "photography",
          url: "https://shacko-me.github.io/shacko-editor/restauracion-de-fotografias/",
          patterns: ["restauracion de foto","restauracion de imagen","restaurar foto","restaurar imagen","reparar foto","reparar imagen","arreglar foto","foto vieja","foto antigua","foto dañada","imagen vieja","imagen antigua","imagen dañada","recuperar foto","restauracion"] },
        photo_editing: { label: "Edición de Fotografías", group: "photography",
          url: "https://shacko-me.github.io/shacko-editor/edicion-de-fotografias/",
          patterns: ["edicion de foto","edicion de imagen","editar foto","editar imagen","edicion fotografica","retoque fotografico","retocar foto","carnet","foto de carnet","foto de carne","foto carnet","foto carne","foto para carnet","foto para carne","foto tipo carnet","foto tipo carne","foto de identificacion","foto para identificacion","foto identificacion","cambiar fondo de foto","quitar fondo de foto","cambiar el fondo de una foto","quitar el fondo de una foto","eliminar fondo de foto","correccion de color de foto","mejorar foto","mejorar una foto","retocar una foto"] },
        audio_editing: { label: "Edición de Audio", group: "audio",
          url: "https://shacko-me.github.io/shacko-editor/ediciones-de-audio/",
          patterns: ["editar audio","edicion de audio","ediciones de audio","editar podcast","separar vocal","separar instrumental","quitar ruido","eliminar ruido","cambiar formato de audio","optimizar audio"] },
        video_editing: { label: "Edición de Video", group: "video",
          url: "https://shacko-me.github.io/shacko-editor/videos-editados/",
          patterns: ["editar video","editar videos","edicion de video","videos editados","video para redes","video para tiktok","video para instagram","video para reels","compilacion de videos","compilar videos","overlay","twitch","obs","sincronizacion de audio y video","presentacion de diapositivas","video de viaje","camara lenta"] },
        document_editing: { label: "Edición de Documentos", group: "document",
          url: "https://shacko-me.github.io/shacko-editor/edicion-de-documentos/",
          patterns: ["editar documento","edicion de documento","documento pdf","documento word","corregir texto","correccion de texto","diploma","boletin","traducir documento","documento escaneado"] },
        logos_stickers: { label: "Logos y Stickers", group: "sticker",
          url: "https://shacko-me.github.io/shacko-editor/logos-stickers/",
          patterns: ["logo","logos","vector","vectores","vectorizar","vectorizacion","vectorizar imagen","convertir a vector","imagen a vector"] },
        whatsapp_stickers: { label: "Stickers para WhatsApp", group: "sticker",
          url: "https://shacko-me.github.io/shacko-editor/stickers-para-whatsapp/",
          patterns: ["sticker para whatsapp","stickers para whatsapp","sticker whatsapp","stickers whatsapp","pack de stickers"] },
        business_cards: { label: "Tarjetas de Presentación", group: "card",
          url: "https://shacko-me.github.io/shacko-editor/tarjetas-de-presentacion/",
          patterns: ["tarjeta de presentacion","tarjetas de presentacion","tarjeta digital","tarjetas digitales","actualizar tarjeta","formato de tarjeta"] },
        food_menus: { label: "Menús de Comida", group: "menu",
          url: "https://shacko-me.github.io/shacko-editor/menus-de-comida/",
          patterns: ["menu de comida","menus de comida","menu restaurante","diseno de menu","diseno de menus","estilo de menu","tema de menu","plantilla de menu"] },
        computer_services: { label: "Servicio de Computadoras", group: "computer",
          url: "https://shacko-me.github.io/shacko-editor/servicio-de-computadoras/",
          patterns: ["servicio de computadora","servicio de computadoras","servicio de pc","servicios de pc","reparar computadora","reparar pc","reparar laptop","arreglar pc","arreglar computadora","reparacion de pc","reparacion de computadora","mantenimiento pc","mantenimiento de pc","optimizacion pc","optimizar pc","servicio tecnico pc","servicio tecnico","instalacion de programa","instalacion de programas","instalar programa","instalar programas","instalacion de software","instalar software","instalacion de aplicaciones","instalar aplicaciones","formatear pc","formateo de pc","formatear computadora","formateo de computadora","reinstalar windows","instalar windows","instalacion de windows","pc lenta","computadora lenta","laptop lenta","virus","antivirus","eliminar virus","quitar virus","malware","spyware","configuracion de pc","configurar pc","drivers","actualizar drivers","soporte remoto","bloatware","equipo nuevo"] },
        pod: { label: "Print on Demand (POD)", group: "pod",
          url: "https://shacko-me.github.io/shacko-editor/print-on-demand-pod/",
          patterns: ["print on demand","impresion bajo demanda","disenos para pod","diseno para pod","archivos para pod","preparar archivos para imprimir"] },
        mobile_wallpapers: { label: "Fondos de Pantalla Móvil", group: "wallpaper",
          url: "https://shacko-me.github.io/shacko-editor/fondos-de-pantalla-movil/",
          patterns: ["fondo de pantalla movil","fondos de pantalla movil","wallpaper movil","fondo para movil","fondos para movil","modelo de movil","modelo de celular","fondo para tablet","fondo para pc"] },
        pricing: { label: "Precios y Pagos", group: "pricing",
          url: "https://shacko-me.github.io/shacko-editor/precios-pagos/",
          patterns: ["lista de precios","tabla de precios","seccion de precios","precios y pagos","metodos de pago"] },
        faq: { label: "Preguntas Frecuentes", group: "faq",
          url: "https://shacko-me.github.io/shacko-editor/preguntas-frecuentes/",
          patterns: ["preguntas frecuentes","seccion de preguntas","seccion faq"] }
      }
    },
    en: {
      groups: {
        photography: { label: "photography",         patterns: ["photography","photos","photo","images","image"] },
        audio:       { label: "audio",               patterns: ["audio"] },
        video:       { label: "video",               patterns: ["video","videos"] },
        document:    { label: "documents",           patterns: ["document","documents"] },
        sticker:     { label: "stickers and vectors", patterns: ["sticker","stickers","vector","vectors"] },
        card:        { label: "business cards",      patterns: ["card","cards"] },
        menu:        { label: "food menus",          patterns: ["menu","menus"] },
        computer:    { label: "computers",
          patterns: ["computer","computers","pc","pcs","laptop","laptops","desktop","windows","format","formatting","teamviewer","remote support","bloatware","diagnostic","new computer setup","new equipment"] },
        pod:         { label: "print on demand (POD)", patterns: ["pod","print on demand"] },
        wallpaper:   { label: "mobile wallpapers",   patterns: ["wallpaper","wallpapers","phone wallpaper","mobile wallpaper","phone model","mobile model","tablet wallpaper","pc wallpaper"] },
        pricing:     { label: "pricing and payments", patterns: ["price","prices","pricing","cost","costs","rate","rates","payment","payments","quote"] },
        faq:         { label: "frequently asked questions", patterns: ["faq"] }
      },
      pages: {
        photo_restoration: { label: "Photo Restoration", group: "photography",
          url: "https://shacko-me.github.io/shacko-editor/en/photo-restoration/",
          patterns: ["photo restoration","restore photo","restore image","repair photo","repair image","fix photo","old photo","old image","damaged photo","damaged image","recover photo","restoration"] },
        photo_editing: { label: "Photo Editing", group: "photography",
          url: "https://shacko-me.github.io/shacko-editor/en/photo-editing/",
          patterns: ["photo editing","edit photo","edit image","image editing","retouch","retouching","id photo","id photos","id picture","id pictures","passport photo","passport photos","headshot","headshots","profile photo","profile picture","change photo background","remove photo background","change the background of a photo","remove the background of a photo","remove background","photo background","photo color correction","improve photo","improve a photo","retouch a photo"] },
        audio_editing: { label: "Audio Editing", group: "audio",
          url: "https://shacko-me.github.io/shacko-editor/en/audio-editing/",
          patterns: ["edit audio","audio editing","edit podcast","separate vocals","separate instrumental","remove noise","noise removal","change audio format","optimize audio"] },
        video_editing: { label: "Edited Videos", group: "video",
          url: "https://shacko-me.github.io/shacko-editor/en/edited-videos/",
          patterns: ["edit video","edit videos","video editing","edited video","video for social media","video for tiktok","video for instagram","video for reels","video compilation","compile videos","overlay","twitch","obs","audio video sync","slideshow","travel video","slow motion"] },
        document_editing: { label: "Document Editing", group: "document",
          url: "https://shacko-me.github.io/shacko-editor/en/document-editing/",
          patterns: ["edit document","document editing","pdf document","word document","correct text","text correction","diploma","report","translate document","scanned document"] },
        logos_stickers: { label: "Logos & Stickers", group: "sticker",
          url: "https://shacko-me.github.io/shacko-editor/en/logos-stickers/",
          patterns: ["logo","logos","vector","vectors","vectorize","vectorization","vectorize image","convert to vector","image to vector"] },
        whatsapp_stickers: { label: "WhatsApp Stickers", group: "sticker",
          url: "https://shacko-me.github.io/shacko-editor/en/whatsapp-stickers/",
          patterns: ["whatsapp stickers","whatsapp sticker","sticker pack","stickers for whatsapp"] },
        business_cards: { label: "Business Cards", group: "card",
          url: "https://shacko-me.github.io/shacko-editor/en/business-cards/",
          patterns: ["business card","business cards","digital card","digital cards","update card","card format"] },
        food_menus: { label: "Food Menus", group: "menu",
          url: "https://shacko-me.github.io/shacko-editor/en/food-menus/",
          patterns: ["food menu","food menus","restaurant menu","menu design","menu style","menu theme","menu template"] },
        computer_services: { label: "Computer Services", group: "computer",
          url: "https://shacko-me.github.io/shacko-editor/en/computer-services/",
          patterns: ["computer service","computer services","pc service","pc services","repair computer","repair pc","repair laptop","fix pc","fix computer","fix laptop","pc repair","computer repair","laptop repair","pc maintenance","computer maintenance","pc optimization","optimize pc","optimize computer","technical support pc","tech support","program installation","install program","install programs","install software","software installation","install applications","format pc","format computer","pc format","reinstall windows","install windows","windows installation","slow pc","slow computer","slow laptop","virus","antivirus","remove virus","malware","spyware","pc setup","pc configuration","setup pc","drivers","update drivers","remote support","bloatware","new computer setup","new equipment"] },
        pod: { label: "Print on Demand (POD)", group: "pod",
          url: "https://shacko-me.github.io/shacko-editor/en/print-on-demand-pod/",
          patterns: ["print on demand","print-ready files","designs for pod","design for pod","files for pod"] },
        mobile_wallpapers: { label: "Mobile Wallpapers", group: "wallpaper",
          url: "https://shacko-me.github.io/shacko-editor/en/mobile-wallpapers/",
          patterns: ["mobile wallpaper","mobile wallpapers","phone wallpaper","phone wallpapers","phone model","mobile model","tablet wallpaper","pc wallpaper"] },
        pricing: { label: "Pricing & Payments", group: "pricing",
          url: "https://shacko-me.github.io/shacko-editor/en/pricing-payments/",
          patterns: ["price list","price table","pricing section","payment methods"] },
        faq: { label: "FAQ", group: "faq",
          url: "https://shacko-me.github.io/shacko-editor/en/faq/",
          patterns: ["frequently asked questions","faq section"] }
      }
    }
  };

  const NAV_VERBS = {
    es: ["llevame","llevar","ir a","ir hacia","ve a","abre","abrir","muestrame","mostrar","seccion","pagina","quiero ver","donde esta","donde encuentro","donde puedo ver","accede","acceder","link","enlace","navega","navegar"],
    en: ["take me","go to","show me","open","section","page","where is","where can i find","where do i find","access","link","navigate","bring me","jump to"]
  };

  const CATS = {
    es: [
      { id: "general", label: "General / Información", icon: "ℹ️", questions: [
        { q: "¿Cómo funciona el servicio?", a: "Los servicios son completamente digitales, no existe un local. Se paga el 50% por adelantado (PayPal / ACH). Cuando el trabajo esté terminado se envía una muestra con marca de agua y en resolución inferior a tu correo o WhatsApp. Al realizar el pago total (100%) se envía el material final sin marca de agua y en la resolución correspondiente. No se hacen envíos físicos de ningún tipo, todo es digital." },
        { q: "¿Cuáles son las formas de pago?", a: "Transferencia por Banco General únicamente (la cuenta se proporciona al confirmar el pedido). PayPal para pagos internacionales." },
        { q: "¿Cuánto tarda la entrega?", a: "Puede variar de acuerdo con la cantidad de trabajo que tenga en el momento. Antes me aseguro de avisarte mi disponibilidad. Generalmente la entrega es de 1 a 5 días." },
        { q: "¿Cuánto cuesta / precios?", a: "Los trabajos tienen diversos costos porque cada uno suele tener diferentes procedimientos. Consulta la sección de Precios / Pagos para información más detallada, o escríbeme para darte un presupuesto exacto según tu proyecto.", link: "pricing" },
        { q: "¿Cómo recibo los archivos?", a: "Por correo electrónico (alta calidad), por WhatsApp si está disponible (calidad estándar), o alojamiento en la nube para archivos pesados. Sé específico en tu solicitud desde el principio; cualquier cambio no establecido previamente tiene costo adicional." },
        { q: "¿Trabajas internacionalmente / en inglés?", a: "Trabajo tanto a nivel nacional como internacional. Idioma español o inglés." },
        { q: "¿Cómo te contacto?", a: "Si ves algún número de teléfono o enlace de WhatsApp en esta web, úsalo. De lo contrario, contáctame por correo electrónico. Encontrarás el correo en la sección de Contacto del sitio.", link: "faq" },
        { q: "¿Corrigen errores en la entrega?", a: "Sí, si hay algún error de mi parte en la entrega, lo corrijo sin ningún costo adicional. Tu satisfacción es importante.", link: "faq" },
        { q: "¿Por qué el pago del 50% por adelantado?", a: "Para iniciar cualquier proyecto solicitamos un pago del 50% del costo total por adelantado. Este pago reserva tu tiempo y garantiza que el trabajo se realice de manera eficiente. El restante 50% se paga al finalizar el proyecto y antes de la entrega final de los archivos." },
        { q: "¿Quién eres / Sobre mí?", a: "Mi nombre es Juan Pablo (JP). Desde los 15 años empecé a utilizar herramientas de edición multimedia, tanto de video como imagen. Utilizo (Shacko) como seudónimo para ofrecer mis servicios de edición. Mi trabajo abarca la edición multimedia y el sector de informática (Windows). 🇵🇦 1995 🇵🇦" }
      ]},
      { id: "imagen", label: "Imagen / Fotos", icon: "🖼️", questions: [
        { q: "¿Se puede restaurar cualquier foto?", a: "No todas las fotos se pueden restaurar. Hay fotos que están muy deterioradas y no es posible restaurarlas. Se debe analizar el estado en el que se encuentra para determinar si es apta para ser restaurada o no." },
        { q: "¿Cuánto cuesta restaurar una foto?", a: "Cada restauración tiene un costo diferente, depende del daño y las ediciones a realizar. Siempre se evalúa la foto antes para poder determinar el precio. Consulta la sección de Precios / Pagos.", link: "pricing" },
        { q: "¿Cómo debo enviar la foto a restaurar?", a: "Se recomienda que las fotos estén escaneadas con un escáner físico. Aplicaciones como CamScanner o fotografías tomadas con el celular no garantizan un trabajo adecuado, ya que la foto pierde muchos detalles de calidad y nitidez." },
        { q: "¿Qué tipos de edición de fotos ofrecen?", a: "Ofrecemos desde ajustes básicos de color, brillo, eliminación de elementos no deseados, corrección de ojos rojos, y retoques detallados como mejoras en la piel y cambios de fondo, foto carné, eventos festivos, etc. Visita la sección de Edición de Fotografías para ver algunas muestras.", link: "photo_editing" },
        { q: "¿Pueden editar una foto para carné / identificación?", a: "Sí, realizamos edición de fotos tipo carné o identificación: ajuste de fondo, corrección de iluminación, recorte al formato requerido, etc. Visita la sección de Edición de Fotografías para ver muestras o escríbeme con los requisitos específicos.", link: "photo_editing" },
        { q: "¿Pueden quitar o cambiar el fondo de una foto?", a: "Sí, podemos eliminar o reemplazar el fondo de una fotografía según lo que necesites (fondo blanco para carné, fondo transparente, cambio de escenario, etc.). Cuéntame el estilo o color de fondo que deseas y te preparo la edición.", link: "photo_editing" },
        { q: "¿Pueden eliminar objetos o personas de una foto?", a: "Sí, podemos eliminar elementos no deseados de una fotografía, siempre que el área afectada permita una edición realista. De lo contrario es preferible no llevar a cabo la edición." },
        { q: "¿Qué formatos de foto aceptan y en qué formato entregan?", a: "Aceptamos una amplia variedad de formatos, incluidos JPEG, PNG, TIFF y RAW, pero preferimos trabajar con archivos de alta calidad. Entregamos las fotografías en el formato que prefiera el cliente (JPEG, TIFF, PNG, etc.) y podemos ajustar la resolución según sus necesidades." },
        { q: "¿Cuánto cuesta editar una fotografía?", a: "El precio varía según la complejidad de la edición. Consulta el folleto de precios en la sección Precios / Pagos.", link: "pricing" },
        { q: "¿Haces fondos de pantalla para móvil?", a: "Sí, puedo crear fondos de pantalla personalizados para móvil. Dime el estilo, colores o temática que deseas y te preparo opciones adaptadas a la resolución de tu dispositivo.", link: "mobile_wallpapers" }
      ]},
      { id: "video", label: "Video", icon: "🎬", questions: [
        { q: "¿Qué tipos de videos editan?", a: "Editamos una amplia gama de videos: contenido promocional y corporativo, videos para redes sociales, bodas, eventos especiales, cocina, trabajos escolares, universidad, podcast, grabaciones de pantalla y mucho más." },
        { q: "¿Pueden compilar varios videos en uno solo?", a: "Sí, hacemos compilaciones de videos, ya sea para redes sociales, presentaciones o proyectos personales. También podemos sincronizar audio e imagen y aplicar corrección de color.", link: "video_editing" },
        { q: "¿Hacen overlay para Twitch (OBS)?", a: "Sí, diseñamos overlays para transmisiones en vivo (Twitch, OBS). Cuéntame el estilo que buscas y te preparo una propuesta adaptada a tu canal.", link: "video_editing" },
        { q: "¿Cómo debo enviar mis archivos de video?", a: "Puedes enviarnos tus archivos a través de Google Drive, WeTransfer o cualquier otro servicio de almacenamiento en la nube. Si son varios videos que deben ir en secuencia, nómbralos ordenadamente (ejemplo: video_01.mp4, video_02.mp4, etc.)." },
        { q: "¿Aceptan videos del celular o cámara?", a: "Sí, aceptamos videos grabados desde cualquier dispositivo. Solo asegúrate de que la calidad sea lo mejor posible y verifica que las grabaciones estén en el formato adecuado (Horizontal o Vertical) para evitar un formato final erróneo." },
        { q: "¿Qué formatos de video aceptan?", a: "Trabajamos con los formatos de video más comunes: MP4, MOV, AVI y WMV. Si tienes un formato diferente, contáctanos para verificar su compatibilidad." },
        { q: "¿Cuánto tiempo tarda la edición de un video?", a: "El tiempo de entrega depende de la complejidad del proyecto y la duración del video. Generalmente los proyectos más sencillos pueden estar listos en 1-5 días laborales. Para proyectos más elaborados proporcionamos un estimado una vez revisados los detalles." },
        { q: "¿Puedo pedir revisiones después de editar?", a: "Sí, ofrecemos un número limitado de revisiones gratuitas dependiendo del trabajo que solicites. Revisiones adicionales pueden tener un costo extra." },
        { q: "¿Qué elementos se pueden incluir en el video?", a: "Podemos agregar música, subtítulos, transiciones, mejoras de audio, efectos especiales, gráficos animados, corrección de color, entre otros. Cuéntanos qué necesitas y lo incluiremos en la edición. Puedes proporcionar la música o elegir de nuestra biblioteca libre de derechos." },
        { q: "¿Qué nivel de confidencialidad tienen mis videos?", a: "Garantizamos total confidencialidad y seguridad con tu contenido. Tus videos no serán compartidos con terceros y se almacenarán de manera segura durante el proceso de edición." }
      ]},
      { id: "audio", label: "Audio", icon: "🎵", questions: [
        { q: "¿Qué ediciones de audio ofrecen?", a: "Ofrecemos eliminación de ruido de fondo, separación de vocal e instrumental, ajuste de volumen, sincronización, recorte de audio, efectos de transición, cambio de formato (WAV, FLAC, MP3, OGG, Opus, WMA) y optimización para redes sociales. Se recomienda usar audífonos para revisar el resultado.", link: "audio_editing" },
        { q: "¿Pueden separar la voz de la música de una canción?", a: "Sí, realizamos separación de pistas (vocal e instrumental) para proyectos escolares, universitarios o de uso personal. También podemos limpiar el audio y equilibrar niveles.", link: "audio_editing" },
        { q: "¿Qué formatos de audio manejan?", a: "Trabajamos con WAV, FLAC, MP3, OGG, Opus y WMA. Si tienes otro formato, contáctame para verificar compatibilidad.", link: "audio_editing" },
        { q: "¿Pueden optimizar audio para redes sociales?", a: "Sí, ajusto el audio para que se escuche claro y con buen nivel en plataformas como YouTube, TikTok, Instagram y podcasts.", link: "audio_editing" }
      ]},
      { id: "documentos", label: "Documentos", icon: "📄", questions: [
        { q: "¿Qué servicios de edición de documentos ofrecen?", a: "Ofrecemos servicios como corrección de textos, cambio de formato, restauración de documentos dañados y modificaciones visuales (títulos, logos, sellos) en herramientas como Photoshop, Word o PDF." },
        { q: "¿Qué tipos de documentos puedo enviar?", a: "Puedes enviar PDF, Word e imágenes (JPG, PNG) que necesiten edición, restauración o modificación. También puedo trabajar con diplomas, boletines, traducciones, etc.", link: "document_editing" },
        { q: "¿En qué formato entregan los documentos editados?", a: "Entrego los documentos en el mismo formato que me proporciones (Word, PDF) o en formato de imagen, según lo que necesites.", link: "document_editing" },
        { q: "¿Los documentos tienen carácter legal?", a: "Ningún documento posee carácter legal. Estos documentos tienen como objetivo ser conservados personalmente o para trabajos de escuela, colegio o universidad." },
        { q: "¿Pueden editar imágenes dentro de documentos?", a: "Sí, podemos modificar, agregar o eliminar imágenes, gráficos y cualquier otro elemento visual en documentos como PDF o archivos de Word." },
        { q: "¿Es posible traducir / cambiar el idioma de un documento?", a: "Sí, podemos traducir documentos manteniendo el diseño original, sin alterar el contenido, solo adaptándolo al idioma solicitado." },
        { q: "¿Cuánto tiempo toma editar un documento?", a: "El tiempo depende del tipo de edición que necesite tu documento. Pequeñas correcciones pueden hacerse en unas horas, mientras que trabajos más detallados pueden tardar días." },
        { q: "¿Ofrecen corrección ortográfica y gramatical?", a: "Sí, ofrecemos revisión de textos para corregir errores ortográficos y gramaticales en documentos." },
        { q: "¿Puedo solicitar modificaciones después de recibir el documento?", a: "Sí, puedes solicitar revisiones o modificaciones adicionales, y estaremos encantados de hacer los ajustes necesarios según tus indicaciones, pero tendrá un precio adicional, ya que no fue establecido previamente." }
      ]},
      { id: "stickers", label: "Stickers / Vectores", icon: "✨", questions: [
        { q: "¿Qué tipo de stickers o vectores puedo solicitar?", a: "Ofrecemos stickers y vectores personalizados para cualquier propósito: desde diseños simples hasta gráficos detallados. Puedes pedir íconos, personajes, ilustraciones para impresión o uso digital, etc." },
        { q: "¿En qué formato entregan los stickers y vectores?", a: "Entregamos los stickers y vectores en formatos como SVG, EPS, PNG y PDF, garantizando que se puedan utilizar tanto para impresión como para web." },
        { q: "¿Pueden convertir una imagen a vector?", a: "Sí, vectorizo stickers o imágenes de baja resolución, preservando la calidad y los detalles del diseño original. No creo logos desde cero ni marcas personales.", link: "logos_stickers" },
        { q: "¿Haces logos?", a: "No, no hago logos ni creo marcas personales. Las vectorizaciones suelen ser de elementos que ya han sido creados." },
        { q: "¿Cuál es el tiempo de entrega de stickers/vectores?", a: "El tiempo de entrega varía según la complejidad del diseño, pero en promedio tardamos entre 1 a 7 días hábiles." },
        { q: "¿Puedo pedir ajustes después de recibir el diseño?", a: "Ofrecemos un número limitado de revisiones gratuitas. Si necesitas cambios adicionales, podemos hacerlos por una tarifa adicional." },
        { q: "¿Haces stickers para WhatsApp?", a: "Sí, puedo crear packs de stickers personalizados para WhatsApp. Se entregan listos para usar (formato adecuado y con fondo transparente cuando sea necesario).", link: "whatsapp_stickers" },
        { q: "¿Ofreces impresión bajo demanda (POD)?", a: "No realizo la impresión bajo demanda (POD) directamente. Lo que ofrezco es el diseño y la preparación de archivos (stickers, ilustraciones, gráficos, etc.) optimizados y listos para que tú los utilices en un servicio de impresión bajo demanda. Consúltame los detalles de tu proyecto.", link: "pod" },
        { q: "¿Haces fondos de pantalla para móvil?", a: "Sí, puedo crear fondos de pantalla personalizados para móvil. Dime el estilo, colores o temática que deseas y te preparo opciones adaptadas a la resolución de tu dispositivo.", link: "mobile_wallpapers" }
      ]},
      { id: "menus", label: "Menús y Tarjetas", icon: "🍽️", questions: [
        { q: "¿Qué información necesito para un menú de comida?", a: "Para crear un menú necesitamos: el nombre del restaurante, el logo (si lo tiene, en buena calidad), la lista completa de platos con descripciones y precios. Puedes proporcionar un borrador en cuaderno o documento digital." },
        { q: "¿Qué estilos o temas ofrecen para menús?", a: "Podemos partir de una base, una imagen de ejemplo o plantillas que te ofrezco para que elijas el estilo que más te guste. Adapto el diseño al estilo de tu restaurante.", link: "food_menus" },
        { q: "¿Cuánto tarda el diseño de un menú?", a: "Un menú simple puede tardar entre 3 y 5 días hábiles. Diseños más complejos requieren más tiempo. Siempre te doy un estimado tras revisar los detalles.", link: "food_menus" },
        { q: "¿Puedo pedir menú impreso y digital a la vez?", a: "Sí, puedo crear ambos formatos para que tengas opciones para imprimir y compartir digitalmente.", link: "food_menus" },
        { q: "¿Puedo incluir imágenes de los platos en el menú?", a: "Sí, puedes incluir imágenes de tus platos. Asegúrate de proporcionarlas en alta calidad para que se vean profesionales y atractivas en el diseño final." },
        { q: "¿Qué formatos de menú ofrecen?", a: "Ofrecemos menús en formato digital (PDF, JPG, PNG) para compartir online o para imprimir. También podemos diseñar menús adaptados a redes sociales o aplicaciones móviles." },
        { q: "¿Es posible actualizar un menú ya existente?", a: "Sí, podemos realizar actualizaciones en menús ya diseñados, ya sea para cambiar precios, agregar nuevos platos o hacer cualquier otra modificación que necesites." },
        { q: "¿Qué información debe llevar una tarjeta de presentación?", a: "Se recomienda incluir: nombre, título o cargo, nombre de la empresa, logotipo, número de teléfono, correo electrónico y sitio web. También puedes incluir redes sociales o una dirección física si es relevante." },
        { q: "¿En qué formato recibo mi tarjeta digital?", a: "Las tarjetas digitales se entregan en PNG, JPG o PDF, según tu preferencia. Son ideales para compartir en redes o imprimir.", link: "business_cards" },
        { q: "¿Pueden actualizar mi tarjeta digital?", a: "Sí, si necesitas cambiar información de tu tarjeta, puedo hacer las modificaciones que requieras.", link: "business_cards" },
        { q: "¿Hacen tarjetas de presentación digitales?", a: "Las tarjetas de presentación son digitales. Puedes llevar el diseño a un lugar de impresión y también utilizarlas de manera digital. Se entregan en formatos como PNG, JPG o PDF según tu preferencia." },
        { q: "¿Cuáles son las ventajas de las tarjetas digitales?", a: "Las tarjetas digitales son más fáciles de compartir, ecológicas, se pueden actualizar sin volver a imprimir y ofrecen más interactividad (enlaces y códigos QR). Se pueden compartir por correo, WhatsApp, redes sociales, etc." }
      ]},
      { id: "otros", label: "Otros / Computadoras", icon: "💻", questions: [
        { q: "¿Ofreces servicios de computación (PC / Windows)?", a: "Sí, ofrezco servicios de computación orientados a PC (Windows). Puedes contarme qué necesitas exactamente (optimización, mantenimiento, configuración, resolución de problemas, etc.) para ver cómo puedo ayudarte.", link: "computer_services" },
        { q: "¿Cuánto cuesta formatear una PC?", a: "El formateo tiene un costo de 35 USD. También ofrecemos combos: formateo + programas básicos (40 USD) y formateo + configuración de Windows + programas (50 USD).", link: "computer_services" },
        { q: "¿Cuánto cuesta instalar programas?", a: "La instalación de programas tiene un costo de 10 USD. Puedo instalar suites de oficina, navegadores, antivirus, drivers y más.", link: "computer_services" },
        { q: "¿Ofrecen soporte remoto?", a: "Sí, brindo soporte técnico remoto vía TeamViewer para resolver problemas sin necesidad de desplazamiento. Ideal para diagnósticos, configuraciones y optimización.", link: "computer_services" },
        { q: "¿Eliminan programas innecesarios (bloatware)?", a: "Sí, elimino bloatware y programas innecesarios para mejorar el rendimiento y la limpieza del sistema.", link: "computer_services" },
        { q: "¿Configuran equipos nuevos?", a: "Sí, configuro equipos nuevos: sistema operativo, drivers, programas esenciales y personalización básica para que quede listo para usar.", link: "computer_services" },
        { q: "¿El formateo requiere entregar el equipo?", a: "El formateo y los servicios que requieren entrega física del equipo son para personas cercanas (conocidos o amigos de conocidos) por temas de ubicación. El resto de servicios (remotos) pueden ser de cualquier lugar.", link: "computer_services" },
        { q: "¿Reparan PCs lentas o con virus?", a: "Sí, diagnostico y soluciono problemas de rendimiento y seguridad en PC (Windows): eliminación de virus/malware, limpieza de archivos innecesarios, optimización del sistema, etc.", link: "computer_services" },
        { q: "¿Haces stickers para WhatsApp?", a: "Sí, puedo crear packs de stickers personalizados para WhatsApp. Se entregan listos para usar (formato adecuado y con fondo transparente cuando sea necesario).", link: "whatsapp_stickers" },
        { q: "¿Ofreces impresión bajo demanda (POD)?", a: "No realizo la impresión bajo demanda (POD) directamente. Lo que ofrezco es el diseño y la preparación de archivos (stickers, ilustraciones, gráficos, etc.) optimizados y listos para que tú los utilices en un servicio de impresión bajo demanda. Consúltame los detalles de tu proyecto.", link: "pod" },
        { q: "¿Haces fondos de pantalla para móvil?", a: "Sí, puedo crear fondos de pantalla personalizados para móvil. Dime el estilo, colores o temática que deseas y te preparo opciones adaptadas a la resolución de tu dispositivo.", link: "mobile_wallpapers" }
      ]}
    ],
    en: [
      { id: "general", label: "General / Information", icon: "ℹ️", questions: [
        { q: "How does the service work?", a: "Services are completely digital; there is no physical location. 50% is paid in advance (PayPal / ACH). When the work is finished, a watermarked sample at lower resolution is sent to your email or WhatsApp. Once the full payment (100%) is made, the final material is sent without watermark and at the corresponding resolution. No physical shipments are made of any kind; everything is digital." },
        { q: "What are the payment methods?", a: "Bank transfer via Banco General only (account details are provided upon order confirmation). PayPal for international payments." },
        { q: "How long does delivery take?", a: "It can vary depending on the current workload. Before starting, I make sure to let you know my availability. Delivery is generally 1 to 5 days." },
        { q: "How much does it cost / pricing?", a: "Jobs have different costs because each one usually involves different procedures. Check the Pricing / Payments section for more detailed information, or write to me for an exact quote based on your project.", link: "pricing" },
        { q: "How do I receive the files?", a: "By email (high quality), WhatsApp if available (standard quality), or cloud hosting for heavy files. Be specific in your request from the start; any change not previously agreed has an additional cost." },
        { q: "Do you work internationally / in English?", a: "I work both nationally and internationally. Languages: Spanish or English." },
        { q: "How do I contact you?", a: "If you see a phone number or WhatsApp link on this website, use it. Otherwise, contact me by email. You'll find the email in the Contact section of the site.", link: "faq" },
        { q: "Do you correct delivery errors?", a: "Yes, if there's any error on my part in the delivery, I correct it at no additional cost. Your satisfaction is important.", link: "faq" },
        { q: "Why the 50% upfront payment?", a: "To start any project, we require 50% of the total cost upfront. This payment reserves your time and ensures the work is done efficiently. The remaining 50% is paid upon completion of the project and before the final file delivery." },
        { q: "Who are you / About me?", a: "My name is Juan Pablo (JP). Since I was 15, I started using multimedia editing tools, both for video and image. I use (Shacko) as a pseudonym to offer my editing services. My work covers multimedia editing and the IT sector (Windows). 🇵🇦 1995 🇵🇦" }
      ]},
      { id: "image", label: "Image / Photos", icon: "🖼️", questions: [
        { q: "Can any photo be restored?", a: "Not all photos can be restored. Some are too damaged and cannot be restored. The condition must be analyzed to determine whether it's suitable for restoration or not." },
        { q: "How much does it cost to restore a photo?", a: "Each restoration has a different cost, depending on the damage and the edits to be made. The photo is always evaluated first to determine the price. Check the Pricing / Payments section.", link: "pricing" },
        { q: "How should I send the photo to be restored?", a: "We recommend that photos be scanned with a physical scanner. Apps like CamScanner or phone-taken photos do not guarantee proper work, as the photo loses many details of quality and sharpness." },
        { q: "What types of photo editing do you offer?", a: "We offer everything from basic color and brightness adjustments, removal of unwanted elements, red-eye correction, and detailed retouching such as skin improvements and background changes, ID photos, festive events, etc. Visit the Photo Editing section to see some samples.", link: "photo_editing" },
        { q: "Can you edit a photo for an ID / passport?", a: "Yes, we do ID-style or passport photo editing: background adjustment, lighting correction, cropping to the required format, etc. Visit the Photo Editing section to see samples or write to me with the specific requirements.", link: "photo_editing" },
        { q: "Can you remove or change the background of a photo?", a: "Yes, we can remove or replace the background of a photograph as needed (white background for ID, transparent background, scene change, etc.). Tell me the background style or color you want and I'll prepare the edit.", link: "photo_editing" },
        { q: "Can you remove objects or people from a photo?", a: "Yes, we can remove unwanted elements from a photograph, provided the affected area allows realistic editing. Otherwise, it's preferable not to carry out the edit." },
        { q: "What photo formats do you accept and in what format do you deliver?", a: "We accept a wide variety of formats, including JPEG, PNG, TIFF, and RAW, but we prefer to work with high-quality files. We deliver photos in the client's preferred format (JPEG, TIFF, PNG, etc.) and can adjust resolution as needed." },
        { q: "How much does it cost to edit a photo?", a: "The price varies depending on the complexity of the editing. Check the price list in the Pricing / Payments section.", link: "pricing" },
        { q: "Do you make mobile wallpapers?", a: "Yes, I can create custom mobile wallpapers. Tell me the style, colors, or theme you want and I'll prepare options adapted to your device's resolution.", link: "mobile_wallpapers" }
      ]},
      { id: "video", label: "Video", icon: "🎬", questions: [
        { q: "What types of videos do you edit?", a: "We edit a wide range of videos: promotional and corporate content, social media videos, weddings, special events, cooking, school work, university, podcasts, screen recordings, and much more." },
        { q: "Can you compile multiple videos into one?", a: "Yes, we create video compilations for social media, presentations, or personal projects. We can also sync audio and image, and apply color correction.", link: "video_editing" },
        { q: "Do you make Twitch (OBS) overlays?", a: "Yes, we design overlays for live streams (Twitch, OBS). Tell me the style you want and I'll prepare a proposal tailored to your channel.", link: "video_editing" },
        { q: "How should I send my video files?", a: "You can send your files via Google Drive, WeTransfer, or any other cloud storage service. If there are multiple videos that should go in sequence, name them in order (e.g., video_01.mp4, video_02.mp4, etc.)." },
        { q: "Do you accept videos from phone or camera?", a: "Yes, we accept videos recorded from any device. Just make sure the quality is as good as possible and check that the recordings are in the proper format (Horizontal or Vertical) to avoid a wrong final format." },
        { q: "What video formats do you accept?", a: "We work with the most common video formats: MP4, MOV, AVI, and WMV. If you have a different format, contact us to verify compatibility." },
        { q: "How long does video editing take?", a: "Delivery time depends on project complexity and video length. Generally, simpler projects can be ready in 1-5 business days. For more elaborate projects, we provide an estimate once the details are reviewed." },
        { q: "Can I request revisions after editing?", a: "Yes, we offer a limited number of free revisions depending on the job you request. Additional revisions may have an extra cost." },
        { q: "What elements can be included in the video?", a: "We can add music, subtitles, transitions, audio improvements, special effects, animated graphics, color correction, among others. Tell us what you need and we'll include it in the edit. You can provide the music or choose from our royalty-free library." },
        { q: "What level of confidentiality do my videos have?", a: "We guarantee total confidentiality and security with your content. Your videos will not be shared with third parties and will be stored securely during the editing process." }
      ]},
      { id: "audio", label: "Audio", icon: "🎵", questions: [
        { q: "What audio editing services do you offer?", a: "We offer background noise removal, vocal/instrumental separation, volume adjustment, synchronization, audio trimming, transition effects, format conversion (WAV, FLAC, MP3, OGG, Opus, WMA), and social media optimization. Headphones are recommended for reviewing the result.", link: "audio_editing" },
        { q: "Can you separate vocals from music?", a: "Yes, we perform track separation (vocal and instrumental) for school, university, or personal projects. We can also clean the audio and balance levels.", link: "audio_editing" },
        { q: "What audio formats do you work with?", a: "We work with WAV, FLAC, MP3, OGG, Opus, and WMA. If you have another format, contact me to verify compatibility.", link: "audio_editing" },
        { q: "Can you optimize audio for social media?", a: "Yes, I adjust audio so it sounds clear and well-leveled on platforms like YouTube, TikTok, Instagram, and podcasts.", link: "audio_editing" }
      ]},
      { id: "documents", label: "Documents", icon: "📄", questions: [
        { q: "What document editing services do you offer?", a: "We offer services such as text correction, format changes, restoration of damaged documents, and visual modifications (titles, logos, stamps) in tools like Photoshop, Word, or PDF." },
        { q: "What types of documents can I send?", a: "You can send PDF, Word, and images (JPG, PNG) that need editing, restoration, or modification. I can also work with diplomas, reports, translations, etc.", link: "document_editing" },
        { q: "In what format are edited documents delivered?", a: "I deliver documents in the same format you provide (Word, PDF) or as images, depending on your needs.", link: "document_editing" },
        { q: "Do the documents have legal validity?", a: "No document has legal validity. These documents are intended for personal keeping or for school, college, or university assignments." },
        { q: "Can you edit images within documents?", a: "Yes, we can modify, add, or remove images, graphics, and any other visual element in documents such as PDF or Word files." },
        { q: "Is it possible to translate / change the language of a document?", a: "Yes, we can translate documents while keeping the original design, without altering the content, only adapting it to the requested language." },
        { q: "How long does it take to edit a document?", a: "The time depends on the type of editing your document needs. Small corrections can be done in a few hours, while more detailed work can take days." },
        { q: "Do you offer spelling and grammar correction?", a: "Yes, we offer text review to correct spelling and grammar errors in documents." },
        { q: "Can I request modifications after receiving the document?", a: "Yes, you can request revisions or additional modifications, and we'll be happy to make the necessary adjustments per your instructions, but it will have an additional price since it wasn't previously agreed." }
      ]},
      { id: "stickers", label: "Stickers / Vectors", icon: "✨", questions: [
        { q: "What kind of stickers or vectors can I request?", a: "We offer custom stickers and vectors for any purpose: from simple designs to detailed graphics. You can request icons, characters, illustrations for print or digital use, etc." },
        { q: "In what format do you deliver stickers and vectors?", a: "We deliver stickers and vectors in formats such as SVG, EPS, PNG, and PDF, ensuring they can be used both for print and web." },
        { q: "Can I convert an existing image to vector?", a: "Yes, I vectorize stickers or low-resolution images, preserving the quality and details of the original design. I don't create logos from scratch or personal brands.", link: "logos_stickers" },
        { q: "Do you make logos?", a: "No, I don't make logos or create personal brands. Vectorizations are usually of elements that have already been created." },
        { q: "What is the delivery time for stickers/vectors?", a: "Delivery time varies depending on design complexity, but on average it takes 1 to 7 business days." },
        { q: "Can I request adjustments after receiving the design?", a: "We offer a limited number of free revisions. If you need additional changes, we can make them for an additional fee." },
        { q: "Do you make WhatsApp stickers?", a: "Yes, I can create custom WhatsApp sticker packs. They're delivered ready to use (proper format and transparent background when needed).", link: "whatsapp_stickers" },
        { q: "Do you offer print on demand (POD)?", a: "I don't do print on demand (POD) directly. What I offer is the design and preparation of files (stickers, illustrations, graphics, etc.) optimized and ready for you to use in a print-on-demand service. Tell me about your project details.", link: "pod" },
        { q: "Do you make mobile wallpapers?", a: "Yes, I can create custom mobile wallpapers. Tell me the style, colors, or theme you want and I'll prepare options adapted to your device's resolution.", link: "mobile_wallpapers" }
      ]},
      { id: "menus", label: "Menus & Cards", icon: "🍽️", questions: [
        { q: "What information do I need for a food menu?", a: "To create a menu we need: the restaurant name, the logo (if any, in good quality), the complete list of dishes with descriptions and prices. You can provide a draft in a notebook or digital document." },
        { q: "What styles or themes do you offer for menus?", a: "We can start from a base, a sample image, or templates I offer so you can choose the style you like. I adapt the design to your restaurant's style.", link: "food_menus" },
        { q: "How long does menu design take?", a: "A simple menu can take 3–5 business days. More complex designs require more time. I always give you an estimate after reviewing the details.", link: "food_menus" },
        { q: "Can I request a printed and digital menu at the same time?", a: "Yes, I can create both formats so you have options for printing and digital sharing.", link: "food_menus" },
        { q: "Can I include photos of the dishes in the menu?", a: "Yes, you can include photos of your dishes. Make sure to provide them in high quality so they look professional and attractive in the final design." },
        { q: "What menu formats do you offer?", a: "We offer menus in digital format (PDF, JPG, PNG) to share online or print. We can also design menus adapted for social media or mobile applications." },
        { q: "Is it possible to update an existing menu?", a: "Yes, we can make updates to already-designed menus, whether to change prices, add new dishes, or make any other modification you need." },
        { q: "What information should a business card contain?", a: "It's recommended to include: name, title or position, company name, logo, phone number, email, and website. You can also include social media or a physical address if relevant." },
        { q: "In what format do I receive my digital card?", a: "Digital cards are delivered in PNG, JPG, or PDF, according to your preference. They're ideal for sharing online or printing.", link: "business_cards" },
        { q: "Can you update my digital card?", a: "Yes, if you need to change information on your card, I can make the modifications you require.", link: "business_cards" },
        { q: "Do you make digital business cards?", a: "Business cards are digital. You can take the design to a print shop and also use them digitally. They're delivered in formats such as PNG, JPG, or PDF according to your preference." },
        { q: "What are the advantages of digital cards?", a: "Digital cards are easier to share, eco-friendly, can be updated without reprinting, and offer more interactivity (links and QR codes). They can be shared by email, WhatsApp, social media, etc." }
      ]},
      { id: "others", label: "Others / Computers", icon: "💻", questions: [
        { q: "Do you offer computer services (PC / Windows)?", a: "Yes, I offer computer services oriented to PC (Windows). You can tell me exactly what you need (optimization, maintenance, configuration, troubleshooting, etc.) to see how I can help you.", link: "computer_services" },
        { q: "How much does it cost to format a PC?", a: "Formatting costs 35 USD. We also offer combos: formatting + basic programs (40 USD) and formatting + Windows setup + programs (50 USD).", link: "computer_services" },
        { q: "How much does software installation cost?", a: "Software installation costs 10 USD. I can install office suites, browsers, antivirus, drivers, and more.", link: "computer_services" },
        { q: "Do you offer remote support?", a: "Yes, I provide remote technical support via TeamViewer to solve issues without travel. Ideal for diagnostics, configurations, and optimization.", link: "computer_services" },
        { q: "Do you remove bloatware?", a: "Yes, I remove bloatware and unnecessary programs to improve system performance and cleanliness.", link: "computer_services" },
        { q: "Do you set up new computers?", a: "Yes, I set up new computers: operating system, drivers, essential programs, and basic customization so it's ready to use.", link: "computer_services" },
        { q: "Does formatting require dropping off the equipment?", a: "Formatting and services requiring physical delivery are for nearby people (acquaintances or friends of acquaintances) due to location. Remote services can be from anywhere.", link: "computer_services" },
        { q: "Do you fix slow or virus-infected PCs?", a: "Yes, I diagnose and fix performance and security issues on PC (Windows): virus/malware removal, cleaning unnecessary files, system optimization, etc.", link: "computer_services" },
        { q: "Do you make WhatsApp stickers?", a: "Yes, I can create custom WhatsApp sticker packs. They're delivered ready to use (proper format and transparent background when needed).", link: "whatsapp_stickers" },
        { q: "Do you offer print on demand (POD)?", a: "I don't do print on demand (POD) directly. What I offer is the design and preparation of files (stickers, illustrations, graphics, etc.) optimized and ready for you to use in a print-on-demand service. Tell me about your project details.", link: "pod" },
        { q: "Do you make mobile wallpapers?", a: "Yes, I can create custom mobile wallpapers. Tell me the style, colors, or theme you want and I'll prepare options adapted to your device's resolution.", link: "mobile_wallpapers" }
      ]}
    ]
  };

  const T = {
    es: {
      title: "Asistente SHACKO",
      greeting: "¡Hola! Soy el asistente de SHACKO.\n\nElige una categoría para ver las preguntas más comunes:",
      back: "← Atrás",
      clear: "🗑️ Limpiar",
      random: "🎲 Más preguntas",
      chooseQuestion: "Elige una pregunta:",
      send: "Enviar",
      notFound: "No encontré una respuesta exacta. Puedes elegir otra pregunta de la categoría, o revisar la sección de Preguntas Frecuentes para más información.",
      placeholder: "Escribe aquí...",
      navConfirm:      (l) => `Aquí tienes el acceso directo a ${l}:`,
      navKeyword:      (l) => `Puede que estés buscando ${l}. Aquí tienes el enlace:`,
      navGroupConfirm: (l) => `Sobre ${l} tengo varias secciones disponibles. ¿Cuál te interesa?`,
      navGroupKeyword: (l) => `¿Buscas algo de ${l}? Estas son las secciones disponibles:`
    },
    en: {
      title: "SHACKO Assistant",
      greeting: "Hi! I'm the SHACKO assistant.\n\nChoose a category to see the most common questions:",
      back: "← Back",
      clear: "🗑️ Clear",
      random: "🎲 More questions",
      chooseQuestion: "Choose a question:",
      send: "Send",
      notFound: "I couldn't find an exact answer. You can choose another question from the category, or check the FAQ section for more information.",
      placeholder: "Type here...",
      navConfirm:      (l) => `Here's the direct link to ${l}:`,
      navKeyword:      (l) => `You might be looking for ${l}. Here's the link:`,
      navGroupConfirm: (l) => `For ${l} I have several available sections. Which one interests you?`,
      navGroupKeyword: (l) => `Looking for something about ${l}? These are the available sections:`
    }
  };

  const cats     = CATS[LANG];
  const t        = T[LANG];
  const navVerbs = NAV_VERBS[LANG];
  const { pages, groups } = SECTION_CONFIG[LANG];

  let currentCategory = null;

  function normalize(text) {
    return text.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[¿?¡!.,;:()\"']/g, " ")
      .replace(/\s+/g, " ").trim();
  }

  function findBestAnswer(userQuestion) {
    const q = normalize(userQuestion);
    if (q.length < 2) return null;
    let bestScore = 0, bestAnswer = null;
    cats.forEach(cat => cat.questions.forEach(item => {
      let score = 0;
      normalize(item.q).split(" ").forEach(w => {
        if (w.length > 2 && q.includes(w)) score += 1.8;
      });
      if (q.includes(normalize(item.q).substring(0, 12))) score += 3;
      if (score > bestScore) { bestScore = score; bestAnswer = item.a; }
    }));
    return bestScore >= 2.5 ? bestAnswer : null;
  }

  function resolveDestination(q) {
    let bestPageKey = null, bestLen = 0;
    for (const key in pages) {
      for (const pat of pages[key].patterns) {
        const np = normalize(pat);
        if (np && q.includes(np) && np.length > bestLen) {
          bestLen = np.length; bestPageKey = key;
        }
      }
    }
    if (bestPageKey) return { type: "page", key: bestPageKey };

    let bestGroupKey = null, bestGroupLen = 0;
    for (const gkey in groups) {
      for (const pat of groups[gkey].patterns) {
        const np = normalize(pat);
        if (np && q.includes(np) && np.length > bestGroupLen) {
          bestGroupLen = np.length; bestGroupKey = gkey;
        }
      }
    }
    if (bestGroupKey) {
      const pageKeys = Object.keys(pages).filter(k => pages[k].group === bestGroupKey);
      if (pageKeys.length === 1) return { type: "page", key: pageKeys[0] };
      if (pageKeys.length > 1)  return { type: "group", group: bestGroupKey, pages: pageKeys };
    }
    return null;
  }

  function tryResolveNav(text, requireVerb) {
    const q = normalize(text);
    if (requireVerb) {
      const hasVerb = navVerbs.some(v => q.includes(normalize(v)));
      if (!hasVerb) return null;
    }
    return resolveDestination(q);
  }

  function createChatUI() {
    const btn = document.createElement("div");
    btn.id = "shacko-chat-btn";
    btn.innerHTML = "💬";
    btn.title = t.title;
    btn.style.cssText = "position:fixed;bottom:24px;right:24px;width:56px;height:56px;background:#e85d04;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;cursor:pointer;z-index:99999;box-shadow:0 4px 14px rgba(0,0,0,.35);transition:transform .2s,box-shadow .2s;";
    btn.onmouseover = () => { btn.style.transform = "scale(1.08)"; btn.style.boxShadow = "0 6px 20px rgba(232,93,4,.45)"; };
    btn.onmouseout  = () => { btn.style.transform = "scale(1)";    btn.style.boxShadow = "0 4px 14px rgba(0,0,0,.35)"; };

    const chat = document.createElement("div");
    chat.id = "shacko-chat-window";
    chat.style.cssText = "position:fixed;bottom:90px;right:24px;width:360px;max-width:95vw;height:520px;background:#1a1a1a;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.55);display:none;flex-direction:column;z-index:99999;overflow:hidden;border:1px solid #333;font-family:system-ui,-apple-system,sans-serif;";

    chat.innerHTML = `
      <div style="background:#e85d04;color:#fff;padding:12px 14px;font-weight:600;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
        <span>${t.title}</span>
        <div style="display:flex;gap:10px;align-items:center;">
          <button id="shacko-clear" title="${t.clear}" style="background:transparent;border:none;color:#fff;cursor:pointer;font-size:15px;padding:2px 4px;">🗑️</button>
          <span id="shacko-chat-close" style="cursor:pointer;font-size:22px;line-height:1;padding:0 4px;">×</span>
        </div>
      </div>
      <div id="shacko-chat-messages" style="flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;background:#161616;"></div>
      <div id="shacko-nav" style="padding:8px 12px;border-top:1px solid #333;display:none;gap:8px;background:#1a1a1a;flex-shrink:0;"></div>
      <div style="padding:10px 12px;border-top:1px solid #333;display:flex;gap:8px;background:#1a1a1a;flex-shrink:0;">
        <input id="shacko-chat-input" type="text" placeholder="${t.placeholder}" autocomplete="off" style="flex:1;padding:10px 12px;border-radius:10px;border:1px solid #444;background:#2a2a2a;color:#fff;outline:none;font-size:13.5px;">
        <button id="shacko-chat-send" style="background:#e85d04;color:#fff;border:none;padding:0 16px;border-radius:10px;cursor:pointer;font-weight:600;font-size:13.5px;">${t.send}</button>
      </div>`;

    document.body.appendChild(btn);
    document.body.appendChild(chat);

    const messages = chat.querySelector("#shacko-chat-messages");
    const input    = chat.querySelector("#shacko-chat-input");
    const sendBtn  = chat.querySelector("#shacko-chat-send");
    const closeBtn = chat.querySelector("#shacko-chat-close");
    const clearBtn = chat.querySelector("#shacko-clear");
    const nav      = chat.querySelector("#shacko-nav");

    function addMessage(text, isUser = false) {
      const div = document.createElement("div");
      div.style.cssText = "max-width:90%;padding:10px 13px;border-radius:14px;line-height:1.45;font-size:13.5px;white-space:pre-wrap;word-break:break-word;" +
        (isUser
          ? "align-self:flex-end;background:#e85d04;color:#fff;border-bottom-right-radius:4px;"
          : "align-self:flex-start;background:#2c2c2c;color:#eee;border-bottom-left-radius:4px;");
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      return div;
    }

    function addLinkButton(pageKey) {
      const page = pages[pageKey];
      if (!page) return;
      const a = document.createElement("a");
      a.href = page.url;
      a.textContent = `${page.label} →`;
      a.style.cssText = "align-self:flex-start;display:inline-block;background:#e85d04;color:#fff;padding:9px 14px;border-radius:10px;text-decoration:none;font-size:13px;font-weight:600;margin-top:4px;transition:background .15s;";
      a.onmouseover = () => { a.style.background = "#c94f00"; };
      a.onmouseout  = () => { a.style.background = "#e85d04"; };
      messages.appendChild(a);
      messages.scrollTop = messages.scrollHeight;
    }

    function addGroupOptions(pageKeys) {
      const wrap = document.createElement("div");
      wrap.style.cssText = "display:flex;flex-direction:column;gap:8px;margin-top:6px;";
      pageKeys.forEach(key => {
        const page = pages[key];
        if (!page) return;
        const a = document.createElement("a");
        a.href = page.url;
        a.textContent = `${page.label} →`;
        a.style.cssText = "background:#2c2c2c;color:#eee;border:1px solid #444;border-radius:12px;padding:11px 14px;font-size:13.5px;cursor:pointer;text-align:left;text-decoration:none;transition:background .15s,border-color .15s;font-weight:500;";
        a.onmouseover = () => { a.style.background = "#3a3a3a"; a.style.borderColor = "#e85d04"; };
        a.onmouseout  = () => { a.style.background = "#2c2c2c"; a.style.borderColor = "#444"; };
        wrap.appendChild(a);
      });
      messages.appendChild(wrap);
      messages.scrollTop = messages.scrollHeight;
    }

    function clearMessages() { messages.innerHTML = ""; }

    function chipStyle(primary = false) {
      return `background:${primary ? "#e85d04" : "#2c2c2c"};color:#fff;border:1px solid ${primary ? "#e85d04" : "#444"};border-radius:20px;padding:6px 12px;font-size:12.5px;cursor:pointer;transition:background .15s;`;
    }

    function showNav(showBack = true) {
      nav.style.display = "flex"; nav.innerHTML = "";
      if (showBack) {
        const b = document.createElement("button");
        b.textContent = t.back; b.style.cssText = chipStyle(true);
        b.onclick = () => showCategories();
        nav.appendChild(b);
      }
      if (currentCategory) {
        const b = document.createElement("button");
        b.textContent = t.random; b.style.cssText = chipStyle(false);
        b.onclick = () => showQuestions(currentCategory, true);
        nav.appendChild(b);
      }
    }
    function hideNav() { nav.style.display = "none"; nav.innerHTML = ""; }

    function showCategories() {
      currentCategory = null; hideNav(); clearMessages();
      addMessage(t.greeting);
      const wrap = document.createElement("div");
      wrap.style.cssText = "display:flex;flex-direction:column;gap:8px;margin-top:6px;";
      cats.forEach(cat => {
        const b = document.createElement("button");
        b.type = "button";
        b.innerHTML = `${cat.icon}  ${cat.label}`;
        b.style.cssText = "background:#2c2c2c;color:#eee;border:1px solid #444;border-radius:12px;padding:11px 14px;font-size:14px;cursor:pointer;text-align:left;transition:background .15s,border-color .15s;";
        b.onmouseover = () => { b.style.background = "#3a3a3a"; b.style.borderColor = "#e85d04"; };
        b.onmouseout  = () => { b.style.background = "#2c2c2c"; b.style.borderColor = "#444"; };
        b.onclick = () => { currentCategory = cat.id; showQuestions(cat.id); };
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
      if (randomize && list.length > 4) list = list.sort(() => Math.random() - 0.5).slice(0, Math.min(5, list.length));
      const wrap = document.createElement("div");
      wrap.style.cssText = "display:flex;flex-direction:column;gap:7px;margin-top:6px;";
      list.forEach(item => {
        const b = document.createElement("button");
        b.type = "button"; b.textContent = item.q;
        b.style.cssText = "background:#2c2c2c;color:#eee;border:1px solid #444;border-radius:12px;padding:10px 13px;font-size:13px;cursor:pointer;text-align:left;transition:background .15s,border-color .15s;line-height:1.35;";
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
        if (item.link) addLinkButton(item.link);
        showNav(true);
      }, 350);
    }

    function handleNavDestination(dest, confirmFn, keywordFn) {
      if (dest.type === "page") {
        addMessage(confirmFn(pages[dest.key].label));
        addLinkButton(dest.key);
      } else if (dest.type === "group") {
        addMessage(confirmFn(groups[dest.group].label));
        addGroupOptions(dest.pages);
      }
      showNav(true);
    }

    function handleSend() {
      const text = input.value.trim();
      if (!text) return;
      addMessage(text, true); input.value = ""; input.focus();
      setTimeout(() => {
        const navDest = tryResolveNav(text, true);
        if (navDest) return handleNavDestination(navDest, t.navConfirm, t.navGroupConfirm);

        const answer = findBestAnswer(text);
        if (answer) { addMessage(answer); showNav(true); return; }

        const kwDest = tryResolveNav(text, false);
        if (kwDest) return handleNavDestination(kwDest, t.navKeyword, t.navGroupKeyword);

        addMessage(t.notFound);
        addLinkButton("faq");
        showNav(true);
      }, 400);
    }

    sendBtn.onclick = handleSend;
    input.onkeydown = (e) => { if (e.key === "Enter") handleSend(); };
    clearBtn.onclick = () => { currentCategory = null; showCategories(); };
    btn.onclick = () => {
      const isOpen = chat.style.display === "flex";
      chat.style.display = isOpen ? "none" : "flex";
      if (!isOpen) {
        if (messages.children.length === 0) showCategories();
        setTimeout(() => input.focus(), 50);
      }
    };
    closeBtn.onclick = () => { chat.style.display = "none"; };

    showCategories();
  }

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