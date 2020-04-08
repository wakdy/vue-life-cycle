<template>
  <div id="list">
    列表{{ message }}
    {{title}}
    
  </div>
</template>
<script>
export default {
  props:['title'],

  data() {
    return {
      message: 'list msg',
    };
  },

  beforeCreate() {
    console.log('============= List组件beforeCreate ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  created() {
    console.log('============= List组件created ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  beforeMount() {
    console.log('============= List组件beforeMount ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(this.$el);

    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  render: (h) => {
    console.log('============= List组件render ============');
    return h(App);
  },
  mounted() {
    console.log('============= List组件mounted ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(this.$el);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  beforeUpdate() {
    console.log('============= List组件beforeUpdate ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  updated() {
    console.log('============= List组件updated ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },

  beforeDestroy() {
    console.log('============= List组件beforeDestroy ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },

  destroyed() {
    console.log('============= List组件destroyed ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
};
</script>
