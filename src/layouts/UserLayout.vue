<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="menu bg-secondary">
      <q-toolbar>
        <!-- BACK BUTTON -->
        <!-- <q-btn
          icon="keyboard_return"
          flat
          round
          dense
          @click="$router.back()"
        /> -->

        <q-avatar square class="logo">
          <img src="~assets/HLG_green.png" />
        </q-avatar>
        <!-- <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        /> -->
        <q-toolbar-title class="menu bg-secondary">
          Healthy Lifestyle Goals
        </q-toolbar-title>
        <q-btn flat round dense icon="home" @click="mainpage()">
          <q-tooltip> Home </q-tooltip>
        </q-btn>
        <q-btn flat round dense icon="account_circle" @click="profile()">
          <q-tooltip> Profile </q-tooltip>
        </q-btn>
        <q-btn flat round dense icon="logout" @click="logout()">
          <q-tooltip> Log Out </q-tooltip>
        </q-btn>
      </q-toolbar>

      <!-- <q-tabs>
        <q-route-tab
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
    </q-header>

    <!-- (Optional) The Footer -->
    <!-- <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>

      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <!-- <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
    > -->
    <!-- QScrollArea is optional -->
    <!-- <q-scroll-area class="fit q-pa-sm"> -->
    <!-- Content here -->
    <!-- </q-scroll-area>
    </q-drawer> -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  // name: 'LayoutName',

  setup() {
    const $q = useQuasar();
    const store = useStore();
    const router = useRouter();

    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      profile() {
        router.push({ name: "profile" });
      },
      mainpage() {
        router.push({ name: "mainpage" });
      },
      logout() {
        router.push({ name: "logout" });
      },
    };
  },
};
</script>

<style>
.menu {
  color: white;
  background-color: #3eb489;
}
</style>
