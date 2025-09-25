import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Section = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  const sections = {
    '1': {
      title: 'Правила',
      description: 'Основные правила семьи Royals Squad',
      icon: 'Shield',
      color: 'text-red-500'
    },
    '2': {
      title: 'Новости',
      description: 'Последние новости и обновления',
      icon: 'Newspaper',
      color: 'text-blue-500'
    },
    '3': {
      title: 'Обсуждения',
      description: 'Общие обсуждения участников семьи',
      icon: 'MessageSquare',
      color: 'text-primary'
    },
    '4': {
      title: 'Улучшения бинды',
      description: 'Предложения по улучшению биндов',
      icon: 'Settings',
      color: 'text-accent'
    },
    '5': {
      title: 'Заявки на гл зама',
      description: 'Подача заявок на должность заместителя главы',
      icon: 'Crown',
      color: 'text-yellow-500'
    },
    '6': {
      title: 'Заявки на специалиста по логам',
      description: 'Заявки на должность специалиста по анализу логов',
      icon: 'FileText',
      color: 'text-secondary'
    }
  };

  const currentSection = sections[sectionId as keyof typeof sections];

  if (!currentSection) {
    return <div>Раздел не найден</div>;
  }

  const sampleTopics = [
    {
      id: 1,
      title: 'Добро пожаловать в семью Royals Squad!',
      author: 'AdminRoyals',
      replies: 15,
      views: 234,
      lastPost: '2 часа назад',
      isPinned: true,
      isLocked: false
    },
    {
      id: 2,
      title: 'Основные правила поведения в семье',
      author: 'ModeratorRS',
      replies: 8,
      views: 156,
      lastPost: '5 часов назад',
      isPinned: true,
      isLocked: true
    },
    {
      id: 3,
      title: 'Обновления системы рангов',
      author: 'ViceLeaderRS',
      replies: 23,
      views: 445,
      lastPost: '1 день назад',
      isPinned: false,
      isLocked: false
    },
    {
      id: 4,
      title: 'Планы развития семьи на новый сезон',
      author: 'LeaderRoyals',
      replies: 42,
      views: 678,
      lastPost: '3 дня назад',
      isPinned: false,
      isLocked: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-darker via-royal-dark to-background">
      <div className="container mx-auto p-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="p-0 h-auto hover:text-primary">
            <Icon name="Home" size={16} className="mr-1" />
            Главная
          </Button>
          <Icon name="ChevronRight" size={14} />
          <span className={currentSection.color}>{currentSection.title}</span>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-card/50 backdrop-blur">
              <Icon name={currentSection.icon as any} className={currentSection.color} size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{currentSection.title}</h1>
              <p className="text-muted-foreground">{currentSection.description}</p>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            <Icon name="Plus" size={18} className="mr-2" />
            Новая тема
          </Button>
        </div>

        {/* Section Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-4 text-center">
              <Icon name="Hash" className="text-primary mx-auto mb-2" size={24} />
              <div className="text-xl font-bold text-foreground">12</div>
              <div className="text-sm text-muted-foreground">Тем</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-4 text-center">
              <Icon name="MessageSquare" className="text-accent mx-auto mb-2" size={24} />
              <div className="text-xl font-bold text-foreground">89</div>
              <div className="text-sm text-muted-foreground">Сообщений</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-4 text-center">
              <Icon name="Users" className="text-secondary mx-auto mb-2" size={24} />
              <div className="text-xl font-bold text-foreground">23</div>
              <div className="text-sm text-muted-foreground">Участников</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-4 text-center">
              <Icon name="Eye" className="text-green-500 mx-auto mb-2" size={24} />
              <div className="text-xl font-bold text-foreground">1.2k</div>
              <div className="text-sm text-muted-foreground">Просмотров</div>
            </CardContent>
          </Card>
        </div>

        {/* Topics List */}
        <Card className="bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Темы</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="SortAsc" size={16} className="mr-1" />
                  По дате
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Filter" size={16} className="mr-1" />
                  Фильтр
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {sampleTopics.map((topic, index) => (
              <div key={topic.id}>
                <div className="p-6 hover:bg-card/70 transition-colors cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {topic.isPinned && (
                          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                            <Icon name="Pin" size={12} className="mr-1" />
                            Закреплено
                          </Badge>
                        )}
                        {topic.isLocked && (
                          <Badge variant="outline" className="border-red-500 text-red-500">
                            <Icon name="Lock" size={12} className="mr-1" />
                            Закрыто
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors mb-1">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={12} />
                          {topic.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MessageSquare" size={12} />
                          {topic.replies} ответов
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Eye" size={12} />
                          {topic.views} просмотров
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>Последнее сообщение:</div>
                      <div className="font-medium">{topic.lastPost}</div>
                    </div>
                  </div>
                </div>
                {index < sampleTopics.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-8">
          <div className="text-sm text-muted-foreground">
            Показано 1-10 из 12 тем
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;