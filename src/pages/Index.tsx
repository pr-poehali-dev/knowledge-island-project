import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import HomePage from '@/components/HomePage';
import ProfilePage from '@/components/ProfilePage';
import LibraryPage from '@/components/LibraryPage';
import ContactPage from '@/components/ContactPage';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [studentProgress] = useState(65);

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
        {currentSection === 'home' && <HomePage setCurrentSection={setCurrentSection} />}
        {currentSection === 'profile' && <ProfilePage studentProgress={studentProgress} />}
        {currentSection === 'library' && <LibraryPage />}
        {currentSection === 'contact' && <ContactPage />}
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
