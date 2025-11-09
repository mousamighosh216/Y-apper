export interface Categories {
    id: number;
    title: string;
    color: string;
    icon: string;
    count: number;
}

export const category: Categories[] = [
    {
      id: 1,
      title: 'Lifestyle',
      color: '#D7C1FF',
      icon: 'https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_1280.jpg',
      count: 12
    },
    {
      id: 2,
      title: 'Inspiration',
      color: '#CFFAFE',
      icon: 'https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_1280.jpg',
      count: 8
    },
    {
      id: 3,
      title: 'Technology',
      color: '#FDE68A',
      icon: 'https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_1280.jpg',
      count: 15
    },
    {
      id: 4,
      title: 'Music',
      color: '#BBF7D0',
      icon: 'https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_1280.jpg',
      count: 6
    },
    {
      id: 5,
      title: 'Travel',
      color: '#E0F7FA',
      icon: 'https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_1280.jpg',
      count: 10
    }
];


