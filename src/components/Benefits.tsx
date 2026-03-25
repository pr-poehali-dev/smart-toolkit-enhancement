export function Benefits() {
  const benefits = [
    {
      icon: "🎮",
      title: "Практические полёты",
      description: "Реальные тренировки с дронами с первого занятия — минимум теории, максимум практики",
    },
    {
      icon: "📜",
      title: "Официальный сертификат",
      description: "Документ, подтверждающий квалификацию оператора БПЛА, признанный работодателями",
    },
    {
      icon: "⚖️",
      title: "Законодательство и регуляция",
      description: "Изучите правила использования воздушного пространства и оформления разрешений",
    },
    {
      icon: "📷",
      title: "Аэрофотосъёмка и видео",
      description: "Освойте технику съёмки с воздуха для коммерческих и творческих проектов",
    },
    {
      icon: "🛡️",
      title: "Безопасность полётов",
      description: "Полный курс по предотвращению аварий, действиям в нештатных ситуациях",
    },
    {
      icon: "💼",
      title: "Поддержка трудоустройства",
      description: "Помогаем с портфолио, выходом на первых клиентов и поиском работы по специальности",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему мы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё для старта в профессии
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Комплексная программа, которая даёт всё необходимое для работы специалистом по управлению БПЛА
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}