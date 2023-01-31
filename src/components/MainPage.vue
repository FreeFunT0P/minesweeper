<template>
  <div class="main-page">
    <template>
      <el-select v-model="value" placeholder="Select level" size="mini" class="select">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </template>
    <a class="timer">{{zfill(hour)}}:{{zfill(min)}}:{{zfill(sec)}}</a>
    <game-field
        @clickOnEmpty="clickOnEmpty"
        @gameOver="gameOver"
        @changeSize="startGame"
        :value="value"
        :gameStartData="gameStartData"
    />
    <el-button size="small" type="info" id="start" @click="startGame">Game restart</el-button>
  </div>
</template>

<script>

import GameField from "@/components/gamefield/gamefield"


// 12345


export default {
  name: 'MainPage',
  components: {GameField},
  props: {
  },
  data() {
    return {
      sec: 0,
      min: 0,
      hour: 0,
      timer: null,
      gameStartData: false,
      options: [{
        value: 10,
        label: 'Easy'
      }, {
        value: 15,
        label: 'Medium'
      }, {
        value: 20,
        label: 'Hard'
      }],
      value: 15,
    }
  },
  provide() {
    return {
    }
  },
  computed: {
  },
  methods: {
    clickOnEmpty() {
      this.play()
    },
    zfill(number){
      return number.toString().padStart(2,'0')
    },
    play(){
      if(this.timer === null){
        this.playing()
        this.timer = setInterval(()=> this.playing(), 1000)
      }
    },
    gameOver(){
      clearInterval(this.timer)
      this.timer = null
    },
    startGame(){
      this.sec = 0
      this.min = 0
      this.hour = 0
      this.gameStartData = !this.gameStartData
      // store.commit('changeGameStartData')
      clearInterval(this.timer)
      this.timer = null
    },
    playing(){
      this.sec++
      if(this.sec >= 59){
        this.sec = 0;
        this.min++;
      }
      if(this.min >= 59){
        this.min = 0;
        this.hour++;
      }
    },
  },
  watch: {
  },
  created() {
  },
}
</script>

<style lang="scss">
.main-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
}
#start {
  margin-top: 20px;
}
.timer {
  color: black;
  font-size: 20px;
  position: relative;
  left: 125px;
  bottom: 5px;
}
.select{
  position: relative;
  right: 65px;
  top: 20px;
}
</style>