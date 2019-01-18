<template lang="pug">
  <div class="hello">
    .content 好好
      p 你呢
      input(v-model='msg')
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    value: {
      type:String,
      default:function(){
        return ''
      }
    }
  },
  computed:{
    msg:{
      get:function(){
        return this.value
      },
      set:function(val){
        this.$emit('input',val)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@function torem($px){
  @return $px / 37.5 * 1rem
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
