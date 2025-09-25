import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const forumSections = [
    {
      id: 1,
      title: 'Правила',
      description: 'Основные правила семьи Royals Squad',
      icon: 'Shield',
      topics: 3,
      posts: 12,
      lastPost: '2 часа назад',
      color: 'bg-royal-red'
    },
    {
      id: 2,
      title: 'Новости',
      description: 'Последние новости и обновления',
      icon: 'Newspaper',
      topics: 8,
      posts: 45,
      lastPost: '30 минут назад',
      color: 'bg-royal-gold'
    },
    {
      id: 3,
      title: 'Обсуждения',
      description: 'Общие обсуждения участников семьи',
      icon: 'MessageSquare',
      topics: 24,
      posts: 156,
      lastPost: '5 минут назад',
      color: 'bg-primary'
    },
    {
      id: 4,
      title: 'Улучшения бинды',
      description: 'Предложения по улучшению биндов',
      icon: 'Settings',
      topics: 12,
      posts: 78,
      lastPost: '1 час назад',
      color: 'bg-accent'
    },
    {
      id: 5,
      title: 'Заявки на гл зама',
      description: 'Подача заявок на должность заместителя главы',
      icon: 'Crown',
      topics: 5,
      posts: 23,
      lastPost: '4 часа назад',
      color: 'bg-royal-gold'
    },
    {
      id: 6,
      title: 'Заявки на специалиста по логам',
      description: 'Заявки на должность специалиста по анализу логов',
      icon: 'FileText',
      topics: 3,
      posts: 18,
      lastPost: '6 часов назад',
      color: 'bg-secondary'
    }
  ];

  const stats = {
    totalMembers: 47,
    activeMembers: 23,
    totalPosts: 332,
    totalTopics: 55,
    onlineNow: 12
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-darker via-royal-dark to-background">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Crown" className="text-royal-gold" size={48} />
            <h1 className="text-4xl font-bold text-royal-gold tracking-wider">ROYALS SQUAD</h1>
            <Icon name="Crown" className="text-royal-gold" size={48} />
          </div>
          <p className="text-lg text-muted-foreground">Форум семьи в матрешке РП</p>
          <Badge variant="secondary" className="mt-2 bg-royal-gold text-royal-darker">
            <Icon name="Users" size={16} className="mr-1" />
            {stats.onlineNow} онлайн
          </Badge>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur border-royal-gold/20">
            <CardContent className="p-4 text-center">
              <Icon name="Users" className="text-royal-gold mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-royal-gold">{stats.totalMembers}</div>
              <div className="text-sm text-muted-foreground">Всего участников</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Icon name="Activity" className="text-primary mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-primary">{stats.activeMembers}</div>
              <div className="text-sm text-muted-foreground">Активных</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-accent/20">
            <CardContent className="p-4 text-center">
              <Icon name="MessageCircle" className="text-accent mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-accent">{stats.totalPosts}</div>
              <div className="text-sm text-muted-foreground">Сообщений</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-secondary/20">
            <CardContent className="p-4 text-center">
              <Icon name="Hash" className="text-secondary mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-secondary">{stats.totalTopics}</div>
              <div className="text-sm text-muted-foreground">Тем</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-green-500/20">
            <CardContent className="p-4 text-center">
              <Icon name="Zap" className="text-green-500 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-green-500">{Math.round((stats.activeMembers / stats.totalMembers) * 100)}%</div>
              <div className="text-sm text-muted-foreground">Активность</div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Progress */}
        <Card className="mb-8 bg-card/50 backdrop-blur border-royal-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-royal-gold">
              <Icon name="TrendingUp" size={20} />
              Активность форума
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Участие участников</span>
                  <span>{Math.round((stats.activeMembers / stats.totalMembers) * 100)}%</span>
                </div>
                <Progress value={(stats.activeMembers / stats.totalMembers) * 100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Заполненность разделов</span>
                  <span>78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Forum Sections Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Разделы форума</h2>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25">
            <Icon name="Plus" size={18} className="mr-2" />
            Добавить тему
          </Button>
        </div>

        {/* Forum Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forumSections.map((section) => (
            <Card key={section.id} className="bg-card/50 backdrop-blur hover:bg-card/70 transition-all duration-300 border-primary/10 hover:border-royal-gold/30 hover:shadow-lg hover:shadow-royal-gold/10 cursor-pointer" onClick={() => navigate(`/section/${section.id}`)}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${section.color}/10`}>
                      <Icon name={section.icon as any} className={section.color.includes('royal-gold') ? 'text-royal-gold' : section.color.includes('royal-red') ? 'text-royal-red' : 'text-primary'} size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground hover:text-primary transition-colors">{section.title}</CardTitle>
                      <CardDescription className="text-sm">{section.description}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Hash" size={14} />
                      {section.topics} тем
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="MessageSquare" size={14} />
                      {section.posts} сообщений
                    </span>
                  </div>
                </div>
                <Separator className="mb-4" />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    Последнее сообщение: {section.lastPost}
                  </div>
                  <Button variant="outline" size="sm" className="border-royal-gold/30 hover:bg-royal-gold/10 hover:border-royal-gold/50">
                    <Icon name="ArrowRight" size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Shield" size={16} className="text-royal-gold" />
            Форум семьи Royals Squad - Матрешка РП
            <Icon name="Shield" size={16} className="text-royal-gold" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;