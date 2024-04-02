<template>
  <q-page padding class="bg-grey-1">
    <!-- <img src="~assets/HealthyFood.jpg" class="background" alt="login-wave" /> -->
    <img />
    <div>
    <q-card class="bg-transparent" flat>

      <!-- Title -->

      <q-card-section align="center" class="title">
        <h2 class="text-secondary text-h2 q-my-none text-weight-bolder">
            <span>Healthy Lifestyle Goals</span>
        </h2>
      </q-card-section>
      <q-separator />
      <div class="row q-pa-md">

        <div class="col-12 col-md-1 text-transparent">
          _
        </div>

        <!-- Today's Goals -->

        <div class="col-12 col-md-5">
          <q-card>
          <q-card-section class="bgmint text-weight-bolder text-white">
            <q-avatar square>
              <img src="~assets/target.png" >
            </q-avatar>
            <span class="text-h5 ">Today's Goals</span>
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
          <q-btn @click="submitGoal = true" label="Submit" class="bg-secondary text-white"/>
          </q-card-section>
        </q-card>
        </div>

        <div class="col-12 col-md-1 text-transparent">
          _
        </div>

        <!-- News -->

        <div class="col-12 col-md-4">
          <q-card>
          <q-card-section class="bgmint text-weight-bolder text-white">
            <q-avatar square>
              <img src="~assets/news.png" >
            </q-avatar>
            <span class="text-h5 ">News</span>
          </q-card-section>
          <q-separator class="bg-black" />
          <q-card-section vertical class="goal">
            <div class="row">
              <div class="col-12 q-pa-md">
                <q-avatar square>
                  <img src="~assets/news.png" >
                </q-avatar>
                  News 1
              </div>
              <div class="col-12 q-pa-md">
                <q-avatar square>
                  <img src="~assets/news.png" >
                </q-avatar>
                  News 2
              </div>
              <div class="col-12 q-pa-md">
                <q-avatar square>
                  <img src="~assets/news.png" >
                </q-avatar>
                  News 3
              </div>
            </div>
          </q-card-section>
        </q-card>
        </div>

        <div class="col-12 col-md-1 text-transparent">
          _
        </div>

        <div class="col-12 col-md-12 text-transparent">
          _
        </div>

        <div class="col-12 col-md-1 text-transparent">
          _
        </div>

        <!-- Calories Calculator -->

        <div class="col-12 col-md-4">
          <q-card>
            <q-card-section class="bgmint text-weight-bolder text-white">
              <q-avatar square>
                <img src="~assets/calculator.png" >
              </q-avatar>
              <span class="text-h5 ">Calories Calculator</span>
            </q-card-section>
            <q-separator class="bg-black" />
            <q-card-section class="goal">
              <q-form
                @reset="onReset"
                >
                <div class="q-pa-md row" style="max-width: 400">
                  <span>Protein:</span>
                  <div class="q-gutter-md">
                    <q-input v-model="calc.protein" type="number"/>
                  </div>
                </div>
                <div class="q-pa-md row" style="max-width: 400">
                  <span>Carbohydrate: </span>
                  <div class="q-gutter-md">
                    <q-input v-model="calc.carbo" type="number"/>
                  </div>
                </div>
                <div class="q-pa-md row" style="max-width: 400">
                  <span>Fat: </span>
                  <div class="q-gutter-md">
                    <q-input v-model="calc.fat" type="number"/>
                  </div>
                </div>
                <q-card-actions align="right">
                  <q-btn
                    label="Calculate"
                    type="submit"
                    class="bg-secondary text-white"
                    @click="calculate"
                  />

                  <q-btn
                    label="Reset"
                    type="reset"
                    text-color="red"
                    class="q-ml-sm"
                    flat
                  />
                </q-card-actions>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-1 text-transparent">
          _
        </div>

        <!-- Health Record -->

        <div class="col-12 col-md-5">
          <q-card>
          <q-card-section class="bgmint text-weight-bolder text-white">
            <q-avatar square>
              <img src="~assets/health-report.png" >
            </q-avatar>
            <span class="text-h5 ">Health Record</span>
          </q-card-section>
          <q-separator class="bg-black" />
          <q-card-section vertical class="goal">
            <div class="row">
              <div class="col-12 q-pa-md">
                <q-avatar square>
                  <img src="~assets/height.png" >
                </q-avatar>
                  Height:
              </div>
              <div class="col-12 q-pa-md">
                <q-avatar square>
                  <img src="~assets/weight.png" >
                </q-avatar>
                  Weight:
              </div>
              <div class="col-12 q-pa-md">
                <q-avatar square>
                  <img src="~assets/bmi.png" >
                </q-avatar>
                  BMI:
              </div>
            </div>
          </q-card-section>
        </q-card>
        </div>

        <div class="col-12 col-md-1 text-transparent">
          _
        </div>

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
          <q-btn
            label="Yes"
            class="bg-green"
            v-close-popup
          />
          <q-btn
            label="No"
            class="text-red"
            flat
            v-close-popup
          />
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

export default {
  setup() {
    const $q = useQuasar();
    const store = useStore();
    const router = useRouter();

    const goal1 = ref(false)
    const goal2 = ref(false)
    const goal3 = ref(false)
    const calories = ref(false)
    const calculator = ref(null)
    const total = ref(null)
    const submitGoal = ref(false);

    const calc = ref ({
      fat: 0,
      carbo: 0,
      protein: 0,
      calo: 0,
      total: "",
    })

    function calculate (){
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

      onReset() {
        calc.value = {};
      },
    }
  }
}
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
    color : #3eb489;
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
</style>
