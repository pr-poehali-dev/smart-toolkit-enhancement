import { Button } from "@/components/ui/button"

export function Booking() {
  const handleCalendlyClick = () => {
    // In production, this would open Calendly widget or redirect to Calendly
    window.open("https://calendly.com", "_blank")
  }

  const handlePaymentClick = () => {
    // In production, this would redirect to Stripe checkout
    alert("Переход к безопасной оплате...")
    window.open("https://stripe.com", "_blank")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Готовы начать?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Запишитесь на пробное занятие</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Выберите удобное время и сделайте первый шаг к профессии специалиста по управлению БПЛА
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Calendar Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Выберите время</h3>
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-4">Здесь будет интеграция Calendly</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📅 Свободные слоты в реальном времени</p>
                <p>🌍 Автоматическое определение часового пояса</p>
                <p>✉️ Подтверждение на вашу почту</p>
              </div>
              <Button
                onClick={handleCalendlyClick}
                className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                Открыть календарь
              </Button>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Безопасная оплата</h3>
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-4">Мы принимаем безопасные платежи через:</p>
                <div className="flex gap-4 items-center justify-center py-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded border border-border">
                    <span className="text-2xl">💳</span>
                    <span className="font-semibold text-foreground">Stripe</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded border border-border">
                    <span className="text-2xl">🅿️</span>
                    <span className="font-semibold text-foreground">PayPal</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Стоимость сессии</span>
                  <span className="font-semibold text-foreground">9 700 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Длительность</span>
                  <span className="font-semibold text-foreground">60 минут</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-semibold text-foreground">Итого</span>
                  <span className="text-2xl font-bold text-accent">9 700 ₽</span>
                </div>
              </div>

              <Button
                onClick={handlePaymentClick}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
              >
                Перейти к оплате
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                ✓ Безопасная оплата • ✓ Гарантия возврата • ✓ Без скрытых комиссий
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}