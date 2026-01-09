import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [studentProgress, setStudentProgress] = useState(65);
  const [testScore, setTestScore] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});

  const mockTests = [
    {
      id: 1,
      question: 'Сколько океанов на планете Земля?',
      options: ['3', '4', '5', '6'],
      correct: 2,
      category: 'География'
    },
    {
      id: 2,
      question: 'Какой газ необходим растениям для фотосинтеза?',
      options: ['Кислород', 'Углекислый газ', 'Азот', 'Водород'],
      correct: 1,
      category: 'Биология'
    },
    {
      id: 3,
      question: 'Столица Франции?',
      options: ['Лондон', 'Берлин', 'Париж', 'Рим'],
      correct: 2,
      category: 'География'
    }
  ];

  const materials = [
    { title: 'Математика 5 класс', icon: 'Calculator', color: 'bg-primary', lessons: 24 },
    { title: 'Русский язык', icon: 'BookOpen', color: 'bg-secondary', lessons: 18 },
    { title: 'Биология', icon: 'Leaf', color: 'bg-accent', lessons: 15 },
    { title: 'История', icon: 'Scroll', color: 'bg-primary', lessons: 20 },
    { title: 'Английский язык', icon: 'Globe', color: 'bg-secondary', lessons: 22 },
    { title: 'Физика', icon: 'Lightbulb', color: 'bg-accent', lessons: 16 }
  ];

  const achievements = [
    { title: 'Первый урок', icon: 'Award', earned: true },
    { title: 'Неделя подряд', icon: 'Flame', earned: true },
    { title: 'Мастер тестов', icon: 'Trophy', earned: false },
    { title: 'Исследователь', icon: 'Compass', earned: true }
  ];

  const handleTestSubmit = () => {
    let correct = 0;
    mockTests.forEach(test => {
      if (selectedAnswers[test.id] === test.correct) {
        correct++;
      }
    });
    const score = Math.round((correct / mockTests.length) * 100);
    setTestScore(score);
    
    toast({
      title: score >= 70 ? '🎉 Отличная работа!' : '💪 Продолжай учиться!',
      description: `Ты правильно ответил на ${correct} из ${mockTests.length} вопросов (${score}%)`,
    });
  };

  const handleAnswerSelect = (testId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({...prev, [testId]: answerIndex}));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">🏝️</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl">Наш классный мир</h1>
                <p className="text-xs text-muted-foreground">Остров знаний</p>
              </div>
            </div>
            
            <div className="hidden md:flex gap-2">
              <Button 
                variant={currentSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('home')}
                className="gap-2"
              >
                <Icon name="Home" size={16} />
                Главная
              </Button>
              <Button 
                variant={currentSection === 'profile' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('profile')}
                className="gap-2"
              >
                <Icon name="User" size={16} />
                Кабинет
              </Button>
              <Button 
                variant={currentSection === 'library' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('library')}
                className="gap-2"
              >
                <Icon name="Library" size={16} />
                Библиотека
              </Button>
              <Button 
                variant={currentSection === 'contact' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('contact')}
                className="gap-2"
              >
                <Icon name="MessageCircle" size={16} />
                Контакты
              </Button>
            </div>

            <div className="md:hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Icon name="Menu" size={24} />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Меню</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" onClick={() => setCurrentSection('home')} className="justify-start gap-2">
                      <Icon name="Home" size={16} />
                      Главная
                    </Button>
                    <Button variant="ghost" onClick={() => setCurrentSection('profile')} className="justify-start gap-2">
                      <Icon name="User" size={16} />
                      Кабинет
                    </Button>
                    <Button variant="ghost" onClick={() => setCurrentSection('library')} className="justify-start gap-2">
                      <Icon name="Library" size={16} />
                      Библиотека
                    </Button>
                    <Button variant="ghost" onClick={() => setCurrentSection('contact')} className="justify-start gap-2">
                      <Icon name="MessageCircle" size={16} />
                      Контакты
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {currentSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center py-12 relative">
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
              </div>
              
              <h2 className="font-heading font-bold text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Добро пожаловать на остров знаний! 🌴
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Интерактивная онлайн-школа, где каждый урок — это увлекательное путешествие в мир открытий
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" onClick={() => setCurrentSection('library')} className="gap-2 hover-scale">
                  <Icon name="BookOpen" size={20} />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" onClick={() => setCurrentSection('profile')} className="gap-2 hover-scale">
                  <Icon name="User" size={20} />
                  Мой прогресс
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale cursor-pointer border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Video" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Видеоуроки</CardTitle>
                  <CardDescription>Яркие и понятные уроки с визуализацией</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale cursor-pointer border-2 hover:border-secondary transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="ClipboardCheck" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Интерактивные тесты</CardTitle>
                  <CardDescription>Проверяй свои знания с автоматической проверкой</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale cursor-pointer border-2 hover:border-accent transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Trophy" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Достижения</CardTitle>
                  <CardDescription>Получай награды за свои успехи</CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section>
              <h3 className="font-heading font-bold text-3xl mb-6 text-center">Попробуй тест прямо сейчас! 📝</h3>
              <Card className="max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle>Быстрый тест</CardTitle>
                  <CardDescription>Проверь свои знания по разным предметам</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {mockTests.map((test, idx) => (
                    <div key={test.id} className="space-y-3 pb-4 border-b last:border-0">
                      <div className="flex items-start gap-2">
                        <Badge variant="outline">{test.category}</Badge>
                        <p className="font-medium flex-1">{idx + 1}. {test.question}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-6">
                        {test.options.map((option, optIdx) => (
                          <Button
                            key={optIdx}
                            variant={selectedAnswers[test.id] === optIdx ? 'default' : 'outline'}
                            className="justify-start"
                            onClick={() => handleAnswerSelect(test.id, optIdx)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex items-center gap-4 pt-4">
                    <Button 
                      onClick={handleTestSubmit} 
                      className="gap-2"
                      disabled={Object.keys(selectedAnswers).length < mockTests.length}
                    >
                      <Icon name="Send" size={16} />
                      Проверить ответы
                    </Button>
                    {testScore !== null && (
                      <div className="flex items-center gap-2">
                        <Badge variant={testScore >= 70 ? 'default' : 'secondary'} className="text-lg px-4 py-2">
                          {testScore}%
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {currentSection === 'profile' && (
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl">
                👤
              </div>
              <div>
                <h2 className="font-heading font-bold text-3xl">Личный кабинет</h2>
                <p className="text-muted-foreground">Твой путь к знаниям</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Общий прогресс
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Пройдено уроков</span>
                    <span className="font-bold">{studentProgress}%</span>
                  </div>
                  <Progress value={studentProgress} className="h-3" />
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24</div>
                    <div className="text-xs text-muted-foreground">Уроков пройдено</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">18</div>
                    <div className="text-xs text-muted-foreground">Тестов сдано</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">12</div>
                    <div className="text-xs text-muted-foreground">Дней подряд</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={20} />
                  Мои достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, idx) => (
                    <div 
                      key={idx}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        achievement.earned 
                          ? 'border-primary bg-primary/5 hover-scale' 
                          : 'border-muted bg-muted/20 opacity-50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-primary/10' : 'bg-muted'
                      }`}>
                        <Icon name={achievement.icon as any} size={24} className={achievement.earned ? 'text-primary' : 'text-muted-foreground'} />
                      </div>
                      <p className="text-sm font-medium text-center">{achievement.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} />
                  Расписание занятий
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { day: 'Понедельник', time: '14:00', subject: 'Математика', color: 'border-l-primary' },
                    { day: 'Среда', time: '15:00', subject: 'Русский язык', color: 'border-l-secondary' },
                    { day: 'Пятница', time: '14:30', subject: 'Биология', color: 'border-l-accent' }
                  ].map((lesson, idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-3 border-l-4 bg-muted/20 rounded ${lesson.color}`}>
                      <div className="text-center min-w-[100px]">
                        <div className="font-bold text-sm">{lesson.day}</div>
                        <div className="text-xs text-muted-foreground">{lesson.time}</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{lesson.subject}</div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="ArrowRight" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentSection === 'library' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <h2 className="font-heading font-bold text-4xl mb-2">Библиотека материалов 📚</h2>
              <p className="text-muted-foreground">Выбери предмет и начни изучение</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="progress">В процессе</TabsTrigger>
                <TabsTrigger value="new">Новое</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {materials.map((material, idx) => (
                    <Card key={idx} className="hover-scale cursor-pointer border-2 hover:border-primary transition-all">
                      <CardHeader>
                        <div className={`w-16 h-16 ${material.color} rounded-2xl flex items-center justify-center mb-4`}>
                          <Icon name={material.icon as any} size={32} className="text-white" />
                        </div>
                        <CardTitle>{material.title}</CardTitle>
                        <CardDescription>{material.lessons} уроков</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full gap-2">
                          <Icon name="Play" size={16} />
                          Начать изучение
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="progress" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {materials.slice(0, 3).map((material, idx) => (
                    <Card key={idx} className="hover-scale cursor-pointer border-2 hover:border-primary transition-all">
                      <CardHeader>
                        <div className={`w-16 h-16 ${material.color} rounded-2xl flex items-center justify-center mb-4`}>
                          <Icon name={material.icon as any} size={32} className="text-white" />
                        </div>
                        <CardTitle>{material.title}</CardTitle>
                        <CardDescription>{material.lessons} уроков</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Progress value={45} className="h-2" />
                        <Button className="w-full gap-2" variant="secondary">
                          <Icon name="Play" size={16} />
                          Продолжить
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="new" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {materials.slice(3).map((material, idx) => (
                    <Card key={idx} className="hover-scale cursor-pointer border-2 hover:border-accent transition-all relative">
                      <Badge className="absolute top-4 right-4">Новое</Badge>
                      <CardHeader>
                        <div className={`w-16 h-16 ${material.color} rounded-2xl flex items-center justify-center mb-4`}>
                          <Icon name={material.icon as any} size={32} className="text-white" />
                        </div>
                        <CardTitle>{material.title}</CardTitle>
                        <CardDescription>{material.lessons} уроков</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full gap-2">
                          <Icon name="Play" size={16} />
                          Начать изучение
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {currentSection === 'contact' && (
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
        )}
      </main>

      <footer className="bg-white/80 backdrop-blur-md border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🏝️</span>
            <span className="font-heading font-bold text-xl">Наш классный мир</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Остров знаний. Интерактивная онлайн-школа для детей.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
