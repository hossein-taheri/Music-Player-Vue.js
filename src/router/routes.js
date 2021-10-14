const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect :'/index/'
      },
      {
        path: 'index/',
        name: 'home.index',
        component: () => import('src/pages')
      },
      {
        path: 'music/',
        name: 'music.index',
        component: () => import('pages/music/index.vue')
      },
      {
        path: 'music/create',
        name: 'music.create',
        component: () => import('pages/music/create.vue')
      },
      {
        path: 'music/edit/:music',
        name: 'music.edit',
        component: () => import('pages/music/edit.vue')
      },
      {
        path: 'album/',
        name: 'album.index',
        component: () => import('pages/album/index.vue')
      },
      {
        path: 'album/create',
        name: 'album.create',
        component: () => import('pages/album/create.vue')
      },
      {
        path: 'album/edit/:album',
        name: 'album.edit',
        component: () => import('pages/album/edit.vue')
      },
      {
        path: 'artist/',
        name: 'artist.index',
        component: () => import('pages/artist/index.vue')
      },
      {
        path: 'artist/create',
        name: 'artist.create',
        component: () => import('pages/artist/create.vue')
      },
      {
        path: 'artist/edit/:artist',
        name: 'artist.edit',
        component: () => import('pages/artist/edit.vue')
      },
      {
        path: 'genre/',
        name: 'genre.index',
        component: () => import('pages/genre/index.vue')
      },
      {
        path: 'create',
        name: 'genre.create',
        component: () => import('pages/genre/create.vue')
      },
      {
        path: 'edit/:artist',
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
