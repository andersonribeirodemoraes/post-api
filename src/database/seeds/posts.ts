import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('posts').del();

  await knex('posts').insert([
    {
      id: 1,
      title: 'Node',
      description: 'Imagem Node',
      url:
        'https://isitics.com/wp-content/uploads/2019/06/2400%D1%851260-rw-blog-node-js-1024x538.png',
    },
    {
      id: 2,
      title: 'Express',
      description: 'Imagem Express',
      url: 'https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png',
    },
    {
      id: 3,
      title: 'Typescript',
      description: 'Imagem Typescript',
      url:
        'https://www.freecodecamp.org/news/content/images/2020/02/typescript.png',
    },
  ]);
}
