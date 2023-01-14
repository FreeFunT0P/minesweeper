import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  // {
  //   path: '/page-first',
  //   name: 'PageFirst',
  //   component: ContentBar1,
  //   props: true,
  //   children: [
  //     {
  //       path: '/child-1',
  //       name: 'ContentBar1Child1',
  //       component: ContentBar1Child1,
  //       props: true,
  //     },
  //     {
  //       path: '/child-2',
  //       name: 'ContentBar1Child2',
  //       component: ContentBar1Child2,
  //       props: true,
  //     }
  //   ]
  // },
  // {
  //   path: '/page-second',
  //   name: 'PageSecond',
  //   component: ContentBar2,
  // },
  // {
  //   path: '/*',
  //   name: 'PageNotFound',
  //   component: PageNotFound,
  // }
]

const router = new Router({ base: '/', routes })


export default router