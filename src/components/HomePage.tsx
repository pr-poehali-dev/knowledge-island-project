import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

interface HomePageProps {
  setCurrentSection: (section: string) => void;
}

const HomePage = ({ setCurrentSection }: HomePageProps) => {
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
  );
};

export default HomePage;
