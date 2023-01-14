<template>
  <div v-if="isHidden" :class="['outer-cage', 'is-hidden']" @click.right.prevent>
  </div>
  <div
    v-else
    :class="['outer-cage', isFlag ? 'flag' : '']"
    @click.left="hideCage"
    @click.right.prevent="toggleFlag"
  >
  </div>
</template>


<script>

export default {
  name: 'OuterCage',
  components: {
  },
  props: {
    id: {
      type: Number,
      require: true,
    },
    emptyOpen: {
      type: Array,
      require: true,
    },
    isBombed: {
      type: Boolean,
      require: true,
    },
    nearBombs: {
      type: Number,
      require: true,
    },
    gameOn: {
      type: Boolean,
      require: true,
    },
    gameStartData: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      isFlag: false,
      isHidden: false,
    }
  },
  computed: {
  },
  methods: {
    hideCage() {
      if (!this.isFlag && this.gameOn) {
        this.isHidden = true;
        this.$emit('clickOnEmpty', this.id)
        if (this.isBombed) {
          this.$emit('gameOver')
        }
      }
    },
    toggleFlag() {
      if (this.gameOn) this.isFlag = !this.isFlag;
      console.log(this.$store.state.gameStartData)
    },
    checkNeighbours() {
      if (this.emptyOpen.includes(this.id) && !this.isHidden && !this.isFlag) {
        this.isHidden = true;
        this.$emit('cont')
      }
    },
  },
  watch: {
    emptyOpen: {
      handler() {
        this.checkNeighbours()
      },
      deep: true,
    },
    gameStartData: {
      handler() {
        this.isHidden = false
        this.isFlag = false
      },
    },
  },
  created() {
  },
}

</script>


<style lang="scss">

.outer-cage {
  height: 20px;
  width: 20px;
  background-color: white;
  box-shadow: inset 0 0 2px 2px rgba(0,0,0,0.5);
  cursor: pointer;
  z-index: 999;
  //opacity: 0.7;

  &.flag {
    background-image: url(@/assets/flag.png);
    background-size: contain;
  }

  &.is-hidden {
    opacity: 0;
  }

  &:hover {
    background-color: gray;
    transition: background-color 0.5s ease;
  }
}

</style>
