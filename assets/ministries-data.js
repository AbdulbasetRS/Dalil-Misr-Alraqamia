/* Add every new service here once its HTML page exists under /ministries/<folder>/.
   status: 'ready' shows the services grid, 'soon' shows a muted "قريبًا" tag. */
const MINISTRIES = [
  {
    name: 'الإسكان الإجتماعي ودعم التمويل العقاري',
    status: 'ready',
    services: [
      {
        title: 'السكن البديل',
        desc: 'حصر المستأجرين القدامى (قبل 1996) المتضررين من قانون الإيجار الجديد، كمرحلة أولى تمهيدًا لتوفير وحدة بديلة لهم لاحقًا.',
        href: 'ministries/housing/alt-housing-registration.html'
      },
      {
        title: 'رفع المرفقات بالسكن البديل',
        desc: 'رفع المستندات والإقرار المطلوبين لاستكمال طلب سبق تقديمه في خدمة السكن البديل.',
        href: 'ministries/housing/alt-housing-attachments.html'
      },
      {
        title: 'تظلم فرز',
        desc: 'تقديم تظلم على نتيجة فرز إعلان سكن لكل المصريين، ومعرفة المستندات المطلوبة حسب سبب عدم الانطباق.',
        href: 'ministries/housing/social-housing-grievance.html'
      }
    ]
  },
  {
    name: 'التعليم العالي والبحث العلمي (التنسيق)',
    status: 'ready',
    services: [
      {
        title: 'اختبار القدرات',
        desc: 'حجز وسداد وأداء اختبارات القدرات المطلوبة كشرط للالتحاق ببعض الكليات مثل الإعلام والفنون التطبيقية والتربية الرياضية.',
        href: 'ministries/higher-education/qudurat-test.html'
      },
      {
        title: 'خدمات التنسيق الثانوية العامة',
        desc: 'تسجيل رغبات الالتحاق بالكليات والمعاهد ومتابعة نتيجة الترشيح للحاصلين على الثانوية العامة والأزهرية والفنية.',
        href: 'ministries/higher-education/tansik-thanaweya-amma.html'
      },
      {
        title: 'خدمات التنسيق الثانوية الأزهرية',
        desc: 'تسجيل رغبات الالتحاق بكليات الأزهر الشريف ومتابعة نتيجة الترشيح للحاصلين على الثانوية الأزهرية بشعبها الثلاث.',
        href: 'ministries/higher-education/tansik-thanaweya-azhareya.html'
      },
      {
        title: 'خدمات التنسيق الشهادات الفنية',
        desc: 'تسجيل رغبات الالتحاق بالكليات والمعاهد ومتابعة نتيجة الترشيح للحاصلين على شهادات الدبلومات الفنية.',
        href: 'ministries/higher-education/tansik-shahadat-fanniya.html'
      },
      {
        title: 'خدمات تنسيق شهادات المعادلة',
        desc: 'تسجيل رغبات الالتحاق بالكليات والمعاهد لحاملي شهادات المعادلة العربية والسودانية والأجنبية.',
        href: 'ministries/higher-education/equivalency-certificates-tansik.html'
      },
      {
        title: 'تقليل الاغتراب',
        desc: 'طلب تحويل الطالب المُرشَّح لكلية بعيدة عن نطاقه الجغرافي إلى كلية أقرب ضمن نطاقه، وفقًا للأماكن الخالية المتاحة.',
        href: 'ministries/higher-education/taqleel-eghterab.html'
      },
      {
        title: 'المستنفذين والمتخلفين والوافدين',
        desc: 'أحكام الفئات الخاصة في التنسيق: الطلاب المستنفذون الذين استوفوا حقهم، المتخلفون عن التسجيل، والوافدون من غير المصريين.',
        href: 'ministries/higher-education/mostanfezin-motakhalefin-wafedin.html'
      },
      {
        title: 'تنسيق الثانوية الأزهرية المتقدمين لكليات التعليم العالي',
        desc: 'تسجيل رغبات الحاصلين على الثانوية الأزهرية بكل شهاداتها للالتحاق بالكليات والمعاهد التابعة لوزارة التعليم العالي.',
        href: 'ministries/higher-education/azhareya-lel-taalim-aali-tansik.html'
      },
      {
        title: 'تنسيق مدارس STEM للعلوم والتكنولوجيا',
        desc: 'تسجيل رغبات خريجي مدارس العلوم والتكنولوجيا (STEM) للالتحاق بالكليات الهندسية والعلمية المتاحة لهم حسب شعبتهم.',
        href: 'ministries/higher-education/stem-schools-tansik.html'
      },
      {
        title: 'تنسيق مدارس النيل للعلوم والتكنولوجيا',
        desc: 'تسجيل رغبات خريجي مدارس النيل للعلوم والتكنولوجيا، بمرحلة واحدة فقط للتسجيل وإمكانية الالتحاق بالكليات الأدبية أيضًا.',
        href: 'ministries/higher-education/nile-schools-tansik.html'
      }
    ]
  },
  {
    name: 'وزارة المالية',
    status: 'ready',
    services: [
      {
        title: 'الاستعلام الائتماني (I-Score)',
        desc: 'الحصول على التقرير الائتماني والتقييم الرقمي من الشركة المصرية للاستعلام الائتماني، متاحة حاليًا عبر الموقع فقط.',
        href: 'ministries/finance/i-score-credit-inquiry.html'
      }
    ]
  },
  { name: 'وزارة الداخلية', status: 'soon', services: [] },
  { name: 'وزارة المالية', status: 'soon', services: [] },
  { name: 'وزارة الصحة والسكان', status: 'soon', services: [] },
  { name: 'وزارة العدل', status: 'soon', services: [] },
  { name: 'وزارة التنمية المحلية', status: 'soon', services: [] },
];