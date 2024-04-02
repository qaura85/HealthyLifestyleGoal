<template>
  <q-page padding class="bg-grey-1">
    <div class="content-center flex justify-center">
    <q-card
      v-bind:style="$q.screen.lt.sm ? { width: '100%' } : { width: '40%' }"
      class="card justify-center"
    >
      <q-card-section class="bg-secondary text-white text-h4" align="center">
        SIGN UP
      </q-card-section>
      <q-separator class="bg-grey"/>
      <q-card-section class="bg-primary">
      <q-card class="bg-primary" flat>
        <q-card-actions align="center">
        <div class="q-pa-md">
        <q-form>
          <div class="row">
            <div class="col-5">
              Name:
              <q-input
                v-model="login.name"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please enter your name',
                ]"
                />
            </div>

            <div class="col-2 text-transparent bg-transparent">
              -
            </div>

            <div class="col-5">
              Username:
              <q-input
                v-model="login.username"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please enter your username',
                ]"
                />
            </div>

            <div class="col-12 text-transparent bg-transparent">
              -
            </div>

            <div class="col-5">
              Password
              <q-input
                v-model="login.password"
                :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please enter your password',
                    (val) =>
                      checkPassword(login.password) || 'Not Secured Password',
                  ]"
                />
            </div>

            <div class="col-2 text-transparent bg-transparent">
              -
            </div>

            <div class="col-5">
              Confirm Password:
              <q-input
                :rules="[
                  (val) => (val && val.length > 0) || 'Please re-enter your password',
                  (val) => val === login.password || 'Your password must be same',
                ]"
                v-model="login.confirmpassword"
              />
            </div>

            <div class="col-12 text-transparent bg-transparent">
              -
            </div>

            <div class="col-5">
              Phone Number:
              <q-input
                v-model="login.phoneNo"
                mask="###-########"
                lazy-rules
                  :rules="[
                    (val) => (val !== null && val !== '') || 'Please enter your phone no.',
                    (val) =>
                      (val.length > 10) ||
                      'Please enter your phone no.',
                  ]"
                />
            </div>

            <div class="col-2 text-transparent bg-transparent">
              -
            </div>

            <div class="col-5">
              Email:
              <q-input
                v-model="login.email"
                lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0 && checkEmail(admin.email)) ||
                      'Your email must need @ and end with .com',
                  ]"
                />
            </div>

            <div class="col-12 text-transparent bg-transparent">
              -
            </div>

            <div class="col-5">
              Height:
              <q-input
                mask="### cm"
                v-model="login.height"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please enter your height',
                ]"
                />
            </div>

            <div class="col-2 text-transparent bg-transparent">
              -
            </div>

            <div class="col-5">
              Weight:
              <q-input
                mask="### kg"
                v-model="login.weight"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please enter your weight',
                ]"
                />
            </div>
          </div>
        </q-form>
        </div>
        </q-card-actions>
        <q-card-section align="right">
          <q-btn label="Register" class="bg-secondary text-white" @click="toLogin()" />
          <q-btn label="Reset" class="text-red" flat />
        </q-card-section>
      </q-card>
      </q-card-section>
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

    const login = ref ({
      name: "",
      username: "",
      password: "",
      confirmpassword: "",
      phoneNo: "",
      email: "",
      height: "",
      weight: "",
    })

    function checkPassword(password) {
      const pwdPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}/;
      return (
        pwdPattern.test(password) ||
        "Password must contain mix characters!"
      );
    }

    function checkEmail(email) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(email) || "Invalid email";
    }

    return {
      toLogin() {
        router.push({ name: "login"})
      },
      login,
      checkPassword,
      checkEmail,
    }
  }
}
</script>

<style>
  .size {
    width: 40%;
  }

  .card {
  position: center;
  height: 100%;
  }
</style>
