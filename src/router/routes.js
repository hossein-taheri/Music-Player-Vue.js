const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/index/'
      },
      {
        path: 'index/',
        name: 'home.index',
        component: () => import('src/pages')
      },
    ]
  },
  {
    path: '/music/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: ':page/:artist?/:genre?/:album?/:by_favorite?',
        name: 'music.index',
        component: () => import('pages/music/index.vue')
      },
      {
        path: 'create',
        name: 'music.create',
        component: () => import('pages/music/create.vue')
      }
    ]
  },
  {
    path: '/album/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: ':page',
        name: 'album.index',
        component: () => import('pages/album/index.vue')
      },
      {
        path: 'create',
        name: 'album.create',
        component: () => import('pages/album/create.vue')
      },
      {
        path: 'edit/:album',
        name: 'album.edit',
        component: () => import('pages/album/edit.vue')
      },
    ]
  },
  {
    path: '/artist/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: ':page',
        name: 'artist.index',
        component: () => import('pages/artist/index.vue')
      },
      {
        path: 'create',
        name: 'artist.create',
        component: () => import('pages/artist/create.vue')
      },
      {
        path: 'edit/:artist',
        name: 'artist.edit',
        component: () => import('pages/artist/edit.vue')
      },
    ]
  },
  {
    path: '/genre/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: ':page',
        name: 'genre.index',
        component: () => import('pages/genre/index.vue')
      },
      {
        path: 'create',
        name: 'genre.create',
        component: () => import('pages/genre/create.vue')
      },
      {
        path: 'edit/:genre',
        name: 'genre.edit',
        component: () => import('pages/genre/edit.vue')
      },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
