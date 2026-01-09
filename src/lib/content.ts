export const SITE_CONFIG = {
  siteName: "TargetLab",
  legalName: "ИП Таргетолог",
  legalAddress: "г. Астана, пр. Кабанбай батыра, 123",
  email: "info@targetlab.kz",
  whatsappNumber: "77771234567", // Замените на реальный номер
  defaultWhatsAppMessage: "Здравствуйте! Заинтересовался услугами таргетинга"
} as const;

export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || SITE_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const HERO_CONTENT = {
  headline: "Ваша реклама не окупается?",
  headlineAccent: "Вы не платите",
  subheadline: "Таргет, который приносит прибыль, а не отчеты",
  ctaButton: "Написать в WhatsApp",
  ctaSubtext: "Без освоения бюджета. Только то, что приносит продажи"
} as const;

export const PAIN_POINTS_CONTENT = {
  title: "Боли клиентов",
  items: [
    "Есть реклама, но нет продаж",
    "Лиды есть, но они не покупают",
    "Бюджет сливается, результата не видно",
    "Таргетолог отчитывается, а прибыли нет"
  ]
} as const;

export const SOLUTIONS_CONTENT = {
  title: "Решения",
  items: [
    {
      title: "Работа с воронкой целиком",
      description: "Оптимизируем всю цепочку от первого касания до продажи"
    },
    {
      title: "Докрутка оффера и посадочной страницы",
      description: "Делаем предложение, от которого невозможно отказаться"
    },
    {
      title: "Тестирование гипотез",
      description: "Системный подход к поиску прибыльных связок"
    },
    {
      title: "Масштабирование прибыльных связок",
      description: "Увеличиваем бюджеты на то, что уже работает"
    },
    {
      title: "Фокус на окупаемости",
      description: "Считаем ROI, а не просто трафик и клики"
    }
  ]
} as const;

export const WHY_ME_CONTENT = {
  title: "Почему я",
  features: [
    "Опыт работы 7+ лет в performance-маркетинге",
    "Более 120 успешных кейсов",
    "Официальный договор с гарантиями",
    "Фокус на прибыли, а не процессе"
  ],
  stats: [
    { value: "7+ лет", label: "Опыта" },
    { value: "120+", label: "Кейсов" },
    { value: "95%", label: "Успеха" },
    { value: "24/7", label: "Поддержка" }
  ]
} as const;

export const CASES_CONTENT = {
  title: "Кейсы",
  cases: [
    {
      niche: "Онлайн-школа",
      result: "ROI 450%",
      period: "за 3 месяца",
      budget: "450K тенге → 2.025M тенге",
      description: "Докрутка оффера и ретаргетинг на отвалившихся"
    },
    {
      niche: "Локальный бизнес",
      result: "Стоимость лида -65%",
      period: "за 2 месяца",
      budget: "300K тенге → 87 лидов",
      description: "Геотаргетинг и работа с отзывами"
    },
    {
      niche: "Эксперт",
      result: "Продаж +230%",
      period: "за 1 месяц",
      budget: "200K тенге → 23 продажи",
      description: "Персонализированный подход и storytelling"
    }
  ]
} as const;

export const CRM_BONUS_CONTENT = {
  badge: "БОНУС ДЛЯ КЛИЕНТОВ",
  title: "CRM от Raycon — в подарок на 14 дней",
  subtitle: "Учёт заявок и контроль рекламы в одной системе",
  features: [
    "Автоматизация продаж",
    "Аналитика рекламы в реальном времени",
    "Интеграция с соцсетями",
    "Персональная настройка"
  ],
  ctaButton: "Получить доступ к CRM"
} as const;

export const FINAL_CTA_CONTENT = {
  title: "Готовы запустить рекламу,",
  titleAccent: "которая окупается?",
  subtitle: "Оставьте заявку и получите бесплатную консультацию",
  formFields: {
    name: "Ваше имя",
    phone: "Номер телефона"
  },
  formButton: "Обсудить проект",
  alternativeText: "Или просто напишите в WhatsApp"
} as const;