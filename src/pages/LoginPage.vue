<template>
  <q-page padding class="space bg-grey-1">
    <img />
    <div class="row">
      <div class="col-12 col-md-12 text-transparent">
        <q-card flat class="bg-grey-1"> - </q-card>
      </div>
      <div class="col-12 col-md-12">
        <div class="content-center flex justify-center">
          <q-card align="center">
            <q-card-section align="center" class="bg-secondary">
              <q-avatar square class="logo">
                <img src="~assets/HLG_green.png" />
              </q-avatar>
              <span class="text-h3 text-weight-bolder login"> LOG IN </span>
            </q-card-section>
            <q-separator class="bg-grey" />
            <q-card-section class="bg-primary">
              <q-card class="bg-transparent" flat>
                <q-card-section>
                  <q-form
                    @submit="confirm == true"
                    @reset="onReset"
                    class="q-gutter-md"
                  >
                    <q-input v-model="login.username" label="Username">
                      <template v-slot:before>
                        <q-icon name="person" color="black" />
                      </template>
                    </q-input>
                    <q-input
                      v-model="login.password"
                      label="Password"
                      :type="passwordVisibility ? 'text' : 'password'"
                    >
                      <template v-slot:before>
                        <q-icon name="key" color="black" />
                      </template>
                      <template v-slot:append>
                        <q-icon
                          name="remove_red_eye"
                          color="grey"
                          @click="togglePasswordVisibility"
                          :class="passwordVisibility ? 'opac' : ''"
                        />
                      </template>
                    </q-input>
                    <q-separator class="bg-transparent" />
                    <q-btn
                      color="green"
                      text-color="white"
                      label="Log In"
                      @click="mainpage()"
                    />
                    <q-btn
                      text-color="red"
                      label="Reset"
                      flat
                      @click="onReset()"
                    />
                    <q-separator />
                    <q-btn flat @click="register()">
                      I don't have an account
                    </q-btn>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-12 col-md-12 text-transparent">
        <q-card flat class="bg-grey-1"> - </q-card>
      </div>
    </div>
    <q-dialog v-model="error" persistent>
      <q-card>
        <q-card-section> Username or password are incorrect </q-card-section>
        <q-card-actions align="right">
          <q-btn text-color="red" label="Close" flat v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { colUser, rowsUser } from "src/hooks/devUser.js";

export default {
  setup() {
    const $q = useQuasar();
    const store = useStore();
    const router = useRouter();
    const error = ref(false);

    const columns = [...colUser];
    const rows = [...rowsUser];

    const confirm = ref(false);
    const login = ref({
      username: "",
      password: "",
    });

    const passwordVisibility = ref(false);
    function togglePasswordVisibility() {
      passwordVisibility.value = !passwordVisibility.value;
    }

    return {
      togglePasswordVisibility,
      passwordVisibility,
      confirm,
      columns,
      rows,
      login,
      error,
      mainpage() {
        for (let i = 0; i < rows.length; i++) {
          const element = rows[i];

          if (
            login.value.username == element.username &&
            login.value.password == element.password
          ) {
            localStorage.setItem("username", element.username);
            console.log("wujud");
            if (element.roleId == undefined) {
              console.log("x wujud");
            } else {
              localStorage.setItem("roleId", element.roleId);
              const roleId = element.roleId;
              if (roleId == 1) {
                console.log(roleId);
                console.log("Admin");
                router.push({ name: "mainpageAdmin" });
              } else if (roleId == 2) {
                console.log(roleId);
                console.log("User");
                router.push({ name: "mainpage" });
              }
            }
          } else {
            console.log("xdop");
            error.value = true;
          }
        }
      },
      register() {
        router.push({ name: "register" });
      },

      onReset() {
        login.value = {};
      },
    };
  },
};
</script>

<style>
.bground {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.space {
  padding-top: 5em;
}

.logo {
  height: 75px;
  width: 100px;
}

.login {
  color: #ffd700;
  /* padding-top: em; */
}
</style>
