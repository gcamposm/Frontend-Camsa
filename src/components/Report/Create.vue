<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs10 md8 lg8>

         <v-row>
           <v-flex xs5 md4 lg4>
            <v-select
            :items="drivers"
            label="Chofer"
            v-model=report.nameDriver
          ></v-select>
          </v-flex>
          <v-flex xs2 md2 lg2>
          </v-flex>
          <v-flex xs5 md4 lg4>
              <v-text-field
                name="driver"
                label="Chofer"
                v-model=report.nameDriver
              ></v-text-field>
          </v-flex>
        </v-row>

        <v-row>
           <v-flex xs5 md4 lg4>
            <v-select
            :items="destinys"
            label="Destino"
            v-model=report.destiny
          ></v-select>
          </v-flex>
          <v-flex xs2 md2 lg2>
          </v-flex>
          <v-flex xs5 md4 lg4>
              <v-text-field
                name="driver"
                label="Destino"
                v-model=report.destiny
              ></v-text-field>
          </v-flex>
        </v-row>

        <v-row xs6 md6 lg6>
            <v-text-field
              name="amount"
              label="Monto"
              prefix="$"
              v-model=report.amount
              @blur="validate()"
            ></v-text-field>
        </v-row>

        <v-row>
           <v-flex xs5 md4 lg4>
             <v-checkbox
          v-model=report.received
          label="Recibido"
        ></v-checkbox>
          </v-flex>
          <v-flex xs2 md2 lg2>
          </v-flex>
          <v-flex xs5 md4 lg4>
            <v-checkbox
            v-model=report.exchange
            label="Vuelto"
          ></v-checkbox>
          </v-flex>
        </v-row>

        <v-row justify="center" xs6 md6 lg6>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model=report.date
                label="Fecha"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model=report.date no-title scrollable>
              <div class="flex-grow-1"></div>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="menu = false">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-row>
        
        <v-btn color="success" @click="createReport()">Guardar</v-btn>
      </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'report-create',
  data () {
    return {
      amount: 0,
      menu: false,
      report : {},
      reports: [],
      destinys: ['Rancagua', 'San Vicente Tagua Tagua', 'Los Andes', 'San Antonio'],
      drivers: ['Hernan Fuentes', 'Francisco Saavedra', 'Ricardo Paillan', 'Alexis Duran', 'Ronny Campos', 'Adrian Gongora', 'William Martínez', 'Patricio Romero', 'Marcelo Campos', 'Juan Alvarez'],
    }
  },
  methods: {
    getAllReports(){
      axios
      .get(this.serverURL + '/reports/')
      .then(response => {
        this.reports = response.data
      })
    },
    createReport(){
      this.report.amount = '$' + this.report.amount
      axios
      .post(this.serverURL + '/reports/create', this.report)
      .then(response => {
        this.getAllReports()
        this.report.nameDriver=null
        this.report.destiny=null
        this.report.amount=null
        this.report.received=null
        this.report.exchange=null
        this.report.date=null
      }).catch(e => {
        console.log(e.response)
      })
    },
    validate(){
      if(this.report.amount>999)
      {
        var num = this.report.amount
        num = num.toString().split('').reverse()
        var reves = []
        reves.push(num[0])
        reves.push(num[1])
        reves.push(num[2])
        reves.push('.')
        for (var i = 3; i <= num.length; i++) {
          reves.push(num[i])
        }
        reves = reves.reverse().join('')
        this.report.amount = reves
      }
    },
    reportAmount(){
      this.report.amount
    }
  },
  computed: {
    ...mapState([
      'serverURL'
    ])
  }
}
</script>