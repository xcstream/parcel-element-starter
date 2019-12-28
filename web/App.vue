<template lang="pug">
el-card.card
  div 秒表
  div.clock(@click='ck(msg)') {{msg}}
  div(v-for='v in list') {{v}} 
</template>
<style scoped>
div{
  text-align: center
}
.card{
  margin:14vw;
}
.clock {
  text-align: center;
  padding:1vw;
  border-radius: 1vw;
  margin:6vw;
  border:1px solid lightblue;
  cursor: pointer
}
</style>
<script>

const moment = require('moment')
export default {
  data() {
    return {
      msg: '',
      list: []
    }
  },
  mounted() {
    setInterval(()=>{
      this.msg = moment().format('YYYY-MM-DD HH:mm:ss SSS ')
    },1)
  },
  methods:{
    ck(msg){
      this.list.push(this.msg)
    }
  }
}
</script>