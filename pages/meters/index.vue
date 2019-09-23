<template>
  <div>
    <section class="mt-4 marked">
      <component :is="localeContent"></component>
    </section>
    <section>
      <form class="flex flex-col items-center" action="#">
        <div class="md:w-1/2 flex flex-col">
          <!-- temp -->
          <label for="num-temp-sensors" v-text="$t('pages.meters.how_many_temp')"></label>
          <div class="flex items-center">
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
          <span class="text-sm mt-1">Rabais par sonde: CHF -10</span>
        </div>
      </form>

      <div class="flex justify-center text-gray-900">
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
          :href="`mailto:hello@naito.one?subject=${$t('pages.meters.offer_email_subject')}`"
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

    totalSensors() {
      return Number(this.numTempSensors) + Number(this.numMbusSensors)
    },
    totalMonths() {
      return this.serviceYears * 12
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
    sensorDiscount() {
      return (
        (this.totalSensors < 5 ? 0 : this.totalSensors < 10 ? -10 : -20) *
        this.totalSensors
      )
    },
    serviceDiscount() {
      return (
        (this.serviceYears < 2 ? 0 : this.serviceYears < 3 ? -1 : -1.5) *
        this.totalSensors *
        this.totalMonths
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
        (this.serviceCost + this.serviceDiscount) /
        this.totalMonths
      ).toLocaleString(this.$numberLocale, oneDecimalFormat)
    },
  },
}
</script>
