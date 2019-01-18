<template>
  <div class="home">
    <HelloWorld v-model="text"></HelloWorld>
    <h1>爬虫boss直聘网站前端岗位</h1>
    <button @click="next">下一页</button>
    <button @click="reduce">上一页</button>
    <ul>
      <li v-for="(item,index) in list" v-bind:key="index">
        <p class="name">公司名称：{{item.name}}</p>&nbsp;&nbsp;&nbsp;&nbsp;
        <p class="price">薪资：{{item.paice}}</p>&nbsp;&nbsp;&nbsp;&nbsp;
        <p class="adderss">地址：{{item.address}}</p>
      </li>
    </ul>
    <p>{{text}}</p>
    <input type="text" v-model="text">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {get,getGz} from '@/api/home'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      list:[],
      page:1,
      text:''
    }
  },
  methods:{
    next(){
      this.page ++;
      this.get()
    },
    reduce(){
      if(!this.page)return;
      this.page --;
      this.get()
    },
    get(){
      get({page:this.page}).then(result => {
        this.list = new Set(result)
      })
    }
  },
  mounted(){
    // this.get()


    // getGz({}).then(result =>{
    //   console.log(result)
    //   this.text = result
    // })


    // console.log(typeof NaN)
    // console.log(typeof null)
    // console.log(typeof Number)
    // console.log(typeof String)
    // console.log(typeof Boolean)
    // console.log(typeof Array)
    // console.log(typeof Function)
    // console.log(typeof undefined)
    // console.log(typeof isNaN)
    // console.log(typeof 1)
    // console.log(typeof {})
    // console.log(typeof [])

    var obj = {
      name : 20,
      inner : {
        name : 30,
        fn : function(){
          console.log(this.name)
        }
      }
    }

    console.log(obj.inner.fn())


  }
}
</script>
<style lang="scss" scoped>
  .home {
    text-align: center;
    button{
      width:80px;
      margin: 20px;
      border: none;
      background: #3498ff;
      height: 30px;
      color: white;
      cursor:pointer;
    }
    ul{
      list-style: none;
      li{
        display: flex;
        align-items: center;
        justify-content: center;
        p{
          font-size: 16px;
        }
        p.price{
          color: red;
        }
      }
    }
  }
</style>
