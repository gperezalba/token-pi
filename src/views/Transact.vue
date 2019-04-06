<template>
  <div id="app">
    <v-app id="inspire">
      <v-parallax height="900" src="http://www.andanaquirologia.com/wp-content/uploads/2017/03/numerologia-en-pamplona-la-ciencia-de-los-numeros.jpg">
        <v-container grid-list-xl>
          <v-layout align-center column justify-center>
            <v-flex
              v-for="elevation in elevations"
              :key="elevation"
              xs12
              md4
            >
                <v-sheet
                  :elevation="elevation"
                  class="mx-auto"
                  height="300"
                  width="620"
                >
                  <form style="margin: 50px; margin-top: 80px">
                    <v-text-field
                      v-model="from"
                      label="From"
                      data-vv-name="from"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="to"
                      label="To"
                      data-vv-name="to"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="amount"
                      label="Amount"
                      data-vv-name="amount"
                      required
                    ></v-text-field>
                    <v-btn @click="submit">Send</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                  </form>
                </v-sheet>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </v-app>
  </div>
</template>


<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      from: '',
      to: '',
      amount: '',
      elevations: [12],
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.from = ''
        this.to = ''
        this.amount = ''
      }
    }
  }
</script>
