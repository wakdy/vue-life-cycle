<template>
  <div id="container">
    <h1>苹果{{ message }}</h1>

    <button @click="handleModify">Modify Val</button>
    <!-- <Page :title="title"></Page> -->
  </div>
</template>
<script>
import Page from './Page';
export default {
  data() {
    return {
      show: true,
      message: 0,
      title: '标题',
    };
  },
  components: {
    Page,
  },
  methods: {

    handleModify() {
      for (let i = 0; i <= 100; i++) {
        this.message = i;
      }
    },
  },

  beforeCreate() {
    console.log('============= App组件beforeCreate ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  created() {
    console.log('============= App组件created ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  beforeMount() {
    console.log('============= App组件beforeMount ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(this.$el);

    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  render: (h) => {
    console.log('============= App组件render ============');
    return h(App);
  },
  mounted() {
    console.log('============= App组件mounted ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(this.$el);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  beforeUpdate() {
    console.log('============= App组件beforeUpdate ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  updated() {
    console.log('============= App组件updated ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },

  beforeDestroy() {
    console.log('============= App组件beforeDestroy ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },

  destroyed() {
    console.log('============= App组件destroyed ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
};
</script>
