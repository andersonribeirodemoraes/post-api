module.exports = {
  openapi: '3.0.0',
  info: {
    description: 'Aplicação para obter postagens',
    version: '1.0.0',
    title: 'Swagger Postagens',
    contact: {
      email: 'andersonribeirodemoraes@gmail.com',
    },
  },
  tags: [
    {
      name: 'login',
    },
    {
      name: 'user',
    },
    {
      name: 'post',
    },
  ],
  schemes: ['https', 'http'],
  paths: {
    '/login': {
      post: {
        tags: ['login'],
        summary: 'Logs user into the system',
        description: '',
        operationId: 'loginUser',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Logar',
            required: true,
            schema: {
              $ref: '#/definitions/Login',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              type: 'string',
            },
          },
          '400': {
            description: 'Invalid email/password supplied',
          },
        },
      },
    },
    '/user': {
      post: {
        tags: ['user'],
        summary: 'Create user',
        description: 'This can only be done by the logged in user.',
        operationId: 'createUser',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Created user object',
            required: true,
            schema: {
              $ref: '#/definitions/User',
            },
          },
        ],
        responses: {
          default: {
            description: 'successful operation',
          },
        },
      },
    },
    '/post': {
      get: {
        security: [
          {
            bearerAuth: [],
          },
        ],
        tags: ['post'],
        summary: 'Get posts',
        description: '',
        operationId: 'getPost',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Post',
            },
          },
          '404': {
            description: 'Post not found',
          },
        },
      },
      post: {
        security: [
          {
            bearerAuth: [],
          },
        ],
        tags: ['post'],
        summary: 'Create post',
        description: 'This can only be done by the logged in user.',
        operationId: 'createPost',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Created post object',
            required: true,
            schema: {
              $ref: '#/definitions/Post',
            },
          },
        ],
        responses: {
          default: {
            description: 'successful operation',
          },
        },
      },
    },
  },

  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  definitions: {
    Login: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
      xml: {
        name: 'Login',
      },
    },
    User: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
      xml: {
        name: 'User',
      },
    },
    Post: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        url: {
          type: 'string',
        },
      },
      xml: {
        name: 'Post',
      },
    },
  },
};
