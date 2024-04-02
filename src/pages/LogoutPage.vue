<template>
  <q-page padding>
    <!-- <img src="~assets/bgLogout.jpg" class="bg" alt="login-wave" /> -->
    <!-- <img class="bg" alt="login-wave" /> -->
    <div class="q-pa-md row items-start q-gutter-md justify-center wcard">
      <q-card>
        <q-card class="my-card">
          <q-card-section class="bgmint">
            <div class="text-h6 text-white">You've been logged out.</div>
          </q-card-section>

          <q-card-actions align="right" class="goal">
            <q-btn @click="logout()" class="bg-green text-white" >Login</q-btn>
          </q-card-actions>
        </q-card>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const store = useStore();
    const router = useRouter();
    localStorage.removeItem("username");
    localStorage.removeItem("roleId");

    return {
      logout() {
        router.push({ name: "login" });
      },
    };
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}

.bg {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
}
.wcard {
  padding-top: 15em;
}
.bgmint {
    background-color: #0a7950;
}
.goal {
    background-color: #6ee0b6;
}
</style>
