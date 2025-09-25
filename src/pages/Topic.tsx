import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Topic = () => {
  const { sectionId, topicId } = useParams();
  const navigate = useNavigate();

  const sections = {
    '1': 'Правила',
    '2': 'Новости', 
    '3': 'Обсуждения',
    '4': 'Улучшения бинды',
    '5': 'Заявки на гл зама',
    '6': 'Заявки на специалиста по логам'
  };

  const topic = {
    id: topicId,
    title: 'Добро пожаловать в семью Royals Squad!',
    author: 'AdminRoyals',
    created: '25 сентября 2024, 14:30',
    replies: 15,
    views: 234,
    isPinned: true,
    isLocked: false
  };

  const posts = [
    {
      id: 1,
      author: 'AdminRoyals',
      role: 'Администратор',
      avatar: 'AR',
      content: `Добро пожаловать в официальный форум семьи Royals Squad! 

Здесь вы найдете всю необходимую информацию о нашей семье, сможете участвовать в обсуждениях и быть в курсе последних новостей.

**Основные разделы форума:**
• Правила семьи
• Новости и обновления  
• Общие обсуждения
• Предложения по улучшениям
• Заявки на руководящие должности

Помните о соблюдении правил форума и уважительном отношении к участникам семьи!`,
      timestamp: '25 сентября 2024, 14:30',
      likes: 12,
      isOwner: true
    },
    {
      id: 2,
      author: 'ViceLeaderRS',
      role: 'Зам. лидера',
      avatar: 'VL',
      content: 'Отличная инициатива! Форум поможет нам лучше координировать действия семьи и обмениваться опытом.',
      timestamp: '25 сентября 2024, 15:45',
      likes: 8,
      isOwner: false
    },
    {
      id: 3,
      author: 'MemberRS_23',
      role: 'Участник',
      avatar: 'M2',
      content: 'Спасибо за создание форума! Очень удобно будет обсуждать вопросы семьи в одном месте.',
      timestamp: '25 сентября 2024, 16:20',
      likes: 5,
      isOwner: false
    },
    {
      id: 4,
      author: 'Timur_Sheldi',
      role: 'Модератор',
      avatar: 'TS',
      content: 'Отлично! Наконец-то у нас есть свой форум. Теперь будет намного проще координировать наши действия и делиться информацией.',
      timestamp: '25 сентября 2024, 17:15',
      likes: 3,
      isOwner: false,
      roleColor: 'text-blue-500',
      roleBadge: 'bg-blue-500/10 border-blue-500/30'
    },
    {
      id: 5,
      author: 'Legend_Warrior',
      role: 'Легенда',
      avatar: 'LW',
      content: 'Наша семья наконец-то имеет достойную площадку для общения! Я помню времена, когда мы только начинали... Отличная работа, команда! 👑',
      timestamp: '25 сентября 2024, 18:45',
      likes: 25,
      isOwner: false
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
          <Button variant="ghost" size="sm" onClick={() => navigate(`/section/${sectionId}`)} className="p-0 h-auto hover:text-primary">
            {sections[sectionId as keyof typeof sections]}
          </Button>
          <Icon name="ChevronRight" size={14} />
          <span className="text-primary">{topic.title}</span>
        </div>

        {/* Topic Header */}
        <Card className="mb-6 bg-card/50 backdrop-blur">
          <CardHeader>
            <div className="flex items-start justify-between">
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
                <h1 className="text-2xl font-bold text-foreground mb-2">{topic.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="User" size={12} />
                    Автор: {topic.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={12} />
                    {topic.created}
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
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="Share" size={16} className="mr-1" />
                  Поделиться
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Bookmark" size={16} className="mr-1" />
                  В закладки
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Posts */}
        <div className="space-y-4 mb-8">
          {posts.map((post, index) => (
            <Card key={post.id} className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-2 min-w-[100px]">
                    <Avatar className={`w-12 h-12 ${
                      post.author === 'Legend_Warrior' ? 'ring-2 ring-yellow-500 shadow-lg shadow-yellow-500/25' : ''
                    }`}>
                      <AvatarFallback className={`font-semibold ${
                        post.author === 'Legend_Warrior' ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black' : 'bg-primary text-primary-foreground'
                      }`}>
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <div className="font-medium text-sm text-foreground">{post.author}</div>
                      <Badge variant="outline" className={`text-xs ${
                        post.author === 'AdminRoyals' ? 'bg-red-500/10 text-red-500 border-red-500/30' :
                        post.author === 'ViceLeaderRS' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30' :
                        post.author === 'Timur_Sheldi' ? 'bg-blue-500/10 text-blue-500 border-blue-500/30' :
                        post.author === 'Legend_Warrior' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-yellow-500/50 shadow-lg shadow-yellow-500/25' :
                        'bg-gray-500/10 text-gray-500 border-gray-500/30'
                      }`}>
                        {post.author === 'AdminRoyals' ? 'Администратор' :
                         post.author === 'ViceLeaderRS' ? 'Зам. лидера' :
                         post.author === 'Timur_Sheldi' ? 'Модератор' :
                         post.author === 'Legend_Warrior' ? '👑 Легенда 👑' :
                         post.role}
                      </Badge>
                    </div>
                    {post.isOwner && (
                      <Badge variant="secondary" className="text-xs bg-yellow-500/10 text-yellow-500 border-yellow-500/30">
                        <Icon name="Crown" size={10} className="mr-1" />
                        ТС
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-muted-foreground">
                        #{index + 1} • {post.timestamp}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Icon name="Heart" size={14} className="mr-1" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Icon name="Reply" size={14} />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Icon name="MoreVertical" size={14} />
                        </Button>
                      </div>
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                        {post.content}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reply Form */}
        <Card className="bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-lg">Ответить в теме</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea 
                placeholder="Напишите ваш ответ..."
                className="min-h-[120px] resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Image" size={16} className="mr-1" />
                    Изображение
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Link" size={16} className="mr-1" />
                    Ссылка
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Smile" size={16} className="mr-1" />
                    Эмодзи
                  </Button>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-1" />
                  Отправить
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button variant="outline" onClick={() => navigate(`/section/${sectionId}`)}>
            <Icon name="ArrowLeft" size={16} className="mr-1" />
            Назад к разделу
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Icon name="ChevronUp" size={16} />
              Наверх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;