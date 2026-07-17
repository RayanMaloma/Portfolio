# Arabic Content Archive
_Extracted verbatim from `js/i18n.js` before the Astro migration (2026-07-17). This is the complete EN/AR dictionary + RTL switching logic of the V3.0 site, preserved for the future bilingual release. Source also remains at `legacy/js/i18n.js` and in git history._

```js
// i18n.js — Language switching (EN / AR)

var TRANSLATIONS = {
  en: {
    'page.index':           'Rayan Al-Omaireeni — UI/UX Designer',
    'nav.projects':         'Projects',
    'nav.contact':          'Contact',
    'nav.resume':           'Resume',
    'nav.menu':             'Menu',
    'lang.toggle':          'AR',
    'hero.name':            'Rayan Al-Omaireeni',
    'hero.kicker':          'Product Designer · UX / UI / AI',
    'hero.bio':             'I design products across UX, UI, and AI — turning complex ideas into clear, intuitive interfaces. I graduated in Computer Information Systems from the College of Computer & Information Sciences at King Saud University.',
    'hero.scroll':          'Scroll to work ↓',
    'hero.cta.projects':    'My Projects',
    'hero.cta.talk':        "Let's Talk",
    'projects.label':       'Selected Work',
    'projects.hint':        'Hover to explore · Click to open',
    'contact.label':        'Contact',
    'contact.headline':     "Let's build\nsomething real.",
    'resume.line':          'Want the full picture? Download my resume',
    'card.autorag.title':   'AutoRAG (Graduation Project)',
    'card.autorag.role':    'UI/UX · Frontend',
    'card.dshopper.title':  'D Shopper',
    'card.dshopper.role':   'Product Design',
    'card.csc.title':       'CSC Official Website',
    'card.csc.role':        'UI/UX Design',
    'card.rknh.title':      'RKNH Identity',
    'card.rknh.role':       'Brand Identity',
    'card.routine.title':   'Routine',
    'card.routine.role':    'Graphic Design',
    'card.tamakan.title':   'Tamakan',
    'card.tamakan.role':    'Graphic Design',
    'card.mosbah.title':    'Mosbah Omar',
    'card.mosbah.role':     'Graphic Design',
    'resume.label':         'Resume',
    'resume.text':          'UI/UX Designer with a background in graphic design, transitioning into product design. Senior Computer Information Systems student at King Saud University.',
    'resume.view':          'View Resume',
    'resume.download':      'Download',
    'back':                 'Back',
    'meta.for':             'For',
    'meta.role':            'Role',
    'meta.status':          'Status',
    'status.complete':      'Complete',
    'status.in-progress':   'In Progress',
    'overview':             'Overview',
    'autorag.page.title':   'AutoRAG — Rayan Al-Omaireeni',
    'autorag.title':        'AutoRAG (Graduation Project)',
    'autorag.for':          'King Saud University',
    'autorag.role':         'UI/UX · Frontend Developer',
    'autorag.overview':     'AutoRAG is a user-friendly AI system that allows users to ask high-level questions without technical knowledge. The system automatically selects the most suitable RAG configuration to provide accurate and contextually relevant answers.',
    'autorag.demo.tag':     'Live Prototype',
    'autorag.demo.launch':  'Launch interactive demo',
    'autorag.demo.hint':    'Real & fully interactive — click to explore',
    'autorag.demo.cta':     'Launch interactive demo',
    'autorag.demo.open':    'Open in new tab',
    'autorag.explore':      'What to explore',
    'autorag.h1.t':         'Guided RAG setup',
    'autorag.h1.d':         'A no-code questionnaire configures the engine for you',
    'autorag.h2.t':         'Natural-language chat',
    'autorag.h2.d':         'Ask high-level questions, get sourced answers',
    'autorag.h3.t':         'Document workspaces',
    'autorag.h3.d':         'Upload, index and manage knowledge sources',
    'autorag.h4.t':         'Team & insights',
    'autorag.h4.d':         'Members, roles and usage analytics',
    'csc.page.title':       'CSC Official Website — Rayan Al-Omaireeni',
    'csc.title':            'CSC Official Website',
    'csc.for':              'Cultural Social Club — King Saud University',
    'csc.role':             'Lead UI/UX Designer',
    'csc.overview':         "A professional web platform representing the Cultural and Social Club at King Saud University, showcasing the club's identity, activities, and impact. Designed to communicate scale, trust, and community engagement.",
    'rknh.page.title':      'RKNH Identity — Rayan Al-Omaireeni',
    'rknh.title':           'RKNH Identity',
    'rknh.for':             'RKNH',
    'rknh.role':            'Graphic Designer',
    'rknh.overview':        'A comprehensive brand identity system for RKNH, capturing the spirit of the field through bold motion and sharp focus. Includes logo design, typography system, color palette, and a full set of brand guidelines.',
    'routine.page.title':   'Routine — Rayan Al-Omaireeni',
    'routine.title':        'Routine',
    'routine.for':          'Routine',
    'routine.role':         'Graphic Designer',
    'routine.overview':     'A creative content and design project focused on visual identity and audience engagement. Encompassed brand collateral, social media content, digital marketing strategy, and product mockups — maintaining a consistent and compelling visual voice.',
    'tamakan.page.title':   'Tamakan — Rayan Al-Omaireeni',
    'tamakan.title':        'Tamakan',
    'tamakan.for':          'Tamakan by IEC — King Saud University',
    'tamakan.role':         'Graphic Designer',
    'tamakan.overview':     'Visual design work for Tamakan — a social initiative focused on communication and public speaking skills. Designed print collateral including event posters and roll-up banners that communicate confidence and clarity.',
    'mosbah.page.title':    'Mosbah Omar — Rayan Al-Omaireeni',
    'mosbah.title':         'Mosbah Omar',
    'mosbah.for':           'Mosbah Omar',
    'mosbah.role':          'Graphic Designer',
    'mosbah.overview':      'Premium brand and e-commerce design for a prayer bead brand combining tradition with modern visual language. Work included logo design, product photography art direction, social media content, and promotional campaign assets.',
  },
  ar: {
    'page.index':           'ريان العميريني — مصمم UI/UX',
    'nav.projects':         'المشاريع',
    'nav.contact':          'تواصل',
    'nav.resume':           'السيرة الذاتية',
    'nav.menu':             'القائمة',
    'lang.toggle':          'EN',
    'hero.name':            'ريان العميريني',
    'hero.kicker':          'مصمم منتجات · UX / UI / الذكاء الاصطناعي',
    'hero.bio':             'أصمّم منتجات تجمع بين تجربة المستخدم والواجهات والذكاء الاصطناعي — أحوّل الأفكار المعقّدة إلى واجهات واضحة وسهلة. تخرّجت في نظم المعلومات الحاسوبية من كلية علوم الحاسب والمعلومات بجامعة الملك سعود.',
    'hero.scroll':          'تصفّح الأعمال ↓',
    'hero.cta.projects':    'مشاريعي',
    'hero.cta.talk':        'تواصل معي',
    'projects.label':       'أعمال مختارة',
    'projects.hint':        'مرّر للاستكشاف · انقر للفتح',
    'contact.label':        'تواصل',
    'contact.headline':     'لنصنع شيئاً\nحقيقياً.',
    'resume.line':          'تريد الصورة الكاملة؟ حمّل سيرتي الذاتية',
    'card.autorag.title':   'AutoRAG (مشروع التخرج)',
    'card.autorag.role':    'UI/UX · واجهة أمامية',
    'card.dshopper.title':  'D Shopper',
    'card.dshopper.role':   'تصميم منتجات',
    'card.csc.title':       'الموقع الرسمي لـ CSC',
    'card.csc.role':        'تصميم UI/UX',
    'card.rknh.title':      'هوية RKNH',
    'card.rknh.role':       'هوية بصرية',
    'card.routine.title':   'Routine',
    'card.routine.role':    'تصميم جرافيك',
    'card.tamakan.title':   'تمكّن',
    'card.tamakan.role':    'تصميم جرافيك',
    'card.mosbah.title':    'مصباح عمر',
    'card.mosbah.role':     'تصميم جرافيك',
    'resume.label':         'السيرة الذاتية',
    'resume.text':          'مصمم UI/UX بخلفية في التصميم الجرافيكي، في طريقه نحو تصميم المنتجات. طالب في نظم المعلومات الحاسوبية — جامعة الملك سعود.',
    'resume.view':          'عرض السيرة الذاتية',
    'resume.download':      'تحميل',
    'back':                 'رجوع',
    'meta.for':             'لـ',
    'meta.role':            'الدور',
    'meta.status':          'الحالة',
    'status.complete':      'مكتمل',
    'status.in-progress':   'قيد التنفيذ',
    'overview':             'نظرة عامة',
    'autorag.page.title':   'AutoRAG — ريان العميريني',
    'autorag.title':        'AutoRAG (مشروع التخرج)',
    'autorag.for':          'جامعة الملك سعود',
    'autorag.role':         'UI/UX · مطور واجهة أمامية',
    'autorag.overview':     'AutoRAG نظام ذكاء اصطناعي سهل الاستخدام يتيح للمستخدمين طرح أسئلة عالية المستوى دون الحاجة إلى خبرة تقنية. يختار النظام تلقائياً أنسب إعداد RAG لتقديم إجابات دقيقة وذات صلة بالسياق.',
    'autorag.demo.tag':     'نموذج حي',
    'autorag.demo.launch':  'تشغيل النموذج التفاعلي',
    'autorag.demo.hint':    'تجربة حقيقية وتفاعلية بالكامل — انقر للاستكشاف',
    'autorag.demo.cta':     'تشغيل النموذج التفاعلي',
    'autorag.demo.open':    'فتح في تبويب جديد',
    'autorag.explore':      'ما الذي تستكشفه',
    'autorag.h1.t':         'إعداد RAG موجّه',
    'autorag.h1.d':         'استبيان بدون كود يهيّئ المحرك نيابةً عنك',
    'autorag.h2.t':         'محادثة بلغة طبيعية',
    'autorag.h2.d':         'اطرح أسئلة عالية المستوى واحصل على إجابات موثّقة',
    'autorag.h3.t':         'مساحات عمل للمستندات',
    'autorag.h3.d':         'رفع وفهرسة وإدارة مصادر المعرفة',
    'autorag.h4.t':         'الفريق والإحصاءات',
    'autorag.h4.d':         'الأعضاء والصلاحيات وتحليلات الاستخدام',
    'csc.page.title':       'الموقع الرسمي لـ CSC — ريان العميريني',
    'csc.title':            'الموقع الرسمي لـ CSC',
    'csc.for':              'النادي الثقافي الاجتماعي — جامعة الملك سعود',
    'csc.role':             'مصمم UI/UX رئيسي',
    'csc.overview':         'منصة ويب احترافية تمثّل النادي الثقافي الاجتماعي في جامعة الملك سعود، تعرض هوية النادي وأنشطته وتأثيره. صُممت لتوصيل قيم الثقة والحضور المجتمعي.',
    'rknh.page.title':      'هوية RKNH — ريان العميريني',
    'rknh.title':           'هوية RKNH',
    'rknh.for':             'RKNH',
    'rknh.role':            'مصمم جرافيك',
    'rknh.overview':        'نظام هوية بصرية متكامل لـ RKNH، يجسّد روح الميدان بحركة جريئة وتركيز حاد. يشمل تصميم الشعار، ونظام الخطوط، ولوحة الألوان، ودليل الهوية الكامل.',
    'routine.page.title':   'Routine — ريان العميريني',
    'routine.title':        'Routine',
    'routine.for':          'Routine',
    'routine.role':         'مصمم جرافيك',
    'routine.overview':     'مشروع محتوى إبداعي يركز على الهوية البصرية وإشراك الجمهور. شمل المواد التسويقية، والمحتوى الرقمي لوسائل التواصل الاجتماعي، والتسويق الرقمي، وماكيتات المنتجات — مع الحفاظ على صوت بصري متسق ومميز.',
    'tamakan.page.title':   'تمكّن — ريان العميريني',
    'tamakan.title':        'تمكّن',
    'tamakan.for':          'تمكّن بواسطة IEC — جامعة الملك سعود',
    'tamakan.role':         'مصمم جرافيك',
    'tamakan.overview':     'أعمال تصميم بصري لمبادرة تمكّن — مبادرة اجتماعية تُعنى بمهارات التواصل والخطابة. شملت تصميم مطبوعات الفعاليات من ملصقات ولافتات تعكس الثقة والوضوح.',
    'mosbah.page.title':    'مصباح عمر — ريان العميريني',
    'mosbah.title':         'مصباح عمر',
    'mosbah.for':           'مصباح عمر',
    'mosbah.role':          'مصمم جرافيك',
    'mosbah.overview':      'تصميم هوية فاخرة ومتجر إلكتروني لعلامة مسابح تجمع بين الأصالة والحداثة. شمل العمل تصميم الشعار، والإشراف الفني على تصوير المنتجات، والمحتوى الرقمي، وأصول الحملات الترويجية.',
  }
};

var ARABIC_FONT = "'Cairo', sans-serif";
var LATIN_FONT  = "'Inter', sans-serif";

function applyLang(lang) {
  var t   = TRANSLATIONS[lang];
  var html = document.documentElement;

  html.lang = lang;
  html.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.style.fontFamily = lang === 'ar' ? ARABIC_FONT : LATIN_FONT;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // Static, trusted strings — render literal "\n" as a line break.
      if (t[key].indexOf('\n') !== -1) {
        el.innerHTML = t[key].split('\n').join('<br>');
      } else {
        el.textContent = t[key];
      }
    }
  });

  var titleKey = document.body.getAttribute('data-page-title');
  if (titleKey && t[titleKey]) {
    document.title = t[titleKey];
  }

  var btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = t['lang.toggle'];

  localStorage.setItem('lang', lang);
}

function initI18n() {
  var saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);

  var btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var current = localStorage.getItem('lang') || 'en';
      applyLang(current === 'en' ? 'ar' : 'en');
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
```
