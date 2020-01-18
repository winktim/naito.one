<template>
  <div lang="en">
    <h1>Meters</h1>

    <div
      id="meters-banner-outer"
      class="w-full h-40 sm:h-64 md:h-76 rounded-md shadow mb-8 overflow-hidden"
    >
      <div id="meters-banner" class="w-full h-full"></div>
    </div>

    <div
      class="text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"
    >
      <i class="material-icons mr-4">trending_down</i>
      <span>
        Having trouble
        <strong>decreasing</strong> your water, gas, oil or electricity
        <strong>consumption</strong>?
      </span>
    </div>
    <div
      class="text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"
    >
      <i class="material-icons mr-4">eco</i>
      <span>
        Maybe you are looking for a way to improve your
        <strong>environmental image</strong>?
      </span>
    </div>
    <div
      class="text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-8"
    >
      <i class="material-icons mr-4">notifications</i>
      <span>
        Or maybe you want to keep an eye on the
        <strong>temperature of your premises</strong>?
      </span>
    </div>

    <p>
      <strong>Meters</strong> was developped to answer your needs! <br />After
      installing sensors on your water, gas, oil or electricity meters, or
      installing temperature sensors in your premises,
      <strong>Meters</strong> allows you to monitor your data.
    </p>

    <h2>Explore</h2>

    <p>
      Your data is accessible at any time through a
      <strong>modern web interface</strong>, usable on smartphones, tablets and
      desktops. <br />On the web platform, you can view
      <strong>charts</strong> of the evolution of your temperatures or your
      consumption.
      <br />
      <a href="https://meters.ch" target="_blank" rel="noopener"
        >Go to the Meters platform</a
      >
    </p>

    <div class="text-gray-100 bg-gray-700 p-4 rounded-sm shadow-md mb-4">
      No more excuses now.
      <strong>You have access to all of the data</strong>. If there is an
      overconsumption of water <i>every Tuesday between 14h and 15h30</i>, you
      see it. All there's left is to find the cause of it.
    </div>

    <p>
      You can
      <strong>download your data</strong> in different formats in order to
      analyse it with your favourite tools, or to include it in presentations.
      <br />A <strong>dashboard</strong> allows you to save your most useful
      charts for quick access.
    </p>

    <figure>
      <img
        class="md:w-168"
        src="/images/meters-app-02.jpg"
        alt="Meters Dashboard"
      />
    </figure>

    <h2>Objectives</h2>

    <p>
      Is it hard to give yourself energy consumption objectives? Thanks to
      <strong>Meters</strong>, you can define concrete objectives monthly or
      weekly in order to be kept up to date by email on your progress.
    </p>

    <h2>Alerts</h2>

    <p>
      You want to be alerted when the temperature of a premise gets abnormally
      high or low?
      <strong>Meters</strong> provides you with an email alert tool.
    </p>

    <figure>
      <img
        class="md:w-168"
        src="/images/meters-app-03.jpg"
        alt="Meters Alerts"
      />
    </figure>

    <h2>For the big and small ones</h2>

    <p>
      <strong>Meters</strong> was conceived with
      <strong>small companies</strong> as well as
      <strong>big companies</strong> in mind. You have resources on multiple
      sites? You will be able to find them easily through an intelligent search.
    </p>

    <h2>Multi access</h2>

    <p>
      You need accesses for multiple of your employes? No problem. They will
      each have their dashboard, alerts and objectives.
    </p>

    <h2>Wiki</h2>

    <p>
      To learn all there is to know about the features of
      <strong>Meters</strong>, head to the Wiki
      <a :href="$store.getters.wikiUrl" target="_blank" rel="noopener"
        >by clicking here</a
      >.
    </p>

    <h2>Our clients include</h2>

    <clients></clients>

    <h2>How much does it cost</h2>

    <p>
      Interested in the product? You can use the tool below to
      <strong>estimate the total cost for your specific needs</strong>.
      <i>
        <br />Please note that the prices shown below do not count as a
        quotation and that actual prices may vary. <br />Please
        <a href="mailto:hello@naito.one">get in touch</a> to recieve a complete
        quotation for free.
      </i>
    </p>
  </div>
</template>
<script>
import Clients from '~/components/clients'
export default {
  components: { Clients },
}
</script>
