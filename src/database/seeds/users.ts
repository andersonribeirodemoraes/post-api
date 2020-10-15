import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();

  await knex('users').insert([
    {
      id: 1,
      email: 'andersonribeirodemoraes@gmail.com',
      password: '$2a$08$09DgSjyA59wFJPo26ZVX1eBs1Tdvyz5sceQIB/2luCdwSHHMFI7.q',
    },
    {
      id: 2,
      email: 'software@flink.life',
      password: '$2a$08$09DgSjyA59wFJPo26ZVX1eBs1Tdvyz5sceQIB/2luCdwSHHMFI7.q',
    },
    {
      id: 3,
      email: 'teste@gmail.com',
      password: '$2a$08$09DgSjyA59wFJPo26ZVX1eBs1Tdvyz5sceQIB/2luCdwSHHMFI7.q',
    },
  ]);
}
