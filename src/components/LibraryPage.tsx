import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const LibraryPage = () => {
  const materials = [
    { title: 'Математика 5 класс', icon: 'Calculator', color: 'bg-primary', lessons: 24 },
    { title: 'Русский язык', icon: 'BookOpen', color: 'bg-secondary', lessons: 18 },
    { title: 'Биология', icon: 'Leaf', color: 'bg-accent', lessons: 15 },
    { title: 'История', icon: 'Scroll', color: 'bg-primary', lessons: 20 },
    { title: 'Английский язык', icon: 'Globe', color: 'bg-secondary', lessons: 22 },
    { title: 'Физика', icon: 'Lightbulb', color: 'bg-accent', lessons: 16 }
  ];

  return (
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
  );
};

export default LibraryPage;
