/* Scripted chat for the demos: suggestion chips, free text matched by keywords, typing delay,
   and an onEffect hook so each page can update its "system" panel. */
(function () {
  function now() {
    const d = new Date();
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  window.mountChat = function (root, cfg) {
    const chat = root.querySelector('.chat');
    const chipsBox = root.querySelector('.chips');
    const form = root.querySelector('.input');
    const input = form && form.querySelector('input');
    let busy = false;

    function scroll() { chat.scrollTop = chat.scrollHeight; }
    function add(kind, text) {
      const m = el('div', 'm ' + kind, text);
      m.appendChild(el('span', 't', now()));
      chat.appendChild(m); scroll();
    }
    function typing(ms) {
      return new Promise(res => {
        const t = el('div', 'typing'); t.append(el('span'), el('span'), el('span'));
        chat.appendChild(t); scroll();
        setTimeout(() => { t.remove(); res(); }, ms);
      });
    }
    function setChips(keys) {
      chipsBox.innerHTML = '';
      (keys || []).forEach(k => {
        const f = cfg.flows[k]; if (!f) return;
        const b = el('button', '', f.label || f.user);
        b.type = 'button';
        b.addEventListener('click', () => run(k));
        chipsBox.appendChild(b);
      });
      chipsBox.hidden = !chipsBox.children.length;
    }
    async function say(replies) {
      for (const r of replies) {
        await typing(r.delay || 900);
        add('in' + (r.alert ? ' alert' : ''), r.text);
        if (r.effect && cfg.onEffect) cfg.onEffect(r.effect);
      }
    }
    async function run(key, typed) {
      if (busy) return;
      const f = cfg.flows[key]; if (!f) return;
      busy = true; setChips([]);
      add('out', typed || f.user);
      if (f.effect && cfg.onEffect) cfg.onEffect(f.effect);
      await say(f.replies);
      busy = false;
      setChips(f.next || cfg.start);
    }
    function match(text) {
      for (const k of cfg.keywords || []) if (k.re.test(text)) return k.flow;
      return null;
    }

    if (form) form.addEventListener('submit', async e => {
      e.preventDefault();
      const text = input.value.trim(); if (!text || busy) return;
      input.value = '';
      const key = match(text);
      if (key) return run(key, text);
      busy = true; setChips([]); add('out', text);
      await say([{ text: cfg.fallback }]);
      busy = false; setChips(cfg.start);
    });

    (async () => {
      if (cfg.day) chat.appendChild(el('div', 'day', cfg.day));
      busy = true;
      await say(cfg.intro || []);
      busy = false;
      setChips(cfg.start);
    })();
  };
})();
