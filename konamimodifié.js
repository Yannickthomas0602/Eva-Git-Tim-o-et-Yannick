(function () {
  // --- Configuration (à modifier si tu veux) ---
  // destination finale (ouvre dans un nouvel onglet)
  const destination = "https://www.youtube.com/watch?v=QDia3e12czc&autoplay=1";

  // obfuscation: si tu veux changer la séquence sans la montrer en clair
  const obfuscationOffset = 7;
  const encodedSequence = [
    [72, 121, 121, 118, 126, 92, 119],          // "ArrowUp"
    [72, 121, 121, 118, 126, 75, 118, 126, 117],// "ArrowDown"
    [72, 121, 121, 118, 126, 83, 108, 109, 123],// "ArrowLeft"
    [72, 121, 121, 118, 126, 89, 112, 110, 111, 123] // "ArrowRight"
  ];

  // --- Ne touche rien en dessous si tu ne veux pas changer la logique ---

  // décode la séquence obfusquée
  const sequence = encodedSequence.map(codes =>
    String.fromCharCode(...codes.map(code => code - obfuscationOffset))
  );

  // (option) tu peux remplacer `sequence` par une version en clair si tu veux :
  // const sequence = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];

  // état
  let index = 0;
  let triggeredAt = 0; // timestamp pour empêcher plusieurs ouvertures rapides
  const THROTTLE_MS = 5000; // temps minimal entre deux déclenchements

  // Ajoute du CSS pour le toast (simple et autonome)
  (function injectToastStyle() {
    if (document.getElementById("konami-toast-style")) return;
    const css = `
      #konami-toast {
        position: fixed;
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%) translateY(20px);
        background: rgba(0,0,0,0.85);
        color: #fff;
        padding: 12px 18px;
        border-radius: 10px;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        opacity: 0;
        transition: opacity 250ms ease, transform 250ms ease;
        z-index: 99999;
        max-width: 90%;
        text-align: center;
      }
      #konami-toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    `;
    const style = document.createElement("style");
    style.id = "konami-toast-style";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  })();

  function reset() {
    index = 0;
  }

  function showToast(text = "🎉 Secret trouvé !") {
    const existing = document.getElementById("konami-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.id = "konami-toast";
    toast.textContent = text;
    document.body.appendChild(toast);
    // forcer frame pour l'animation
    requestAnimationFrame(() => toast.classList.add("show"));

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 250);
    }, 3000);
  }

  function isTypingIntoField(event) {
    const t = event.target;
    if (!t) return false;
    if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") return true;
    if (t.isContentEditable) return true;
    return false;
  }

  document.addEventListener("keydown", (event) => {
    // ignore si on tape dans un champ de formulaire
    if (isTypingIntoField(event)) {
      return;
    }

    // compare la touche (event.key) avec la séquence attendue
    if (event.key === sequence[index]) {
      index += 1;
      if (index === sequence.length) {
        // throttle pour éviter plusieurs ouvertures en peu de temps
        const now = Date.now();
        if (now - triggeredAt < THROTTLE_MS) {
          reset();
          return;
        }
        triggeredAt = now;
        reset();
        showToast("🎉 Git Master trouvé ! Vidéo bonus en cours...");
        try {
          // ouvre dans un nouvel onglet de façon sécurisée
          window.open(destination, "_blank", "noopener,noreferrer");
        } catch (e) {
          // si popup bloquée : propose un lien visible
          showToast("Popup bloquée — clique pour ouvrir");
          const link = document.createElement("a");
          link.href = destination;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.style.position = "fixed";
          link.style.left = "50%";
          link.style.bottom = "70px";
          link.style.transform = "translateX(-50%)";
          link.style.zIndex = "99999";
          link.textContent = "Ouvrir la surprise";
          link.id = "konami-open-link";
          document.body.appendChild(link);
          setTimeout(() => {
            const el = document.getElementById("konami-open-link");
            if (el) el.remove();
          }, 5000);
        }
      }
    } else {
      reset();
    }
  });

  // Expose optionnel (pour debug uniquement). Ne pas activer en prod.
  // window._konami_sequence = sequence;
})();
