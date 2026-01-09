import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const ContactPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="font-heading font-bold text-4xl mb-2">Контакты и поддержка 💬</h2>
        <p className="text-muted-foreground">Мы всегда рады помочь!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="hover-scale">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Icon name="Mail" size={24} className="text-primary" />
            </div>
            <CardTitle>Email</CardTitle>
            <CardDescription>info@island-school.ru</CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
              <Icon name="Phone" size={24} className="text-secondary" />
            </div>
            <CardTitle>Телефон</CardTitle>
            <CardDescription>+7 (999) 123-45-67</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Напиши нам</CardTitle>
          <CardDescription>Задай вопрос или оставь отзыв</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Имя</label>
            <input 
              type="text" 
              placeholder="Как тебя зовут?" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input 
              type="email" 
              placeholder="твой@email.ru" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Сообщение</label>
            <textarea 
              placeholder="Что ты хочешь нам сказать?" 
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
            />
          </div>
          <Button 
            className="w-full gap-2" 
            onClick={() => toast({
              title: '✅ Сообщение отправлено!',
              description: 'Мы свяжемся с тобой в ближайшее время',
            })}
          >
            <Icon name="Send" size={16} />
            Отправить
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
