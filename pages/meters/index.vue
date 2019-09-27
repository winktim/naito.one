<template>
  <div>
    <section class="mt-4 marked">
      <component :is="localeContent"></component>
    </section>
    <section>
      <form class="flex flex-col items-center mb-4" action="#">
        <div class="md:w-1/2 flex flex-col">
          <!-- service plan -->
          <p v-text="$t('pages.meters.years.service_duration')"></p>
          <div class="flex flex-col lg:flex-row">
            <!-- 3 -->
            <div class="flex items-center">
              <label class="material-radio text-naito-green-100" for="service-three-input">
                <input
                  type="radio"
                  id="service-three-input"
                  value="3"
                  name="service-input"
                  v-model="serviceYears"
                />
                <div class="material-radio-fake"></div>
              </label>
              <label
                class="flex-grow select-none font-bold"
                for="service-three-input"
                v-text="$t('pages.meters.years.three')"
              ></label>
            </div>

            <!-- 2 -->
            <div class="flex items-center">
              <label class="material-radio text-naito-green-100" for="service-two-input">
                <input
                  type="radio"
                  id="service-two-input"
                  value="2"
                  name="service-input"
                  v-model="serviceYears"
                />
                <div class="material-radio-fake"></div>
              </label>
              <label
                class="flex-grow select-none font-bold"
                for="service-two-input"
                v-text="$t('pages.meters.years.two')"
              ></label>
            </div>

            <!-- 1 -->
            <div class="flex items-center">
              <label class="material-radio text-naito-green-100" for="service-one-input">
                <input
                  type="radio"
                  id="service-one-input"
                  value="1"
                  name="service-input"
                  v-model="serviceYears"
                />
                <div class="material-radio-fake"></div>
              </label>
              <label
                class="flex-grow select-none font-bold"
                for="service-one-input"
                v-text="$t('pages.meters.years.one')"
              ></label>
            </div>
          </div>
          <!-- temp -->
          <label for="num-temp-sensors" v-text="$t('pages.meters.how_many_temp')"></label>
          <div class="flex items-center mb-2">
            <div class="range-slider flex-grow">
              <input
                class="range-slider__range w-full"
                id="num-temp-sensors"
                name="num-temp-sensors"
                type="range"
                min="0"
                max="15"
                v-model="numTempSensors"
              />
            </div>
            <span
              class="ml-4 font-bold w-1/4 text-right"
              v-text="$tc('pages.meters.sensors', numTempSensors, {count: numTempSensors})"
            ></span>
          </div>
          <!-- mbus -->
          <label for="num-mbus-sensors" v-text="$t('pages.meters.how_many_mbus')"></label>
          <div class="flex items-center">
            <div class="range-slider flex-grow">
              <input
                class="range-slider__range w-full"
                id="num-mbus-sensors"
                name="num-mbus-sensors"
                type="range"
                min="0"
                max="15"
                v-model="numMbusSensors"
              />
            </div>
            <span
              class="ml-4 font-bold w-1/4 text-right"
              v-text="$tc('pages.meters.sensors', numMbusSensors, {count: numMbusSensors})"
            ></span>
          </div>
        </div>
      </form>

      <!-- discounts -->
      <div class="flex flex-col lg:flex-row justify-center">
        <span
          v-if="sensorDiscountPlan < 0"
          class="title-on-click text-sm my-1 mx-2 py-2 px-4 rounded-full bg-gray-700 text-gray-100 font-bold hover-action"
          v-text="$t('pages.meters.discounts.hardware', {amount: -sensorDiscountPlan})"
          :title="$t('pages.meters.discounts_explained.hardware')"
        ></span>
        <span
          v-if="(serviceDiscountSoftwarePlan + serviceDiscountHardwarePlan) < 0"
          class="title-on-click text-sm my-1 mx-2 py-2 px-4 rounded-full bg-gray-700 text-gray-100 font-bold hover-action"
          v-text="$t('pages.meters.discounts.service', {amount: -serviceDiscountSoftwarePlan - serviceDiscountHardwarePlan})"
          :title="$t('pages.meters.discounts_explained.service')"
        ></span>
      </div>

      <div class="flex justify-center text-gray-900 mt-2">
        <div class="w-56 flex flex-col rounded-md shadow-lg overflow-hidden">
          <div class="bg-naito-yellow-100 flex items-center justify-center shadow-md">
            <span class="font-heading py-8 text-2xl">CHF {{initialCost}}</span>
          </div>
          <div class="bg-naito-yellow-200 flex-grow flex items-center justify-center relative">
            <span
              class="absolute top-0 left-0 w-full py-2 text-center text-xl"
              v-text="$t('pages.meters.then')"
            ></span>
            <span
              class="font-heading py-12 text-2xl"
              v-text="$t('pages.meters.per_month', {amount: serviceCostPerMonth})"
            ></span>
          </div>
        </div>
      </div>

      <div class="flex justify-center my-8">
        <a
          :href="offerEmailString"
          class="action w-full sm:w-72 font-medium bg-naito-green-200 text-gray-100"
          v-text="$t('pages.meters.offer')"
        ></a>
      </div>

      <p class="text-gray-400 text-sm" v-text="$t('pages.meters.notice')"></p>
    </section>
    <a
      :href="`mailto:hello@naito.one?subject=${$t('pages.meters.demo_access_email_subject')}`"
      class="fixed w-full h-12 sm:w-auto sm:h-auto bottom-0 right-0 sm:mb-8 sm:mr-8 sm:p-4 sm:px-6 sm:rounded-full simple-action shadow-lg font-medium bg-naito-yellow-200 text-gray-900 flex items-center"
    >
      <i class="material-icons text-lg mr-2">web</i>
      <span v-text="$t('pages.meters.demo_access')"></span>
    </a>
  </div>
</template>
<script>
import { noDecimalFormat, oneDecimalFormat } from '~/assets/utils'
import en from '~/locales/en/meters'
import fr from '~/locales/fr/meters'

const content = {
  en,
  fr,
}

export default {
  head() {
    return {
      title: `${this.title} - Naito One`,
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.meters.description'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.meters.keywords'),
        },
      ],
    }
  },
  data() {
    return {
      numTempSensors: 1,
      numMbusSensors: 2,
      serviceYears: 3,
    }
  },
  computed: {
    title() {
      return this.$t('pages.meters.title')
    },
    localeContent() {
      return content[this.$i18n.locale]
    },

    offerEmailString() {
      const subject = this.$t('pages.meters.offer_email_subject')
      const body = this.$t('pages.meters.offer_email_body', {
        service: this.serviceYears,
        temp: this.numTempSensors,
        mbus: this.numMbusSensors,
      })

      return `mailto:${this.$store.state.email}?subject=${subject}&body=${body}`.replace(
        /\n/g,
        '%0D%0A'
      )
    },

    totalSensors() {
      return Number(this.numTempSensors) + Number(this.numMbusSensors)
    },
    totalMonths() {
      return Number(this.serviceYears) * 12
    },

    tempSensorsCost() {
      return Number(this.numTempSensors) * 120
    },
    mbusSensosCost() {
      return Number(this.numMbusSensors) * 150
    },
    serviceCost() {
      return this.totalMonths * this.totalSensors * 10
    },
    installCost() {
      return this.totalSensors > 0 ? 240 + (this.totalSensors - 1) * 80 : 0
    },
    sensorDiscountPlan() {
      return this.totalSensors < 5 ? 0 : this.totalSensors < 10 ? -10 : -20
    },
    sensorDiscount() {
      return this.sensorDiscountPlan * this.totalSensors
    },
    serviceDiscountSoftwarePlan() {
      return Number(this.serviceYears) < 2
        ? 0
        : Number(this.serviceYears) < 3
        ? -1
        : -1.5
    },
    serviceDiscountSoftware() {
      return (
        this.serviceDiscountSoftwarePlan * this.totalSensors * this.totalMonths
      )
    },
    serviceDiscountHardwarePlan() {
      return this.totalSensors < 3
        ? 0
        : this.totalSensors < 6
        ? -1
        : this.totalSensors < 12
        ? -1.5
        : -2
    },
    serviceDiscountHardware() {
      return (
        this.serviceDiscountHardwarePlan * this.totalSensors * this.totalMonths
      )
    },

    initialCost() {
      return (
        this.tempSensorsCost +
        this.mbusSensosCost +
        this.installCost +
        this.sensorDiscount
      ).toLocaleString(this.$numberLocale, noDecimalFormat)
    },
    serviceCostPerMonth() {
      return (
        (this.serviceCost +
          this.serviceDiscountSoftware +
          this.serviceDiscountHardware) /
        this.totalMonths
      ).toLocaleString(this.$numberLocale, oneDecimalFormat)
    },
  },
}
</script>
