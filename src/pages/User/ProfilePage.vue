<template>
  <q-page padding class="bg-grey-1">
    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <q-card class="my-card" flat bordered>
        <q-card-section class="bg-secondary text-white text-h4" align="center">
          Profile
        </q-card-section>
        <q-card-section class="bg-primary">
          <div class="text-caption text-dark">
            Name: Nik Nafis <br />Gender: Male<br />Age: 22 <br />Phone No.: 011-10737954
            <br />Email: niknafis96@yahoo.com
          </div>
        </q-card-section>
        <q-card-actions class="text-weight-bold text-black bg-primary">
          UPDATE
          <q-space />
          <q-btn
            color="black"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              <q-form @submit="onSubmit" class="q-gutter-md">
                <q-input
                  filled
                  dense
                  v-model="user.fullname"
                  label="Name*"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <div class="q-px-sm">
                  Gender: <strong>{{ user.jantina }}</strong>
                </div>
                <q-radio
                  v-model="user.gender"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  val="Female"
                  label="Female"
                />
                <q-radio
                  v-model="user.gender"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  val="Male"
                  label="Male"
                />
                <q-input
                  filled
                  dense
                  type="number"
                  v-model="user.age"
                  label="Age*"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || 'Please type your age',
                    (val) => (val > 0 && val < 100) || 'Please type a real age',
                  ]"
                />
                <q-input
                  filled
                  dense
                  type="phone"
                  v-model="user.phone"
                  label="Phone No.*"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />

                <q-input
                  filled
                  dense
                  v-model="user.email"
                  label="Email *"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <div>
                  <q-btn
                    class="full-width"
                    rounded
                    label="UPDATE"
                    type="submit"
                    color="secondary"
                  />
                </div>
              </q-form>
            </q-card-section>
          </div>
        </q-slide-transition>
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

    const user = ref({
      fullname: "Nik Nafis",
      age: "22",
      gender: "Male",
      phone: "011-10737954",
      email: "niknafis96@yahoo.com",
      username: "",
    });
    const expanded = ref(false);

    return {
      expanded,
      user,
      onSubmit() {
        expanded.value = false;
      },
    }
  }
}
</script>

<style>
.my-card {
  width: 100%;
  max-width: 300px;
}

.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.rounded {
  border-radius: 25px 25px;
  opacity: 100%;
}

.opac {
  opacity: 100%;
}

.qbg3 {
  background: linear-gradient(360deg, #f3dfd9 40%, teal-3);
}

.bg {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
}
</style>
