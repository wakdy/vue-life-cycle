// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

new Vue({
    el:'#app',
  data() {
    return {
      message: '生命周期',
    };
  },
  
  beforeCreate() {
      console.log('============= beforeCreate ============');
      console.log(`this.$el: ${this.$el}`);
      console.log(`this.$data: ${this.$data}`);
      console.log(`this.message: ${this.message}`);
  },
  created() {
    console.log('============= created ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);

  },
  beforeMount() {
    console.log('============= beforeMount ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(this.$el);

    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);

  },
  render: (h) => {
      console.log('============= render ============');
    return h(App);
  },
  mounted() {
    console.log('============= mounted ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(this.$el);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);

  },
  beforeUpdate() {
    console.log('============= beforeUpdate ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  updated() {
    console.log('============= updated ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },

  beforeDestroy() {
    console.log('============= beforeDestroy ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },

  destroyed() {
    console.log('============= destroyed ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
});
