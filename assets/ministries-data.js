/* Add every new service here once its HTML page exists under /ministries/<folder>/.
   status: 'ready' shows the services grid, 'soon' shows a muted "قريبًا" tag. */
const MINISTRIES = [
  {
    name: 'الإسكان الإجتماعي ودعم التمويل العقاري',
    status: 'ready',
    services: [
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
    name: 'التعليم العالي والبحث العلمي',
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
      }
    ]
  },
  { name: 'وزارة الداخلية', status: 'soon', services: [] },
  { name: 'وزارة المالية', status: 'soon', services: [] },
  { name: 'وزارة الصحة والسكان', status: 'soon', services: [] },
  { name: 'وزارة العدل', status: 'soon', services: [] },
  { name: 'وزارة التنمية المحلية', status: 'soon', services: [] },
];