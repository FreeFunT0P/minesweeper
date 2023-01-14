<template>
  <div class="inner-cage" >
    <template v-if="isBombed">
      <div class="bomb">
      </div>
    </template>
    <template v-else>
      <template v-if="nearBombs>0">
        {{nearBombs}}
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "InnerCage",
  components: {
  },
  props: {
    isBombed: {
      type: Boolean,
      require: true,
    },
    nearBombs: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  created() {
  },
}
</script>

<style lang="scss">
.inner-cage {
  height: 20px;
  width: 20px;
  background-color: white;
  z-index: 998;
  font-size: 18px;
  text-align: center;
  border: 1px solid black;
  box-sizing: border-box;
}
.bomb {
  height: 100%;
  width: 100%;
  background-color: red;
}
</style>