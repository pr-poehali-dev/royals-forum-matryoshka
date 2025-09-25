import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const navigate = useNavigate();

  const userProfile = {
    username: 'Timur_Sheldi',
    displayName: 'Timur Sheldi',
    role: 'Модератор',
    rank: 'Активный игрок',
    joinDate: '15 августа 2024',
    lastActive: 'Сейчас в сети',
    level: 12,
    experience: 2340,
    nextLevelExp: 2500,
    posts: 48,
    topics: 12,
    likes: 156,
    reputation: 89
  };

  const userStats = {
    gamesPlayed: 234,
    wins: 156,
    losses: 78,
    winRate: Math.round((156 / 234) * 100),
    favWeapon: 'AK-47',
    playtime: '127 часов'
  };

  const recentPosts = [
    {
      id: 1,
      title: 'Добро пожаловать в семью Royals Squad!',
      section: 'Правила',
      content: 'Отлично! Наконец-то у нас есть свой форум...',
      timestamp: '25 сентября 2024, 17:15',
      likes: 3
    },
    {
      id: 2,
      title: 'Обсуждение тактик на Mirage',
      section: 'Обсуждения',
      content: 'Предлагаю попробовать новую тактику на середину...',
      timestamp: '24 сентября 2024, 20:30',
      likes: 7
    },
    {
      id: 3,
      title: 'Заявка на участие в турнире',
      section: 'Заявки',
      content: 'Хочу подать заявку на участие в предстоящем турнире...',
      timestamp: '23 сентября 2024, 14:45',
      likes: 12
    }
  ];

  const achievements = [
    { name: 'Первый пост', description: 'Написал первое сообщение на форуме', icon: 'MessageSquare', earned: true },
    { name: 'Популярный', description: 'Получил 50+ лайков', icon: 'Heart', earned: true },
    { name: 'Активист', description: 'Создал 10+ тем', icon: 'Hash', earned: true },
    { name: 'Ветеран', description: 'Участник семьи более 6 месяцев', icon: 'Award', earned: false },
    { name: 'Лидер мнений', description: 'Получил 100+ лайков', icon: 'Crown', earned: false }
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
          <span className="text-primary">Мой профиль</span>
        </div>

        {/* Profile Header */}
        <Card className="mb-6 bg-card/50 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <Avatar className="w-20 h-20 border-2 border-primary">
                <AvatarFallback className="bg-primary text-primary-foreground font-bold text-2xl">
                  TS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-foreground">{userProfile.displayName}</h1>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/30">
                    <Icon name="Circle" size={8} className="mr-1 fill-current" />
                    Онлайн
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-2">@{userProfile.username}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Icon name="Shield" size={14} />
                    {userProfile.role}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    Присоединился {userProfile.joinDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {userProfile.lastActive}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Edit" size={16} className="mr-1" />
                    Редактировать профиль
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Settings" size={16} className="mr-1" />
                    Настройки
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-4 text-center">
              <Icon name="MessageSquare" className="text-primary mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold text-foreground">{userProfile.posts}</div>
              <div className="text-sm text-muted-foreground">Сообщений</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-4 text-center">
              <Icon name="Hash" className="text-accent mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold text-foreground">{userProfile.topics}</div>
              <div className="text-sm text-muted-foreground">Тем создано</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-4 text-center">
              <Icon name="Heart" className="text-red-500 mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold text-foreground">{userProfile.likes}</div>
              <div className="text-sm text-muted-foreground">Лайков получено</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-4 text-center">
              <Icon name="Award" className="text-yellow-500 mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold text-foreground">{userProfile.reputation}</div>
              <div className="text-sm text-muted-foreground">Репутация</div>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <Card className="mb-6 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" size={20} />
              Уровень активности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Уровень {userProfile.level}</span>
              <span className="text-sm text-muted-foreground">
                {userProfile.experience} / {userProfile.nextLevelExp} XP
              </span>
            </div>
            <Progress value={(userProfile.experience / userProfile.nextLevelExp) * 100} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">
              До следующего уровня: {userProfile.nextLevelExp - userProfile.experience} XP
            </p>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="posts" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Мои посты</TabsTrigger>
            <TabsTrigger value="stats">Игровая статистика</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
          </TabsList>

          <TabsContent value="posts">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Последние сообщения</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={post.id}>
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground hover:text-primary cursor-pointer transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          в разделе <span className="text-primary">{post.section}</span>
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">{post.content}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{post.timestamp}</span>
                          <span className="flex items-center gap-1">
                            <Icon name="Heart" size={12} />
                            {post.likes} лайков
                          </span>
                        </div>
                      </div>
                    </div>
                    {index < recentPosts.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Игровая статистика</CardTitle>
                <CardDescription>Статистика в игре Матрешка РП</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Игр сыграно:</span>
                      <span className="font-medium">{userStats.gamesPlayed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Побед:</span>
                      <span className="font-medium text-green-500">{userStats.wins}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Поражений:</span>
                      <span className="font-medium text-red-500">{userStats.losses}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Процент побед:</span>
                      <span className="font-medium">{userStats.winRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Любимое оружие:</span>
                      <span className="font-medium">{userStats.favWeapon}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Время в игре:</span>
                      <span className="font-medium">{userStats.playtime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Достижения форума</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${
                      achievement.earned 
                        ? 'bg-primary/10 border-primary/30' 
                        : 'bg-muted/50 border-muted-foreground/20'
                    }`}>
                      <Icon 
                        name={achievement.icon as any} 
                        size={24} 
                        className={achievement.earned ? 'text-primary' : 'text-muted-foreground'} 
                      />
                      <div className="flex-1">
                        <h3 className={`font-medium ${
                          achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {achievement.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned && (
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          <Icon name="Check" size={12} className="mr-1" />
                          Получено
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;