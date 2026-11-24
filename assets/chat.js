/* Chat engine for the demos.
   Each page passes a `respond(text)` function that reads the message, updates its own state and
   returns the replies. Suggestion chips send their text through the same function, so a typed
   message and a tapped one always get the same answer. Every bubble carries an English line. */
(function () {
  const DIGITS = '٠١٢٣٤٥٦٧٨٩';
  const WORDS = {
    'واحد': 1, 'واحده': 1, 'اتنين': 2, 'اثنين': 2, 'تنين': 2, 'تلاته': 3, 'ثلاثه': 3, 'تلات': 3,
    'اربعه': 4, 'اربع': 4, 'خمسه': 5, 'خمس': 5, 'سته': 6, 'ست': 6, 'سبعه': 7, 'سبع': 7,
    'تمانيه': 8, 'ثمانيه': 8, 'تسعه': 9, 'عشره': 10,
    one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  };

  // Lower-case, Latin digits, one spelling for alef, taa marbuta and yaa, no diacritics.
  function norm(s) {
    return String(s)
      .replace(/[٠-٩]/g, d => DIGITS.indexOf(d))
      .replace(/[إأآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')
      .replace(/[ـً-ْ]/g, '')
      .toLowerCase();
  }
  function num(token) {
    if (token == null || token === '') return null;
    if (/^\d+$/.test(token)) return parseInt(token, 10);
    return WORDS[token] || null;
  }
  const NUM = '(\\d+|' + Object.keys(WORDS).join('|') + ')';
  const has = (t, re) => re.test(t);
  const egp = n => 'EGP ' + n.toLocaleString('en-US');
  const time = () => new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  window.DemoText = { norm, num, NUM, has, egp, time };

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
    function add(kind, ar, en) {
      const m = el('div', 'm ' + kind);
      m.append(el('span', 'ar', ar));
      if (en) m.append(el('span', 'en', en));
      m.append(el('span', 't', time()));
      chat.appendChild(m); scroll();
    }
    function typing(ms) {
      return new Promise(res => {
        const t = el('div', 'typing'); t.append(el('span'), el('span'), el('span'));
        t.setAttribute('aria-label', 'typing');
        chat.appendChild(t); scroll();
        setTimeout(() => { t.remove(); res(); }, ms);
      });
    }
    function setChips() {
      chipsBox.innerHTML = '';
      (cfg.chips() || []).forEach(c => {
        const b = el('button', '', c.ar);
        b.type = 'button';
        if (c.en) b.title = c.en;
        b.addEventListener('click', () => send(c.ar, c.en));
        chipsBox.appendChild(b);
      });
      chipsBox.hidden = !chipsBox.children.length;
    }
    async function say(replies) {
      for (const r of replies) {
        await typing(r.delay || 850);
        add('in' + (r.alert ? ' alert' : ''), r.ar, r.en);
        if (r.effect && cfg.onEffect) cfg.onEffect(r.effect);
      }
    }
    async function send(text, en) {
      if (busy) return;
      busy = true; chipsBox.hidden = true;
      add('out', text, en);
      await say(cfg.respond(text, norm(text)));
      busy = false;
      setChips();
    }

    if (form) form.addEventListener('submit', e => {
      e.preventDefault();
      const text = input.value.trim(); if (!text || busy) return;
      input.value = '';
      send(text);
    });

    (async () => {
      if (cfg.day) chat.appendChild(el('div', 'day', cfg.day));
      busy = true;
      await say(cfg.intro || []);
      busy = false;
      setChips();
    })();
  };
})();
