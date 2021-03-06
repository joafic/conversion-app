<template>
<div class="p-grid">
	<div class="p-col-5 p-offset-4">
    <Card class="p-shadow-10">
      <template #title>
          <div class="p-text-center">Conversão de valores</div>
      </template>
      <template #subtitle>
        
      </template>
      <template #content>
        <div class="p-grid">
          <div class="p-col-6 p-sm-3 p-lg-8 p-text-right">
            <InputSwitch v-model="checked" @change="convertLabels"/>
          </div>
          <div class="p-col-6 p-sm-9 p-lg-4 p-text-left">
            Converter <b>{{convertFrom.name}}</b> para <b>{{convertTo.name}}</b>
          </div>
        </div>
        <div class="p-grid"> 
          <div class="p-col-5 p-text-left">
            <h4>Valor em {{convertFrom.name}}</h4>
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon ">{{convertFrom.symbol}}</span>
              <InputText :disabled="result" type="text" :placeholder=convertFrom.name class="p-inputtext-sm" v-model="convertFrom.value" />
            </div>
          </div>
          <div class="p-col-5 p-offset-2">
            <h4>Cotação do {{convertTo.name}}</h4>
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon ">{{convertTo.symbol}}</span>
              <InputText type="text" :disabled="result" :placeholder=convertTo.name class="p-inputtext-sm" v-model="convertTo.value" />
            </div>
          </div>
        </div>
        <div class="p-grid">
          <div class="p-col-5">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon ">{{convertFrom.symbol}}</span>
              <InputText type="text" disabled :placeholder=convertFrom.value class="p-inputtext-sm" />
            </div>
          </div> 
          <div class="p-col-2 p-text-center">
            <i class=" pi pi-angle-double-right" style="fontSize: 1.5rem; padding-top: .4rem"></i>
          </div>
          <div class="p-col-5">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon ">{{convertTo.symbol}}</span>
              <InputText disabled type="text" :placeholder=result class="p-inputtext-sm"/>
            </div>
          </div>
        </div>
        <div v-if="result" class="p-col-12 p-text-center p-text-bold">
          Com {{`${convertFrom.symbol}${convertFrom.value}`}} 
          {{convertFrom.name == "Real" ? (convertFrom.value > 1? 'reais': 'real')
          : (convertFrom.value > 1? 'dólares': 'dólar')}} 
           é possível comprar {{`${convertTo.symbol}${result}`}} {{convertTo.name == "Real" ? (result > 1? 'reais': 'real')
          : (result > 1? 'dólares': 'dólar')}},
           utilizando a cotação de {{`${convertTo.symbol}${convertTo.value}`}} 
           {{convertFrom.name == "Real" ? (convertFrom.value > 1? 'reais': 'real')
          : (convertFrom.value > 1? 'dólares': 'dólar')}}. 
        </div>
      </template>
      <template #footer>
          <Button :disabled="!convertFrom.value || !convertTo.value " icon="pi pi-sort-alt" label="Converter" @click="convert"/>
          <Button icon="pi pi-circle-off" label="Limpar" @click="reset" class="p-button-secondary " style="margin-left: .5em" />
      </template>
    </Card>
  </div>
</div>


</template>

<script>

export default {
  data(){
    return {
      checked: true,
      convertFrom: {name:"Real", symbol: "R$", value: null},
      convertTo: {name:"Dólar", symbol: "$", value: null},
      result: 0,
    }
  },
  methods:{
    calculate(){
      
    },
    convertLabels(){
     if (this.checked) {
       this.convertFrom.name = "Real";
       this.convertFrom.symbol = "R$"

       this.convertTo.name = "Dólar";
       this.convertTo.symbol = "$"
     } else {
       this.convertFrom.name = "Dólar";
       this.convertFrom.symbol = "$"

       this.convertTo.name = "Real";
       this.convertTo.symbol = "R$"
     }
     if (this.convertFrom.value && this.convertTo.value) {
       this.convert()
     }
    },
    convert(){ 
      this.result = eval(this.convertFrom.value + (this.checked? '/': '*')  +this.convertTo.value).toFixed(2); 
       
    },
    reset(){
      this.checked = true;
      this.result = null;
      this.convertFrom.name = "Real";
      this.convertFrom.symbol = "R$";
      this.convertFrom.value = null;

      this.convertTo.name = "Dólar";
      this.convertTo.symbol = "$";
      this.convertTo.value = null;
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
