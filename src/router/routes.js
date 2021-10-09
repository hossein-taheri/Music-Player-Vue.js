const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages')
      },
      {
        path: 'music/',
        children: [
          {
            path: '',
            name: 'music.index',
            component: () => import('pages/music/index.vue')
          },
          {
            path: 'create',
            name: 'music.create',
            component: () => import('pages/music/create.vue')
          },
          {
            path: 'edit/:music',
            name: 'music.edit',
            component: () => import('pages/music/edit.vue')
          },
        ],
      },
      {
        path: 'album/',
        children: [
          {
            path: '',
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
        path: 'artist/',
        children: [
          {
            path: '',
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
        path: 'genre/',
        children: [
          {
            path: '',
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
