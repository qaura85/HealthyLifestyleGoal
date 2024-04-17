<template>
  <q-page padding class="bg-grey-1">
    <!-- <img src="~assets/HealthyFood.jpg" class="background" alt="login-wave" /> -->
    <img />
    <div>
      <q-card class="bg-transparent" flat align="center">
        <q-separator />
        <div class="row q-pa-md">
          <div class="col-12 col-md-12 text-transparent">_</div>
          <div class="col-12 col-md-12">
            <q-carousel
              animated
              v-model="slide"
              navigation
              infinite
              :autoplay="autoplay"
              arrows
              align="center"
              control-color="black"
              height="550px"
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
              v-bind:style="
                $q.screen.lt.sm ? { width: '100%' } : { width: '90%' }
              "
            >
              <q-carousel-slide :name="1" img-src="~assets/news3.png" />
              <q-carousel-slide :name="2" img-src="~assets/news2.png" />
              <q-carousel-slide :name="3" img-src="~assets/news1.png" />
              <!-- <q-carousel-slide :name="4" img-src="~assets/news.png" /> -->
            </q-carousel>
          </div>

          <div class="col-12 col-md-12 text-transparent">_</div>
          <div class="col-12 col-md-1 text-transparent">_</div>

          <!-- Today's Goals -->

          <div class="col-12 col-md-10">
            <q-card align="left">
              <q-card-section class="bgmint text-weight-bolder text-white">
                <q-avatar square>
                  <img src="~assets/target.png" />
                </q-avatar>
                <span class="text-h5">Today's Goals</span>
              </q-card-section>
              <q-separator class="bg-black" />
              <q-card-section vertical class="goal">
                <div class="row">
                  <div class="col-6 q-pa-md">
                    <span flat>Goal 1</span>
                  </div>
                  <div class="col-6 q-pa-md" align="right">
                    <q-checkbox v-model="goal1" color="green" />
                  </div>
                  <div class="col-6 q-pa-md">
                    <span>Goal 2</span>
                  </div>
                  <div class="col-6 q-pa-md" align="right">
                    <q-checkbox v-model="goal2" color="green" />
                  </div>
                  <div class="col-6 q-pa-md">
                    <span>Goal 3</span>
                  </div>
                  <div class="col-6 q-pa-md" align="right">
                    <q-checkbox v-model="goal3" color="green" />
                  </div>
                </div>
                <q-separator class="bg-grey" />
              </q-card-section>
              <q-card-section class="bg-primary" align="right">
                <q-btn
                  @click="submitGoal = true"
                  label="Submit"
                  class="bg-secondary text-white"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-1 text-transparent">_</div>

          <div class="col-12 col-md-12 text-transparent">_</div>

          <div class="col-12 col-md-1 text-transparent">_</div>

          <!-- Calories Calculator -->

          <div class="col-12 col-md-6">
            <q-table
              :rows="rowsCal"
              :columns="colCal"
              row-key="name"
              flat
              bordered
              title="Food Calories"
              :filter="filter"
            >
              <template v-slot:top-right>
                <q-input
                  rounded
                  outlined
                  dense
                  color="grey"
                  bg-color="white"
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>
            </q-table>
          </div>
          <div class="col-12 col-md-1 text-transparent">_</div>

          <!-- Health Record -->

          <div class="col-12 col-md-3">
            <q-card align="left">
              <q-card-section class="bgmint text-weight-bolder text-white">
                <q-avatar square>
                  <img src="~assets/health-report.png" />
                </q-avatar>
                <span class="text-h5">Health Record</span>
              </q-card-section>
              <q-separator class="bg-black" />
              <q-card-section vertical class="goal">
                <div class="row">
                  <div class="col-12 q-pa-md">
                    <q-avatar square>
                      <img src="~assets/height.png" />
                    </q-avatar>
                    Height (cm):
                  </div>
                  <div class="col-12 q-pa-md">
                    <q-avatar square>
                      <img src="~assets/weight.png" />
                    </q-avatar>
                    Weight (kg):
                  </div>
                  <div class="col-12 q-pa-md">
                    <q-avatar square>
                      <img src="~assets/bmi.png" />
                    </q-avatar>
                    BMI:
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-1 text-transparent">_</div>
        </div>
      </q-card>
      <q-dialog v-model="calories" persistent>
        <div>
          <q-card>
            <q-card-section class="bg-secondary">
              <span class="text-white">Total Calories: {{ calc.total }}</span>
            </q-card-section>
            <q-separator />
            <q-card-section class="bg-primary" align="right">
              <q-btn
                class="text-weight-bold"
                rounded
                flat
                label="Close"
                color="red"
                v-close-popup
              />
            </q-card-section>
          </q-card>
        </div>
      </q-dialog>

      <q-dialog v-model="submitGoal">
        <q-card>
          <q-card-section class="bg-secondary text-white">
            Are you sure you want to submit ?
          </q-card-section>
          <q-separator class="bg-grey" />
          <q-card-section align="right" class="bg-primary text-white">
            <q-btn label="Yes" class="bg-green" v-close-popup />
            <q-btn label="No" class="text-red" flat v-close-popup />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { colProfile, rowsProfile } from "src/hooks/devProfile.js";
import { colCalories, rowsCalories } from "src/hooks/devCalories.js";

export default {
  setup() {
    const $q = useQuasar();
    const store = useStore();
    const router = useRouter();

    const goal1 = ref(false);
    const goal2 = ref(false);
    const goal3 = ref(false);
    const calories = ref(false);
    const calculator = ref(null);
    const total = ref(null);
    const submitGoal = ref(false);
    const filter = ref("");

    const colP = [...colProfile];
    const rowsP = [...rowsProfile];

    const colCal = [...colCalories];
    const rowsCal = [...rowsCalories];

    const calc = ref({
      fat: 0,
      carbo: 0,
      protein: 0,
      calo: 0,
      total: "",
    });

    function calculate() {
      const total = calc.value.fat + calc.value.protein + calc.value.carbo;
      calories.value = true;
      console.log(total);
    }

    return {
      goal1,
      goal2,
      goal3,
      calculate,
      calories,
      calc,
      calculator,
      submitGoal,
      colP,
      rowsP,
      colCal,
      rowsCal,
      filter,

      slide: ref(1),
      autoplay: ref(true),

      onReset() {
        calc.value = {};
      },
    };
  },
};
</script>

<style>
.title {
  color: transparent;
}

.background {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.mint {
  /* color : #3eb489; */
  color: #3eb489;
}

.bgmint {
  /* background-color : rgb(211, 41, 41); */
  background-color: #0a7950;
}

.background {
  background-color: white;
}

.goal {
  background-color: #6ee0b6;
}
.q-table__top,
.q-table__bottom,
thead tr:first-child th {
  background-color: #0a7950;
  color: white;
}
thead tr th {
  position: sticky;
  z-index: 1;
}
thead tr:first-child th {
  top: 0;
}

.q-table--loading thead tr:last-child th {
  top: 48px;
}

tbody {
  scroll-margin-top: 48px;
  background-color: #6ee0b6;
}

.my-sticky-header-table {
  height: 395px;
}
</style>
