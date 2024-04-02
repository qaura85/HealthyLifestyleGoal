
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

    ]
  },

  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/logout",
        name: "logout",
        component: () => import("pages/LogoutPage.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("pages/RegisterPage.vue"),
      },
    ],
  },

  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    meta: { requiredUser: true },
    children: [
      {
        path: "/mainpage",
        name: "mainpage",
        component: () => import("pages/User/MainPage.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("pages/User/ProfilePage.vue"),
      },
    ]
  },

  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    meta: { requiredAdmin: true },
    children: [
      {
        path: "/mainpageAdmin",
        name: "mainpageAdmin",
        component: () => import("pages/Admin/AdminMainPage.vue"),
      },
      {
        path: "/profileAdmin",
        name: "profileAdmin",
        component: () => import("pages/Admin/AdminProfilePage.vue"),
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
