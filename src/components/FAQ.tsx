import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Нужен ли опыт пилотирования для поступления?",
      answer:
        "Нет, опыт не нужен. Программа рассчитана на новичков — мы начинаем с самых основ: теории полёта, устройства дрона, базовых манёвров. Каждый ученик движется в своём темпе.",
    },
    {
      question: "Какие дроны используются на занятиях?",
      answer:
        "Занятия проходят на учебных коптерах DJI и отечественных БПЛА. Дроны предоставляются академией — своё оборудование на первом этапе не нужно.",
    },
    {
      question: "Можно ли перенести занятие?",
      answer:
        "Да, перенос возможен бесплатно при уведомлении не менее чем за 24 часа. Обратитесь к инструктору, и мы подберём удобное время.",
    },
    {
      question: "Какой документ я получу по окончании?",
      answer:
        "Выпускники получают сертификат оператора БПЛА. При необходимости помогаем с подготовкой к сдаче экзамена в Росавиации для получения свидетельства пилота.",
    },
    {
      question: "Есть ли пакетные программы?",
      answer:
        "Да! Мы предлагаем базовый курс, расширенный курс с аэросъёмкой и полный профессиональный пакет. Свяжитесь с нами для подбора программы под ваши цели.",
    },
    {
      question: "Помогаете ли с поиском работы после обучения?",
      answer:
        "Да! После завершения курса мы помогаем с портфолио, рекомендательными письмами и выходом на первых клиентов или работодателей. Наша сеть охватывает строительные, аграрные и медиакомпании.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}