<template>
  <div id="page">页面{{ message }}
{{title}}

       <List :title="title"></List>
  </div>
 
</template>
<script>
import List from "./List";
export default {
  props:['title'],
  data() {
    
    return {
  
      message: 'page msg',
    };
  },
  components:{
      List


  },

  beforeCreate() {
    console.log('============= Page组件beforeCreate ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  created() {
    console.log('============= Page组件created ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  beforeMount() {
    console.log('============= Page组件beforeMount ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(this.$el);

    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  render: (h) => {
    console.log('============= Page组件render ============');
    return h(App);
  },
  mounted() {
    console.log('============= Page组件mounted ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(this.$el);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  beforeUpdate() {
    console.log('============= Page组件beforeUpdate ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
  updated() {
    console.log('============= Page组件updated ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },

  beforeDestroy() {
    console.log('============= Page组件beforeDestroy ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },

  destroyed() {
    console.log('============= Page组件destroyed ============');
    console.log(`this.$el: ${this.$el}`);
    console.log(`this.$data: ${this.$data}`);
    console.log(`this.message: ${this.message}`);
  },
};
</script>
