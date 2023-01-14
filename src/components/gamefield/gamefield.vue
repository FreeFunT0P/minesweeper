<template>
  <div class="border">
    <div v-bind:style="styleObjectGameField">
      <div v-bind:style="styleObjectoutfield">
        <template v-for="row of cageArr">
          <template v-for="sell of row">
            <outer-cage
              :key="sell.id"
              :id="sell.id"
              :isBombed="sell.isBombed"
              :nearBombs="sell.nearBombs"
              :emptyOpen="emptyOpen"
              :gameOn="gameOn"
              :gameStartData="gameStartData"
              @clickOnEmpty="clickOnEmpty"
              @gameOver = "gameOver"
              @cont = "counter--"
            />
          </template>
        </template>
      </div>
      <div v-bind:style="styleObjectinnerfield">
        <template v-for="row of cageArr">
          <template v-for="sell of row">
            <inner-cage v-bind:key="sell.id" :is-bombed="sell.isBombed" :near-bombs="sell.nearBombs" />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import OuterCage from "@/components/gamefield/outercage";
import InnerCage from "@/components/gamefield/innercage";

export default {
  name: 'GameField',
  components: {
    InnerCage,
    OuterCage
  },
  props: {
    gameStartData: {
      type: Boolean,
      require: true,
    },
    value: {
      type: Number,
      require: true,
    }
  },
  data() {
    return {
      cageArr: [],
      emptyOpen: [],
      gameOn: true,
      styleObjectGameField: {
        height: '300px',
        width: '300px',
        backgroundColor: 'white',
      },
      styleObjectoutfield: {
        height: '300px',
        width: '300px',
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
      },
      styleObjectinnerfield: {
        height: '300px',
        width: '300px',
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        bottom: '300px',
      },
      counter: 0,
    }
  },
  computed: {
  },
  methods: {
    init() {
      switch(this.value) {
        case 10 : this.counter = 80
          break;
        case 15 : this.counter = 195
          break;
        case 20 : this.counter = 360
          break;
      }
      let idCont = 0;
      for (let i = 0; i < this.value; i++) {
        this.cageArr[i] = [];
        for (let j = 0; j < this.value; j++) {
          idCont++;
          this.cageArr[i].push(
              {id: idCont,
                isBombed: false,
                neighbours: [],
                nearBombs: 0}
          );
        }
      }
      let bombArr = new Set;
      while (bombArr.size < (this.value*this.value/100*20)) {
        let random = Math.round(Math.random() * (this.value*this.value));
        bombArr.add(random);
      }
      for (let item of this.cageArr) {
        for (let obj of item) {
          if (bombArr.has(obj.id)) {
            obj.isBombed = true;
          }
          if (item?.[item.indexOf(obj)-1]) obj.neighbours.push(item[item.indexOf(obj)-1]);
          if (item?.[item.indexOf(obj)+1]) obj.neighbours.push(item[item.indexOf(obj)+1]);
          if (this.cageArr?.[this.cageArr.indexOf(item)-1]?.[item.indexOf(obj)]) obj.neighbours.push(this.cageArr[this.cageArr.indexOf(item)-1][item.indexOf(obj)]);
          if (this.cageArr?.[this.cageArr.indexOf(item)-1]?.[item.indexOf(obj)-1]) obj.neighbours.push(this.cageArr[this.cageArr.indexOf(item)-1][item.indexOf(obj)-1]);
          if (this.cageArr?.[this.cageArr.indexOf(item)-1]?.[item.indexOf(obj)+1]) obj.neighbours.push(this.cageArr[this.cageArr.indexOf(item)-1][item.indexOf(obj)+1]);
          if (this.cageArr?.[this.cageArr.indexOf(item)+1]?.[item.indexOf(obj)]) obj.neighbours.push(this.cageArr[this.cageArr.indexOf(item)+1][item.indexOf(obj)]);
          if (this.cageArr?.[this.cageArr.indexOf(item)+1]?.[item.indexOf(obj)-1]) obj.neighbours.push(this.cageArr[this.cageArr.indexOf(item)+1][item.indexOf(obj)-1]);
          if (this.cageArr?.[this.cageArr.indexOf(item)+1]?.[item.indexOf(obj)+1]) obj.neighbours.push(this.cageArr[this.cageArr.indexOf(item)+1][item.indexOf(obj)+1]);
        }
      }
      for (let item of this.cageArr) {
        for (let obj of item) {
          let cont = 0

          for (let i of obj.neighbours) {
            if (i.isBombed) cont++
          }
          obj.nearBombs = cont
        }
      }
    },

    clickOnEmpty(id) {
      this.$emit('clickOnEmpty')
      let value = ''
      this.cageArr.forEach((row) => {
        row.forEach((elem) => {
          if (elem.id === id) value = elem
        })
      })
      if (!value.isBombed) this.counter--
      if (value.isBombed || value.nearBombs > 0) return
      let temp = []
      function createEmptyArr(obj) {
        temp.push(obj.id)
        if (obj.isBombed || obj.nearBombs > 0) return
        let neighbours = obj.neighbours.filter(val => !temp.includes(val.id))
        for (let val of neighbours) {
          createEmptyArr(val)
        }
      }
      createEmptyArr(value)
      this.emptyOpen = temp
    },
    gameOver() {
      this.$emit('gameOver')
      console.log('gameOver')
      this.gameOn = false
    },
  },
  watch: {
    gameStartData: {
      handler() {
        this.cageArr = []
        this.init()
        this.gameOn = true
      },
    },
    value: {
      handler() {
        this.styleObjectGameField.width = this.value * 20 + 'px'
        this.styleObjectGameField.height = this.value * 20 + 'px'
        this.styleObjectoutfield.width = this.value * 20 + 'px'
        this.styleObjectoutfield.height = this.value * 20 + 'px'
        this.styleObjectinnerfield.width = this.value * 20 + 'px'
        this.styleObjectinnerfield.height = this.value * 20 + 'px'
        this.styleObjectinnerfield.bottom = this.value * 20 + 'px'
        this.$emit('changeSize')
      },
    },
    counter: {
      handler() {
        if (this.counter === 0) {
          this.$emit('gameOver')
          this.gameOn = false
        }
      }
    },
  },
  created() {
    this.init()
  },
}
</script>

<style lang="scss">
.border {
  padding: 10px 10px 10px 10px;
  border: black 1px solid;
  height: auto;
  width: auto;
  background-color: gray;
}
</style>