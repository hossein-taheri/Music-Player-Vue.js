const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'music/',
        children: [
          {
            path: '',
            name: 'music.index',
            component: () => import('pages/music/Index.vue')
          },
          {
            path: 'create',
            name: 'music.create',
            component: () => import('pages/music/Create.vue')
          },
          {
            path: 'edit/:music',
            name: 'music.edit',
            component: () => import('pages/music/Edit.vue')
          },
        ]
      },
      {
        path: 'album/',
        children: [
          {
            path: '',
            name: 'album.index',
            component: () => import('pages/album/Index.vue')
          },
          {
            path: 'create',
            name: 'album.create',
            component: () => import('pages/album/Create.vue')
          },
          {
            path: 'edit/:album',
            name: 'album.edit',
            component: () => import('pages/album/Edit.vue')
          },
        ]
      },
      {
        path: 'artist/',
        children: [
          {
            path: '',
            name: 'artist.index',
            component: () => import('pages/artist/Index.vue')
          },
          {
            path: 'create',
            name: 'artist.create',
            component: () => import('pages/artist/Create.vue')
          },
          {
            path: 'edit/:artist',
            name: 'artist.edit',
            component: () => import('pages/artist/Edit.vue')
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
