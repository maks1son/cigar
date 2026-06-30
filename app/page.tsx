import Image from "next/image";
import Navbar from "@/components/Navbar";

const assetPath = (path: string) => `/cigar${path}`;

const marqueeItems = [
  "Стрижка",
  "Опасная бритва",
  "Борода",
  "Хьюмидор",
  "Кофе",
  "Приватный зал",
];

const advantages = [
  {
    title: "Ритуально",
    text: "Горячее полотенце, ровная линия, спокойный темп и работа без суеты.",
    image: assetPath("/images/barber-tools.png"),
    alt: "Инструменты барбера на черной коже",
  },
  {
    title: "Атмосферно",
    text: "Кожа, дым, мягкий свет и хьюмидор для паузы после стрижки.",
    image: assetPath("/images/humidor-cigars.png"),
    alt: "Сигары в деревянном хьюмидоре",
  },
  {
    title: "Точно",
    text: "Мастер подбирает форму под лицо, рост волос и твой обычный стиль.",
    image: assetPath("/images/master-portrait.png"),
    alt: "Мастер CIGAR в кожаном фартуке",
  },
];

const services = [
  {
    type: "Стрижка",
    items: [
      ["Классическая стрижка", "45 минут", "2000 ₽"],
      ["Фейд и форма", "60 минут", "2400 ₽"],
      ["Детская стрижка", "35 минут", "1400 ₽"],
    ],
  },
  {
    type: "Бритье",
    items: [
      ["Опасная бритва", "40 минут", "1800 ₽"],
      ["Моделирование бороды", "35 минут", "1500 ₽"],
      ["Королевский уход", "70 минут", "3000 ₽"],
    ],
  },
  {
    type: "Комплексы",
    items: [
      ["Стрижка и борода", "85 минут", "3300 ₽"],
      ["CIGAR ritual", "110 минут", "4500 ₽"],
      ["Приватный зал", "2 часа", "по запросу"],
    ],
  },
];

const proofs = [
  ["7", "лет в мужском груминге"],
  ["1", "кресло для приватной записи"],
  ["60", "минут без спешки"],
];

function KineticTitle() {
  return (
    <h1 className="hero-title">
      <span>CIGAR</span>
      <span>БРИТВА</span>
      <span>КЛУБ</span>
    </h1>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="bg-ink text-ivory">
        <section className="hero-section">
          <Image
            src={assetPath("/images/hero-lounge.png")}
            alt="Интерьер CIGAR с барберским креслом, кожей и сигарной комнатой"
            fill
            sizes="100vw"
            className="object-cover"
            fetchPriority="high"
          />
          <div className="hero-overlay" />

          <div className="relative z-10 mx-auto flex min-h-[88dvh] max-w-7xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-16">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_320px]">
              <div>
                <p className="mb-5 max-w-xl text-sm font-bold uppercase tracking-[0.28em] text-ember">
                  Барбершоп и сигарный клуб
                </p>
                <KineticTitle />
              </div>

              <div className="hero-panel">
                <p className="text-sm leading-6 text-ivory/70">
                  Место для стрижки, бритья и нормальной паузы. Без салонного
                  шума, без случайной музыки, без конвейера.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#booking" className="btn-primary">
                    Забронировать
                  </a>
                  <a href="#services" className="btn-secondary">
                    Смотреть прайс
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-bar" aria-label="Услуги CIGAR">
          <div className="marquee-track">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="marquee-group">
                {marqueeItems.map((item) => (
                  <span key={`${index}-${item}`}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="club" className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="section-label">Клуб</p>
              <h2 className="section-title">
                Не просто барбер. Место, куда хочется вернуться.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-6 text-ivory/52">
                CIGAR соединяет барберский ритуал, сигарную эстетику и
                приватный формат. Клиент приходит не только за формой волос, а
                за состоянием после визита.
              </p>
            </div>

            <div className="feature-grid">
              {advantages.map((item, index) => (
                <article
                  key={item.title}
                  className={index === 2 ? "feature-card feature-card-wide" : "feature-card"}
                >
                  <div className="feature-media">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 36vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-black text-ivory">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-ivory/55">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell border-y border-white/8 bg-smoke">
          <div className="mb-12 max-w-2xl">
            <p className="section-label">Прайс</p>
            <h2 className="section-title">Стрижки, бритье, комплексы и сигарная пауза.</h2>
          </div>

          <div className="service-layout">
            <div className="service-tabs" aria-hidden="true">
              {services.map((group) => (
                <span key={group.type}>{group.type}</span>
              ))}
            </div>

            <div className="service-list">
              {services.map((group) => (
                <div key={group.type} className="service-group">
                  <h3>{group.type}</h3>
                  {group.items.map(([name, time, price]) => (
                    <div key={name} className="service-row">
                      <div>
                        <p className="service-name">{name}</p>
                        <p className="service-time">{time}</p>
                      </div>
                      <p className="service-price">{price}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="atmosphere">
            <div className="atmosphere-copy">
              <p className="section-label">Атмосфера</p>
              <h2 className="section-title">Темный свет, кожа, дым и чистая геометрия стрижки.</h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-ivory/54">
                Мы убрали лишнюю салонность и оставили то, что работает:
                хороший мастер, сильный интерьер, точные инструменты и
                уважение к твоему времени.
              </p>
            </div>

            <div className="proof-strip">
              {proofs.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section-shell border-y border-white/8 bg-smoke">
          <div className="team-grid">
            <div>
              <p className="section-label">Команда</p>
              <h2 className="section-title">Мастер, который держит форму и разговор.</h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-ivory/54">
                В CIGAR один визит не должен ощущаться случайным. Мастер
                запоминает форму, особенности роста волос и то, как ты любишь
                проводить этот час.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="pill">Фейды</span>
                <span className="pill">Борода</span>
                <span className="pill">Опасная бритва</span>
              </div>
            </div>

            <article className="master-card">
              <div className="master-media">
                <Image
                  src={assetPath("/images/master-portrait.png")}
                  alt="Главный мастер CIGAR"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
              <div className="master-info">
                <p>Алекс</p>
                <span>Главный мастер, 10 лет опыта</span>
              </div>
            </article>
          </div>
        </section>

        <section id="booking" className="booking-section">
          <div className="booking-bg">
            <Image
              src={assetPath("/images/humidor-cigars.png")}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="section-label justify-center">Запись</p>
            <h2 className="booking-title">Выбери время. Остальное держим мы.</h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-ivory/60">
              Запись по телефону или в Telegram. Если нужно, подберем мастера и
              формат: быстрый визит, полный ритуал или приватный вечер.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="tel:+74991234567" className="btn-primary">
                +7 499 123 45 67
              </a>
              <a href="https://t.me/" className="btn-secondary">
                Telegram
              </a>
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-ivory/35">
              Москва, Примерная 42 · ежедневно 10:00-21:00
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-black px-4 py-8 text-ivory sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg font-black tracking-[0.18em] text-ember">
            CIGAR
          </p>
          <p className="text-xs text-ivory/35">
            © {new Date().getFullYear()} CIGAR Barbershop. Все права защищены.
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-[0.18em] text-ivory/38">
            <a href="#" className="transition-colors hover:text-ember">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-ember">
              VK
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
