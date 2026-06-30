// i18n.js — Language switching (EN / AR)

var TRANSLATIONS = {
  en: {
    'page.index':           'Rayan Al-Omaireeni — UI/UX Designer',
    'nav.projects':         'Projects',
    'nav.resume':           'Resume',
    'lang.toggle':          'AR',
    'hero.title':           'UI/UX Designer · Product Designer',
    'hero.tagline':         'Focused on building intuitive, scalable, and visually sharp experiences — from concept to interface.',
    'hero.cta.projects':    'My Projects',
    'hero.cta.talk':        "Let's Talk",
    'projects.label':       "Rayan's Work",
    'card.autorag.title':   'AutoRAG (Graduation Project)',
    'card.autorag.role':    'UI/UX · Frontend',
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
    'nav.resume':           'السيرة الذاتية',
    'lang.toggle':          'EN',
    'hero.title':           'مصمم UI/UX · مصمم منتجات',
    'hero.tagline':         'متخصص في بناء تجارب بديهية وقابلة للتوسع وحادة بصرياً — من الفكرة إلى الواجهة.',
    'hero.cta.projects':    'مشاريعي',
    'hero.cta.talk':        'تواصل معي',
    'projects.label':       'أعمال ريان',
    'card.autorag.title':   'AutoRAG (مشروع التخرج)',
    'card.autorag.role':    'UI/UX · واجهة أمامية',
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
      el.textContent = t[key];
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
