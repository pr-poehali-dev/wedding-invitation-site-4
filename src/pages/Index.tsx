import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [rsvp, setRsvp] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FFF5E1] py-16 px-4 flex flex-col items-center">
      {/* Заголовок с вензельными инициалами */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="relative mb-8">
          {/* Красивый вензель из инициалов М и Е */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Декоративная окружность */}
                <circle cx="100" cy="100" r="95" stroke="#E9967A" strokeWidth="2" strokeOpacity="0.3" />
                <circle cx="100" cy="100" r="85" stroke="#E9967A" strokeWidth="1" strokeOpacity="0.2" />
                
                {/* Декоративные элементы */}
                <path d="M70,40 Q100,30 130,40 Q140,70 130,100 Q100,110 70,100 Q60,70 70,40 Z" 
                  stroke="#E9967A" fill="none" strokeWidth="1.5" />
                
                {/* Буква М (стилизованно) */}
                <path d="M65,65 L65,135 M65,65 Q83,95 100,65 Q117,95 135,65 M135,65 L135,135" 
                  stroke="#E9967A" fill="none" strokeWidth="3" />
                
                {/* Буква Е (стилизованно, переплетается с М) */}
                <path d="M75,75 L115,75 M75,75 L75,125 M75,100 L105,100 M75,125 L115,125" 
                  stroke="#E9967A" fill="none" strokeWidth="3" strokeLinecap="round" />
                
                {/* Декоративные завитки */}
                <path d="M50,60 Q40,80 50,100 Q45,120 30,125" stroke="#E9967A" strokeWidth="1" fill="none" />
                <path d="M150,60 Q160,80 150,100 Q155,120 170,125" stroke="#E9967A" strokeWidth="1" fill="none" />
                <path d="M100,150 Q110,160 120,155 Q130,160 135,170" stroke="#E9967A" strokeWidth="1" fill="none" />
                <path d="M100,150 Q90,160 80,155 Q70,160 65,170" stroke="#E9967A" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
          
          <h1 className="font-vibes text-5xl md:text-7xl text-[#E9967A] mb-4 relative">
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">М</span>
            <span className="inline-block transform hover:rotate-12 transition-transform duration-300">и</span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">х</span>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">а</span>
            <span className="inline-block transform hover:rotate-6 transition-transform duration-300">и</span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">л</span>
            <span className="mx-4 inline-block">&</span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">Е</span>
            <span className="inline-block transform hover:rotate-12 transition-transform duration-300">л</span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">и</span>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">з</span>
            <span className="inline-block transform hover:rotate-6 transition-transform duration-300">а</span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">в</span>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">е</span>
            <span className="inline-block transform hover:rotate-6 transition-transform duration-300">т</span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">а</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-[#8B6D5A] italic">приглашают вас на свою свадьбу</p>
        <div className="flex justify-center mt-4">
          <div className="w-40 h-2 bg-gradient-to-r from-transparent via-[#FADCD0] to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Основная информация */}
      <Card className="w-full max-w-3xl mb-10 bg-white/90 backdrop-blur shadow-lg border-[#FADCD0] border-2">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E9967A] mb-2">Дата и время</h2>
            <p className="text-lg md:text-xl text-[#8B6D5A]">5 сентября 2025</p>
          </div>
          
          {/* ... остальной контент остается прежним ... */}
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E9967A] mb-2">Место проведения</h2>
            <p className="text-lg md:text-xl text-[#8B6D5A] mb-1">Ресторан "Терраса"</p>
            <p className="text-[#8B7D6A]">ул. Солнечная, д. 28, Москва</p>
            <div className="flex justify-center mt-4">
              <Button 
                variant="outline" 
                className="border-[#E9967A] text-[#E9967A] hover:bg-[#FFEFD5] hover:text-[#CD7F5D]"
              >
                <Icon name="MapPin" className="mr-2 h-4 w-4" />
                Посмотреть на карте
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E9967A] mb-4">Программа дня</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
              <div className="text-center p-4 bg-[#FFF5E1] rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Icon name="File="FileHeart" className="text-[#E9967A] mr-2" />
                  <span className="font-medium text-[#8B6D5A]">14:00</span>
                </div>
                <p className="text-[#8B6D5A]">Торжественная регистрация</p>
              </div>
              <div className="text-center p-4 bg-[#FFF5E1] rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Icon name="UtensilsCrossed" className="text-[#E9967A] mr-2" />
                  <span className="font-medium text-[#8B6D5A]">15:00</span>
                </div>
                <p className="text-[#8B6D5A]">Праздничный банкет</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E9967A] mb-2">Дресс-код</h2>
            <p className="text-lg text-[#8B6D5A] mb-4">Smart Casual в теплых пастельных тонах</p>
            <p className="text-[#8B7D6A]">Дамы: платья в пастельных оттенках</p>
            <p className="text-[#8B7D6A]">Господа: светлые костюмы или брюки с рубашкой</p>
            <p className="text-sm text-[#8B7D6A] mt-2 italic">Мы будем благодарны, если ваши наряды поддержат цветовую гамму нашего торжества</p>
          </div>
        </CardContent>
      </Card>

      {/* RSVP */}
      <Card className="w-full max-w-xl mb-10 bg-white/90 backdrop-blur shadow-lg border-[#FADCD0] border-2">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#E9967A] mb-4">Подтвердите своё присутствие</h2>
          <p className="text-[#8B6D5A] mb-6">Пожалуйста, сообщите нам о вашем решении до 25 июля 2025</p>
          
          {rsvp === null ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setRsvp('yes')} 
                className="bg-[#E9967A] hover:bg-[#CD7F5D] text-white"
              >
                <Icon name="Check" className="mr-2 h-4 w-4" />
                С радостью приду
              </Button>
              <Button 
                onClick={() => setRsvp('no')} 
                variant="outline"
                className="border-[#E9967A] text-[#E9967A] hover:bg-[#FFEFD5]"
              >
                <Icon name="X" className="mr-2 h-4 w-4" />
                К сожалению, не смогу
              </Button>
            </div>
          ) : (
            <div className="p-4 rounded-md bg-[#FFEFD5]">
              {rsvp === 'yes' ? (
                <p className="text-[#CD7F5D] font-medium">Спасибо! Мы будем рады видеть вас на нашем празднике!</p>
              ) : (
                <p className="text-[#CD7F5D] font-medium">Спасибо за ответ. Жаль, что вы не сможете присутствовать.</p>
              )}
              <Button 
                variant="link" 
                onClick={() => setRsvp(null)}
                className="text-[#E9967A] mt-2"
              >
                Изменить ответ
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Пожелания */}
      <Card className="w-full max-w-xl mb-10 bg-white/90 backdrop-blur shadow-lg border-[#FADCD0] border-2">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#E9967A] mb-4">Пожелания</h2>
          <div className="mb-6">
            <Icon name="Gift" className="mx-auto text-[#E9967A] mb-2 h-6 w-6" />
            <p className="text-[#8B6D5A]">
              Самый ценный подарок для нас – ваше присутствие на нашем празднике.
              Если вы хотите порадовать нас чем-то еще, мы будем благодарны за вклад в нашу семейную жизнь.
            </p>
          </div>
          <div className="mb-4">
            <Icon name="Camera" className="mx-auto text-[#E9967A] mb-2 h-6 w-6" />
            <p className="text-[#8B6D5A]">
              Будем признательны, если вы поделитесь с нами фотографиями с торжества,
              используя хэштег #МихаилиЕлизавета2025
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Контакты */}
      <Card className="w-full max-w-xl bg-white/90 backdrop-blur shadow-lg border-[#FADCD0] border-2">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#E9967A] mb-4">Контакты</h2>
          <p className="text-[#8B6D5A] mb-6">Если у вас возникли вопросы, пожалуйста, свяжитесь с нами:</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div>
              <p className="font-medium text-[#E9967A]">Михаил</p>
              <div className="flex items-center justify-center mt-2">
                <Icon name="Phone" className="text-[#8B7D6A] mr-2 h-4 w-4" />
                <span className="text-[#8B6D5A]">+7 (999) 123-45-67</span>
              </div>
            </div>
            <div>
              <p className="font-medium text-[#E9967A]">Елизавета</p>
              <div className="flex items-center justify-center mt-2">
                <Icon name="Phone" className="text-[#8B7D6A] mr-2 h-4 w-4" />
                <span className="text-[#8B6D5A]">+7 (999) 765-43-21</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Подпись */}
      <div className="mt-16 text-center text-[#8B6D5A]">
        <p className="mb-2">С любовью и нетерпением,</p>
        <h3 className="text-2xl font-bold text-[#E9967A]">Михаил & Елизавета</h3>
      </div>
    </div>
  );
};

export default Index;