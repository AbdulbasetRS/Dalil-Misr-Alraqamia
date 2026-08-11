/* Add every new service here once its HTML page exists under /ministries/<folder>/.
   status: 'ready' shows the services grid, 'soon' shows a muted "قريبًا" tag. */
const MINISTRIES = [
  {
    name: 'وزارة الإسكان والمرافق والمجتمعات العمرانية',
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
  { name: 'وزارة الداخلية', status: 'soon', services: [] },
  { name: 'وزارة المالية', status: 'soon', services: [] },
  { name: 'وزارة الصحة والسكان', status: 'soon', services: [] },
  { name: 'وزارة العدل', status: 'soon', services: [] },
  { name: 'وزارة التنمية المحلية', status: 'soon', services: [] },
];
