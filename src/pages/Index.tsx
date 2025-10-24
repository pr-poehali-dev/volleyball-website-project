import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ВОЛЕЙБОЛ — МОЯ СТРАСТЬ
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Энергия, командный дух и бесконечное стремление к победе
            </p>
          </div>
          
          <div className="flex justify-center gap-8 mt-12 text-white/80">
            <div className="flex items-center gap-2">
              <Icon name="Trophy" size={24} />
              <span className="text-sm md:text-base">Победы</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={24} />
              <span className="text-sm md:text-base">Команда</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={24} />
              <span className="text-sm md:text-base">Энергия</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { 
              url: "https://cdn.poehali.dev/projects/1d818a5e-1c91-499d-a3c0-3738ac19fa92/files/2ab7040c-e4c2-4bf9-be9b-6418f778b88f.jpg",
              alt: "Атакующий удар"
            },
            { 
              url: "https://cdn.poehali.dev/projects/1d818a5e-1c91-499d-a3c0-3738ac19fa92/files/f30f6e5f-ef65-4701-ae7f-fbc1dd671406.jpg",
              alt: "Пляжный волейбол"
            },
            { 
              url: "https://cdn.poehali.dev/projects/1d818a5e-1c91-499d-a3c0-3738ac19fa92/files/969cc963-0097-471c-b6fd-7b225dbbeed3.jpg",
              alt: "Мяч в игре"
            },
            { 
              url: "https://cdn.poehali.dev/projects/1d818a5e-1c91-499d-a3c0-3738ac19fa92/files/ff21cf74-7e6d-45bd-b417-e8822d460cf9.jpg",
              alt: "Командная победа"
            }
          ].map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group cursor-pointer animate-scale-in shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary h-1 w-24 mb-8 rounded-full"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Почему волейбол?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              Волейбол для меня — это не просто игра с мячом через сетку. Это особый образ жизни, 
              который объединяет физическую активность, стратегическое мышление и невероятную энергетику командной работы. 
              Каждый матч — это возможность испытать себя, проверить свои силы и ощутить настоящий адреналин.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              Я начал играть в волейбол несколько лет назад, и с тех пор эта игра полностью изменила мой подход к спорту 
              и жизни в целом. Волейбол научил меня работать в команде, доверять партнёрам и никогда не сдаваться, 
              даже когда счёт не в нашу пользу. В этой игре каждая секунда имеет значение, и один точный удар может 
              полностью изменить ход матча.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              Особенно мне нравится динамика волейбола. Здесь нет пауз и остановок — игра идёт непрерывно, 
              требуя максимальной концентрации и быстрой реакции. Прыжки к сетке для блока, молниеносные подачи, 
              неожиданные финты — всё это делает каждую тренировку захватывающим приключением. Я ощущаю, 
              как с каждым занятием становлюсь сильнее, выносливее и техничнее.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: '500ms' }}>
              Командный дух в волейболе — это отдельная тема. Невозможно победить в одиночку, каким бы сильным 
              игроком ты ни был. Только слаженная работа всей команды, взаимопонимание и поддержка приводят к победе. 
              Я нашёл в волейболе не просто хобби, но и настоящих друзей, с которыми мы делим радость побед и 
              переживаем поражения, всегда оставаясь единой командой.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              Волейбол также отлично развивает физическую форму. Постоянные прыжки укрепляют ноги, 
              работа руками развивает плечевой пояс, а необходимость быстро перемещаться по площадке тренирует 
              координацию и выносливость. После каждой тренировки я чувствую приятную усталость и гордость за 
              проделанную работу.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: '700ms' }}>
              Сегодня волейбол — неотъемлемая часть моей жизни. Я стараюсь тренироваться минимум три раза в неделю, 
              постоянно совершенствую технику и изучаю тактические схемы. Мечтаю когда-нибудь поучаствовать в серьёзных 
              соревнованиях и довести свои навыки до профессионального уровня. Волейбол подарил мне массу положительных 
              эмоций, новых знакомств и веру в собственные силы — и я точно знаю, что это только начало моего пути!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-secondary to-primary py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <Icon name="Heart" size={48} className="mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Играй с сердцем, побеждай с командой
            </h3>
            <p className="text-lg text-white/90">
              Волейбол — это больше, чем спорт. Это страсть, дружба и постоянное движение вперёд.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-white/70">
            © 2024 Волейбол — моя страсть. Создано с любовью к игре.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
