
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [rsvp, setRsvp] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FDF2F8] py-16 px-4 flex flex-col items-center">
      {/* Заголовок */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-[#9370DB] mb-4">Анна & Дмитрий</h1>
        <p className="text-xl md:text-2xl text-gray-600 italic">приглашают вас на свою свадьбу</p>
        <div className="flex justify-center mt-4">
          <Separator className="w-20 bg-[#D8BFD8]" />
        </div>
      </div>

      {/* Основная информация */}
      <Card className="w-full max-w-3xl mb-10 bg-white/80 backdrop-blur shadow-lg border-[#D8BFD8] border-2">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#9370DB] mb-2">Дата и время</h2>
            <p className="text-lg md:text-xl text-gray-700">12 августа 2025, 15:00</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#9370DB] mb-2">Место проведения</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-1">Ресторан "Лавандовый сад"</p>
            <p className="text-gray-600">ул. Цветочная, д. 45, Москва</p>
            <div className="flex justify-center mt-4">
              <Button 
                variant="outline" 
                className="border-[#9370DB] text-[#9370DB] hover:bg-[#E6E6FA] hover:text-[#8A2BE2]"
              >
                <Icon name="MapPin" className="mr-2 h-4 w-4" />
                Посмотреть на карте
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#9370DB] mb-2">Дресс-код</h2>
            <p className="text-lg text-gray-700 mb-4">Коктейльный / Элегантный</p>
            <p className="text-gray-600 mb-1">Дамы: коктейльные платья</p>
            <p className="text-gray-600">Господа: костюмы (галстуки и бабочки приветствуются)</p>
            <p className="text-sm text-gray-500 mt-2">Просим воздержаться от белого цвета</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#9370DB] mb-4">Программа дня</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon name="Clock" className="text-[#9370DB] mr-2" />
                  <span className="font-medium">15:00</span>
                </div>
                <p className="text-gray-700">Сбор гостей</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon name="Heart" className="text-[#9370DB] mr-2" />
                  <span className="font-medium">16:00</span>
                </div>
                <p className="text-gray-700">Церемония</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon name="GlassWater" className="text-[#9370DB] mr-2" />
                  <span className="font-medium">16:30</span>
                </div>
                <p className="text-gray-700">Фуршет</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon name="UtensilsCrossed" className="text-[#9370DB] mr-2" />
                  <span className="font-medium">17:30</span>
                </div>
                <p className="text-gray-700">Ужин</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* RSVP */}
      <Card className="w-full max-w-xl mb-10 bg-white/80 backdrop-blur shadow-lg border-[#D8BFD8] border-2">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9370DB] mb-4">Подтвердите своё присутствие</h2>
          <p className="text-gray-700 mb-6">Пожалуйста, дайте нам знать о вашем решении до 12 июля 2025</p>
          
          {rsvp === null ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setRsvp('yes')} 
                className="bg-[#9370DB] hover:bg-[#8A2BE2] text-white"
              >
                <Icon name="Check" className="mr-2 h-4 w-4" />
                Я приду
              </Button>
              <Button 
                onClick={() => setRsvp('no')} 
                variant="outline"
                className="border-[#9370DB] text-[#9370DB] hover:bg-[#E6E6FA]"
              >
                <Icon name="X" className="mr-2 h-4 w-4" />
                К сожалению, не смогу
              </Button>
            </div>
          ) : (
            <div className="p-4 rounded-md bg-[#E6E6FA]">
              {rsvp === 'yes' ? (
                <p className="text-[#8A2BE2] font-medium">Спасибо! Мы будем рады видеть вас на нашем празднике!</p>
              ) : (
                <p className="text-[#8A2BE2] font-medium">Спасибо за ответ. Жаль, что вы не сможете присутствовать.</p>
              )}
              <Button 
                variant="link" 
                onClick={() => setRsvp(null)}
                className="text-[#9370DB] mt-2"
              >
                Изменить ответ
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Контакты */}
      <Card className="w-full max-w-xl bg-white/80 backdrop-blur shadow-lg border-[#D8BFD8] border-2">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9370DB] mb-4">Контакты</h2>
          <p className="text-gray-700 mb-6">Если у вас возникли вопросы, пожалуйста, свяжитесь с нами:</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div>
              <p className="font-medium text-[#9370DB]">Анна</p>
              <div className="flex items-center justify-center mt-2">
                <Icon name="Phone" className="text-gray-600 mr-2 h-4 w-4" />
                <span>+7 (999) 123-45-67</span>
              </div>
            </div>
            <div>
              <p className="font-medium text-[#9370DB]">Дмитрий</p>
              <div className="flex items-center justify-center mt-2">
                <Icon name="Phone" className="text-gray-600 mr-2 h-4 w-4" />
                <span>+7 (999) 765-43-21</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Подпись */}
      <div className="mt-16 text-center text-gray-600">
        <p className="mb-2">С любовью,</p>
        <h3 className="text-2xl font-bold text-[#9370DB]">Анна & Дмитрий</h3>
      </div>
    </div>
  );
};

export default Index;
