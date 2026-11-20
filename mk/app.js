(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = s => document.querySelector(s);
  const WA = '201202853088', EMAIL = 'marwanashraf410@gmail.com';

  // ---------- copy ----------
  const T = {
    en: {
      nav1: 'Services', nav2: 'AI', nav3: 'Live demos', nav4: 'MK Solutions', nav5: 'About', talk: 'Email us', langBtn: 'ع', sample: 'Sample data',
      kicker: 'AI solutions, ERP and apps · Cairo',
      h1: 'Business systems with <em>AI built in.</em>',
      lead: 'ERP and HR on Odoo, clinic systems, websites, Android and iPhone apps, and AI agents on WhatsApp and the phone. Every system we build can read its own numbers, answer your team in plain words and warn you before a small problem gets bigger.',
      plat: ['Web', 'Android', 'iPhone', 'Loyalty apps', 'WhatsApp', 'Odoo', 'AI agents'],
      indL: 'Jump to your industry:', ind: [['Factories', 'factory'], ['Retail chains', 'retail'], ['Clinics', 'clinic'], ['Restaurants', 'rest'], ['Service companies', 'cs']],
      sampleHero: 'Cards show sample data', labCta: 'Want to see one of these running on your own data?', solCta: 'Ask about this template →', solAsk: n => `I'm interested in ${n}. `,
      aLang: 'العربية', aClose: 'Close', aSend: 'Send', aDash: 'HR dashboard with sample data',
      probBtn: 'Tell us your problem', stMario: 'Describe it to Mario',
      stTag: 'Start with your problem', stH: "Tell us what's slowing you down. We'll tell you exactly what you need.",
      stP: "You don't need to know which system to buy. Describe the problem in your own words, and we come back with the right solution: which parts you need, which you can skip, and what it takes.",
      st1h: 'Tell us the problem', st1p: 'By email, on WhatsApp or through Mario, in Arabic or English.',
      st2h: 'We find the real cause', st2p: 'We ask a few questions, look at how your team works today and check what you already have.',
      st3h: 'You get a clear recommendation', st3p: 'Exactly what to build or connect, what you can skip, the price and the timeline, before you commit to anything.',
      pr1: 'What you tell us', pr2: 'What we recommend', prMid: 'We look at it with you', needL: 'You need', skipL: "You don't need",
      prx: [['"Payroll takes our team two days every month."', 'MK HR with attendance and payroll', 'A full ERP'], ['"We miss customer messages on WhatsApp at night."', 'A WhatsApp AI agent linked to your orders', 'A new system'], ['"Branches run out of stock and we find out too late."', 'Stock alerts and AI transfer suggestions', 'Replacing your current Odoo']],
      tryBtn: 'Try the live demos', trust: 'Running today at a retail chain, a manufacturer, a restaurant and service companies.',
      c1h: 'Mario · AI assistant on WhatsApp', c1q: 'How did we do yesterday?', c1a: '1.24M EGP in sales, and this week is 6% up on last week. Branch 3 did best.',
      c2h: 'AI analysis', c2b: 'Branch 4 runs out of water on Sunday', c2p: 'Suggestion: move 120 cartons from the warehouse',
      c3h: 'Attendance today', c3b: '412 of 436 at work', c3p: 'All 6 branches synced',
      sH: 'From a website to the ERP of a whole factory', sP: 'Pick one thing or hand us the whole project. AI comes with every system, and you deal with the people who build it, from the first call to support.',
      v1h: 'AI assistants on WhatsApp and phone', v1p: 'They answer customers, take orders and bookings, and enter them in your system at any hour.',
      v2h: 'Automation', v2p: 'Reports, data entry and follow-ups that used to take hours now run on their own, and AI drafts the messages and summaries.',
      v3h: 'AI analysis and dashboards', v3p: 'A dashboard for every department, and an assistant that tells you what changed and why.',
      v4h: 'ERP on Odoo', v4p: 'Sales, stock, accounting and manufacturing in one system for multi-branch companies and factories. An AI assistant answers questions about your numbers.',
      v5h: 'HR and payroll', v5p: 'Fingerprint attendance, shifts, payroll and leave for every branch, with an AI summary of attendance every morning.',
      v6h: 'Retail and supply chain', v6p: 'Branches, stock and deliveries on one screen, and AI that tells you what to move before a branch runs out.',
      v7h: 'Websites', v7p: 'Arabic and English websites that load fast on any phone, with an AI assistant that answers your visitors, like Mario on this page.',
      v8h: 'Android and iPhone apps', v8p: 'Apps for Android, iPhone and the web, including loyalty apps with points and rewards, with AI inside when you need it.',
      aiTag: 'In every system we build', aiH: 'AI that knows your numbers',
      aiP: 'We connect AI to the data already in your ERP, HR system or store. It explains what the numbers mean and prepares the next step for your team to approve, and your managers follow everything on dashboards they can open from their phone.',
      ai1b: 'Ask in plain words', ai1s: '"How much did Branch 2 sell this week?" gets an answer in seconds, in Arabic or English.',
      ai2b: 'Full analysis', ai2s: 'Trends, comparisons and the reason behind a drop, written out like a short report.',
      ai3b: 'Alerts before problems', ai3s: 'A WhatsApp message when stock, sales or attendance moves away from normal.',
      ai4b: 'Actions you approve', ai4s: 'It prepares the transfer, the purchase order or the reminder, and someone on your team confirms it.',
      wT: 'Daily sales · all branches', wBtn: 'Analyse with AI', wThink: 'Reading 14 days of sales from 6 branches…',
      wHint: 'Press the button and the AI reads these numbers for you, the same way it does every morning for our clients.',
      ins: ['This week is 6% up on last week, led by fresh produce.', "Monday's drop came from Branch 4. Water and rice ran out there by 2 PM.", 'At this pace Branch 4 runs out of water again on Sunday. Moving 120 cartons from the warehouse covers the week.'],
      act: 'Create the transfer', actDone: 'Transfer WH/INT/00412 created and sent to the warehouse',
      regL: '+6% this week', cap: 'November 2026 · daily sales in EGP', days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], mon: 'Nov', money: v => v >= 1000 ? (v / 1000).toFixed(2) + 'M EGP' : v + 'K EGP',
      dTag: 'Live demos', dH: 'Try our systems yourself', dP: 'Each demo works like the real system running at a client, with sample data. Tap the buttons and watch what happens inside the system.',
      solTag: 'MK Solutions', solH: 'Tested templates, fitted to how you work',
      solP: "Every business runs differently, so we never hand you software straight out of the box. Each solution starts from a template we've already built and tested at real clients, and then we shape it around your company. Think of a tailored suit: a proven pattern, cut to your size. It goes live only after it runs on your own data without errors.",
      f1h: 'A tested template', f1p: 'Each template comes from systems we have already delivered, so the basics are proven from day one.',
      f2h: 'Fitted to your business', f2p: 'Screens, approvals, reports and links to your other systems, changed to match how your team works.',
      f3h: 'Tested on your data', f3p: 'We run it on a copy of your real data and fix every issue before launch, so day one is calm.',
      tplT: 'Our templates',
      sol1: 'Sales, purchasing, stock, accounting and manufacturing for retail chains and factories.', sol1b: 'Template · Odoo Community',
      sol2: 'Fingerprint attendance, shifts, payroll, leave and hiring for every branch.', sol2b: 'Template · Odoo 19 Community',
      sol5: 'Bookings, patient files, doctors\' schedules, HR and payroll for clinics, with AI that plans shifts from the bookings, so every patient is covered with the fewest staff.', sol5b: 'Template · fully customizable',
      sol3: 'AI assistants on WhatsApp, the phone and your website that take orders, bookings and questions, plus sales agents that take payment and update your CRM.', sol3b: 'Connects to your system',
      sol4: 'Dashboards and AI analysis that explain your numbers and warn you early.', sol4b: 'Works on your own data',
      hrPeek: 'A template in action: MK HR', hrSub: 'Attendance, payroll and leave for every branch, in one place.',
      hrDesc: 'MK HR is Odoo 19 Community, customized for a retail chain with many branches, where it runs today. Fingerprint devices, shifts, payroll, leave and hiring sit in one system in Arabic and English. AI reads the attendance every day and sends managers a short summary each morning, plus a message when something looks off.',
      feat: ['Fingerprint devices at every branch', 'Shifts, rosters and overtime', 'Payroll with advances and deductions', 'Eight leave types and hourly permissions', 'Hiring and offer letters', 'Approvals for managers and HR', 'Each branch as its own company', 'AI summary and alerts every day'],
      demoAsk: 'Ask for a demo on your data', dTitle: 'MK HR · all branches', dLive: 'sample data', k1: 'At work', k2: 'Late today', k3: 'On leave',
      p1: 'Fingerprint scans', p2: 'Payroll run', p3: 'Attendance this week',
      alerts: ['Branch 2 has three late arrivals by 9:00, twice the usual.', 'Overtime at the head office is up 18% this week.', 'All six branches synced at 8:00.', 'Two payslips are waiting for a manager to approve.'],
      payRun: n => `Calculating payslips <b>${n}</b> / 436`, payDone: '<b>436 payslips</b> ready to approve',
      names: ['Ahmed', 'Mona', 'Karim', 'Sara', 'Omar', 'Nour', 'Youssef', 'Hana'], branches: ['Branch 1', 'Branch 2', 'Head office', 'Branch 3'], st: { ok: 'On time', late: 'Late', ot: 'Overtime' },
      scan: 'Try it: scan a fingerprint', scanNote: 'Your scan shows up in the feed.', you: 'You', hq: 'Head office',
      oH: 'ERP and HR on Odoo Community, fitted to your company',
      oP: "Odoo Community is open source, so there's no fee per user. We set it up around your branches, products, approvals and reports, bring your data over from Excel or your old system, and add AI on top.",
      o1b: 'No fee per user', o1s: 'Add staff and branches without paying for every new account.',
      o2b: 'Your server, your data', o2s: 'It runs on your own server or on a cloud you choose.',
      o3b: 'Made for how you work', o3s: 'Screens, reports, approvals and printouts changed to match your company, in Arabic and English.',
      o4b: 'Grows with you', o4s: "Start with sales and stock, then add accounting, manufacturing, HR and payroll when you're ready.",
      modsT: 'What we set up and customize', modsNote: 'Pick what you need now and add the rest later.',
      mods: ['Sales', 'Purchase', 'Inventory', 'Accounting', 'Manufacturing', 'Point of Sale', 'CRM', 'Employees', 'Attendance', 'Payroll', 'Website', 'Reports'], modAI: 'AI assistant and analysis on top of every module',
      pH: 'How a project goes',
      steps: [['Listen', 'We sit with your team and see how the work really gets done.'], ['Plan', 'You get a written plan in plain language to check before we build anything.'], ['Build', 'You see something working every week, so nothing comes as a surprise.'], ['Launch', 'We move your data, train your team and switch it on together.'], ['Support', 'We stay to fix, adjust and add what you need next.']],
      abTag: 'About us', abH: "Who's behind MK Automation", abName: 'Marwan Khater', abRole: 'Founder · AI Solutions Engineer', abPort: 'Portfolio',
      ab1: 'MK Automation is run by Marwan Khater, an AI solutions engineer. Before starting the company he built ERP and HR systems, WhatsApp and phone assistants, and AI tools inside Odoo for companies in Egypt, and all of them are still running at those companies today.',
      ab2: 'His strength is the step most projects get wrong: turning what a manager describes in a meeting into a clear plan the team can build. He leads a small team of developers and takes part in every project, from the first meeting to launch.',
      abChips: ['Odoo 16 to 19', 'Python', 'AI agents', 'Prompt engineering', 'System architecture', 'WhatsApp and voice'],
      cTag: 'Contact', cH: "Not sure what you need? Let's figure it out together.",
      cP: "Tell us what's slowing you down, even if it's only a feeling that things take too long. We'll reply with what we think the problem is and how we'd solve it.",
      r1b: 'We look for the real cause', r1s: "Often the fix is smaller than you expect, and sometimes it isn't software at all.",
      r2b: 'You get a clear answer', r2s: "What we'd do, exactly which parts you need, how long it takes and what we need from your side.",
      r3b: 'No jargon', r3s: 'Everything explained in plain words, in Arabic or English.',
      fName: 'Your name', fCompany: 'Company (optional)', fPhone: 'Phone (optional)', fNeed: 'What do you need?', fProblem: "What's going on?",
      needs: ['Advice on a problem', 'A new system', 'Add AI to my system', 'Automate a task', 'Website or app', 'Not sure yet'],
      phProblem: 'For example: our team spends two days every month preparing payroll from Excel sheets.',
      send: 'Send by email', sendWa: 'or message us on WhatsApp', fSmall: 'Your email app opens with the message ready to send. If nothing opens, email us directly at', copy: 'Copy', copied: 'Copied',
      errProblem: 'Tell us a little about the problem first.', subject: 'Inquiry from the MK Automation website',
      msg: o => `Hello MK Automation,\n\n${o.name ? "I'm " + o.name + (o.company ? ' from ' + o.company : '') + '.\n' : ''}${o.needs.length ? 'I need: ' + o.needs.join(', ') + '.\n' : ''}\n${o.problem}\n${o.phone ? '\nPhone: ' + o.phone : ''}`,
      footWa: 'WhatsApp', foot: 'MK Automation · Cairo, Egypt · © 2026', odooNote: 'Odoo is a trademark of Odoo S.A. MK Automation is an independent company.',
      demo: {
        tabs: { loyalty: 'Loyalty app', hr: 'HR & payroll', mgr: "Manager's assistant", cs: 'Sales & support', rest: 'Restaurant orders', book: 'Bookings', clinic: 'Clinics', phone: 'Phone assistant', odoo: 'Ask Odoo', retail: 'Retail ERP', factory: 'Factory ERP', apps: 'Mobile apps' },
        under: 'Under the hood', restart: 'Start over',
        info: {
          mgr: { k: 'Live with a management team', h: "The manager's assistant on WhatsApp", p: 'A summary arrives every morning. Ask about sales, stock or staff and the answer comes from the live system. When a number looks wrong, it messages you first.', x: 'WhatsApp Business API · AI model with read access to the ERP · scheduled summaries and threshold alerts' },
          cs: { k: 'Sales and support agent', h: 'From "I have a problem" to paid, in one chat', p: "Customers tell Mario what's wrong or what they want. He asks the right questions, suggests the fix or the right part, takes the payment, registers the customer in the CRM and follows up afterwards.", x: 'WhatsApp or website chat · AI with your catalogue and prices · CRM and payment links · scheduled follow-ups', also: 'Also built for clinics, real estate, car service, online stores, schools and B2B sales.' },
          rest: { k: 'Live at a restaurant', h: 'Orders on WhatsApp, straight to the kitchen', p: 'The assistant knows the menu and prices, remembers what regulars usually order and confirms the total before anything is cooked. Nobody types orders by hand anymore.', x: 'WhatsApp Business API · AI model limited to the menu and prices · tickets pushed to the kitchen screen' },
          book: { k: 'Live at a service company', h: 'Bookings that land in the ERP', p: 'Customers pick a service and a free slot in the chat. The booking appears in the Odoo calendar and a reminder goes out the evening before.', x: 'Free slots read from Odoo in real time · booking written back to the calendar · scheduled reminders' },
          loyalty: { k: 'Android · iPhone · loyalty', h: 'A loyalty app that brings customers back', p: 'Customers collect points every time they pay, see their rewards and get offers picked for them. The AI spots who stopped coming and sends them a reason to return.', x: 'Android and iPhone app · points, tiers and rewards · connected to your POS or Odoo · AI offers and win-back campaigns' },
          hr: { k: 'Live at a retail chain', h: 'Attendance and payroll that check themselves', p: 'Fingerprint scans arrive from every branch as they happen. Before payroll runs, the AI looks for anything unusual, like overtime far above normal or absences without a leave request, and asks you before paying.', x: 'Customized Odoo 19 Community · fingerprint devices · payroll rules · AI check before payday' },
          clinic: { k: 'Clinic management', h: 'Clinic bookings, staff and payroll, with AI shift planning', p: "Patients book online or on WhatsApp, every doctor sees their day, and HR and payroll run in the same system. The AI reads tomorrow's bookings and plans the shifts so every patient is covered with the fewest staff.", x: "Bookings and patient files · doctors' schedules · HR and payroll · AI shift planning from bookings" },
          phone: { k: 'Live on a customer service line', h: 'An assistant that answers the phone', p: "It picks up at any hour, understands Egyptian Arabic and English, finds the caller's order in the system and tells them where it is.", x: 'Speech recognition and a natural voice · order lookup in the ERP · follow-up message on WhatsApp' },
          odoo: { k: 'Odoo 16 module', h: 'Ask Odoo in plain words', p: "Type a question the way you'd ask a colleague. The assistant finds the records, explains them and drafts the next step.", x: 'Odoo module in Python · AI model with tool calls · reads invoices, sales and stock' },
          retail: { k: 'Live at a retail chain', h: "Every branch's stock, with AI suggestions", p: "See what each branch holds and what's about to run out. The AI suggests what to move where, and one click turns that into transfers.", x: 'Odoo Community · one company per branch · forecasts from sales · internal transfers' },
          factory: { k: 'Live at a manufacturer', h: 'Will this order be ready on time?', p: 'Ask the AI whether an order can be delivered on time. It checks every material, spots what is short, orders it with your approval, plans production and tells you the ready date.', x: 'Odoo Manufacturing · bills of materials · purchase requests · AI forecast on material use' },
          apps: { k: 'Android · iPhone · web', h: 'Apps people open every day', p: 'A services marketplace and a ride booking app, in Arabic and English, where customers browse, book and follow their request. We build for Android, iPhone and the web, and add AI where it helps.', x: 'Android and iPhone · Arabic and English · customer accounts · live request status' },
        },
        mgr: {
          av: 'M', name: 'Mario', sub: 'Your AI assistant · connected to the ERP', t0: 480, start: 'm0', sysT: 'Where the answer came from', logT: 'Activity log',
          srcs: { sales: 'Sales', stock: 'Stock', hr: 'HR', fc: 'Forecast' },
          n: {
            m0: { b: ["Good morning, it's Mario. Yesterday in short:\nSales: 1.24M EGP, and this week is 6% up on last week\nAttendance: 412 of 436\nWater in Branch 4 is running low"], fx: { s: ['sales', 'hr', 'stock'], l: ['sale.report · date = yesterday', 'hr.attendance · today · 6 branches', 'stock.quant · below reorder level'] }, o: [['Which branch did best?', 'm1'], ['Why is water low in Branch 4?', 'm2'], ["Who's on leave today?", 'm3']] },
            m1: { b: ["Branch 3, with 312K EGP. Fresh produce there sold 14% more after Thursday's offer."], fx: { s: ['sales'], l: ['sale.report · yesterday · group by branch', 'sale.report · branch 3 · by category'] }, o: [['Why is water low in Branch 4?', 'm2'], ["Who's on leave today?", 'm3'], ['Start over', '_reset']] },
            m2: { b: ['Water sales there doubled this week, and the last delivery came 60 cartons short. At this rate it runs out on Sunday.', 'Want me to prepare a transfer from the warehouse?'], fx: { s: ['stock', 'fc'], l: ['stock.quant · water 1.5 L · branch 4 = 18', 'forecast · 14-day sales rate → empty on Sunday'] }, o: [['Yes, prepare it', 'm4'], ["Who's on leave today?", 'm3']] },
            m4: { b: ['Done. Transfer WH/INT/00412 for 120 cartons is ready, and I asked the warehouse manager to confirm it.'], fx: { s: ['stock'], notify: 1, l: ['stock.picking · internal transfer · draft', 'notify · warehouse manager'] }, o: [['Which branch did best?', 'm1'], ['Start over', '_reset']] },
            m3: { b: ['14 people: 9 on annual leave, 3 on sick leave and 2 on hourly permission. No branch manager is off today.'], fx: { s: ['hr'], l: ['hr.leave · state = approved · today'] }, o: [['Which branch did best?', 'm1'], ['Why is water low in Branch 4?', 'm2'], ['Start over', '_reset']] },
          },
        },
        cs: {
          av: 'HF', name: 'HomeFix', sub: 'Mario · AI agent', t0: 1110, start: 'c0', payL: 'Pay {amt} EGP', paying: 'Processing…', paidL: '✓ Paid',
          crmT: 'CRM · HomeFix', cust: 'Ahmed Samir', phone: '+20 10• ••• 4471', src: 'WhatsApp', stages: ['New', 'Diagnosed', 'Quoted', 'Paid'], lab: ['Need', 'Value', 'Next step'],
          needs: { diag: 'Washing machine · error E21', quote2: 'Fridge part · RF-450' }, vals: { quote: '650 to 850 EGP', quote2: '380 to 420 EGP', paid: '{amt} EGP · paid' },
          next: { init: 'Understand the request', diag: 'Waiting for the customer to check', quote: 'Send the payment link', paid: 'Follow up after delivery · tomorrow 2 PM', solved: 'Check in tomorrow · 6 PM' }, solvedTag: 'Solved, no visit',
          n: {
            c0: { b: ["Hi, I'm Mario from HomeFix 👋 Tell me what's going on, or what you're looking for."], o: [['My washing machine shows error E21', 'c1'], ['I want to buy a spare part', 'c6']] },
            c1: { b: ["E21 usually means the water isn't draining. Two quick checks first:\n1. Is the drain hose bent?\n2. Is the small filter at the bottom front blocked?"], fx: 'diag', o: [['Checked both, still there', 'c2'], ['That fixed it, thanks!', 'c5']] },
            c2: { b: ["Then it's most likely the drain pump. For your model (WM-8KG) the pump is 650 EGP, and a technician can fit it tomorrow for 200 EGP."], fx: 'quote', o: [['Book the technician too', 'c3', { amt: '850', what: 'Pump and fitting' }], ['Just the part, please', 'c3', { amt: '650', what: 'Drain pump' }]] },
            c3: { b: ['Done: {what}, {amt} EGP. Here is your payment link:'], pay: 'c4', o: [] },
            c4: { b: ["Payment received, thank you! Order #HF-2291 is confirmed, and I'll check in with you afterwards."], fx: 'paid', o: [['Start over', '_reset']] },
            c5: { b: ["Great news! I've noted it on your account, and I'll check in tomorrow to make sure it keeps working."], fx: 'solved', o: [['Start over', '_reset']] },
            c6: { b: ['Sure. Which appliance and model?'], o: [['Fridge · RF-450', 'c7'], ['Washing machine · WM-8KG', 'c2']] },
            c7: { b: ['For the RF-450, people usually need the door seal (420 EGP) or the thermostat (380 EGP). Which one?'], fx: 'quote2', o: [['Door seal', 'c3', { amt: '420', what: 'Door seal RF-450' }], ['Thermostat', 'c3', { amt: '380', what: 'Thermostat RF-450' }]] },
          },
        },
        rest: {
          av: 'GH', name: 'Grill House', sub: 'Replies instantly', t0: 1241, start: 'r0', kitchen: 'Kitchen screen', waiting: 'Waiting for orders', meta: 'WhatsApp · delivery to the saved address', total: 'Total', st: ['New', 'Preparing'],
          tickets: { o1: { items: ['2 × Chicken shawarma', '1 × Large fries'], total: '215 EGP' }, o2: { items: ['2 × Chicken shawarma', '1 × Large fries', '1 × Mint lemonade'], total: '255 EGP' }, o3: { items: ['1 × Beef burger', '1 × Mint lemonade'], total: '180 EGP' } },
          n: {
            r0: { b: ["Hi, I'm Mario, Grill House's assistant. What would you like today?"], o: [['Show me the menu', 'r1'], ['Same as last time', 'r5']] },
            r1: { b: ["Here's tonight's menu:\nChicken shawarma · 85 EGP\nBeef burger · 140 EGP\nLarge fries · 45 EGP\nMint lemonade · 40 EGP"], o: [['2 shawarma and large fries', 'r2']] },
            r2: { b: ['2 chicken shawarma and 1 large fries, 215 EGP. Anything to drink?'], o: [['Add a mint lemonade', 'r3'], ["No, that's all", 'r4']] },
            r3: { b: ['Added. 255 EGP in total. Same address as last time?'], o: [['Yes, same address', 'd2']] },
            r4: { b: ['215 EGP in total. Same address as last time?'], o: [['Yes, same address', 'd1']] },
            r5: { b: ['Last time you had a beef burger and a mint lemonade, 180 EGP. Same again?'], o: [['Yes please', 'd3']] },
            d1: { b: ['Done. Order #1042 is in the kitchen and should reach you in about 35 minutes.'], fx: 'o1', o: [['Start over', '_reset']] },
            d2: { b: ['Done. Order #1042 is in the kitchen and should reach you in about 35 minutes.'], fx: 'o2', o: [['Start over', '_reset']] },
            d3: { b: ['Done. Order #1042 is in the kitchen and should reach you in about 35 minutes.'], fx: 'o3', o: [['Start over', '_reset']] },
          },
        },
        book: {
          av: 'AC', name: 'AutoCare', sub: 'Replies instantly', t0: 675, start: 'k0', calT: 'Odoo calendar · bookings', cols: ['Tomorrow', 'Sunday'], rows: ['10:00 AM', '12:30 PM', '4:00 PM'], busy: 'Booked', newL: 'New',
          hint: 'Free slots come straight from this calendar.', saved: 'Saved in Odoo · reminder scheduled for the evening before',
          n: {
            k0: { b: ["Hello, I'm Mario, AutoCare's booking assistant. What does your car need?"], o: [['Oil change', 'k1', { svc: 'Oil change' }], ['Full check-up', 'k1', { svc: 'Full check-up' }], ['AC service', 'k1', { svc: 'AC service' }]] },
            k1: { b: ['{svc}, sure. Which day suits you?'], o: [['Tomorrow', 'k2', { day: 'tomorrow', di: 0 }], ['Sunday', 'k3', { day: 'on Sunday', di: 1 }]] },
            k2: { b: ['These times are free tomorrow:'], o: [['12:30 PM', 'k4', { time: '12:30 PM', ti: 1 }], ['4:00 PM', 'k4', { time: '4:00 PM', ti: 2 }]] },
            k3: { b: ['These times are free on Sunday:'], o: [['10:00 AM', 'k4', { time: '10:00 AM', ti: 0 }], ['4:00 PM', 'k4', { time: '4:00 PM', ti: 2 }]] },
            k4: { b: ["Booked: {svc}, {day} at {time}. You'll get a reminder the evening before."], fx: 'book', o: [['Book another', '_reset']] },
          },
        },
        odoo: {
          av: 'M', name: 'Mario', sub: 'AI assistant inside Odoo 16', t0: 630, start: 'o0', invT: 'Customer invoices', draft: 'Draft ready',
          cols: ['Number', 'Customer', 'Due', 'Amount (EGP)', 'Status'], due: ['17 Oct', '30 Oct', '8 Nov', '28 Nov', '2 Dec'], st: { od: 'Overdue · {d} days', nd: 'Not due yet' },
          q0: 'account.move · customer invoices', q: { ov: 'account.move · out_invoice · not paid · due < today', top: 'account.move · open invoices · group by partner', rem: 'mail.compose.message · draft · INV/2026/0412' },
          n: {
            o0: { b: ["Hi, I'm Mario. What do you need today?"], o: [['Which invoices are overdue?', 'o1'], ['Who are my biggest customers right now?', 'o2']] },
            o1: { b: ['3 invoices are overdue, 128,500 EGP in total. The oldest is INV/2026/0412 for Green Valley Farms, 34 days late.'], fx: 'ov', o: [['Draft a reminder for the oldest', 'o3'], ['Who are my biggest customers right now?', 'o2']] },
            o2: { b: ['By open invoices: Horizon Trading with 51,000 EGP, Green Valley Farms with 46,000 EGP and Al Noor Pharmacy with 31,500 EGP.'], fx: 'top', o: [['Which invoices are overdue?', 'o1'], ['Start over', '_reset']] },
            o3: { b: ["Here's a draft for Green Valley Farms:\n\"Hello, a quick reminder that invoice INV/2026/0412 for 46,000 EGP was due on 17 October. Could you let us know when to expect payment? Thank you.\""], fx: 'rem', o: [['Start over', '_reset']] },
          },
        },
        phone: {
          callName: 'Customer service line', incoming: 'Incoming call', live: 'Mario is on the line', ended: 'Call ended', play: 'Play the call', again: 'Play again',
          hint: 'Press play to follow a sample call. The conversation appears here as it happens.', who: { ai: 'Mario', c: 'Customer' },
          sysT: 'What the system did', empty: 'Nothing yet. Start the call.',
          look: [['Order', 'A-2291'], ['Item', 'Washing machine 8 kg'], ['Status', 'Out for delivery'], ['Driver arrives in', 'about 20 min']], wa: "WhatsApp sent: driver's name and number",
          lines: [['ai', "Hello, this is Mario from customer service. How can I help?"], ['c', "Hi, I ordered a washing machine on Sunday and it hasn't arrived yet."], ['ai', "Let me check. What's the order number?"], ['c', 'A-2291.'], ['ai', 'Found it. It left the warehouse this morning and the driver is about 20 minutes away. Shall I send you his number on WhatsApp?', 'look'], ['c', 'Yes, please.'], ['ai', "Done, it's on your WhatsApp now. Anything else I can help with?", 'wa']],
        },
        retail: {
          k: ['Branches', 'Running low', 'Transfers today'], notes: ['Branch 4 runs out on Sunday', 'Branch 2 runs out tomorrow', 'Branch 3 runs out tomorrow'], moved: '+{q} moved from the warehouse',
          title: 'Stock by branch', cols: ['Product', 'Warehouse', 'Branch 1', 'Branch 2', 'Branch 3', 'Branch 4'], prods: ['Water 1.5 L × 6', 'Rice 5 kg', 'Cooking oil 1 L', 'Sugar 1 kg'],
          find: "Find what's running low", create: 'Create 3 transfers', done: 'Transfers created', aiT: 'AI suggestion · based on the last 14 days of sales', ph: 'Press the button and the AI checks every branch against its sales.',
          sugg: ['Move 120 cartons of water to Branch 4 (runs out on Sunday)', 'Move 60 bags of rice to Branch 2 (runs out tomorrow)', 'Move 80 bottles of oil to Branch 3 (runs out tomorrow)'], doneT: 'Done · 3 transfers sent to the warehouse',
        },
        factory: {
          title: 'Order to delivery', ask: 'Can we deliver on time? Ask the AI', order: 'New order', orderD: '500 metal shelving units for Al Amal Stores, due Sunday 6 Dec',
          vq: 'On time?', vwait: 'Checking…', vwarn: 'Paint is short', vok: 'On time ✓', matT: 'Materials', need: 'needed', stock: 'in stock', short: 'short', enough: 'enough', arriving: 'arriving Monday',
          mats: [['Steel sheet', 1250, 1400, 'kg'], ['Powder paint', 40, 28, 'kg'], ['Bolts', 8000, 9500, 'pcs']],
          aiShort: 'Powder paint is 12 kg short. The usual supplier can deliver on Monday, before painting starts on Wednesday.', approve: 'Order 12 kg of paint', approved: 'Purchase order sent to the supplier',
          planT: 'Production plan · Line 2', plan: [['Cut and bend', 'Mon and Tue'], ['Paint', 'Wed'], ['Assemble and pack', 'Thu']], run: 'Start production', units: 'units',
          delT: 'Delivery', delWait: 'Waiting for production', delOk: 'Ready Thursday 3 Dec, before the Sunday 6 Dec deadline', again: 'Run again',
        },
        ld: {
          brand: 'Daily Market', hi: 'Hi Ahmed', me: 'Ahmed', tier: 'Silver member', pts: 'points', toGold: '{n} points to Gold', scan: 'Scan to pay at the cashier', scanning: 'Show this code to the cashier',
          paid: 'Paid 350 EGP · +35 points', offerT: 'Picked for you', offer: 'You buy coffee most Saturdays. Get 20% off coffee this weekend.', save: 'Save offer', saved: 'Saved to your wallet ✓',
          rewards: 'Rewards', rw: [['Free coffee', 300], ['50 EGP voucher', 500], ['Free delivery', 200]],
          dashT: 'Loyalty dashboard', k: ['Members', 'Visits this month', 'Points given'], feedT: 'Latest activity', feed: [['Mona', '+22 points'], ['Karim', 'Free coffee redeemed'], ['Sara', '+48 points']],
          winT: 'AI insight', win: '312 customers have not visited in 30 days. Most of them used to buy fresh produce.', winBtn: 'Send them a comeback offer', winDone: 'Offer sent to 312 customers',
        },
        hrd: {
          title: 'HR · today and payroll', k: ['Employees', 'At work', 'Late', 'On leave'], todayT: 'Fingerprint scans today', scan: 'Scan a fingerprint', you: 'You', hq: 'Head office',
          feed: [['Mona', 'Branch 1', '08:52', 'ok'], ['Karim', 'Branch 2', '09:14', 'late'], ['Sara', 'Head office', '08:47', 'ok']], st: { ok: 'On time', late: 'Late' },
          payT: 'November payroll', payBtn: 'Run payroll with AI check', calc: 'Calculating payslips', found: 'The AI found 2 things to check before paying:',
          an: [{ who: 'Omar · Branch 2', what: '38 overtime hours this month, three times his usual', a: 'Approve', b: 'Ask his manager', ra: 'Approved', rb: 'Sent to his manager' }, { who: 'Hana · Head office', what: 'Absent 3 days with no leave request', a: 'Deduct the days', b: 'Ask HR first', ra: 'Days deducted', rb: 'Sent to HR' }],
          ready: 'Payroll ready: 436 payslips · 3.1M EGP', send: 'Send payslips', sent: 'Payslips sent to 436 employees on WhatsApp',
        },
        apps: { caps: ['Services marketplace', 'Ride booking'], hint: 'Drag to turn the phone, tap to switch apps' },
        sound: 'Sound', now: 'now', tapSee: 'Tap to see it in the system',
        pipes: { loyalty: [['app', 'App'], ['ai', 'Mario'], ['crm', 'CRM'], ['wa', 'WhatsApp']], hr: [['finger', 'Fingerprint'], ['ai', 'Mario'], ['erp', 'Payroll'], ['wa', 'Employees']], factory: [['erp', 'Order'], ['ai', 'Mario'], ['box', 'Stock'], ['bell', 'Purchasing']], cs: [['wa', 'WhatsApp'], ['ai', 'Mario'], ['crm', 'CRM'], ['pay', 'Payment']], rest: [['wa', 'WhatsApp'], ['ai', 'Mario'], ['erp', 'Kitchen'], ['bell', 'Chef']], book: [['wa', 'WhatsApp'], ['ai', 'Mario'], ['cal', 'Odoo'], ['bell', 'Technician']], mgr: [['erp', 'ERP'], ['ai', 'Mario'], ['wa', 'WhatsApp'], ['bell', 'Manager']], phone: [['call', 'Call'], ['ai', 'Mario'], ['erp', 'ERP'], ['wa', 'WhatsApp']], clinic: [['cal', 'Bookings'], ['ai', 'Mario'], ['erp', 'Rota'], ['wa', 'Staff']], retail: [['chart', 'Sales'], ['ai', 'Mario'], ['erp', 'Transfers'], ['box', 'Warehouse']] },
        toasts: { cs: ['Payment received', '{amt} EGP · order #HF-2291'], cs2: ['Follow-up scheduled', 'Mario will check in tomorrow'], rest: ['New order #1042', 'Kitchen screen · delivery'], book: ['New booking', '{svc} · {day} at {time}'], mgr: ['Warehouse manager', 'Transfer WH/INT/00412 is waiting for you'], odoo: ['Draft saved', 'Reminder for INV/2026/0412 is ready'], phone: ['WhatsApp sent', "Driver's name and number"], clinic: ['Rota sent', 'New shifts sent to 23 staff on WhatsApp'], retail: ['Warehouse', '3 transfers ready to pick'], factory1: ['Purchase order sent', '12 kg powder paint · arrives Monday'], factory2: ['Order ready', '500 shelving units · Thursday 3 Dec'], hr: ['Payslips sent', '436 employees · on WhatsApp'], loy: ['New purchase', 'Ahmed · 350 EGP · +35 points'], loyWin: ['Campaign sent', 'Comeback offer · 312 customers'], hrScan: ['Fingerprint received', 'You · Head office · on time'] },
        clinic: {
          title: 'Tomorrow at the clinic', k1: 'Bookings tomorrow', k2: 'Staff on shift', k3: 'Bookings covered', bk: 'bookings', lvls: ['busy', 'quiet', 'normal'], roles: ['Doctors', 'Nurses', 'Reception'], noChange: 'No change',
          shifts: ['Morning · 9 to 1', 'Afternoon · 1 to 5', 'Evening · 5 to 9'], plan: 'Plan tomorrow with AI', apply: 'Apply to the rota', applied: 'Rota updated and sent to the staff on WhatsApp',
          ph: 'Tomorrow has 88 bookings. Press the button and the AI works out how many doctors, nurses and receptionists each shift really needs.',
          aiT: 'AI staffing plan', res: '7 fewer people on shift tomorrow, and every booking is still covered. The afternoon is the quietest, so one doctor and two nurses can take that shift off.',
        },
      },
    },
    ar: {
      nav1: 'الخدمات', nav2: 'الذكاء الاصطناعي', nav3: 'جرّب بنفسك', nav4: 'حلول MK', nav5: 'من نحن', talk: 'راسلنا', langBtn: 'EN', sample: 'بيانات تجريبية',
      kicker: 'حلول ذكاء اصطناعي وERP وتطبيقات · القاهرة',
      h1: 'أنظمة لشركتك <em>والذكاء الاصطناعي في قلبها.</em>',
      lead: 'أنظمة ERP وموارد بشرية على Odoo، وأنظمة للعيادات، ومواقع إلكترونية، وتطبيقات أندرويد وآيفون، ومساعدون أذكياء على واتساب والهاتف. كل نظام نبنيه يقرأ أرقامه بنفسه، ويرد على فريقك بكلام بسيط، وينبهك قبل أن تكبر المشكلة.',
      plat: ['ويب', 'أندرويد', 'آيفون', 'تطبيقات الولاء', 'واتساب', 'Odoo', 'وكلاء ذكاء اصطناعي'],
      indL: 'اختر مجالك:', ind: [['المصانع', 'factory'], ['سلاسل المتاجر', 'retail'], ['العيادات', 'clinic'], ['المطاعم', 'rest'], ['شركات الخدمات', 'cs']],
      sampleHero: 'البطاقات ببيانات تجريبية', labCta: 'تريد أن ترى أحد هذه الأنظمة يعمل على بياناتك؟', solCta: 'اسأل عن هذا القالب ←', solAsk: n => `مهتم بـ ${n}. `,
      aLang: 'English', aClose: 'إغلاق', aSend: 'إرسال', aDash: 'لوحة الموارد البشرية ببيانات تجريبية',
      probBtn: 'احكِ لنا مشكلتك', stMario: 'اشرحها لماريو',
      stTag: 'ابدأ بمشكلتك', stH: 'قل لنا ما يعطّلك، ونخبرك بالضبط بما تحتاجه.',
      stP: 'لا تحتاج أن تعرف أي نظام تشتري. اشرح المشكلة بكلماتك، ونعود إليك بالحل المناسب: ما الذي تحتاجه، وما الذي يمكنك الاستغناء عنه، وما الذي يتطلبه التنفيذ.',
      st1h: 'أخبرنا بالمشكلة', st1p: 'بالإيميل أو على واتساب أو من خلال ماريو، بالعربي أو الإنجليزي.',
      st2h: 'نجد السبب الحقيقي', st2p: 'نسأل بعض الأسئلة، ونرى كيف يعمل فريقك اليوم، ونراجع ما لديك بالفعل.',
      st3h: 'تحصل على توصية واضحة', st3p: 'ما الذي سنبنيه أو نربطه بالضبط، وما الذي لا تحتاجه، والسعر والمدة، قبل أن تلتزم بأي شيء.',
      pr1: 'ما تخبرنا به', pr2: 'ما نقترحه', prMid: 'ندرسها معك', needL: 'تحتاج', skipL: 'لا تحتاج',
      prx: [['«المرتبات بتاخد من فريقنا يومين كل شهر.»', 'MK HR بالحضور والرواتب', 'نظام ERP كامل'], ['«رسايل العملاء على واتساب بتضيع مننا بالليل.»', 'وكيل ذكي على واتساب مربوط بطلباتك', 'نظام جديد'], ['«الفروع بيخلص منها المخزون وبنعرف متأخر.»', 'تنبيهات المخزون واقتراحات التحويل الذكية', 'تغيير نظام Odoo الحالي']],
      tryBtn: 'جرّب الأنظمة بنفسك', trust: 'تعمل الآن في سلسلة متاجر ومصنع ومطعم وشركات خدمات.',
      c1h: 'ماريو · المساعد الذكي على واتساب', c1q: 'إيه أخبار امبارح؟', c1a: 'المبيعات 1.24 مليون جنيه، والأسبوع ده أعلى 6% من اللي قبله. فرع 3 الأحسن.',
      c2h: 'تحليل ذكي', c2b: 'مياه فرع 4 تنفد يوم الأحد', c2p: 'الاقتراح: نقل 120 كرتونة من المخزن',
      c3h: 'الحضور اليوم', c3b: '412 من 436 في العمل', c3p: 'تمت مزامنة الفروع الستة',
      sH: 'من موقع إلكتروني إلى نظام ERP لمصنع كامل', sP: 'اختر خدمة واحدة أو سلّمنا المشروع كله. الذكاء الاصطناعي جزء من كل نظام، وتتعامل مباشرة مع الفريق الذي يبنيه، من أول مكالمة حتى الدعم بعد التشغيل.',
      v1h: 'مساعدون أذكياء على واتساب والهاتف', v1p: 'يردّون على عملائك، ويستقبلون الطلبات والحجوزات، ويسجّلونها في نظامك على مدار الساعة.',
      v2h: 'أتمتة المهام', v2p: 'التقارير وإدخال البيانات والمتابعات التي كانت تأخذ ساعات أصبحت تعمل تلقائياً، والذكاء الاصطناعي يكتب الرسائل والملخصات.',
      v3h: 'تحليل ذكي ولوحات متابعة', v3p: 'لوحة لكل قسم، ومساعد يشرح لك ما تغيّر ولماذا.',
      v4h: 'أنظمة ERP على Odoo', v4p: 'المبيعات والمخزون والحسابات والتصنيع في نظام واحد للشركات متعددة الفروع وللمصانع، ومعه مساعد ذكي يجيب عن أسئلتك عن الأرقام.',
      v5h: 'الموارد البشرية والرواتب', v5p: 'الحضور بالبصمة والورديات والرواتب والإجازات لكل الفروع، مع ملخص ذكي للحضور كل صباح.',
      v6h: 'التجزئة وسلاسل الإمداد', v6p: 'الفروع والمخزون والتوصيل في شاشة واحدة، مع ذكاء اصطناعي يقترح ما يُنقل قبل أن ينفد المخزون في أي فرع.',
      v7h: 'المواقع الإلكترونية', v7p: 'مواقع باللغتين العربية والإنجليزية تفتح بسرعة على أي هاتف، ومعها مساعد ذكي يرد على زوارك، مثل ماريو في هذه الصفحة.',
      v8h: 'تطبيقات أندرويد وآيفون', v8p: 'تطبيقات لأندرويد وآيفون والويب، منها تطبيقات الولاء بالنقاط والمكافآت، مع ذكاء اصطناعي عند الحاجة.',
      aiTag: 'في كل نظام نبنيه', aiH: 'ذكاء اصطناعي يعرف أرقام شركتك',
      aiP: 'نربط الذكاء الاصطناعي بالبيانات الموجودة بالفعل في نظام الـ ERP أو نظام الموارد البشرية أو المتجر. يشرح لك ما تعنيه الأرقام، ويجهّز الخطوة التالية ليعتمدها فريقك، ويتابع المديرون كل شيء على لوحات تفتح من الموبايل.',
      ai1b: 'اسأل بكلامك العادي', ai1s: '«فرع 2 باع كام الأسبوع ده؟» وتأتيك الإجابة في ثوانٍ، بالعربي أو الإنجليزي.',
      ai2b: 'تحليل كامل', ai2s: 'الاتجاهات والمقارنات وسبب أي انخفاض، مكتوبة كتقرير قصير.',
      ai3b: 'تنبيه قبل المشكلة', ai3s: 'رسالة على واتساب عندما يخرج المخزون أو المبيعات أو الحضور عن المعتاد.',
      ai4b: 'يتصرف بموافقتك', ai4s: 'يجهّز التحويل أو أمر الشراء أو رسالة التذكير، وأحد أفراد فريقك يعتمده.',
      wT: 'المبيعات اليومية · كل الفروع', wBtn: 'حلّل بالذكاء الاصطناعي', wThink: 'يقرأ مبيعات 14 يوماً من 6 فروع…',
      wHint: 'اضغط الزر وسيقرأ الذكاء الاصطناعي هذه الأرقام لك، بنفس الطريقة التي يعمل بها كل صباح عند عملائنا.',
      ins: ['هذا الأسبوع أعلى 6% من الأسبوع الماضي، والخضار والفاكهة في المقدمة.', 'انخفاض يوم الاثنين سببه فرع 4، فقد نفدت المياه والأرز هناك قبل الثانية ظهراً.', 'بهذا المعدل ستنفد المياه في فرع 4 مرة أخرى يوم الأحد. نقل 120 كرتونة من المخزن يغطي الأسبوع.'],
      act: 'أنشئ أمر التحويل', actDone: 'تم إنشاء التحويل WH/INT/00412 وإرساله للمخزن',
      regL: '+6% هذا الأسبوع', cap: 'نوفمبر 2026 · المبيعات اليومية بالجنيه', days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'], mon: 'نوفمبر', money: v => v >= 1000 ? (v / 1000).toFixed(2) + ' مليون جنيه' : v + ' ألف جنيه',
      dTag: 'عروض حيّة', dH: 'جرّب أنظمتنا بنفسك', dP: 'كل عرض تجريبي هنا يعمل مثل النظام الحقيقي الموجود عند العميل، لكن ببيانات تجريبية. اضغط الأزرار وشاهد ما يحدث داخل النظام.',
      solTag: 'حلول MK', solH: 'قوالب مجرّبة، نفصّلها على طريقة عملك',
      solP: 'كل شركة لها طريقتها، لذلك لا نسلّمك برنامجاً جاهزاً كما هو. كل حل يبدأ من قالب بنيناه وجرّبناه عند عملاء حقيقيين، ثم نفصّله على شركتك، كما تُفصَّل البدلة من تصميم مجرّب على مقاس صاحبها. ولا يبدأ التشغيل إلا بعد أن يعمل على بياناتك دون أخطاء.',
      f1h: 'قالب مجرّب', f1p: 'كل قالب مأخوذ من أنظمة سلّمناها بالفعل، فالأساسيات مجرّبة من اليوم الأول.',
      f2h: 'مفصّل على طريقة عملك', f2p: 'نعدّل الشاشات والموافقات والتقارير والربط مع أنظمتك الأخرى لتناسب طريقة عمل فريقك.',
      f3h: 'مُختبر على بياناتك', f3p: 'نجرّبه على نسخة من بياناتك الحقيقية ونصلح أي مشكلة قبل الإطلاق، فيمرّ اليوم الأول بهدوء.',
      tplT: 'قوالبنا',
      sol1: 'المبيعات والمشتريات والمخزون والحسابات والتصنيع لسلاسل المتاجر والمصانع.', sol1b: 'قالب · Odoo Community',
      sol2: 'الحضور بالبصمة والورديات والرواتب والإجازات والتوظيف لكل الفروع.', sol2b: 'قالب · Odoo 19 Community',
      sol5: 'الحجوزات وملفات المرضى وجداول الأطباء والموارد البشرية والرواتب للعيادات، مع ذكاء اصطناعي يخطط الورديات حسب الحجوزات لتغطية كل المرضى بأقل عدد من الموظفين.', sol5b: 'قالب · قابل للتخصيص بالكامل',
      sol3: 'مساعدون أذكياء على واتساب والهاتف وموقعك يستقبلون الطلبات والحجوزات والأسئلة، ووكلاء مبيعات يستلمون الدفع ويحدّثون الـ CRM.', sol3b: 'يرتبط بنظامك',
      sol4: 'لوحات متابعة وتحليل ذكي يشرح أرقامك وينبهك مبكراً.', sol4b: 'يعمل على بياناتك',
      hrPeek: 'قالب على أرض الواقع: MK HR', hrSub: 'الحضور والرواتب والإجازات لكل الفروع في مكان واحد.',
      hrDesc: 'MK HR هو Odoo 19 Community مخصّص لسلسلة متاجر لها فروع كثيرة، ويعمل عندها الآن. أجهزة البصمة والورديات والرواتب والإجازات والتوظيف في نظام واحد بالعربي والإنجليزي. والذكاء الاصطناعي يقرأ الحضور كل يوم، ويرسل للمديرين ملخصاً قصيراً كل صباح، ورسالة عندما يحدث شيء غير معتاد.',
      feat: ['أجهزة بصمة في كل فرع', 'الورديات والجداول والعمل الإضافي', 'الرواتب والسُّلف والخصومات', 'ثمانية أنواع من الإجازات والأذونات', 'التوظيف وخطابات عرض العمل', 'موافقات للمديرين والموارد البشرية', 'كل فرع كشركة مستقلة', 'ملخص وتنبيهات ذكية كل يوم'],
      demoAsk: 'اطلب عرضاً على بياناتك', dTitle: 'MK HR · كل الفروع', dLive: 'بيانات تجريبية', k1: 'في العمل', k2: 'متأخرون اليوم', k3: 'في إجازة',
      p1: 'البصمات الآن', p2: 'تشغيل الرواتب', p3: 'الحضور هذا الأسبوع',
      alerts: ['في فرع 2 ثلاثة متأخرين حتى التاسعة، ضعف المعتاد.', 'العمل الإضافي في المقر الرئيسي زاد 18% هذا الأسبوع.', 'تمت مزامنة الفروع الستة الساعة 8:00.', 'قسيمتا راتب في انتظار موافقة المدير.'],
      payRun: n => `جارٍ حساب الرواتب <b>${n}</b> / 436`, payDone: '<b>436 قسيمة راتب</b> جاهزة للاعتماد',
      names: ['أحمد', 'منى', 'كريم', 'سارة', 'عمر', 'نور', 'يوسف', 'هنا'], branches: ['فرع 1', 'فرع 2', 'المقر الرئيسي', 'فرع 3'], st: { ok: 'في الموعد', late: 'متأخر', ot: 'إضافي' },
      scan: 'جرّبها: سجّل بصمة', scanNote: 'ستظهر بصمتك في القائمة.', you: 'أنت', hq: 'المقر الرئيسي',
      oH: 'أنظمة ERP وموارد بشرية على Odoo Community، مفصّلة على شركتك',
      oP: 'Odoo Community مفتوح المصدر، فلا توجد رسوم على كل مستخدم. نضبطه على فروعك ومنتجاتك وموافقاتك وتقاريرك، وننقل بياناتك من Excel أو من نظامك القديم، ونضيف الذكاء الاصطناعي فوقه.',
      o1b: 'بلا رسوم على كل مستخدم', o1s: 'أضف موظفين وفروعاً دون أن تدفع عن كل حساب جديد.',
      o2b: 'سيرفرك وبياناتك', o2s: 'يعمل على سيرفرك الخاص أو على سحابة تختارها.',
      o3b: 'على مقاس شركتك', o3s: 'نعدّل الشاشات والتقارير والموافقات والمطبوعات لتناسب شركتك، بالعربي والإنجليزي.',
      o4b: 'يكبر معك', o4s: 'ابدأ بالمبيعات والمخزون، ثم أضف الحسابات والتصنيع والموارد البشرية والرواتب وقتما تريد.',
      modsT: 'ما نجهّزه ونخصّصه', modsNote: 'اختر ما تحتاجه الآن وأضف الباقي لاحقاً.',
      mods: ['المبيعات', 'المشتريات', 'المخزون', 'الحسابات', 'التصنيع', 'نقاط البيع', 'إدارة العملاء', 'الموظفون', 'الحضور', 'الرواتب', 'الموقع الإلكتروني', 'التقارير'], modAI: 'مساعد وتحليل ذكي فوق كل موديول',
      pH: 'كيف يسير المشروع',
      steps: [['نستمع', 'نجلس مع فريقك ونرى كيف يتم العمل فعلاً.'], ['نخطط', 'تصلك خطة مكتوبة بلغة بسيطة لتراجعها قبل أن نبدأ.'], ['نبني', 'ترى جزءاً يعمل كل أسبوع، فلا مفاجآت.'], ['نشغّل', 'ننقل بياناتك وندرّب فريقك ونشغّل النظام معاً.'], ['ندعم', 'نبقى معك للإصلاح والتعديل وإضافة ما تحتاجه بعد ذلك.']],
      abTag: 'من نحن', abH: 'من وراء MK Automation', abName: 'مروان خاطر', abRole: 'المؤسس · مهندس حلول ذكاء اصطناعي', abPort: 'معرض الأعمال',
      ab1: 'يدير مروان خاطر شركة MK Automation، وهو مهندس حلول ذكاء اصطناعي. قبل تأسيس الشركة بنى أنظمة ERP وموارد بشرية، ومساعدين على واتساب والهاتف، وأدوات ذكاء اصطناعي داخل Odoo لشركات في مصر، وكلها ما زالت تعمل لدى هذه الشركات.',
      ab2: 'أكثر ما يتقنه هو الخطوة التي تتعثر فيها معظم المشاريع: تحويل ما يشرحه المدير في اجتماع إلى خطة واضحة يستطيع الفريق تنفيذها. يقود فريقاً صغيراً من المطورين، ويشارك في كل مشروع من أول اجتماع حتى التشغيل.',
      abChips: ['Odoo من 16 إلى 19', 'Python', 'وكلاء ذكاء اصطناعي', 'هندسة الأوامر', 'تصميم الأنظمة', 'واتساب والمكالمات'],
      cTag: 'تواصل معانا', cH: 'مش متأكد إنت محتاج إيه؟ خلّينا نفكر فيها سوا.',
      cP: 'احكيلنا إيه اللي معطّلك، حتى لو مجرد إحساس إن الشغل بياخد وقت أكتر من اللازم. هنرد عليك ونقولك إحنا شايفين المشكلة فين، وهنحلّها إزاي.',
      r1b: 'بندوّر على السبب الحقيقي', r1s: 'ساعات الحل بيبقى أصغر مما تتخيل، وساعات مش محتاج برمجة أصلاً.',
      r2b: 'هتاخد إجابة واضحة', r2s: 'هنعمل إيه، ومحتاج إيه بالظبط، وهياخد قد إيه، ومحتاجين منك إيه.',
      r3b: 'من غير مصطلحات', r3s: 'بنشرح كل حاجة بكلام بسيط، بالعربي أو بالإنجليزي.',
      fName: 'اسمك', fCompany: 'الشركة (اختياري)', fPhone: 'رقم الموبايل (اختياري)', fNeed: 'محتاج إيه؟', fProblem: 'إيه اللي بيحصل؟',
      needs: ['استشارة في مشكلة', 'نظام جديد', 'إضافة ذكاء اصطناعي لنظامي', 'أتمتة مهمة', 'موقع أو تطبيق', 'لسه مش متأكد'],
      phProblem: 'مثلاً: الفريق بيقعد يومين كل شهر يجهّز المرتبات من شيتات Excel.',
      send: 'ابعتها بالإيميل', sendWa: 'أو كلّمنا على واتساب', fSmall: 'هيفتح تطبيق الإيميل والرسالة جاهزة للإرسال. ولو ما فتحش، ابعتلنا على', copy: 'نسخ', copied: 'اتنسخ',
      errProblem: 'اكتبلنا شوية عن المشكلة الأول.', subject: 'استفسار من موقع MK Automation',
      msg: o => `أهلاً MK Automation،\n\n${o.name ? 'أنا ' + o.name + (o.company ? ' من ' + o.company : '') + '.\n' : ''}${o.needs.length ? 'محتاج: ' + o.needs.join('، ') + '.\n' : ''}\n${o.problem}\n${o.phone ? '\nرقم الموبايل: ' + o.phone : ''}`,
      footWa: 'واتساب', foot: 'MK Automation · القاهرة، مصر · © 2026', odooNote: '<bdi>Odoo</bdi> علامة تجارية مملوكة لشركة <bdi>Odoo S.A.</bdi>، و<bdi>MK Automation</bdi> شركة مستقلة.',
      demo: {
        tabs: { loyalty: 'تطبيق الولاء', hr: 'الموارد البشرية والرواتب', mgr: 'مساعد المدير', cs: 'المبيعات والدعم', rest: 'طلبات المطعم', book: 'الحجوزات', clinic: 'العيادات', phone: 'المساعد الهاتفي', odoo: 'اسأل Odoo', retail: 'ERP التجزئة', factory: 'ERP المصانع', apps: 'تطبيقات الموبايل' },
        under: 'من الداخل', restart: 'ابدأ من جديد',
        info: {
          mgr: { k: 'يعمل مع فريق إدارة', h: 'مساعد المدير على واتساب', p: 'يصلك ملخص كل صباح. اسأله عن المبيعات أو المخزون أو الموظفين وتأتيك الإجابة من النظام مباشرة، وإذا ظهر رقم غير طبيعي يراسلك هو أولاً.', x: 'WhatsApp Business API · نموذج ذكاء اصطناعي متصل ببيانات الـ ERP · ملخصات مجدولة وتنبيهات عند تجاوز الحدود' },
          cs: { k: 'وكيل مبيعات وخدمة عملاء', h: 'من «عندي مشكلة» حتى الدفع، في محادثة واحدة', p: 'يحكي العميل لماريو مشكلته أو ما يريده، فيسأله الأسئلة الصحيحة، ويقترح الحل أو قطعة الغيار المناسبة، ويستلم الدفع، ويسجل العميل في الـ CRM، ثم يتابع معه بعد ذلك.', x: 'واتساب أو شات الموقع · ذكاء اصطناعي يعرف كتالوجك وأسعارك · CRM وروابط دفع · متابعة مجدولة', also: 'نبنيه أيضاً للعيادات والعقارات وصيانة السيارات والمتاجر الإلكترونية والمدارس ومبيعات الشركات.' },
          rest: { k: 'يعمل في مطعم', h: 'الطلب على واتساب يصل للمطبخ مباشرة', p: 'المساعد يعرف المنيو والأسعار، ويتذكر طلبات العملاء الدائمين، ويؤكد الإجمالي قبل بدء التحضير. لم يعد أحد يكتب الطلبات بيده.', x: 'WhatsApp Business API · ذكاء اصطناعي مقيّد بالمنيو والأسعار · الطلب يصل لشاشة المطبخ' },
          book: { k: 'يعمل في شركة خدمات', h: 'حجوزات تدخل نظام الـ ERP مباشرة', p: 'يختار العميل الخدمة والموعد المتاح من المحادثة، فيظهر الحجز في تقويم Odoo ويصله تذكير في المساء السابق.', x: 'قراءة المواعيد المتاحة من Odoo لحظياً · تسجيل الحجز في التقويم · تذكيرات مجدولة' },
          loyalty: { k: 'أندرويد · آيفون · ولاء', h: 'تطبيق ولاء يُرجع العملاء', p: 'يجمع العميل نقاطاً مع كل عملية دفع، ويرى مكافآته، وتصله عروض مختارة له. والذكاء الاصطناعي يلاحظ من توقف عن الزيارة ويرسل له سبباً ليعود.', x: 'تطبيق أندرويد وآيفون · نقاط ومستويات ومكافآت · متصل بنقاط البيع أو Odoo · عروض ذكية وحملات لاستعادة العملاء' },
          hr: { k: 'يعمل في سلسلة متاجر', h: 'حضور ورواتب تراجع نفسها', p: 'تصل بصمات الحضور من كل الفروع لحظة بلحظة. وقبل تشغيل الرواتب يبحث الذكاء الاصطناعي عن أي شيء غير معتاد، مثل عمل إضافي أعلى بكثير من المعتاد أو غياب بدون طلب إجازة، ويسألك قبل الصرف.', x: 'Odoo 19 Community مخصّص · أجهزة البصمة · قواعد الرواتب · فحص ذكي قبل الصرف' },
          clinic: { k: 'إدارة العيادات', h: 'الحجوزات والموظفون والرواتب في العيادة، مع تخطيط ذكي للورديات', p: 'يحجز المريض عبر الإنترنت أو على واتساب، ويرى كل طبيب جدول يومه، والموارد البشرية والرواتب في النظام نفسه. والذكاء الاصطناعي يقرأ حجوزات الغد ويخطط الورديات لتغطي كل المرضى بأقل عدد من الموظفين.', x: 'الحجوزات وملفات المرضى · جداول الأطباء · الموارد البشرية والرواتب · تخطيط ذكي للورديات من الحجوزات' },
          phone: { k: 'يعمل على خط خدمة العملاء', h: 'مساعد يرد على الهاتف', p: 'يرد في أي ساعة، ويفهم العامية المصرية والإنجليزية، ويجد طلب المتصل في النظام ويخبره أين وصل.', x: 'التعرّف على الكلام وصوت طبيعي · البحث عن الطلب في الـ ERP · رسالة متابعة على واتساب' },
          odoo: { k: 'موديول على Odoo 16', h: 'اسأل Odoo بكلامك العادي', p: 'اكتب سؤالك كأنك تسأل زميلاً. المساعد يجد السجلات ويشرحها ويجهّز الخطوة التالية.', x: 'موديول Odoo بلغة Python · نموذج ذكاء اصطناعي يستدعي أدوات · يقرأ الفواتير والمبيعات والمخزون' },
          retail: { k: 'يعمل في سلسلة متاجر', h: 'مخزون كل الفروع، مع اقتراحات ذكية', p: 'اعرف ما في كل فرع وما على وشك النفاد. الذكاء الاصطناعي يقترح ما يُنقل وإلى أين، وبضغطة واحدة يتحول الاقتراح إلى أوامر تحويل.', x: 'Odoo Community · شركة مستقلة لكل فرع · توقعات من المبيعات · تحويلات داخلية' },
          factory: { k: 'يعمل في مصنع', h: 'هل سيكون الطلب جاهزاً في موعده؟', p: 'اسأل الذكاء الاصطناعي هل يمكن تسليم الطلب في موعده. فهو يراجع كل الخامات، ويكتشف الناقص، ويطلبه بموافقتك، ويخطط الإنتاج، ويخبرك بموعد الجاهزية.', x: 'Odoo Manufacturing · قوائم المكونات · طلبات الشراء · توقع ذكي لاستهلاك الخامات' },
          apps: { k: 'أندرويد · آيفون · ويب', h: 'تطبيقات يفتحها الناس كل يوم', p: 'تطبيق لسوق الخدمات وتطبيق لطلب الرحلات، بالعربي والإنجليزي، يتصفح فيهما العميل ويحجز ويتابع طلبه. نبني لأندرويد وآيفون والويب، ونضيف الذكاء الاصطناعي حيث يفيد.', x: 'أندرويد وآيفون · عربي وإنجليزي · حسابات للعملاء · متابعة حالة الطلب' },
        },
        mgr: {
          av: 'M', name: 'ماريو', sub: 'مساعدك الذكي · متصل بنظامك', t0: 480, start: 'm0', sysT: 'مصدر الإجابة', logT: 'سجل العمليات',
          srcs: { sales: 'المبيعات', stock: 'المخزون', hr: 'الموارد البشرية', fc: 'التوقعات' },
          n: {
            m0: { b: ['صباح الخير، معاك ماريو. ملخص امبارح:\nالمبيعات: 1.24 مليون جنيه، والأسبوع ده أعلى 6% من اللي قبله\nالحضور: 412 من 436\nالمياه في فرع 4 قربت تخلص'], fx: { s: ['sales', 'hr', 'stock'], l: ['sale.report · date = yesterday', 'hr.attendance · today · 6 branches', 'stock.quant · below reorder level'] }, o: [['أنهي فرع كان الأحسن؟', 'm1'], ['ليه المياه قليلة في فرع 4؟', 'm2'], ['مين واخد إجازة النهارده؟', 'm3']] },
            m1: { b: ['فرع 3، بمبيعات 312 ألف جنيه. مبيعات الخضار والفاكهة هناك زادت 14% بعد عرض الخميس.'], fx: { s: ['sales'], l: ['sale.report · yesterday · group by branch', 'sale.report · branch 3 · by category'] }, o: [['ليه المياه قليلة في فرع 4؟', 'm2'], ['مين واخد إجازة النهارده؟', 'm3'], ['ابدأ من جديد', '_reset']] },
            m2: { b: ['مبيعات المياه هناك اتضاعفت الأسبوع ده، وآخر توريد كان ناقص 60 كرتونة. بالمعدل ده هتخلص يوم الحد.', 'أجهزلك تحويل من المخزن؟'], fx: { s: ['stock', 'fc'], l: ['stock.quant · water 1.5 L · branch 4 = 18', 'forecast · 14-day sales rate → empty on Sunday'] }, o: [['أيوه جهّزه', 'm4'], ['مين واخد إجازة النهارده؟', 'm3']] },
            m4: { b: ['تمام. جهّزت التحويل WH/INT/00412 بـ 120 كرتونة، وبعتّ لمدير المخزن علشان يأكّده.'], fx: { s: ['stock'], notify: 1, l: ['stock.picking · internal transfer · draft', 'notify · warehouse manager'] }, o: [['أنهي فرع كان الأحسن؟', 'm1'], ['ابدأ من جديد', '_reset']] },
            m3: { b: ['14 موظف: 9 إجازة سنوية، و3 إجازة مرضية، و2 إذن. مفيش مدير فرع غايب النهارده.'], fx: { s: ['hr'], l: ['hr.leave · state = approved · today'] }, o: [['أنهي فرع كان الأحسن؟', 'm1'], ['ليه المياه قليلة في فرع 4؟', 'm2'], ['ابدأ من جديد', '_reset']] },
          },
        },
        cs: {
          av: 'HF', name: 'HomeFix', sub: 'ماريو · وكيل ذكي', t0: 1110, start: 'c0', payL: 'ادفع {amt} جنيه', paying: 'جاري الدفع…', paidL: '✓ تم الدفع',
          crmT: 'CRM · HomeFix', cust: 'أحمد سمير', phone: '+20 10• ••• 4471', src: 'واتساب', stages: ['جديد', 'تشخيص', 'عرض سعر', 'مدفوع'], lab: ['الطلب', 'القيمة', 'الخطوة التالية'],
          needs: { diag: 'غسالة · خطأ E21', quote2: 'قطعة ثلاجة · RF-450' }, vals: { quote: 'من 650 إلى 850 جنيه', quote2: 'من 380 إلى 420 جنيه', paid: '{amt} جنيه · مدفوع' },
          next: { init: 'فهم طلب العميل', diag: 'في انتظار فحص العميل', quote: 'إرسال رابط الدفع', paid: 'متابعة بعد التسليم · غداً 2 م', solved: 'متابعة غداً · 6 م' }, solvedTag: 'حُلّت دون زيارة',
          n: {
            c0: { b: ['أهلاً، أنا ماريو من HomeFix 👋 احكيلي إيه اللي حاصل، أو بتدور على إيه.'], o: [['الغسالة بتطلع error E21', 'c1'], ['عايز أشتري قطعة غيار', 'c6']] },
            c1: { b: ['E21 غالباً معناها إن الغسالة مش بتصرّف المية. جرّب حاجتين الأول:\n1. خرطوم الصرف متني؟\n2. الفلتر الصغير اللي تحت من قدّام مسدود؟'], fx: 'diag', o: [['جربت الاتنين ولسه', 'c2'], ['اتحلت، شكراً!', 'c5']] },
            c2: { b: ['يبقى غالباً طلمبة الصرف. لموديل WM-8KG الطلمبة بـ 650 جنيه، والفني يقدر يركبها بكرة بـ 200 جنيه.'], fx: 'quote', o: [['احجزلي الفني كمان', 'c3', { amt: '850', what: 'طلمبة وتركيب' }], ['القطعة بس', 'c3', { amt: '650', what: 'طلمبة صرف' }]] },
            c3: { b: ['تمام: {what}، بـ {amt} جنيه. ده لينك الدفع:'], pay: 'c4', o: [] },
            c4: { b: ['الدفع وصل، شكراً! الأوردر #HF-2291 اتأكد، وهطمن عليك بعدها.'], fx: 'paid', o: [['ابدأ من جديد', '_reset']] },
            c5: { b: ['خبر حلو! سجلت ده على حسابك، وهكلمك بكرة أطمن إن كل حاجة شغالة تمام.'], fx: 'solved', o: [['ابدأ من جديد', '_reset']] },
            c6: { b: ['أكيد. الجهاز إيه والموديل كام؟'], o: [['تلاجة · RF-450', 'c7'], ['غسالة · WM-8KG', 'c2']] },
            c7: { b: ['لموديل RF-450 أكتر حاجة بتتطلب جلدة الباب (420 جنيه) والترموستات (380 جنيه). عايز أنهي؟'], fx: 'quote2', o: [['جلدة الباب', 'c3', { amt: '420', what: 'جلدة باب RF-450' }], ['الترموستات', 'c3', { amt: '380', what: 'ترموستات RF-450' }]] },
          },
        },
        rest: {
          av: 'GH', name: 'Grill House', sub: 'بيرد فوراً', t0: 1241, start: 'r0', kitchen: 'شاشة المطبخ', waiting: 'في انتظار الطلبات', meta: 'واتساب · توصيل على العنوان المحفوظ', total: 'الإجمالي', st: ['جديد', 'قيد التحضير'],
          tickets: { o1: { items: ['2 × شاورما فراخ', '1 × بطاطس كبيرة'], total: '215 جنيه' }, o2: { items: ['2 × شاورما فراخ', '1 × بطاطس كبيرة', '1 × ليمون نعناع'], total: '255 جنيه' }, o3: { items: ['1 × برجر لحمة', '1 × ليمون نعناع'], total: '180 جنيه' } },
          n: {
            r0: { b: ['أهلاً، معاك ماريو مساعد Grill House. تحب تطلب إيه النهارده؟'], o: [['ابعتلي المنيو', 'r1'], ['زي آخر مرة', 'r5']] },
            r1: { b: ['ده منيو النهارده:\nشاورما فراخ · 85 جنيه\nبرجر لحمة · 140 جنيه\nبطاطس كبيرة · 45 جنيه\nليمون نعناع · 40 جنيه'], o: [['2 شاورما وبطاطس كبيرة', 'r2']] },
            r2: { b: ['2 شاورما فراخ و1 بطاطس كبيرة، الحساب 215 جنيه. تحب تشرب حاجة؟'], o: [['زوّد ليمون نعناع', 'r3'], ['لا كده تمام', 'r4']] },
            r3: { b: ['اتزوّد. الإجمالي 255 جنيه. نوصّله على نفس عنوان المرة اللي فاتت؟'], o: [['أيوه نفس العنوان', 'd2']] },
            r4: { b: ['الإجمالي 215 جنيه. نوصّله على نفس عنوان المرة اللي فاتت؟'], o: [['أيوه نفس العنوان', 'd1']] },
            r5: { b: ['آخر مرة طلبت برجر لحمة وليمون نعناع، 180 جنيه. نفس الطلب؟'], o: [['أيوه لو سمحت', 'd3']] },
            d1: { b: ['تمام، الأوردر #1042 في المطبخ وهيوصلك في حدود 35 دقيقة.'], fx: 'o1', o: [['ابدأ من جديد', '_reset']] },
            d2: { b: ['تمام، الأوردر #1042 في المطبخ وهيوصلك في حدود 35 دقيقة.'], fx: 'o2', o: [['ابدأ من جديد', '_reset']] },
            d3: { b: ['تمام، الأوردر #1042 في المطبخ وهيوصلك في حدود 35 دقيقة.'], fx: 'o3', o: [['ابدأ من جديد', '_reset']] },
          },
        },
        book: {
          av: 'AC', name: 'AutoCare', sub: 'بيرد فوراً', t0: 675, start: 'k0', calT: 'تقويم Odoo · الحجوزات', cols: ['غداً', 'الأحد'], rows: ['10:00 ص', '12:30 م', '4:00 م'], busy: 'محجوز', newL: 'جديد',
          hint: 'المواعيد المتاحة تأتي من هذا التقويم مباشرة.', saved: 'تم الحفظ في Odoo · تذكير مجدول مساء اليوم السابق',
          n: {
            k0: { b: ['أهلاً، معاك ماريو مساعدك الذكي للحجز في AutoCare. عربيتك محتاجة إيه؟'], o: [['تغيير زيت', 'k1', { svc: 'تغيير زيت' }], ['فحص شامل', 'k1', { svc: 'فحص شامل' }], ['صيانة تكييف', 'k1', { svc: 'صيانة تكييف' }]] },
            k1: { b: ['{svc}، تمام. يناسبك يوم إيه؟'], o: [['بكرة', 'k2', { day: 'بكرة', di: 0 }], ['يوم الحد', 'k3', { day: 'يوم الحد', di: 1 }]] },
            k2: { b: ['المواعيد المتاحة بكرة:'], o: [['12:30 م', 'k4', { time: '12:30 م', ti: 1 }], ['4:00 م', 'k4', { time: '4:00 م', ti: 2 }]] },
            k3: { b: ['المواعيد المتاحة يوم الحد:'], o: [['10:00 ص', 'k4', { time: '10:00 ص', ti: 0 }], ['4:00 م', 'k4', { time: '4:00 م', ti: 2 }]] },
            k4: { b: ['تم الحجز: {svc}، {day} الساعة {time}. هيوصلك تذكير بالليل قبلها.'], fx: 'book', o: [['احجز موعد تاني', '_reset']] },
          },
        },
        odoo: {
          av: 'M', name: 'ماريو', sub: 'مساعد ذكي داخل Odoo 16', t0: 630, start: 'o0', invT: 'فواتير العملاء', draft: 'المسودة جاهزة',
          cols: ['الرقم', 'العميل', 'الاستحقاق', 'المبلغ (جنيه)', 'الحالة'], due: ['17 أكتوبر', '30 أكتوبر', '8 نوفمبر', '28 نوفمبر', '2 ديسمبر'], st: { od: 'متأخرة {d} يوماً', nd: 'لم تستحق بعد' },
          q0: 'account.move · customer invoices', q: { ov: 'account.move · out_invoice · not paid · due < today', top: 'account.move · open invoices · group by partner', rem: 'mail.compose.message · draft · INV/2026/0412' },
          n: {
            o0: { b: ['أهلاً، أنا ماريو. محتاج إيه النهارده؟'], o: [['إيه الفواتير المتأخرة؟', 'o1'], ['مين أكبر عملائي دلوقتي؟', 'o2']] },
            o1: { b: ['فيه 3 فواتير متأخرة، إجماليها 128,500 جنيه. أقدمها INV/2026/0412 لـ Green Valley Farms، متأخرة 34 يوم.'], fx: 'ov', o: [['اكتب تذكير لأقدم فاتورة', 'o3'], ['مين أكبر عملائي دلوقتي؟', 'o2']] },
            o2: { b: ['حسب الفواتير المفتوحة: Horizon Trading بـ 51,000 جنيه، وGreen Valley Farms بـ 46,000 جنيه، وAl Noor Pharmacy بـ 31,500 جنيه.'], fx: 'top', o: [['إيه الفواتير المتأخرة؟', 'o1'], ['ابدأ من جديد', '_reset']] },
            o3: { b: ['دي مسودة لـ Green Valley Farms:\n«مرحباً، نود تذكيركم بأن الفاتورة INV/2026/0412 بقيمة 46,000 جنيه استحقت في 17 أكتوبر. نرجو إفادتنا بموعد السداد المتوقع. شكراً لكم.»'], fx: 'rem', o: [['ابدأ من جديد', '_reset']] },
          },
        },
        phone: {
          callName: 'خط خدمة العملاء', incoming: 'مكالمة واردة', live: 'ماريو على الخط', ended: 'انتهت المكالمة', play: 'شغّل المكالمة', again: 'شغّلها مرة أخرى',
          hint: 'اضغط تشغيل لتتابع مكالمة تجريبية، وستظهر المحادثة هنا أولاً بأول.', who: { ai: 'ماريو', c: 'العميل' },
          sysT: 'ما فعله النظام', empty: 'لا شيء بعد. شغّل المكالمة.',
          look: [['الطلب', 'A-2291'], ['المنتج', 'غسالة 8 كيلو'], ['الحالة', 'خرج للتوصيل'], ['وصول المندوب', 'حوالي 20 دقيقة']], wa: 'تم الإرسال على واتساب: اسم المندوب ورقمه',
          lines: [['ai', 'أهلاً بحضرتك، معاك ماريو من خدمة العملاء. أقدر أساعدك إزاي؟'], ['c', 'أنا طالب غسالة يوم الحد ولسه موصلتش.'], ['ai', 'ثواني أشوفهالك. رقم الأوردر كام؟'], ['c', 'A-2291.'], ['ai', 'لقيته. خرج من المخزن الصبح، والمندوب هيوصلك في حدود 20 دقيقة. أبعتلك رقمه على واتساب؟', 'look'], ['c', 'ياريت.'], ['ai', 'تمام، بعته لحضرتك على واتساب. أي خدمة تانية؟', 'wa']],
        },
        retail: {
          k: ['الفروع', 'على وشك النفاد', 'تحويلات اليوم'], notes: ['فرع 4 ينفد يوم الأحد', 'فرع 2 ينفد غداً', 'فرع 3 ينفد غداً'], moved: '+{q} نُقلت من المخزن',
          title: 'المخزون حسب الفرع', cols: ['المنتج', 'المخزن', 'فرع 1', 'فرع 2', 'فرع 3', 'فرع 4'], prods: ['مياه 1.5 لتر × 6', 'أرز 5 كجم', 'زيت طعام 1 لتر', 'سكر 1 كجم'],
          find: 'اعرض ما على وشك النفاد', create: 'أنشئ 3 تحويلات', done: 'تم إنشاء التحويلات', aiT: 'اقتراح ذكي · بناءً على مبيعات آخر 14 يوماً', ph: 'اضغط الزر وسيراجع الذكاء الاصطناعي كل فرع مقابل مبيعاته.',
          sugg: ['نقل 120 كرتونة مياه إلى فرع 4 (تنفد يوم الأحد)', 'نقل 60 كيس أرز إلى فرع 2 (ينفد غداً)', 'نقل 80 زجاجة زيت إلى فرع 3 (ينفد غداً)'], doneT: 'تم · أُرسلت 3 تحويلات إلى المخزن',
        },
        factory: {
          title: 'من الطلب إلى التسليم', ask: 'هل نسلّم في الموعد؟ اسأل الذكاء الاصطناعي', order: 'طلب جديد', orderD: '500 وحدة أرفف معدنية لمتاجر الأمل، التسليم الأحد 6 ديسمبر',
          vq: 'في الموعد؟', vwait: 'جارٍ الفحص…', vwarn: 'الدهان ناقص', vok: 'في الموعد ✓', matT: 'الخامات', need: 'المطلوب', stock: 'المتوفر', short: 'ناقص', enough: 'كافٍ', arriving: 'يصل الاثنين',
          mats: [['صاج', 1250, 1400, 'كجم'], ['بودرة دهان', 40, 28, 'كجم'], ['مسامير', 8000, 9500, 'قطعة']],
          aiShort: 'بودرة الدهان ناقصة 12 كجم. المورد المعتاد يستطيع التوريد يوم الاثنين، قبل بدء الدهان يوم الأربعاء.', approve: 'اطلب 12 كجم دهان', approved: 'أُرسل أمر الشراء للمورد',
          planT: 'خطة الإنتاج · خط 2', plan: [['قص وثني', 'الاثنين والثلاثاء'], ['دهان', 'الأربعاء'], ['تجميع وتغليف', 'الخميس']], run: 'ابدأ الإنتاج', units: 'وحدة',
          delT: 'التسليم', delWait: 'في انتظار الإنتاج', delOk: 'جاهز الخميس 3 ديسمبر، قبل موعد الأحد 6 ديسمبر', again: 'شغّله مرة أخرى',
        },
        ld: {
          brand: 'Daily Market', hi: 'أهلاً أحمد', me: 'أحمد', tier: 'عضو فضي', pts: 'نقطة', toGold: 'باقي {n} نقطة للمستوى الذهبي', scan: 'امسح للدفع عند الكاشير', scanning: 'اعرض الكود ده على الكاشير',
          paid: 'دفعت 350 جنيه · +35 نقطة', offerT: 'مختار ليك', offer: 'بتشتري قهوة أغلب أيام السبت. خد خصم 20% على القهوة الويك إند ده.', save: 'احفظ العرض', saved: 'اتحفظ في محفظتك ✓',
          rewards: 'المكافآت', rw: [['قهوة مجاناً', 300], ['قسيمة 50 جنيه', 500], ['توصيل مجاني', 200]],
          dashT: 'لوحة برنامج الولاء', k: ['الأعضاء', 'زيارات هذا الشهر', 'النقاط الممنوحة'], feedT: 'آخر النشاط', feed: [['منى', '+22 نقطة'], ['كريم', 'استبدل قهوة مجانية'], ['سارة', '+48 نقطة']],
          winT: 'ملاحظة ذكية', win: '312 عميلاً لم يزوروا المتجر منذ 30 يوماً، وأغلبهم كانوا يشترون الخضار والفاكهة.', winBtn: 'أرسل لهم عرض عودة', winDone: 'أُرسل العرض إلى 312 عميلاً',
        },
        hrd: {
          title: 'الموارد البشرية · اليوم والرواتب', k: ['الموظفون', 'في العمل', 'متأخرون', 'في إجازة'], todayT: 'بصمات اليوم', scan: 'سجّل بصمة', you: 'أنت', hq: 'المقر الرئيسي',
          feed: [['منى', 'فرع 1', '08:52', 'ok'], ['كريم', 'فرع 2', '09:14', 'late'], ['سارة', 'المقر الرئيسي', '08:47', 'ok']], st: { ok: 'في الموعد', late: 'متأخر' },
          payT: 'رواتب نوفمبر', payBtn: 'شغّل الرواتب مع الفحص الذكي', calc: 'جارٍ حساب القسائم', found: 'وجد الذكاء الاصطناعي حالتين تحتاجان مراجعتك قبل الصرف:',
          an: [{ who: 'عمر · فرع 2', what: '38 ساعة عمل إضافي هذا الشهر، ثلاثة أضعاف المعتاد', a: 'اعتماد', b: 'اسأل مديره', ra: 'تم الاعتماد', rb: 'أُرسل لمديره' }, { who: 'هنا · المقر الرئيسي', what: 'غياب 3 أيام بدون طلب إجازة', a: 'خصم الأيام', b: 'اسأل الموارد البشرية أولاً', ra: 'تم خصم الأيام', rb: 'أُرسل للموارد البشرية' }],
          ready: 'الرواتب جاهزة: 436 قسيمة · 3.1 مليون جنيه', send: 'أرسل القسائم', sent: 'أُرسلت القسائم إلى 436 موظفاً على واتساب',
        },
        apps: { caps: ['سوق الخدمات', 'طلب الرحلات'], hint: 'اسحب لتدوير الهاتف، واضغط للتبديل بين التطبيقين' },
        sound: 'الصوت', now: 'الآن', tapSee: 'اضغط لتراه في النظام',
        pipes: { loyalty: [['app', 'التطبيق'], ['ai', 'ماريو'], ['crm', 'CRM'], ['wa', 'واتساب']], hr: [['finger', 'البصمة'], ['ai', 'ماريو'], ['erp', 'الرواتب'], ['wa', 'الموظفون']], factory: [['erp', 'الطلب'], ['ai', 'ماريو'], ['box', 'المخزون'], ['bell', 'المشتريات']], cs: [['wa', 'واتساب'], ['ai', 'ماريو'], ['crm', 'CRM'], ['pay', 'الدفع']], rest: [['wa', 'واتساب'], ['ai', 'ماريو'], ['erp', 'المطبخ'], ['bell', 'الشيف']], book: [['wa', 'واتساب'], ['ai', 'ماريو'], ['cal', 'Odoo'], ['bell', 'الفني']], mgr: [['erp', 'الـ ERP'], ['ai', 'ماريو'], ['wa', 'واتساب'], ['bell', 'المدير']], phone: [['call', 'المكالمة'], ['ai', 'ماريو'], ['erp', 'الـ ERP'], ['wa', 'واتساب']], clinic: [['cal', 'الحجوزات'], ['ai', 'ماريو'], ['erp', 'الجدول'], ['wa', 'الموظفون']], retail: [['chart', 'المبيعات'], ['ai', 'ماريو'], ['erp', 'التحويلات'], ['box', 'المخزن']] },
        toasts: { cs: ['تم استلام الدفع', '{amt} جنيه · طلب #HF-2291'], cs2: ['متابعة مجدولة', 'سيتابع ماريو مع العميل غداً'], rest: ['طلب جديد #1042', 'شاشة المطبخ · توصيل'], book: ['حجز جديد', '{svc} · {day} الساعة {time}'], mgr: ['مدير المخزن', 'التحويل WH/INT/00412 في انتظارك'], odoo: ['تم حفظ المسودة', 'تذكير الفاتورة INV/2026/0412 جاهز'], phone: ['تم الإرسال على واتساب', 'اسم المندوب ورقمه'], clinic: ['تم إرسال الجدول', 'أُرسلت الورديات الجديدة إلى 23 موظفاً على واتساب'], retail: ['المخزن', '3 تحويلات جاهزة للتجهيز'], factory1: ['أُرسل أمر الشراء', '12 كجم بودرة دهان · تصل الاثنين'], factory2: ['الطلب جاهز', '500 وحدة أرفف · الخميس 3 ديسمبر'], hr: ['تم إرسال القسائم', '436 موظفاً · على واتساب'], loy: ['عملية شراء جديدة', 'أحمد · 350 جنيه · +35 نقطة'], loyWin: ['تم إرسال الحملة', 'عرض عودة · 312 عميلاً'], hrScan: ['تم تسجيل البصمة', 'أنت · المقر الرئيسي · في الموعد'] },
        clinic: {
          title: 'العيادة غداً', k1: 'حجوزات الغد', k2: 'الموظفون في الورديات', k3: 'الحجوزات المغطاة', bk: 'حجزاً', lvls: ['مزدحمة', 'هادئة', 'متوسطة'], roles: ['أطباء', 'تمريض', 'استقبال'], noChange: 'بدون تغيير',
          shifts: ['الصباح · من 9 إلى 1', 'الظهر · من 1 إلى 5', 'المساء · من 5 إلى 9'], plan: 'خطط للغد بالذكاء الاصطناعي', apply: 'طبّق على الجدول', applied: 'تم تحديث الجدول وإرساله للموظفين على واتساب',
          ph: 'لدى العيادة غداً 88 حجزاً. اضغط الزر وسيحسب الذكاء الاصطناعي عدد الأطباء والتمريض وموظفي الاستقبال الذي تحتاجه كل وردية فعلاً.',
          aiT: 'خطة ذكية للموظفين', res: 'ورديات الغد تحتاج 7 أشخاص أقل، وكل الحجوزات ما زالت مغطاة. فترة الظهر هي الأهدأ، فيمكن أن يأخذ طبيب واثنان من التمريض هذه الوردية إجازة.',
        },
      },
    },
  };

  let L = document.documentElement.lang === 'ar' ? 'ar' : 'en', booted = false;
  const BASE = ((document.currentScript && document.currentScript.src) || location.href).replace(/app\.js(\?.*)?$/, '');
  const META = {"en":{"t":"MK Automation | AI agents, Odoo ERP and HR systems in Cairo","d":"AI agents for WhatsApp and phone, Odoo ERP and HR, clinic systems, loyalty apps, websites and Android and iPhone apps, built in Cairo from tested templates fitted to your business."},"ar":{"t":"MK Automation | وكلاء ذكاء اصطناعي وأنظمة ERP وموارد بشرية في القاهرة","d":"وكلاء ذكاء اصطناعي على واتساب والهاتف، وأنظمة ERP وموارد بشرية على Odoo، وأنظمة عيادات، وتطبيقات ولاء، ومواقع وتطبيقات أندرويد وآيفون، نبنيها في القاهرة من قوالب مجرّبة نفصّلها على شركتك."}};

  // ---------- header: dark over the hero, light below it ----------
  const heroEl = $('.hero'); let hq = false;
  const hdr = () => { hq = false; document.documentElement.classList.toggle('hdark', heroEl.getBoundingClientRect().bottom > 70); };
  addEventListener('scroll', () => { if (!hq) { hq = true; requestAnimationFrame(hdr); } }, { passive: true }); hdr();

  // ---------- reveal on scroll ----------
  const rvObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rvObs.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
  document.querySelectorAll('.rv').forEach(el => rvObs.observe(el));

  // ---------- AI analysis widget ----------
  const SV = [1080, 1105, 1050, 1130, 1185, 1160, 1090, 1160, 1225, 1210, 880, 1265, 1288, 1240];
  const chartEl = $('#chart'), chartSvg = $('#chartSvg'), tip = $('#tip'), insw = $('#insw'), aiGo = $('#aiGo');
  let geo = null, aiTimers = [], aiState = 0;
  function drawChart() {
    const t = T[L], W = Math.max(300, Math.round(chartEl.clientWidth || 560)), H = 236, ml = 42, mr = 6, mt = 32, mb = 40, pw = W - ml - mr, ph = H - mt - mb, max = 1400, n = SV.length, bw = pw / n, w = Math.min(22, bw * 0.62);
    const y = v => mt + ph - v / max * ph, base = y(0);
    let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${t.wT}">`;
    [0, 400, 800, 1200].forEach(g => { s += `<line class="gl" x1="${ml}" x2="${W - mr}" y1="${y(g)}" y2="${y(g)}"/><text class="yl" x="${ml - 7}" y="${y(g) + 4}" text-anchor="end">${g ? (g >= 1000 ? g / 1000 + 'M' : g + 'K') : '0'}</text>`; });
    const rx = ml + 7 * bw + 1;
    s += `<g class="reg"><rect x="${rx}" y="${mt - 26}" width="${7 * bw - 2}" height="${ph + 26}" rx="10" fill="#E0F5F2" opacity=".75"/><circle cx="${rx + 13}" cy="${mt - 13}" r="8"/><text class="n" x="${rx + 13}" y="${mt - 9}" text-anchor="middle">1</text><text x="${rx + 26}" y="${mt - 9}">${t.regL}</text></g>`;
    SV.forEach((v, i) => {
      const x = ml + i * bw + (bw - w) / 2, top = y(v), r = 4;
      s += `<path class="bar${i === 10 ? ' dip' : ''}" d="M${x},${base}V${top + r}Q${x},${top} ${x + r},${top}H${x + w - r}Q${x + w},${top} ${x + w},${top + r}V${base}Z"/>`;
      if (i % 2 === 0) s += `<text class="xl" x="${x + w / 2}" y="${base + 16}" text-anchor="middle">${6 + i}</text>`;
    });
    const dx = ml + 10 * bw + bw / 2;
    s += `<g class="bdg"><circle cx="${dx}" cy="${y(880) - 16}" r="9"/><text x="${dx}" y="${y(880) - 12}" text-anchor="middle">2</text></g>`;
    SV.forEach((v, i) => { s += `<rect class="hit" data-i="${i}" x="${ml + i * bw}" y="${mt}" width="${bw}" height="${ph}" fill="transparent"/>`; });
    s += `<text class="cap2" x="${ml}" y="${H - 4}">${t.cap}</text></svg>`;
    chartSvg.innerHTML = s;
    geo = { W, H, bw, ml, y };
  }
  chartEl.addEventListener('pointermove', e => {
    const h = e.target.closest('.hit'); if (!h || !geo) { tip.style.opacity = 0; return; }
    const i = +h.dataset.i, t = T[L], wd = t.days[(5 + i) % 7];
    tip.textContent = `${wd} ${6 + i} ${t.mon} · ${t.money(SV[i])}`;
    const scale = chartEl.clientWidth / geo.W;
    tip.style.left = ((geo.ml + i * geo.bw + geo.bw / 2) * scale) + 'px'; tip.style.top = (geo.y(SV[i]) * scale) + 'px'; tip.style.opacity = 1;
  });
  chartEl.addEventListener('pointerleave', () => { tip.style.opacity = 0; });
  let lastW = 0;
  new ResizeObserver(() => { const w = chartEl.clientWidth; if (Math.abs(w - lastW) > 8) { lastW = w; drawChart(); } }).observe(chartEl);
  function resetAI() {
    aiTimers.forEach(clearTimeout); aiTimers = []; aiState = 0;
    chartEl.classList.remove('s1', 's2'); drawChart();
    aiGo.textContent = T[L].wBtn; aiGo.disabled = false; aiGo.hidden = false;
    insw.innerHTML = `<p class="hint">${T[L].wHint}</p>`;
  }
  aiGo.addEventListener('click', () => {
    if (aiState) return; aiState = 1; aiGo.disabled = true; const t = T[L];
    insw.innerHTML = `<div class="thinking"><span>${t.wThink}</span><span class="bar"><span></span></span></div>`;
    const at = (fn, ms) => aiTimers.push(setTimeout(fn, reduce ? 0 : ms));
    at(() => { insw.innerHTML = '<ol class="ins"></ol>'; addIns(0); chartEl.classList.add('s1'); }, 1400);
    at(() => { addIns(1); chartEl.classList.add('s2'); }, 2300);
    at(() => { addIns(2, true); aiGo.hidden = true; marioReact('ai'); }, 3200);
  });
  function addIns(i, action) {
    const t = T[L], li = document.createElement('li');
    li.innerHTML = `<i>${i + 1}</i><div>${t.ins[i]}${action ? `<div class="act"><button type="button" class="btn primary sm" id="aiAct">${t.act}</button></div>` : ''}</div>`;
    insw.querySelector('.ins').appendChild(li);
    if (action) li.querySelector('#aiAct').addEventListener('click', e => { e.currentTarget.parentElement.outerHTML = `<span class="okline">✓ ${T[L].actDone}</span>`; });
  }

  // ---------- demo lab ----------
  const KEYS = ['cs', 'hr', 'retail', 'loyalty', 'factory', 'mgr', 'clinic', 'book', 'rest', 'phone', 'odoo', 'apps'];
  let cur = 'cs', dT = [], tok = 0;
  const later = (fn, ms) => { dT.push(setTimeout(fn, ms)); };
  function stopDemo() { dT.forEach(clearTimeout); dT = []; tok++; document.querySelectorAll('.toast, .packet').forEach(e => e.remove()); }
  const fmtT = m => { const h = Math.floor(m / 60) % 24, mm = String(m % 60).padStart(2, '0'), h12 = h % 12 || 12; return `${h12}:${mm} ${L === 'ar' ? (h < 12 ? 'ص' : 'م') : (h < 12 ? 'AM' : 'PM')}`; };
  const head = title => `<div class="st">${title}<span class="sample">${T[L].sample}</span></div>`;
  const INV = [['INV/2026/0412', 'Green Valley Farms', '46,000', 'od', 34], ['INV/2026/0437', 'Al Noor Pharmacy', '31,500', 'od', 21], ['INV/2026/0451', 'Horizon Trading', '51,000', 'od', 12], ['INV/2026/0466', 'Sunrise Office Supply', '18,200', 'nd'], ['INV/2026/0470', 'Delta Foods', '27,900', 'nd']];

  const FX = {
    cs(sys, f, v) {
      const d = T[L].demo.cs, fill = x => x.replace(/\{(\w+)\}/g, (_, k) => (v && v[k]) || '');
      if (f === 'reset') { sys._st = { stage: 0, need: '—', val: '—', next: d.next.init, tag: '' }; }
      const st = sys._st, changed = [];
      if (f === 'diag') { st.stage = 1; st.need = d.needs.diag; st.next = d.next.diag; changed.push(0, 2); }
      if (f === 'quote') { st.stage = 2; if (st.need === '—') st.need = d.needs.diag; st.val = d.vals.quote; st.next = d.next.quote; changed.push(1, 2); }
      if (f === 'quote2') { st.stage = 2; st.need = d.needs.quote2; st.val = d.vals.quote2; st.next = d.next.quote; changed.push(0, 1, 2); }
      if (f === 'paid') { st.stage = 3; st.val = fill(d.vals.paid); st.next = d.next.paid; changed.push(1, 2); }
      if (f === 'solved') { st.tag = d.solvedTag; st.next = d.next.solved; changed.push(2); }
      const draw = () => {
        const vals = [st.need, st.val, st.next];
        sys.innerHTML = head(d.crmT) + pipeHTML('cs') + `<div class="crm"><div class="cust"><span class="cav2">${d.cust[0]}</span><div><b>${d.cust}</b><small>${d.phone} · ${d.src}</small></div>${st.tag ? `<span class="tag">${st.tag}</span>` : ''}</div><div class="stages">${d.stages.map((x, i) => `<span class="${i < st.stage ? 'done' : i === st.stage ? 'cur' : ''}">${x}</span>`).join('')}</div><dl class="crmf">${d.lab.map((l, i) => `<dt>${l}</dt><dd class="${changed.includes(i) ? 'flash' : ''}">${vals[i]}</dd>`).join('')}</dl></div><div class="log"></div>`;
      };
      if (f === 'reset') { draw(); addLog(sys, 'crm.lead · new · source = whatsapp'); return; }
      if (f === 'paid') { fly(lastMsg(), sys, '#HF-2291 · ' + v.amt); runPipe(sys, 0, 3, () => { draw(); pipeTo(sys, 3); addLog(sys, 'payment · ' + v.amt + ' EGP · captured'); addLog(sys, 'crm.lead → won · sale.order HF-2291'); addLog(sys, 'followup · scheduled · tomorrow 14:00'); toast(sys, 'cs', v); marioReact('cs'); }); return; }
      const keep = [...sys.querySelectorAll('.log div')].map(x => x.textContent);
      draw(); keep.forEach(l => addLog(sys, l));
      pipeTo(sys, f === 'quote' || f === 'quote2' ? 2 : 1);
      addLog(sys, { diag: 'ai.diagnose · error E21 → drain', quote: 'product · drain pump WM-8KG · 650 EGP', quote2: 'product · RF-450 parts · 2 matches', solved: 'helpdesk · solved by customer · follow-up set' }[f]);
      if (f === 'solved') toast(sys, 'cs2');
    },
    mgr(sys, f) {
      const d = T[L].demo.mgr;
      if (f === 'reset') { sys.innerHTML = head(d.sysT) + pipeHTML('mgr') + `<div class="srcs">${Object.entries(d.srcs).map(([k, v]) => `<span class="src" data-k="${k}">${v}</span>`).join('')}</div><div class="st2">${d.logT}</div><div class="log"></div>`; return; }
      sys.querySelectorAll('.src').forEach(s => s.classList.toggle('on', f.s.includes(s.dataset.k)));
      f.l.forEach(l => addLog(sys, l));
      runPipe(sys, 0, f.notify ? 3 : 2, f.notify ? () => toast(sys, 'mgr') : null);
    },
    rest(sys, f) {
      const d = T[L].demo.rest;
      if (f === 'reset') { sys.innerHTML = head(d.kitchen) + pipeHTML('rest') + `<div class="kit"><p class="empty">${d.waiting}</p></div>`; return; }
      const o = d.tickets[f], k = sys.querySelector('.kit');
      fly(lastMsg(), sys, '#1042 · ' + o.total);
      runPipe(sys, 0, 3, () => {
      k.innerHTML = `<div class="ticket"><div class="tk"><b>#1042</b><span class="pill2 new">${d.st[0]}</span></div><small>${d.meta}</small><ul>${o.items.map(i => `<li>${i}</li>`).join('')}</ul><div class="tt"><span>${d.total}</span><b>${o.total}</b></div></div>`;
      toast(sys, 'rest');
      later(() => { const p = k.querySelector('.pill2'); if (p) { p.textContent = d.st[1]; p.className = 'pill2 prep'; } }, 2400);
      marioReact('rest');
      });
    },
    book(sys, f, v) {
      const d = T[L].demo.book, busy = { '0-0': 1, '1-1': 1 };
      const grid = nw => `<div class="cal"><span></span>${d.cols.map(c => `<span class="h">${c}</span>`).join('')}${d.rows.map((r, ti) => `<span class="tm">${r}</span>${d.cols.map((c, di) => busy[di + '-' + ti] ? `<span class="slot busy">${d.busy}</span>` : (nw && nw.di === di && nw.ti === ti ? `<span class="slot new">${d.newL}<br>${nw.svc}</span>` : '<span class="slot"></span>')).join('')}`).join('')}</div>`;
      if (f === 'reset') { sys.innerHTML = head(d.calT) + pipeHTML('book') + grid() + `<p class="note">${d.hint}</p>`; return; }
      fly(lastMsg(), sys, v.svc + ' · ' + v.time);
      runPipe(sys, 0, 3, () => { sys.querySelector('.cal').outerHTML = grid(v); sys.querySelector('.note').textContent = '✓ ' + d.saved; toast(sys, 'book', v); marioReact('book'); });
    },
    odoo(sys, f) {
      const d = T[L].demo.odoo;
      if (f === 'reset') { sys.innerHTML = head(d.invT) + `<div class="tw"><table class="grid"><thead><tr>${d.cols.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${INV.map((r, i) => `<tr><td class="mono">${r[0]}</td><td>${r[1]}</td><td>${d.due[i]}</td><td class="num">${r[2]}</td><td><span class="tag ${r[3]}">${d.st[r[3]].replace('{d}', r[4] || '')}</span></td></tr>`).join('')}</tbody></table></div><div class="qline">${d.q0}</div>`; return; }
      const rows = sys.querySelectorAll('tbody tr'); rows.forEach(r => r.classList.remove('hl', 'hl2'));
      if (f === 'ov') { INV.forEach((r, i) => { if (r[3] === 'od') rows[i].classList.add('hl'); }); marioReact('odoo'); }
      if (f === 'top') [2, 0, 1].forEach(i => rows[i].classList.add('hl2'));
      if (f === 'rem') { rows[0].classList.add('hl'); if (!rows[0].querySelector('.dr')) rows[0].lastElementChild.insertAdjacentHTML('beforeend', ` <span class="tag dr">${d.draft}</span>`); toast(sys, 'odoo'); }
      sys.querySelector('.qline').textContent = d.q[f];
    },
  };
  const IC = {
    wa: '<path d="M4 5h16v11H9l-5 4z"/>', ai: '<rect x="5" y="7" width="14" height="11" rx="4"/><path d="M12 3v4M9.5 12.5h.01M14.5 12.5h.01"/>',
    erp: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    bell: '<path d="M12 3a5 5 0 0 0-5 5v4l-2 3h14l-2-3V8a5 5 0 0 0-5-5z"/><path d="M10 19a2 2 0 0 0 4 0"/>',
    call: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
    cal: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>', chart: '<path d="M4 20h16M7 16v-5M12 16V7M17 16v-8"/>',
    box: '<path d="M4 8l8-4 8 4v9l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v9"/>',
    app: '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>',
    finger: '<path d="M12 4a7 7 0 0 0-7 7v2M12 4a7 7 0 0 1 7 7v4M9 20c1-2 1.5-4 1.5-7a1.5 1.5 0 0 1 3 0c0 3-.5 5.5-1.5 8M8 11a4 4 0 0 1 8 0v2"/>',
    crm: '<circle cx="9" cy="9" r="3.5"/><path d="M3 20c.7-3.5 3.2-5.5 6-5.5s5.3 2 6 5.5"/><path d="M16 7h5M16 11h5M18 15h3"/>', pay: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h3"/>',
  };
  const svgI = k => `<svg viewBox="0 0 24 24">${IC[k]}</svg>`;
  const pipeHTML = key => `<div class="pipe">${T[L].demo.pipes[key].map(([ic, lb], i, a) => `<div class="pn"><span class="pi">${svgI(ic)}</span><small>${lb}</small></div>${i < a.length - 1 ? '<i class="pl"></i>' : ''}`).join('')}</div>`;
  function pipeTo(sys, i) { sys.querySelectorAll('.pn').forEach((n, j) => n.classList.toggle('on', j <= i)); sys.querySelectorAll('.pl').forEach((l, j) => l.classList.toggle('go', j < i)); }
  function runPipe(sys, from, to, then) { let t = 0; for (let i = from; i <= to; i++) { later(() => { pipeTo(sys, i); tone(i); }, t); t += reduce ? 60 : 420; } if (then) later(then, t); }
  let actx = null, soundOn = true;
  $('#demos').addEventListener('pointerdown', () => { if (!soundOn) return; try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch (_) {} }, { passive: true });
  function tone(i) { if (!soundOn) return; try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain(); o.type = 'sine'; o.frequency.value = 520 + i * 90; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.03, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12); o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 0.14); } catch (_) {} }
  function chime() { if (!soundOn) return; try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); const t = actx.currentTime; [[880, 0], [1318.5, 0.13]].forEach(([f, d]) => { const o = actx.createOscillator(), g = actx.createGain(); o.type = 'sine'; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.11, t + d + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.45); o.connect(g).connect(actx.destination); o.start(t + d); o.stop(t + d + 0.5); }); } catch (_) {} }
  function toast(sys, key, vars) {
    const [tt, tx] = T[L].demo.toasts[key], fill = x => x.replace(/\{(\w+)\}/g, (_, k) => (vars && vars[k]) || '');
    document.querySelectorAll('.toast').forEach(t => t.remove());
    const narrow = innerWidth < 720, el = document.createElement('div'); el.className = 'toast' + (narrow ? ' fixed' : ''); el.setAttribute('role', 'status');
    el.innerHTML = `<span class="ti">${svgI('bell')}</span><div><b>${fill(tt)}</b><span>${fill(tx)}</span>${narrow ? `<em>${T[L].demo.tapSee}</em>` : ''}</div><time>${T[L].demo.now}</time>`;
    if (narrow) { document.body.appendChild(el); el.addEventListener('click', () => { sys.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); el.remove(); }); } else sys.appendChild(el);
    chime();
    setTimeout(() => el.classList.add('out'), narrow ? 5200 : 4200); setTimeout(() => el.remove(), narrow ? 5700 : 4700);
  }
  function fly(fromEl, toEl, label) {
    if (reduce || !fromEl || !toEl) return;
    const a = fromEl.getBoundingClientRect(), b = toEl.getBoundingClientRect();
    if (!a.width || !b.width) return;
    const el = document.createElement('div'); el.className = 'packet'; el.textContent = label; document.body.appendChild(el);
    const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2, x1 = b.left + b.width / 2, y1 = b.top + 40, mx = (x0 + x1) / 2, my = Math.min(y0, y1) - 50;
    el.animate([{ transform: `translate(${x0}px, ${y0}px) translate(-50%, -50%) scale(.5)`, opacity: 0 }, { transform: `translate(${mx}px, ${my}px) translate(-50%, -50%) scale(1.05)`, opacity: 1, offset: .5 }, { transform: `translate(${x1}px, ${y1}px) translate(-50%, -50%) scale(.6)`, opacity: .2 }], { duration: 850, easing: 'cubic-bezier(.3,.7,.3,1)' }).onfinish = () => el.remove();
  }
  const lastMsg = () => document.querySelector('#dstage .msgs .msg:not(.typing):last-child');
  function addLog(sys, line) { const log = sys.querySelector('.log'); if (!log) return; const r = document.createElement('div'); r.textContent = line; log.appendChild(r); while (log.children.length > 6) log.firstChild.remove(); }

  function runChat(key, stage) {
    const d = T[L].demo[key];
    stage.innerHTML = `<div class="duo"><div class="chat ${key === 'odoo' ? 'odoo' : 'wa'}"><div class="ch"><span class="cav">${d.av}</span><div><b>${d.name}</b><small>${d.sub}</small></div></div><div class="msgs" aria-live="polite"></div><div class="opts"></div></div><div class="sys"></div></div>`;
    const msgs = stage.querySelector('.msgs'), opts = stage.querySelector('.opts'), sys = stage.querySelector('.sys');
    let vars = {}, node = null, clock = 0;
    const tpl = s => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
    const down = () => msgs.scrollTo({ top: msgs.scrollHeight, behavior: reduce ? 'auto' : 'smooth' });
    const bubble = (text, me) => { const el = document.createElement('div'); el.className = 'msg' + (me ? ' me' : ''); el.innerHTML = tpl(text).replace(/\n/g, '<br>') + `<time>${fmtT(d.t0 + clock++)}</time>`; msgs.appendChild(el); down(); };
    const typing = on => { let t = msgs.querySelector('.typing'); if (on && !t) { t = document.createElement('div'); t.className = 'msg typing'; t.innerHTML = '<i></i><i></i><i></i>'; msgs.appendChild(t); down(); } if (!on && t) t.remove(); };
    function go(id) {
      node = d.n[id]; let ms = 380;
      node.b.forEach(m => { later(() => typing(true), ms); ms += reduce ? 250 : Math.min(1400, 520 + m.length * 6); later(() => { typing(false); bubble(m); }, ms); ms += 200; });
      if (node.fx) later(() => FX[key](sys, node.fx, vars), ms - 100);
      if (node.pay) later(() => { const last = msgs.querySelector('.msg:last-child time'); if (last) { last.insertAdjacentHTML('beforebegin', `<button type="button" class="paybtn">${tpl(d.payL)}</button>`); down(); } }, ms);
      later(() => { opts.innerHTML = node.o.map((o, i) => `<button type="button" data-i="${i}">${o[0]}</button>`).join(''); }, ms);
    }
    msgs.addEventListener('click', e => {
      const pb = e.target.closest('.paybtn'); if (!pb || pb.disabled || !node || !node.pay) return;
      const next = node.pay; pb.disabled = true; pb.textContent = d.paying;
      later(() => { pb.textContent = d.paidL; pb.classList.add('done'); go(next); }, 900);
    });
    function start() { vars = {}; clock = 0; node = null; msgs.innerHTML = ''; opts.innerHTML = ''; FX[key](sys, 'reset', vars); go(d.start); }
    opts.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b || !node) return;
      const o = node.o[+b.dataset.i]; opts.innerHTML = '';
      if (o[1] === '_reset') { stopDemo(); return start(); }
      if (o[2]) Object.assign(vars, o[2]);
      bubble(o[0], true); go(o[1]);
    });
    start();
  }

  function runPhone(stage) {
    const d = T[L].demo.phone;
    const sysHTML = () => head(d.sysT) + pipeHTML('phone') + `<div class="look"><p class="empty">${d.empty}</p></div><div class="log"></div>`;
    stage.innerHTML = `<div class="duo"><div class="call"><div class="who"><span class="cav">AI</span><div><b>${d.callName}</b><small class="cst">${d.incoming}</small></div><span class="ctm">0:00</span></div><div class="wave">${Array.from({ length: 34 }, (_, i) => `<i style="--h:${10 + Math.round(Math.abs(Math.sin(i * 1.7)) * 24)}px;--d:${((i % 7) * -0.12).toFixed(2)}s"></i>`).join('')}</div><div class="tx" aria-live="polite"><p class="hint">${d.hint}</p></div><button type="button" class="btn primary play">${d.play}</button></div><div class="sys">${sysHTML()}</div></div>`;
    const tx = stage.querySelector('.tx'), wave = stage.querySelector('.wave'), cst = stage.querySelector('.cst'), ctm = stage.querySelector('.ctm'), btn = stage.querySelector('.play'), sys = stage.querySelector('.sys');
    btn.addEventListener('click', () => {
      stopDemo(); const my = tok; btn.disabled = true; tx.innerHTML = ''; sys.innerHTML = sysHTML(); cst.textContent = d.live; pipeTo(sys, 0); tone(0);
      let sec = 0, live = true;
      const tick = () => { if (!live || my !== tok) return; ctm.textContent = `0:${String(sec).padStart(2, '0')}`; sec++; later(tick, 1000); }; tick();
      let ms = 400;
      d.lines.forEach(([who, text, fx]) => {
        later(() => {
          if (who === 'ai' && !sys.querySelector('.pn:nth-child(3).on')) pipeTo(sys, 1);
          if (fx === 'look') { pipeTo(sys, 2); tone(2); sys.querySelector('.look').innerHTML = `<dl>${d.look.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl>`; addLog(sys, 'sale.order · A-2291 → stock.picking · out for delivery'); }
          if (fx === 'wa') { pipeTo(sys, 3); sys.querySelector('.look').insertAdjacentHTML('beforeend', `<div class="sent">✓ ${d.wa}</div>`); addLog(sys, 'whatsapp.send · template = driver_contact'); toast(sys, 'phone'); }
          const p = document.createElement('p'); p.className = who; p.innerHTML = `<b>${d.who[who]}</b>${text}`; tx.appendChild(p); tx.scrollTo({ top: tx.scrollHeight, behavior: reduce ? 'auto' : 'smooth' });
          wave.classList.add('on'); wave.classList.toggle('c', who === 'c');
        }, ms);
        ms += reduce ? 500 : 900 + text.length * 26;
        later(() => wave.classList.remove('on'), ms - 250);
      });
      later(() => { live = false; cst.textContent = d.ended; btn.disabled = false; btn.textContent = d.again; marioReact('phone'); }, ms);
    });
  }

  const RET = [[1200, 140, 95, 210, 18], [640, 60, 12, 75, 48], [900, 85, 70, 9, 66], [1050, 110, 130, 95, 102]];
  const MOVES = [[0, 4, 120], [1, 2, 60], [2, 3, 80]];
  function runRetail(stage) {
    const d = T[L].demo.retail, brs = d.cols.slice(2), CAP = 240, f = n => n.toLocaleString('en-US');
    stage.innerHTML = `<div class="sys">${head(d.title)}${pipeHTML('retail')}<div class="ck"><div><span>${d.k[0]}</span><b>4</b></div><div><span>${d.k[1]}</span><b class="rk1">—</b></div><div><span>${d.k[2]}</span><b class="rk2">0</b></div></div><div class="pcards">${d.prods.map((pn, i) => `<div class="pcard" data-r="${i}"><div class="ptop"><b>${pn}</b><span class="wh">${d.cols[1]} <b class="whv">${f(RET[i][0])}</b></span></div><div class="brs">${brs.map((bn, j) => `<div class="br" data-c="${j + 1}"><div class="col"><i style="height:${Math.min(100, RET[i][j + 1] / CAP * 100)}%"></i></div><b class="bv">${f(RET[i][j + 1])}</b><small>${bn}</small></div>`).join('')}</div><div class="pnote"></div></div>`).join('')}</div><div class="sugg"><h6><span class="ai-chip">AI</span><span>${d.aiT}</span></h6><p class="ph">${d.ph}</p></div><div class="dbtns"><button type="button" class="btn primary sm" data-a="go">${d.find}</button><button type="button" class="btn ghost sm" data-a="reset">${T[L].demo.restart}</button></div><div class="log"><div>stock.quant · 4 products × 5 locations</div></div></div>`;
    const sys = stage.querySelector('.sys'), sg = stage.querySelector('.sugg'), go = stage.querySelector('[data-a="go"]');
    const card = r => sys.querySelector(`.pcard[data-r="${r}"]`), br = (r, c) => card(r).querySelector(`.br[data-c="${c}"]`);
    let st = 0;
    stage.querySelector('[data-a="reset"]').addEventListener('click', () => { stopDemo(); runRetail(stage); });
    go.addEventListener('click', () => {
      if (st === 0) {
        st = 1; go.disabled = true; runPipe(sys, 0, 1); addLog(sys, 'forecast · 14-day sales rate per branch');
        MOVES.forEach(([r, c], k) => later(() => { br(r, c).classList.add('low'); card(r).classList.add('risk'); card(r).querySelector('.pnote').textContent = '⚠ ' + d.notes[k]; sys.querySelector('.rk1').textContent = k + 1; tone(k + 1); }, 400 + k * 450));
        later(() => { addLog(sys, 'check · 3 items under 2 days of cover'); sg.innerHTML = `<h6><span class="ai-chip">AI</span><span>${d.aiT}</span></h6><ul>${d.sugg.map(x => `<li>${x}</li>`).join('')}</ul>`; go.textContent = d.create; go.disabled = false; st = 2; }, 400 + MOVES.length * 450 + 200);
      } else if (st === 2) {
        st = 3; go.disabled = true; go.textContent = d.done; const my = tok, t0 = performance.now(), dur = reduce ? 10 : 1100;
        const anim = MOVES.map(([r, c, q]) => ({ r, c, q, w0: RET[r][0], b0: RET[r][c] }));
        anim.forEach(({ r, c }) => { const b = br(r, c); b.classList.remove('low'); b.classList.add('up'); card(r).classList.remove('risk'); card(r).classList.add('fixed'); });
        const step = now => { if (my !== tok) return; const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
          anim.forEach(({ r, c, q, w0, b0 }) => { const v = Math.round(b0 + q * e), b = br(r, c); b.querySelector('.bv').textContent = f(v); b.querySelector('.col i').style.height = Math.min(100, v / CAP * 100) + '%'; card(r).querySelector('.whv').textContent = f(Math.round(w0 - q * e)); });
          if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
        anim.forEach(({ r, q }) => { card(r).querySelector('.pnote').textContent = '✓ ' + d.moved.replace('{q}', q); });
        sys.querySelector('.rk1').textContent = '0'; sys.querySelector('.rk2').textContent = '3';
        sg.innerHTML = `<h6><span class="ai-chip">AI</span><span>${d.doneT}</span></h6><ul>${d.sugg.map(x => `<li class="done">✓ ${x}</li>`).join('')}</ul>`;
        ['WH/INT/00412 · water → branch 4', 'WH/INT/00413 · rice → branch 2', 'WH/INT/00414 · oil → branch 3'].forEach(l => addLog(sys, l));
        runPipe(sys, 2, 3, () => toast(sys, 'retail')); marioReact('retail');
      }
    });
  }

  function runFactory(stage) {
    const d = T[L].demo.factory, M3 = d.mats;
    const matRow = ([n, need, have, u], i) => `<div class="mat" data-i="${i}"><span>${n}</span><span class="ms">${d.need} ${need.toLocaleString('en-US')} ${u}</span><span class="mb"><i></i></span><span class="mv"></span></div>`;
    stage.innerHTML = `<div class="sys">${head(d.title)}${pipeHTML('factory')}
      <div class="fx-card"><h5>${d.order}<span class="verdict" id="fv">${d.vq}</span></h5><p class="fx-p">${d.orderD}</p></div>
      <div class="fx-card"><h5>${d.matT}</h5>${M3.map(matRow).join('')}<div class="fx-ai" hidden></div></div>
      <div class="fx-card locked" id="fplan"><h5>${d.planT}</h5><div class="plan-steps">${d.plan.map(([a, b]) => `<div class="pstep"><b>${a}</b><span>${b}</span></div>`).join('')}</div><div class="pgb"><i></i></div><span class="pc">0 / 500 ${d.units}</span></div>
      <div class="fx-card locked" id="fdel"><h5>${d.delT}</h5><p class="fx-p" id="fdelT">${d.delWait}</p></div>
      <div class="dbtns"><button type="button" class="btn primary sm" data-a="go">${d.ask}</button><button type="button" class="btn ghost sm" data-a="reset">${T[L].demo.restart}</button></div><div class="log"><div>sale.order · 500 shelving units · due 6 Dec</div></div></div>`;
    const sys = stage.querySelector('.sys'), go = stage.querySelector('[data-a="go"]'), fv = stage.querySelector('#fv'), aiBox = stage.querySelector('.fx-ai'), plan = stage.querySelector('#fplan'), del = stage.querySelector('#fdel');
    let st = 0;
    stage.querySelector('[data-a="reset"]').addEventListener('click', () => { stopDemo(); runFactory(stage); });
    go.addEventListener('click', () => {
      if (st === 0) {
        st = 1; go.disabled = true; fv.textContent = d.vwait; runPipe(sys, 0, 2); addLog(sys, 'mrp.bom · 500 units → materials needed');
        M3.forEach(([n, need, have, u], i) => later(() => {
          const row = sys.querySelector(`.mat[data-i="${i}"]`), ok = have >= need;
          row.classList.add(ok ? 'good' : 'short'); row.querySelector('.mb i').style.width = Math.min(100, Math.round(have / need * 100)) + '%';
          row.querySelector('.mv').innerHTML = `${d.stock} ${have.toLocaleString('en-US')} ${u} · <b>${ok ? d.enough + ' ✓' : d.short + ' ' + (need - have) + ' ' + u}</b>`; tone(i + 1);
        }, 500 + i * 600));
        later(() => {
          fv.textContent = d.vwarn; fv.className = 'verdict warn'; addLog(sys, 'stock.quant · powder paint 28 / 40 kg');
          aiBox.hidden = false; aiBox.innerHTML = `<p><span class="ai-chip">AI</span>${d.aiShort}</p><button type="button" class="btn primary sm" data-a="buy">${d.approve}</button>`;
          aiBox.querySelector('[data-a="buy"]').addEventListener('click', e => {
            e.currentTarget.outerHTML = `<span class="okline">✓ ${d.approved}</span>`; runPipe(sys, 3, 3, () => toast(sys, 'factory1')); addLog(sys, 'purchase.order · 12 kg powder paint · supplier');
            const row = sys.querySelector('.mat[data-i="1"]'); row.classList.remove('short'); row.classList.add('good', 'fixed'); row.querySelector('.mb i').style.width = '100%'; row.querySelector('.mv b').textContent = d.arriving + ' ✓';
            fv.textContent = d.vok; fv.className = 'verdict ok'; plan.classList.remove('locked'); go.textContent = d.run; go.disabled = false; st = 2;
          });
        }, 500 + M3.length * 600 + 200);
      } else if (st === 2) {
        st = 3; go.disabled = true; const steps = sys.querySelectorAll('.pstep'), bar = sys.querySelector('.pgb i'), pc = sys.querySelector('.pc'), my = tok, t0 = performance.now(), dur = reduce ? 10 : 3000;
        const step = now => { if (my !== tok) return; const p = Math.min(1, (now - t0) / dur), k = Math.min(2, Math.floor(p * 3));
          bar.style.transform = `scaleX(${p})`; pc.textContent = `${Math.round(500 * p)} / 500 ${d.units}`;
          steps.forEach((x, j) => { x.classList.toggle('done', j < k || p >= 1); x.classList.toggle('on', j === k && p < 1); });
          if (p < 1) requestAnimationFrame(step);
          else { del.classList.remove('locked'); del.classList.add('ready'); sys.querySelector('#fdelT').textContent = '✓ ' + d.delOk; addLog(sys, 'stock.picking · delivery ready · Thu 3 Dec'); toast(sys, 'factory2'); marioReact('factory'); go.textContent = d.again; go.disabled = false; st = 4; } };
        requestAnimationFrame(step);
      } else if (st === 4) { stopDemo(); runFactory(stage); }
    });
  }

  function runLoyalty(stage) {
    const d = T[L].demo.ld, fmtN = n => n.toLocaleString('en-US');
    let pts = 1240, visits = 8930, given = 214600, st = 0;
    const gold = n => d.toGold.replace('{n}', fmtN(2000 - n));
    let q = ''; for (let i = 0; i < 121; i++) { const r = Math.floor(i / 11), c = i % 11, fin = (r < 3 && c < 3) || (r < 3 && c > 7) || (r > 7 && c < 3); q += `<i class="${fin ? '' : ((r * 7 + c * 13 + r * c) % 5 < 2 ? '' : 'e')}"></i>`; }
    stage.innerHTML = `<div class="duo"><div class="lph">
      <div class="lph-top"><b>${d.brand}</b><small>${d.hi}</small></div>
      <div class="lcard"><span class="tier">${d.tier}</span><div class="lpts"><b id="lpts">${fmtN(pts)}</b> ${d.pts}</div><div class="lbar"><i style="width:${pts / 20}%"></i></div><small id="lgold">${gold(pts)}</small></div>
      <div class="lscan"><button type="button" class="btn primary sm" data-a="scan">${d.scan}</button><div class="lqr" hidden><div class="q">${q}</div><small>${d.scanning}</small></div><p class="lpaid" hidden>✓ ${d.paid}</p></div>
      <div class="loffer" hidden><small><span class="ai-chip">AI</span>${d.offerT}</small><p>${d.offer}</p><button type="button" class="btn ghost sm" data-a="save">${d.save}</button></div>
      <div class="lrw"><small>${d.rewards}</small><div class="rwl">${d.rw.map(([n, v]) => `<span>${n}<b>${fmtN(v)} ${d.pts}</b></span>`).join('')}</div></div>
    </div><div class="sys">${head(d.dashT)}${pipeHTML('loyalty')}
      <div class="ck"><div><span>${d.k[0]}</span><b>12,480</b></div><div><span>${d.k[1]}</span><b class="lv">${fmtN(visits)}</b></div><div><span>${d.k[2]}</span><b class="lg">${fmtN(given)}</b></div></div>
      <div class="fx-card"><h5>${d.feedT}</h5><ul class="hfeed lfeed">${d.feed.map(([n, a]) => `<li><span class="av" style="background:#0A86B8">${n[0]}</span><span>${n}</span><em class="ok">${a}</em></li>`).join('')}</ul></div>
      <div class="fx-ai lwin"><p><span class="ai-chip">AI</span><b>${d.winT}:</b> ${d.win}</p><button type="button" class="btn primary sm" data-a="win">${d.winBtn}</button></div>
      <div class="log"><div>loyalty.member · 12,480 active</div></div></div></div>`;
    const sys = stage.querySelector('.sys'), ph = stage.querySelector('.lph');
    ph.querySelector('[data-a="scan"]').addEventListener('click', e => {
      if (st) return; st = 1; e.currentTarget.hidden = true; const qr = ph.querySelector('.lqr'); qr.hidden = false; tone(0);
      later(() => {
        qr.hidden = true; ph.querySelector('.lpaid').hidden = false;
        const t0 = performance.now(), my = tok, from = pts; pts += 35;
        const stepN = now => { if (my !== tok) return; const k = Math.min(1, (now - t0) / 900), v = Math.round(from + 35 * k); ph.querySelector('#lpts').textContent = fmtN(v); if (k < 1) requestAnimationFrame(stepN); };
        requestAnimationFrame(stepN);
        ph.querySelector('.lbar i').style.width = (pts / 20) + '%'; ph.querySelector('#lgold').textContent = gold(pts);
        sys.querySelector('.lv').textContent = fmtN(++visits); sys.querySelector('.lg').textContent = fmtN(given += 35);
        sys.querySelector('.lfeed').insertAdjacentHTML('afterbegin', `<li class="you"><span class="av" style="background:#0A2540">${d.me[0]}</span><span>${d.me}</span><em class="ok">+35 ${d.pts}</em></li>`);
        while (sys.querySelectorAll('.lfeed li').length > 4) sys.querySelector('.lfeed li:last-child').remove();
        runPipe(sys, 0, 2); addLog(sys, 'pos.order · 350 EGP → loyalty +35'); toast(sys, 'loy');
        later(() => { ph.querySelector('.loffer').hidden = false; addLog(sys, 'ai.offer · coffee lover · saturday · 20%'); marioReact('loy'); tone(3); }, 1400);
      }, 1500);
    });
    ph.querySelector('[data-a="save"]').addEventListener('click', e => { e.currentTarget.outerHTML = `<span class="okline">${d.saved}</span>`; });
    sys.querySelector('[data-a="win"]').addEventListener('click', e => { e.currentTarget.outerHTML = `<span class="okline">✓ ${d.winDone}</span>`; runPipe(sys, 1, 3, () => toast(sys, 'loyWin')); addLog(sys, 'campaign · comeback offer · 312 customers'); });
  }

  function runHR(stage) {
    const d = T[L].demo.hrd;
    let atWork = 412;
    const row = ([n, b, t, k], you) => `<li class="${you ? 'you' : ''}"><span class="av" style="background:${you ? '#0A2540' : '#0A86B8'}">${n[0]}</span><span>${n} · ${b}</span><span class="t">${t}</span><em class="${k}">${d.st[k]}</em></li>`;
    stage.innerHTML = `<div class="sys">${head(d.title)}${pipeHTML('hr')}
      <div class="ck hrk"><div><span>${d.k[0]}</span><b>436</b></div><div><span>${d.k[1]}</span><b class="hw">412</b></div><div><span>${d.k[2]}</span><b>9</b></div><div><span>${d.k[3]}</span><b>14</b></div></div>
      <div class="fx-card"><h5>${d.todayT}<button type="button" class="btn ghost sm" data-a="scan">${d.scan}</button></h5><ul class="hfeed">${d.feed.map(f => row(f)).join('')}</ul></div>
      <div class="fx-card"><h5>${d.payT}</h5><div class="pgb"><i></i></div><span class="pc" id="hpc">0 / 436</span><div class="hr-an"></div></div>
      <div class="dbtns"><button type="button" class="btn primary sm" data-a="go">${d.payBtn}</button><button type="button" class="btn ghost sm" data-a="reset">${T[L].demo.restart}</button></div><div class="log"><div>hr.employee · 436 active · 6 branches</div></div></div>`;
    const sys = stage.querySelector('.sys'), go = stage.querySelector('[data-a="go"]'), anBox = stage.querySelector('.hr-an');
    stage.querySelector('[data-a="reset"]').addEventListener('click', () => { stopDemo(); runHR(stage); });
    stage.querySelector('[data-a="scan"]').addEventListener('click', e => {
      const now = new Date(), t = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
      sys.querySelector('.hfeed').insertAdjacentHTML('afterbegin', row([d.you, d.hq, t, 'ok'], true)); while (sys.querySelectorAll('.hfeed li').length > 4) sys.querySelector('.hfeed li:last-child').remove();
      sys.querySelector('.hw').textContent = ++atWork; runPipe(sys, 0, 1); addLog(sys, 'hr.attendance · check-in · head office'); toast(sys, 'hrScan'); marioReact('scan');
    });
    let st = 0, left = 2;
    go.addEventListener('click', () => {
      if (st !== 0) { if (st === 3) { stopDemo(); runHR(stage); } return; }
      st = 1; go.disabled = true; runPipe(sys, 0, 2); addLog(sys, 'hr.payslip · compute · 436 employees');
      const bar = sys.querySelector('.pgb i'), pc = sys.querySelector('#hpc'), my = tok, t0 = performance.now(), dur = reduce ? 10 : 1800;
      const step = now => { if (my !== tok) return; const p = Math.min(1, (now - t0) / dur); bar.style.transform = `scaleX(${p})`; pc.textContent = `${d.calc} · ${Math.round(436 * p)} / 436`;
        if (p < 1) return requestAnimationFrame(step);
        pc.textContent = '436 / 436 ✓'; addLog(sys, 'ai.check · overtime and absence vs 6-month average');
        anBox.innerHTML = `<p class="hr-found"><span class="ai-chip">AI</span>${d.found}</p>` + d.an.map((a, i) => `<div class="anom" data-i="${i}"><b>${a.who}</b><p>${a.what}</p><div class="dbtns"><button type="button" class="btn primary sm" data-c="a">${a.a}</button><button type="button" class="btn ghost sm" data-c="b">${a.b}</button></div></div>`).join('');
        tone(3);
      };
      requestAnimationFrame(step);
    });
    anBox.addEventListener('click', e => {
      const b = e.target.closest('button[data-c]'); if (!b) return;
      const card = b.closest('.anom'), a = d.an[+card.dataset.i];
      card.classList.add('res'); card.querySelector('.dbtns').outerHTML = `<span class="okline">✓ ${b.dataset.c === 'a' ? a.ra : a.rb}</span>`;
      if (--left === 0) {
        anBox.insertAdjacentHTML('beforeend', `<p class="hr-ready">✓ ${d.ready}</p>`);
        go.disabled = false; go.textContent = d.send; st = 2;
        go.onclick = () => { if (st !== 2) return; st = 3; go.onclick = null; runPipe(sys, 3, 3, () => toast(sys, 'hr')); addLog(sys, 'whatsapp.send · payslips · 436 employees'); anBox.insertAdjacentHTML('beforeend', `<span class="okline">✓ ${d.sent}</span>`); marioReact('hr'); go.hidden = true; };
      }
    });
  }

  function runClinic(stage) {
    const d = T[L].demo.clinic;
    const SH = [{ b: 38, lvl: 0, now: [3, 5, 3], ai: [3, 4, 2] }, { b: 21, lvl: 1, now: [3, 5, 3], ai: [2, 3, 2] }, { b: 29, lvl: 2, now: [2, 4, 2], ai: [2, 3, 2] }];
    const RC = ['#0A86B8', '#00A496', '#D97706'];
    const man = c => `<svg viewBox="0 0 16 16" fill="${c}"><circle cx="8" cy="4.6" r="3"/><path d="M2.4 15.2c.6-3.3 2.9-5.2 5.6-5.2s5 1.9 5.6 5.2z"/></svg>`;
    const roleRow = (r, i, n) => `<div class="role"><span class="rname"><i style="background:${RC[r]}"></i>${d.roles[r]}</span><span class="dots">${Array.from({ length: n }, () => man(RC[r])).join('')}</span><b class="rc" data-r="${r}">${n}</b></div>`;
    stage.innerHTML = `<div class="sys">${head(d.title)}${pipeHTML('clinic')}<div class="ck"><div><span>${d.k1}</span><b>88</b></div><div><span>${d.k2}</span><b class="ck2">30</b></div><div class="ck3" hidden><span>${d.k3}</span><b>88 / 88 ✓</b></div></div><div class="shifts">${SH.map((sh, i) => `<div class="shift" data-i="${i}"><div class="shtop"><b>${d.shifts[i]}</b><span class="busy l${sh.lvl}">${sh.b} ${d.bk} · ${d.lvls[sh.lvl]}</span></div><div class="bbar"><i style="width:${Math.round(sh.b / 38 * 100)}%"></i></div>${sh.now.map((n, r) => roleRow(r, i, n)).join('')}<div class="shnote"></div></div>`).join('')}</div><div class="sugg"><h6><span class="ai-chip">AI</span><span>${d.aiT}</span></h6><p class="ph">${d.ph}</p></div><div class="dbtns"><button type="button" class="btn primary sm" data-a="go">${d.plan}</button><button type="button" class="btn ghost sm" data-a="reset">${T[L].demo.restart}</button></div><div class="log"><div>clinic.appointment · tomorrow · 88 bookings</div></div></div>`;
    const sys = stage.querySelector('.sys'), go = stage.querySelector('[data-a="go"]'), sg = stage.querySelector('.sugg');
    let st = 0, left = 30;
    stage.querySelector('[data-a="reset"]').addEventListener('click', () => { stopDemo(); runClinic(stage); });
    go.addEventListener('click', () => {
      if (st === 0) {
        st = 1; go.disabled = true; runPipe(sys, 0, 2); addLog(sys, 'hr.shift · current rota · 30 people'); addLog(sys, 'planner · cover every booking with the fewest staff');
        SH.forEach((sh, i) => later(() => {
          const card = sys.querySelector(`.shift[data-i="${i}"]`), rows = card.querySelectorAll('.role'), cut = [];
          sh.now.forEach((n, r) => {
            const diff = n - sh.ai[r]; if (!diff) return;
            const dots = rows[r].querySelectorAll('.dots svg'); for (let k = n - diff; k < n; k++) dots[k].classList.add('off');
            const rc = rows[r].querySelector('.rc'); rc.innerHTML = `${n} → <span>${sh.ai[r]}</span>`;
            cut.push(`${d.roles[r]} <bdi>−${diff}</bdi>`); left -= diff;
          });
          card.classList.add('done'); card.querySelector('.shnote').innerHTML = cut.length ? '✓ ' + cut.join(' · ') : d.noChange;
          sys.querySelector('.ck2').innerHTML = `30 → <span>${left}</span>`; tone(i + 1);
        }, 500 + i * 700));
        later(() => { sys.querySelector('.ck3').hidden = false; sg.innerHTML = `<h6><span class="ai-chip">AI</span><span>${d.aiT}</span></h6><p class="ph" style="color:var(--ink)">${d.res}</p>`; go.disabled = false; go.textContent = d.apply; marioReact('clinic'); }, 2700);
      } else if (st === 1) {
        st = 2; go.disabled = true; runPipe(sys, 3, 3, () => toast(sys, 'clinic')); addLog(sys, 'hr.shift · rota updated · 23 people'); addLog(sys, 'whatsapp.send · new shifts to 23 staff');
        sg.insertAdjacentHTML('beforeend', `<span class="okline">✓ ${d.applied}</span>`);
      }
    });
  }

  function runApps(stage) {
    const d = T[L].demo.apps, c = d.caps;
    stage.innerHTML = `<div class="ph3d"><div class="phw"><div class="phone3d"><div class="face front"><img src="${BASE}img/app1.jpg" alt="${c[0]}" width="360" height="780" decoding="async"></div><div class="face back"><img src="${BASE}img/app2.jpg" alt="${c[1]}" width="360" height="778" decoding="async"></div><i class="edge l"></i><i class="edge r"></i><i class="edge t"></i><i class="edge b"></i></div></div><p class="phcap" aria-live="polite"><b>${c[0]}</b>${d.hint}</p></div>`;
    const box = stage.querySelector('.ph3d'), ph = stage.querySelector('.phone3d'), cap = stage.querySelector('.phcap b');
    let base = 0, ry = 0, rx = 0, sx = 0, sy = 0, down = false, moved = 0;
    const set = () => { ph.style.setProperty('--ry', ry + 'deg'); ph.style.setProperty('--rx', rx + 'deg'); };
    box.addEventListener('pointerdown', e => { down = true; moved = 0; sx = e.clientX; sy = e.clientY; box.classList.add('held'); ph.classList.add('drag'); try { box.setPointerCapture(e.pointerId); } catch (_) {} });
    box.addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx, dy = e.clientY - sy; moved = Math.max(moved, Math.abs(dx) + Math.abs(dy)); ry = base + Math.max(-40, Math.min(40, dx * .5)); rx = Math.max(-14, Math.min(14, -dy * .15)); set(); });
    const up = () => { if (!down) return; down = false; ph.classList.remove('drag'); box.classList.remove('held'); if (moved < 8) { base += 180; cap.textContent = c[(base / 180) % 2 ? 1 : 0]; tone(2); } ry = base; rx = 0; set(); };
    box.addEventListener('pointerup', up); box.addEventListener('pointercancel', up);
  }

  const tabsEl = $('#tabs'), dpanel = $('#dpanel');
  function renderTabs() {
    const t = T[L].demo;
    tabsEl.innerHTML = '<div role="tablist">' + KEYS.map(k => `<button type="button" role="tab" class="tab" data-k="${k}" aria-controls="dpanel" aria-selected="${k === cur}" tabindex="${k === cur ? 0 : -1}">${t.tabs[k]}${k !== 'apps' ? '<span class="ai-chip" aria-hidden="true">AI</span>' : ''}</button>`).join('') + `</div><button type="button" class="snd" id="snd" aria-pressed="${soundOn}"><svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path class="on" d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/><path class="off" d="M17 9l5 6M22 9l-5 6"/></svg>${t.sound}</button>`;
  }
  function drawDemo() {
    const t = T[L].demo, i = t.info[cur];
    $('#dinfo').innerHTML = `<span class="k">${i.k}</span><h3>${i.h}</h3><p>${i.p}</p><div class="hood"><b>${t.under}</b><span>${i.x}</span></div>${i.also ? `<p class="also">${i.also}</p>` : ''}`;
    const st = $('#dstage');
    if (['mgr', 'cs', 'rest', 'book', 'odoo'].includes(cur)) runChat(cur, st);
    else ({ loyalty: runLoyalty, hr: runHR, clinic: runClinic, phone: runPhone, retail: runRetail, factory: runFactory, apps: runApps })[cur](st);
  }
  function showDemo(k, fade) {
    stopDemo(); cur = k;
    tabsEl.querySelectorAll('.tab').forEach(b => { b.setAttribute('aria-selected', b.dataset.k === k); b.tabIndex = b.dataset.k === k ? 0 : -1; });
    const done = () => { drawDemo(); dpanel.style.opacity = ''; dpanel.inert = false; };
    if (fade && !reduce) { dpanel.style.opacity = 0; dpanel.inert = true; later(done, 200); } else done();
  }
  tabsEl.addEventListener('click', e => {
    const sb = e.target.closest('.snd'); if (sb) { soundOn = !soundOn; sb.setAttribute('aria-pressed', soundOn); if (soundOn) chime(); return; }
    const b = e.target.closest('.tab'); if (!b || b.dataset.k === cur) return;
    showDemo(b.dataset.k, true);
    const tr = tabsEl.getBoundingClientRect(), br = b.getBoundingClientRect();
    if (br.left < tr.left || br.right > tr.right) tabsEl.scrollBy({ left: br.left < tr.left ? br.left - tr.left - 12 : br.right - tr.right + 12, behavior: 'smooth' });
  });

  tabsEl.addEventListener('keydown', e => {
    const b = e.target.closest('.tab'); if (!b) return;
    const all = [...tabsEl.querySelectorAll('.tab')], i = all.indexOf(b), rtl = document.documentElement.dir === 'rtl';
    const step = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1, Home: -i, End: all.length - 1 - i }[e.key];
    if (step === undefined) return; e.preventDefault();
    const nb = all[(i + step + all.length) % all.length]; nb.focus(); nb.click();
  });

  // ---------- HR dashboard ----------
  const feed = $('#feed'), colors = ['#0A9FD6', '#00A496', '#5B6CFF', '#B45309', '#EC4899', '#10B981', '#0EA5E9', '#8B5CF6'];
  let n = 0, present = 412, hrOn = false;
  function punch() {
    const t = T[L], name = t.names[n % 8], br = t.branches[(n * 3) % 4];
    const m = 40 + (n * 7) % 25, kind = m > 60 ? 'late' : (n % 5 === 4 ? 'ot' : 'ok');
    const li = document.createElement('li');
    li.innerHTML = `<span class="av" style="background:${colors[n % 8]}">${name[0]}</span><span>${name} · ${br}</span><span class="t">0${8 + Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}</span><em class="${kind}">${t.st[kind]}</em>`;
    feed.prepend(li); while (feed.children.length > 6) feed.lastChild.remove(); n++;
  }
  const alertBox = $('#alert'), alertText = $('#alertText');
  let ai = 0, payP = 0;
  const setAlert = step => { ai = (ai + step) % T[L].alerts.length; alertText.textContent = T[L].alerts[ai]; };
  const pay = p => { $('#payBar').style.transform = `scaleX(${p})`; $('#payTxt').innerHTML = p < 1 ? T[L].payRun(Math.round(436 * p)) : T[L].payDone; };
  const wv = [92, 95, 94, 97, 96, 93, 95], week = $('#week');
  week.innerHTML = wv.map(() => '<i></i>').join('');
  const counters = p => { $('#present').textContent = Math.round(present * p); $('#late').textContent = Math.round(9 * p); $('#leave').textContent = Math.round(14 * p); };
  let hrStarted = false;
  function hrStart() {
    if (hrStarted) return; hrStarted = true;
    week.querySelectorAll('i').forEach((b, i) => b.style.transform = `scaleY(${((wv[i] - 60) * 1.3) / 50})`);
    if (reduce) { counters(1); return; }
    const t0 = performance.now(); const tick = now => { const p = Math.min(1, (now - t0) / 1600); counters(1 - Math.pow(1 - p, 3)); if (p < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick);
  }
  new IntersectionObserver(es => { hrOn = es[0].isIntersecting; if (hrOn) hrStart(); }).observe($('#dash'));
  if (reduce) { payP = 1; }
  else {
    setInterval(() => { if (hrOn && !document.hidden) punch(); }, 2600);
    setInterval(() => { if (!hrOn || document.hidden) return; payP = payP >= 1 ? 0 : Math.min(1, payP + 0.06); pay(payP); }, 380);
    setInterval(() => { if (!hrOn || document.hidden) return; alertBox.style.opacity = 0; setTimeout(() => { setAlert(1); alertBox.style.opacity = 1; }, 400); }, 4200);
  }
  $('#scanBtn').addEventListener('click', () => {
    const t = T[L], d = new Date(), li = document.createElement('li');
    li.className = 'you';
    li.innerHTML = `<span class="av" style="background:#0A2540">${t.you[0]}</span><span>${t.you} · ${t.hq}</span><span class="t">${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}</span><em class="ok">${t.st.ok}</em>`;
    feed.prepend(li); while (feed.children.length > 6) feed.lastChild.remove();
    present++; hrStart(); hrStarted = true; counters(1); marioReact('scan');
  });

  // ---------- contact ----------
  const pillsBox = $('#pills'), send = $('#send'), sendWa = $('#sendWa'), err = $('#err');
  const chosen = new Set();
  const renderPills = () => { pillsBox.innerHTML = T[L].needs.map((t, i) => `<button type="button" class="pill" data-i="${i}" aria-pressed="${chosen.has(i)}">${t}</button>`).join(''); };
  pillsBox.addEventListener('click', e => { const b = e.target.closest('.pill'); if (!b) return; const i = +b.dataset.i; chosen.has(i) ? chosen.delete(i) : chosen.add(i); b.setAttribute('aria-pressed', chosen.has(i)); updateLinks(); });
  const fName = $('#fName'), fCompany = $('#fCompany'), fPhone = $('#fPhone'), fProblem = $('#fProblem');
  function updateLinks() {
    const t = T[L], o = { name: fName.value.trim(), company: fCompany.value.trim(), phone: fPhone.value.trim(), problem: fProblem.value.trim(), needs: [...chosen].sort().map(i => t.needs[i]) };
    const body = t.msg(o);
    send.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(body.replace(/\r?\n/g, '\r\n'))}`;
    sendWa.href = `https://wa.me/${WA}?text=${encodeURIComponent(body)}`;
    if (o.problem) err.textContent = '';
  }
  [fName, fCompany, fPhone, fProblem].forEach(el => el.addEventListener('input', updateLinks));
  [send, sendWa].forEach(a => a.addEventListener('click', e => { if (!fProblem.value.trim()) { e.preventDefault(); err.textContent = T[L].errProblem; fProblem.focus(); } }));
  $('#askForm').addEventListener('submit', e => e.preventDefault());
  $('#copyMail').addEventListener('click', e => {
    const b = e.currentTarget, done = () => { b.textContent = T[L].copied; setTimeout(() => { b.textContent = T[L].copy; }, 1500); };
    const sel = () => { const r = document.createRange(); r.selectNodeContents($('#mailTxt')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    try { navigator.clipboard.writeText(EMAIL).then(done, sel); } catch (_) { sel(); }
  });

  // ---------- Mario, the floating assistant ----------
  const M = {
    en: {
      name: 'Mario', sub: 'AI assistant · MK Automation', ph: 'Ask Mario anything…', menu: 'Menu',
      greet: "Hi! I'm Mario 👋 your AI assistant from MK Automation. How can I help you today?", greetChips: [['Show me around', 'open'], ['Try a demo', 'n:demo'], ['Describe my problem', 'w:1']],
      opened: "Opened it for you. Tap the buttons and watch it work.",
      tips: { ai: "Press “Analyse with AI” and I'll read this chart for you.", demos: 'Tap any tab and try a system. I run most of them 😉', contact: "Not sure what to write? Describe the problem in your own words. That's enough." },
      wiz: { q1: 'Happy to help. What kind of business do you have?', a1: ['Retail or shops', 'Clinic', 'Restaurant', 'Factory', 'Services company', 'Something else'], q2: 'And where does it hurt most?', a2: ['Sales and orders', 'Stock and branches', 'HR and payroll', 'Customer service', 'Reports and numbers'], q3: 'Roughly how big is the team?', a3: ['Under 20', '20 to 100', '100 to 500', 'More than 500'], msg: (b, a, z) => `Business: ${b}\nTeam size: ${z}\nMain problem: ${a}\n\nWe'd like to hear how you would solve it.`, done: "I've written it into the form for you 👌 Check it and press “Send by email”.", go: 'Take me to the form' },
      explainOpen: 'Open it',
      react: { loy: "Points added and an offer picked just for him. That's how customers come back.", hr: "Two things caught before payday. That's money saved.", cs: "Paid and saved in the CRM. I'll follow up after the visit.", ai: "I found three things in that chart. That's what I send managers every morning.", rest: "That order went straight to the kitchen. Nobody had to type it 😄", book: "Booked and saved in the calendar. I'll send the reminder the evening before.", clinic: 'Same patients, 7 fewer people on shift. I like that kind of math.', phone: 'That was me on the phone. I found the order in seconds.', odoo: 'Three overdue invoices, 128,500 EGP. I can draft the reminders too.', retail: 'Three transfers created. Every branch is covered for the week.', factory: 'Delivered on time, and the paint arrived before it was needed.', scan: "Got your fingerprint 👋 You're on time today." },
      fallback: "Good question. I've added it to the contact form so the team can answer it properly. Just press “Send by email”.",
      n: {
        start: { t: "Hi! I'm Mario, your AI assistant from MK Automation 👋 Ask me anything, or pick one:", c: [['What do you build?', 'n:build'], ['Show me a demo', 'n:demo'], ['Help me describe my problem', 'w:1'], ['Explain the demo on screen', 'explain'], ['How much does it cost?', 'n:price'], ['Talk to a person', 'n:human']] },
        loyalty: { t: 'We build loyalty apps for Android and iPhone: points with every purchase, rewards and tiers, and offers the AI picks for each customer. It also finds customers who stopped coming and brings them back.', c: [['Try the loyalty app', 'demo:loyalty']] },
        time: { t: 'It depends on the size of the project. The plan we send you gives every step a date, and you see something working every week.', c: [['Describe my project', 'w:1'], ['How a project goes', 'goto:#process']] },
        support: { t: 'We stay after launch to fix, adjust and add what you need next, and you talk to the same people who built your system.', c: [['Talk to a person', 'n:human']] },
        data: { t: 'Your system runs on your own server or on a cloud you choose, so the data stays yours.', c: [['Why Odoo Community', 'goto:#odoo']] },
        where: { t: "We're based in Cairo, Egypt. Email or WhatsApp us and we'll set up a call.", c: [['Email us', 'mail'], ['WhatsApp', 'wa']] },
        cs: { t: "I can be your sales and support agent too. I listen to the customer's problem, suggest the fix or the product, take the payment, add them to your CRM and follow up.", c: [['Try it', 'demo:cs']] },
        build: { t: 'We build ERP and HR systems on Odoo, clinic systems, websites, Android and iPhone apps, and assistants like me on WhatsApp and the phone. AI comes with all of them.', c: [['See the services', 'goto:#services'], ['Show me a demo', 'n:demo']] },
        demo: { t: "Pick one and I'll open it for you:", c: [['Sales & support agent', 'demo:cs'], ['HR & payroll', 'demo:hr'], ['Loyalty app', 'demo:loyalty'], ['Factory ERP', 'demo:factory'], ['Restaurant orders', 'demo:rest'], ['Clinics', 'demo:clinic'], ['Retail ERP', 'demo:retail'], ['Phone assistant', 'demo:phone'], ["Manager's assistant", 'demo:mgr']] },
        ai: { t: "If your system is Odoo or has an API, I can read its data, answer your team, analyse the numbers and send alerts. Tell us what you use and we'll suggest where to start.", c: [['See AI analysis', 'goto:#ai'], ['Tell us about your system', 'contact:2']] },
        price: { t: 'It depends on what you need. Email us a short description, and after a quick call we send a clear plan with the price and timeline, so you know everything before we start.', c: [['Describe my project', 'contact:1'], ['Talk to a person', 'n:human']] },
        human: { t: 'Sure. Write to us by email or WhatsApp and someone from the team will reply.', c: [['Email us', 'mail'], ['WhatsApp', 'wa']] },
        clinic: { t: "Our clinic system handles bookings, patient files, doctors' schedules, HR and payroll. I also plan the shifts from tomorrow's bookings, so the clinic runs with the fewest staff.", c: [['Try the clinic demo', 'demo:clinic']] },
        hr: { t: 'MK HR runs fingerprint attendance, shifts, payroll and leave for every branch, on Odoo 19 Community. Managers get a summary from me every morning.', c: [['Try the HR demo', 'demo:hr'], ['See MK HR', 'goto:#solutions'], ['Try a fingerprint scan', 'goto:#dash']] },
        erp: { t: 'We build ERP on Odoo Community for retail chains and factories, fitted to your branches and the way you work, with no fee per user.', c: [['Retail ERP demo', 'demo:retail'], ['Factory ERP demo', 'demo:factory'], ['Why Odoo Community', 'goto:#odoo']] },
        agents: { t: "That's what I do best. I answer customers on WhatsApp and the phone, take orders and bookings, and put them straight into the system.", c: [['Restaurant demo', 'demo:rest'], ['Phone demo', 'demo:phone'], ['Bookings demo', 'demo:book']] },
        web: { t: 'We build Arabic and English websites, and apps for Android, iPhone and the web, including loyalty apps with points and rewards. This site is one of ours.', c: [['Try the loyalty app', 'demo:loyalty'], ['See the apps', 'demo:apps']] },
        hello: { t: 'Hi! What can I do for you?', c: [['What do you build?', 'n:build'], ['Show me a demo', 'n:demo'], ['Talk to a person', 'n:human']] },
      },
    },
    ar: {
      name: 'ماريو', sub: 'مساعدك الذكي · MK Automation', ph: 'اسأل ماريو أي حاجة…', menu: 'القائمة',
      greet: 'أهلاً! أنا ماريو 👋 مساعدك الذكي من MK Automation. أقدر أساعدك إزاي النهارده؟', greetChips: [['ورّيني عندكم إيه', 'open'], ['عايز أجرّب ديمو', 'n:demo'], ['ساعدني أوصف مشكلتي', 'w:1']],
      opened: 'فتحتهولك. اضغط على الأزرار وشوفه بيشتغل إزاي.',
      tips: { ai: 'اضغط «حلّل بالذكاء الاصطناعي» وأنا أقرالك الرسم.', demos: 'اضغط على أي تاب وجرّب النظام بنفسك. أغلبهم أنا اللي بشغّلهم 😉', contact: 'مش عارف تكتب إيه؟ احكي المشكلة بكلامك، ده كفاية.' },
      wiz: { q1: 'تحت أمرك. نشاطك إيه؟', a1: ['محلات أو تجزئة', 'عيادة', 'مطعم', 'مصنع', 'شركة خدمات', 'حاجة تانية'], q2: 'وإيه أكتر حاجة تاعباك؟', a2: ['المبيعات والطلبات', 'المخزون والفروع', 'الموارد البشرية والمرتبات', 'خدمة العملاء', 'التقارير والأرقام'], q3: 'الفريق عندك حوالي كام؟', a3: ['أقل من 20', 'من 20 لـ 100', 'من 100 لـ 500', 'أكتر من 500'], msg: (b, a, z) => `النشاط: ${b}\nحجم الفريق: ${z}\nالمشكلة الأساسية: ${a}\n\nحابين نعرف هتحلوها إزاي.`, done: 'كتبتلك الرسالة في الفورم 👌 راجعها واضغط «ابعتها بالإيميل».', go: 'ودّيني للفورم' },
      explainOpen: 'افتحه',
      react: { loy: 'النقاط اتضافت، وعرض متفصّل عليه. كده العميل بيرجع تاني.', hr: 'لقطنا حالتين قبل يوم القبض، ودي فلوس اتوفرت.', cs: 'اتدفع واتسجل في الـ CRM. وهتابع بعد الزيارة.', ai: 'لقيت 3 حاجات في الرسم ده، ودي نفس الحاجات اللي ببعتها للمديرين كل يوم الصبح.', rest: 'الأوردر راح المطبخ على طول، ومحدش كتبه بإيده 😄', book: 'اتحجز واتسجل في التقويم، وهبعت التذكير بالليل قبل المعاد.', clinic: 'نفس المرضى، و7 أشخاص أقل في الورديات. بحب الحسابات دي.', phone: 'ده كان أنا على التليفون. لقيت الأوردر في ثواني.', odoo: '3 فواتير متأخرة بـ 128,500 جنيه. أقدر أكتب التذكيرات كمان.', retail: 'اتعمل 3 تحويلات، وكل الفروع مغطية الأسبوع ده.', factory: 'الطلب اتسلّم في معاده، والدهان وصل قبل ما نحتاجه.', scan: 'سجلت بصمتك 👋 إنت في الميعاد النهارده.' },
      fallback: 'سؤال حلو. كتبتهولك في فورم التواصل علشان الفريق يرد عليك بالتفصيل. اضغط «ابعتها بالإيميل» وخلاص.',
      n: {
        start: { t: 'أهلاً! أنا ماريو، مساعدك الذكي من MK Automation 👋 اسألني أي حاجة، أو اختار:', c: [['بتعملوا إيه؟', 'n:build'], ['وريني ديمو', 'n:demo'], ['ساعدني أوصف مشكلتي', 'w:1'], ['اشرحلي الديمو اللي قدامي', 'explain'], ['التكلفة كام؟', 'n:price'], ['عايز أكلم حد', 'n:human']] },
        loyalty: { t: 'بنعمل تطبيقات ولاء لأندرويد وآيفون: نقاط مع كل عملية شراء، ومكافآت ومستويات، وعروض بيختارها الذكاء الاصطناعي لكل عميل. وكمان بيلاقي العملاء اللي بطّلوا ييجوا ويرجّعهم.', c: [['جرّب تطبيق الولاء', 'demo:loyalty']] },
        time: { t: 'على حسب حجم المشروع. الخطة اللي بنبعتهالك فيها معاد لكل خطوة، وبتشوف حاجة شغالة كل أسبوع.', c: [['ساعدني أوصف مشروعي', 'w:1'], ['المشروع بيمشي إزاي', 'goto:#process']] },
        support: { t: 'بنفضل معاك بعد التشغيل، نصلّح ونعدّل ونضيف اللي تحتاجه، وبتتكلم مع نفس الناس اللي بنوا نظامك.', c: [['عايز أكلم حد', 'n:human']] },
        data: { t: 'نظامك بيشتغل على سيرفرك أو على سحابة إنت تختارها، فبياناتك بتفضل ملكك.', c: [['ليه Odoo Community', 'goto:#odoo']] },
        where: { t: 'إحنا في القاهرة. ابعتلنا إيميل أو واتساب ونحدد معاد مكالمة.', c: [['ابعت إيميل', 'mail'], ['واتساب', 'wa']] },
        cs: { t: 'أقدر أكون وكيل المبيعات وخدمة العملاء بتاعك كمان. بسمع مشكلة العميل، وأقترح الحل أو المنتج، وآخد الدفع، وأسجله في الـ CRM، وأتابع معاه.', c: [['جرّبها', 'demo:cs']] },
        build: { t: 'بنعمل أنظمة ERP وموارد بشرية على Odoo، وأنظمة للعيادات، ومواقع وتطبيقات أندرويد وآيفون، ومساعدين زيي على واتساب والتليفون. والذكاء الاصطناعي موجود في كل ده.', c: [['شوف الخدمات', 'goto:#services'], ['وريني ديمو', 'n:demo']] },
        demo: { t: 'اختار واحد وأنا أفتحهولك:', c: [['وكيل المبيعات والدعم', 'demo:cs'], ['الموارد البشرية والرواتب', 'demo:hr'], ['تطبيق الولاء', 'demo:loyalty'], ['ERP المصانع', 'demo:factory'], ['طلبات المطعم', 'demo:rest'], ['العيادات', 'demo:clinic'], ['ERP التجزئة', 'demo:retail'], ['المساعد الهاتفي', 'demo:phone'], ['مساعد المدير', 'demo:mgr']] },
        ai: { t: 'لو نظامك Odoo أو عنده API، أقدر أقرا بياناته وأرد على فريقك وأحلل الأرقام وأبعت تنبيهات. قولّنا بتستخدم إيه، وإحنا نقترح نبدأ منين.', c: [['شوف التحليل الذكي', 'goto:#ai'], ['احكيلنا عن نظامك', 'contact:2']] },
        price: { t: 'على حسب اللي محتاجه. ابعتلنا إيميل فيه وصف قصير، وبعد مكالمة سريعة هنبعتلك خطة واضحة فيها السعر والمدة، فتبقى عارف كل حاجة قبل ما نبدأ.', c: [['احكي عن مشروعك', 'contact:1'], ['عايز أكلم حد', 'n:human']] },
        human: { t: 'أكيد. ابعتلنا إيميل أو واتساب وحد من الفريق هيرد عليك.', c: [['ابعت إيميل', 'mail'], ['واتساب', 'wa']] },
        clinic: { t: 'نظام العيادات فيه الحجوزات وملفات المرضى وجداول الأطباء والموارد البشرية والرواتب. وأنا كمان بخطط الورديات من حجوزات بكرة، فالعيادة تشتغل بأقل عدد موظفين.', c: [['جرّب ديمو العيادات', 'demo:clinic']] },
        hr: { t: 'MK HR فيه الحضور بالبصمة والورديات والرواتب والإجازات لكل الفروع، على Odoo 19 Community. والمديرين بيوصلهم مني ملخص كل صباح.', c: [['جرّب ديمو الموارد البشرية', 'demo:hr'], ['شوف MK HR', 'goto:#solutions'], ['جرّب تسجيل بصمة', 'goto:#dash']] },
        erp: { t: 'بنعمل ERP على Odoo Community لسلاسل المحلات والمصانع، متفصّل على فروعك وطريقة شغلك، ومن غير رسوم على كل مستخدم.', c: [['ديمو ERP التجزئة', 'demo:retail'], ['ديمو ERP المصانع', 'demo:factory'], ['ليه Odoo Community', 'goto:#odoo']] },
        agents: { t: 'دي أكتر حاجة أنا شاطر فيها. برد على العملاء على واتساب والتليفون، وباخد الطلبات والحجوزات، وبسجلها في النظام على طول.', c: [['ديمو المطعم', 'demo:rest'], ['ديمو المكالمات', 'demo:phone'], ['ديمو الحجوزات', 'demo:book']] },
        web: { t: 'بنعمل مواقع بالعربي والإنجليزي، وتطبيقات لأندرويد وآيفون والويب، منها تطبيقات الولاء بالنقاط والمكافآت. والموقع ده من شغلنا.', c: [['جرّب تطبيق الولاء', 'demo:loyalty'], ['شوف التطبيقات', 'demo:apps']] },
        hello: { t: 'أهلاً بيك! أقدر أساعدك في إيه؟', c: [['بتعملوا إيه؟', 'n:build'], ['وريني ديمو', 'n:demo'], ['عايز أكلم حد', 'n:human']] },
      },
    },
  };
  const INTENTS = [
    ['loyalty', ['loyalty', 'points', 'rewards', 'membership', 'ولاء', 'نقاط', 'مكافآت', 'مكافات', 'عضوية']],
    ['time', ['how long', 'how much time', 'timeline', 'weeks', 'duration', 'deadline', 'مدة', 'المده', 'وقت', 'قد إيه', 'قد ايه', 'امتى', 'إمتى', 'هياخد']],
    ['support', ['maintenance', 'after launch', 'support after', 'دعم فني', 'صيانة', 'بعد التشغيل', 'متابعة بعد']],
    ['data', ['security', 'secure', 'privacy', 'server', 'hosting', 'my data', 'أمان', 'خصوصية', 'سيرفر', 'استضافة', 'بياناتي']],
    ['where', ['where are you', 'location', 'address', 'office', 'cairo', 'فين', 'مكانكم', 'عنوان', 'مكتب', 'القاهرة']],
    ['price', ['price', 'cost', 'how much', 'budget', 'سعر', 'اسعار', 'تكلف', 'كام', 'بكام', 'فلوس', 'ميزاني']],
    ['clinic', ['clinic', 'doctor', 'patient', 'hospital', 'عياد', 'دكتور', 'طبيب', 'مريض', 'مستشف']],
    ['hr', ['hr', 'payroll', 'attendance', 'salary', 'employee', 'موارد', 'مرتب', 'رواتب', 'حضور', 'بصم', 'موظف']],
    ['erp', ['erp', 'odoo', 'stock', 'inventory', 'factory', 'manufactur', 'retail', 'أودو', 'اودو', 'مخزون', 'مصنع', 'مخزن', 'فروع']],
    ['cs', ['support', 'customer service', 'crm', 'payment', 'pay', 'sales agent', 'خدمة العملاء', 'دعم', 'دفع', 'مبيعات']],
    ['agents', ['whatsapp', 'chatbot', 'bot', 'agent', 'calls', 'call center', 'phone', 'booking', 'order', 'واتس', 'بوت', 'ايجنت', 'إيجنت', 'مكالم', 'تليفون', 'حجز', 'طلبات']],
    ['web', ['website', 'site', 'app', 'mobile', 'موقع', 'تطبيق', 'ابلكيشن', 'أبلكيشن', 'موبايل']],
    ['ai', ['ai', 'artificial', 'analysis', 'dashboard', 'ذكاء', 'تحليل', 'داشبورد']],
    ['demo', ['demo', 'try', 'example', 'ديمو', 'جرب', 'جرّب', 'تجرب', 'مثال']],
    ['human', ['contact', 'email', 'talk', 'human', 'person', 'call me', 'تواصل', 'ايميل', 'إيميل', 'أكلم', 'اكلم', 'حد']],
    ['hello', ['hi', 'hello', 'hey', 'اهلا', 'أهلا', 'السلام', 'هاي', 'مرحبا', 'ازيك']],
  ];
  const normQ = s => s.toLowerCase().replace(/[\u064B-\u065F\u0670\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي');
  const LET = 'a-z0-9\\u0621-\\u064A';
  const keyRe = k => /[\u0600-\u06FF]/.test(k) ? new RegExp('(^|[^' + LET + '])[وفبلك]?(?:ال|لل)?' + k + '($|[^' + LET + '])') : new RegExp('(^|[^' + LET + '])' + k + '(?:e?s)?($|[^' + LET + '])');
  const INTENT_RE = INTENTS.map(([id, ks]) => [id, ks.map(normQ).map(k => k.length <= 3 ? keyRe(k) : k)]);
  const mario = $('#mario'), mbtn = $('#mbtn'), mbub = $('#mbub'), mbubTxt = $('#mbubTxt'), mbubChips = $('#mbubChips'), mpanel = $('#mpanel'), mmsgs = $('#mmsgs'), mchips = $('#mchips'), mtext = $('#mtext');
  let mT = [], bubT = 0, bubI = 0, greeted = false;
  const mshade = $('#mshade');
  const mLater = (fn, ms) => mT.push(setTimeout(fn, ms));
  const mailHref = () => `mailto:${EMAIL}?subject=${encodeURIComponent(T[L].subject)}`;
  const CI = { 'n:build': '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>', 'n:demo': '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z"/>', 'w:1': '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>', explain: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>', 'n:price': '<path d="M20 12l-8 8-8-8V4h8z"/><circle cx="8.5" cy="8.5" r="1.2"/>', 'n:human': '<path d="M4 5h16v11H9l-5 4z"/>' };
  const chipHTML = ([label, act], rich) => rich && CI[act] ? `<button type="button" class="mchip" data-act="${act}"><svg viewBox="0 0 24 24">${CI[act]}</svg><span>${label}</span></button>` : act === 'mail' ? `<a class="mchip" href="${mailHref()}" target="_blank" rel="noopener">${label}</a>` : act === 'wa' ? `<a class="mchip" href="https://wa.me/${WA}" target="_blank" rel="noopener">${label}</a>` : `<button type="button" class="mchip" data-act="${act}">${label}</button>`;
  const mDown = () => mmsgs.scrollTo({ top: mmsgs.scrollHeight, behavior: reduce ? 'auto' : 'smooth' });
  function mAdd(text, me) { const el = document.createElement('div'); el.className = 'mm' + (me ? ' me' : ''); el.textContent = text; mmsgs.appendChild(el); mDown(); }
  function mSay(text, chips, rich) {
    mchips.innerHTML = ''; mchips.classList.toggle('start', !!rich);
    const ty = document.createElement('div'); ty.className = 'mm typing'; ty.innerHTML = '<i></i><i></i><i></i>';
    mLater(() => { mmsgs.appendChild(ty); mDown(); mario.classList.add('talk'); }, 150);
    mLater(() => {
      ty.remove();
      const el = document.createElement('div'); el.className = 'mm'; mmsgs.appendChild(el);
      const ch = Array.from(text), step = reduce ? ch.length : Math.max(1, Math.ceil(ch.length / 45)); let i = 0;
      const tick = () => { i = Math.min(ch.length, i + step); el.textContent = ch.slice(0, i).join(''); mmsgs.scrollTop = mmsgs.scrollHeight; if (i < ch.length) mLater(tick, 22); else { mario.classList.remove('talk'); mchips.innerHTML = (chips || []).map(c => chipHTML(c, rich)).join(''); mDown(); wave(); } };
      tick();
    }, reduce ? 200 : 650);
  }
  function mNode(key) { const m = M[L], n = m.n[key]; mSay(n.t, key === 'start' ? n.c : [...n.c, [m.menu, 'n:start']], key === 'start'); }
  function wave() { if (reduce) return; mario.classList.remove('waving'); void mario.offsetWidth; mario.classList.add('waving'); clearTimeout(wave.t); wave.t = setTimeout(() => mario.classList.remove('waving'), 1700); }
  let happyT = 0, lastReact = 0;
  function marioReact(k) {
    const now = Date.now(); if (now - lastReact < 3000) return; lastReact = now;
    mario.classList.add('happy'); clearTimeout(happyT); happyT = setTimeout(() => mario.classList.remove('happy'), 2600);
    if (mpanel.hidden) showBubble(M[L].react[k], null, 5500); else wave();
  }
  function openPanel(first) {
    mbub.hidden = true; mbtn.classList.remove('fresh'); mpanel.hidden = false; mbtn.setAttribute('aria-expanded', 'true'); mario.classList.add('open'); mario.classList.remove('hello', 'intro');
    if (innerWidth <= 620) { mshade.hidden = false; document.body.style.overflow = 'hidden'; }
    if (!mmsgs.children.length && first !== false) mNode('start');
    if (matchMedia('(pointer: fine)').matches) mtext.focus({ preventScroll: true });
  }
  const closePanel = () => { const had = mpanel.contains(document.activeElement); mpanel.hidden = true; mshade.hidden = true; mario.classList.remove('open'); document.body.style.overflow = ''; mbtn.setAttribute('aria-expanded', 'false'); if (had) mbtn.focus({ preventScroll: true }); };
  mshade.addEventListener('click', () => closePanel());
  function showBubble(text, chips, ms, typeIt) {
    if (!mpanel.hidden) return;
    if (innerWidth < 700 && /INPUT|TEXTAREA/.test((document.activeElement || {}).tagName || '')) return;
    clearTimeout(bubT); clearInterval(bubI); mbubChips.innerHTML = ''; mbub.hidden = false; wave();
    const done = () => { mbubTxt.textContent = text; mbubChips.innerHTML = (chips || []).map(c => chipHTML(c)).join(''); mario.classList.remove('talk'); };
    if (typeIt && !reduce) { const ch = Array.from(text); let i = 0; mbubTxt.textContent = ''; mario.classList.add('talk'); bubI = setInterval(() => { i += 2; mbubTxt.textContent = ch.slice(0, i).join(''); if (i >= ch.length) { clearInterval(bubI); done(); } }, 40); } else done();
    if (ms) bubT = setTimeout(() => { mbub.hidden = true; }, ms);
  }
  function goTo(sel) {
    const el = $(sel); if (!el) return;
    if (innerWidth < 700) closePanel();
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: sel === '#dash' ? 'center' : 'start' });
  }
  const wz = {};
  function act(a, label) {
    if (a === 'open') { openPanel(); return; }
    const W = M[L].wiz, menu = [M[L].menu, 'n:start'];
    if (a === 'w:1') { if (mpanel.hidden) openPanel(false); if (label) mAdd(label, true); mSay(W.q1, W.a1.map((x, i) => [x, 'w2:' + i])); return; }
    if (a.startsWith('w2:')) { wz.b = W.a1[+a.slice(3)]; mAdd(label, true); mSay(W.q2, W.a2.map((x, i) => [x, 'w3:' + i])); return; }
    if (a.startsWith('w3:')) { wz.a = W.a2[+a.slice(3)]; mAdd(label, true); mSay(W.q3, W.a3.map((x, i) => [x, 'w4:' + i])); return; }
    if (a.startsWith('w4:')) {
      wz.z = W.a3[+a.slice(3)]; mAdd(label, true);
      const wm = W.msg(wz.b, wz.a, wz.z), had = fProblem.value.trim(); fProblem.value = had && !had.includes(wm) ? had + '\n\n' + wm : wm; const ni = { 0: 1, 1: 1, 2: 1, 3: 2, 4: 2 }[W.a2.indexOf(wz.a)]; if (ni !== undefined && !chosen.has(ni)) { chosen.add(ni); renderPills(); } updateLinks();
      mSay(W.done, [[W.go, 'contact:-1'], menu]); return;
    }
    if (a === 'explain') { if (label) mAdd(label, true); const i = T[L].demo.info[cur]; mSay(`${i.h}. ${i.p}`, [[M[L].explainOpen, 'goto:#demos'], menu]); return; }
    if (a.startsWith('n:')) { if (mpanel.hidden) openPanel(false); if (label) mAdd(label, true); mNode(a.slice(2)); return; }
    if (a.startsWith('demo:')) { const k = a.slice(5); if (mpanel.hidden) openPanel(false); if (label) mAdd(label, true); goTo('#demos'); if (k !== cur) showDemo(k, true); mSay(M[L].opened, [[M[L].menu, 'n:start']]); return; }
    if (a.startsWith('goto:')) { goTo(a.slice(5)); return; }
    if (a.startsWith('contact:')) { const i = +a.slice(8); if (i >= 0 && !chosen.has(i)) { chosen.add(i); renderPills(); updateLinks(); } goTo('#contact'); setTimeout(() => fProblem.focus({ preventScroll: true }), 800); }
  }
  [mchips, mbubChips].forEach(box => box.addEventListener('click', e => { const b = e.target.closest('button.mchip'); if (b) act(b.dataset.act, box === mchips || /^(n:|demo:|w:)/.test(b.dataset.act) ? b.textContent : ''); }));
  mbtn.addEventListener('click', () => { if (mpanel.hidden) openPanel(); else closePanel(); });
  $('#mClose').addEventListener('click', closePanel);
  $('#mbubX').addEventListener('click', () => { mbub.hidden = true; });
  addEventListener('keydown', e => { if (e.key === 'Escape') { closePanel(); mbub.hidden = true; } });
  $('#mform').addEventListener('submit', e => {
    e.preventDefault(); const q = mtext.value.trim(); if (!q) return; mtext.value = ''; mAdd(q, true);
    const low = normQ(q), hit = INTENT_RE.find(([, ks]) => ks.some(k => typeof k === 'string' ? low.includes(k) : k.test(low)));
    if (hit) { mNode(hit[0]); return; }
    fProblem.value = fProblem.value.trim() ? fProblem.value.trim() + '\n' + q : q; updateLinks();
    mSay(M[L].fallback, [[T[L].talk, 'contact:-1'], [M[L].menu, 'n:start']]);
  });
  // eyes follow the pointer
  const pupils = mbtn.querySelector('.pupils'); let pq = false, ppx = 0, ppy = 0;
  addEventListener('pointermove', e => { ppx = e.clientX; ppy = e.clientY; if (pq) return; pq = true; requestAnimationFrame(() => { pq = false; const r = mbtn.getBoundingClientRect(), dx = ppx - (r.left + r.width / 2), dy = ppy - (r.top + r.height / 2), dd = Math.hypot(dx, dy) || 1, k = Math.min(1, dd / 260) * 2.6; pupils.setAttribute('transform', `translate(${(dx / dd * k).toFixed(2)} ${(dy / dd * k).toFixed(2)})`); }); }, { passive: true });
  // greeting, then one tip per section
  if (!reduce) { mario.classList.add('intro'); setTimeout(() => mario.classList.add('hello', 'happy'), 600); setTimeout(() => mario.classList.remove('hello', 'happy', 'intro'), 5600); }
  setTimeout(() => { greeted = true; if (mpanel.hidden) showBubble(M[L].greet, innerWidth < 700 ? M[L].greetChips.slice(0, 2) : M[L].greetChips, innerWidth < 700 ? 9000 : 0, true); }, 1000);
  const tipSeen = {};
  const tipObs = new IntersectionObserver(es => es.forEach(e => { const id = e.target.id; if (e.isIntersecting && greeted && !tipSeen[id] && !(id === 'contact' && innerWidth < 700)) { tipSeen[id] = 1; showBubble(M[L].tips[id], null, 7000); } }), { rootMargin: '-45% 0px -45% 0px' });
  ['ai', 'demos', 'contact'].forEach(id => tipObs.observe($('#' + id)));
  function marioLang() {
    mT.forEach(clearTimeout); mT = [];
    $('#mName').textContent = M[L].name; $('#mSub').textContent = M[L].sub; mtext.placeholder = M[L].ph;
    mtext.setAttribute('aria-label', M[L].ph); mpanel.setAttribute('aria-label', M[L].name); mario.classList.remove('talk');
    clearInterval(bubI); mmsgs.innerHTML = ''; mchips.innerHTML = ''; mbub.hidden = true;
    if (!mpanel.hidden) mNode('start');
  }

  // ---------- "start with your problem" examples ----------
  const pr = $('#pr'); let prI = 0, prOn = false, prHold = false;
  function prShow(i, anim) {
    prI = i; const x = T[L].prx[i];
    const fill = () => { $('#prQ').textContent = x[0]; $('#prY').textContent = x[1]; $('#prN').textContent = x[2]; $('#prDots').querySelectorAll('button').forEach((b, k) => b.setAttribute('aria-current', k === i)); pr.classList.remove('swap'); };
    if (anim && !reduce) { pr.classList.add('swap'); setTimeout(fill, 320); } else fill();
  }
  function prRender() { $('#prDots').innerHTML = T[L].prx.map((_, k) => `<button type="button" aria-label="${k + 1}" aria-current="${k === prI}"></button>`).join(''); prShow(prI, false); }
  $('#prDots').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; const k = [...$('#prDots').children].indexOf(b); prHold = true; prShow(k, true); });
  new IntersectionObserver(es => { prOn = es[0].isIntersecting; }).observe(pr);
  if (!reduce) setInterval(() => { if (prOn && !prHold && !document.hidden) prShow((prI + 1) % T[L].prx.length, true); }, 5200);
  $('#stMail').addEventListener('click', () => { if (!chosen.has(0)) { chosen.add(0); renderPills(); updateLinks(); } setTimeout(() => fProblem.focus({ preventScroll: true }), 800); });
  $('#stMario').addEventListener('click', () => act('w:1', T[L].stMario));

  // ---------- language ----------
  function apply(lang) {
    L = lang; const t = T[lang];
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-t]').forEach(el => { const v = t[el.dataset.t]; if (typeof v === 'string') el.innerHTML = v; });
    $('#lang').textContent = t.langBtn; $('#lang').lang = lang === 'en' ? 'ar' : 'en';
    fProblem.placeholder = t.phProblem;
    $('#feat').innerHTML = t.feat.map(f => `<li>${f}</li>`).join('');
    $('#steps').innerHTML = t.steps.map(([h, p], i) => `<div class="step"><b>${i + 1}</b><h4>${h}</h4><p>${p}</p></div>`).join('');
    const mc = ['#0A9FD6', '#00A496'];
    $('#mgrid').innerHTML = t.mods.map((m, i) => `<div class="mod"><i style="background:${mc[i % 2]}"></i>${m}</div>`).join('') + `<div class="mod ai"><span class="ai-chip" style="margin:0">AI</span>${t.modAI}</div>`;
    $('#abChips').innerHTML = t.abChips.map(c => `<span>${c}</span>`).join('');
    $('#plat').innerHTML = t.plat.map(c => `<span>${c}</span>`).join('');
    $('#ind').innerHTML = `<small>${t.indL}</small>` + t.ind.map(([l, k]) => `<button type="button" data-k="${k}">${l}</button>`).join('');
    document.querySelectorAll('.sol').forEach(sol => {
      let a = sol.querySelector('.solcta');
      if (!a) { a = document.createElement('a'); a.className = 'solcta'; a.href = '#contact'; sol.appendChild(a); a.addEventListener('click', () => { const nm = sol.querySelector('.nm').textContent.trim(); if (!chosen.has(1)) { chosen.add(1); renderPills(); } if (!fProblem.value.trim()) fProblem.value = T[L].solAsk(nm); updateLinks(); setTimeout(() => fProblem.focus({ preventScroll: true }), 700); }); }
      a.textContent = t.solCta;
    });
    $('#lang').setAttribute('aria-label', t.aLang); $('#mClose').setAttribute('aria-label', t.aClose); $('#mbubX').setAttribute('aria-label', t.aClose); $('#mform button').setAttribute('aria-label', t.aSend); $('#dash').setAttribute('aria-label', t.aDash);
    renderPills(); updateLinks(); if (err.textContent) err.textContent = t.errProblem;
    prRender();
    feed.innerHTML = ''; n = Math.max(0, n - 5); for (let i = 0; i < 5; i++) punch();
    setAlert(0); pay(payP);
    resetAI();
    renderTabs(); showDemo(cur, false);
    marioLang();
    document.title = META[lang].t; const md = document.querySelector('meta[name="description"]'); if (md) md.content = META[lang].d;
    if (booted) { try { history.replaceState(null, '', lang === 'ar' ? BASE + 'ar/' : BASE); } catch (_) {} } booted = true;
  }
  apply(L);
  $('#lang').addEventListener('click', () => apply(L === 'en' ? 'ar' : 'en'));
  $('#ind').addEventListener('click', e => { const b = e.target.closest('button[data-k]'); if (!b) return; if (b.dataset.k !== cur) showDemo(b.dataset.k, true); $('#demos').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); });

  // ---------- 3D ribbons: MK's slanted brand bands ----------
  const canvas = $('#ribbons'), stage = $('#stage');
  if (navigator.connection && navigator.connection.saveData) return;
  const s3 = document.createElement('script');
  s3.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  s3.crossOrigin = 'anonymous'; s3.referrerPolicy = 'no-referrer'; s3.onload = ribbons3D;
  document.head.appendChild(s3);
  function ribbons3D() {
  if (!window.THREE) return;
  let renderer;
  const small = matchMedia('(max-width: 720px), (pointer: coarse)').matches;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: !small && devicePixelRatio < 2, alpha: true, powerPreference: 'low-power' }); } catch (_) { return; }
  renderer.setPixelRatio(small ? 1 : Math.min(devicePixelRatio || 1, 1.5));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60); camera.position.set(0, 0, 14);
  scene.add(new THREE.AmbientLight(0xffffff, 0.75));
  const key = new THREE.DirectionalLight(0xffffff, 0.7); key.position.set(-4, 6, 8); scene.add(key);
  const group = new THREE.Group(); group.rotation.z = -0.42; scene.add(group);
  const spec = [[-3.4, 0.8, -2.2, 0x123F63], [-2.0, 1.4, -0.9, 0x0A9FD6], [-0.5, 0.5, 0.6, 0x5FD4F5], [0.6, 1.2, -0.3, 0x00A496], [2.2, 0.65, 1.1, 0x1B5E86], [3.4, 1.5, -1.6, 0x2BB6E3], [4.9, 0.55, 0.3, 0x34C9B9]];
  const glowTex = (() => { const c = document.createElement('canvas'); c.width = 32; c.height = 256; const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.5, 'rgba(255,255,255,.85)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 32, 256); return new THREE.CanvasTexture(c); })();
  const ribbons = spec.map(([x, w, z, col], i) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, 26, 0.22), new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: .14, roughness: .4, metalness: .15 }));
    mesh.position.set(x, 0, z); group.add(mesh);
    const glint = new THREE.Mesh(new THREE.PlaneGeometry(w * .9, 3), new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, opacity: .45, depthWrite: false }));
    glint.position.set(x, 0, z + 0.13); group.add(glint);
    return { mesh, glint, base: z, phase: i * 1.7, speed: .9 + (i % 3) * .35 };
  });
  // flowing data particles along the ribbons
  const PN = small ? 48 : 120, pPos = new Float32Array(PN * 3), pData = [];
  const dotTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(170,235,255,.85)'); gr.addColorStop(1, 'rgba(170,235,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  for (let i = 0; i < PN; i++) { const k = i % ribbons.length; pData.push({ r: ribbons[k], ox: (Math.random() - .5) * spec[k][1] * .8, y: Math.random() * 26 - 13, v: .6 + Math.random() * 1.4 }); }
  const pGeo = new THREE.BufferGeometry(); pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  group.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ size: small ? .24 : .18, map: dotTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xBFEFFF })));
  let boost = 1, lastT = 0;
  stage.addEventListener('pointerdown', () => { boost = 4; if (!running) start(); }, { passive: true });
  function size() { const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
  new ResizeObserver(size).observe(canvas); size();
  let mx = 0, my = 0, cx = 0, cy = 0, visible = true, running = false;
  addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; }, { passive: true });
  new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) start(); }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });
  function draw(now) {
    const t = now / 1000;
    cx += (mx * 1.6 - cx) * .04; cy += (-my * 1.0 - cy) * .04;
    camera.position.x = cx; camera.position.y = cy; camera.lookAt(0, 0, 0);
    const dt = Math.min(.05, Math.max(0, t - lastT)); lastT = t;
    group.rotation.z = -0.42 + Math.min(1, scrollY / (heroEl.offsetHeight || 1)) * .22;
    ribbons.forEach(r => { const z = r.base + Math.sin(t * .5 + r.phase) * .35; r.mesh.position.z = z; r.glint.position.z = z + .13; r.glint.position.y = ((t * r.speed * (1 + (boost - 1) * .5) + r.phase * 3) % 26) - 13; r.glint.material.opacity = Math.min(.9, .45 * (1 + (boost - 1) * .3)); });
    pData.forEach((q, i) => { q.y += q.v * dt * 2.2 * boost; if (q.y > 13) q.y -= 26; pPos[i * 3] = q.r.mesh.position.x + q.ox; pPos[i * 3 + 1] = q.y; pPos[i * 3 + 2] = q.r.mesh.position.z + .16; });
    pGeo.attributes.position.needsUpdate = true; boost += (1 - boost) * .03;
    renderer.render(scene, camera);
  }
  let last = 0; const FRAME = 1000 / (small ? 30 : 60);
  function loop(now) { if (now - last >= FRAME - 3) { last = now; draw(now); } if (!reduce && visible && !document.hidden) requestAnimationFrame(loop); else running = false; }
  function start() { if (reduce) { draw(4000); return; } if (!running) { running = true; requestAnimationFrame(loop); } }
  start();
  }
})();
