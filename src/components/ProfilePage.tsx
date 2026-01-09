import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface ProfilePageProps {
  studentProgress: number;
}

const ProfilePage = ({ studentProgress }: ProfilePageProps) => {
  const achievements = [
    { title: 'Первый урок', icon: 'Award', earned: true },
    { title: 'Неделя подряд', icon: 'Flame', earned: true },
    { title: 'Мастер тестов', icon: 'Trophy', earned: false },
    { title: 'Исследователь', icon: 'Compass', earned: true }
  ];

  return (
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
  );
};

export default ProfilePage;
