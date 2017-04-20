<template lang="html">
   <div class="home">
   <div class="homeheader">
     <el-row :gutter="20" class="menu">
      <el-col :span="6">
      <div class="">
        <el-popover
          ref="popoverNewArticle"
          placement="bottom"
          width="500"
          trigger="click">
          <newarticle></newarticle>
        </el-popover>
        <el-button type="primary" v-popover:popoverNewArticle>new article</el-button>
      </div>
        </el-col>
      <el-col :span="6">
        <div class="">
          <el-popover
            ref="popoverRegister"
            placement="bottom"
            width="800"
            trigger="click">
            <register></register>
          </el-popover>
          <el-button type="primary" v-popover:popoverRegister>Register</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="">
          <el-popover
            ref="popoverLogin"
            placement="bottom"
            width="500"
            trigger="click">
           <login></login>
          </el-popover>
          <el-button type="primary" v-popover:popoverLogin>login</el-button>
        </div>
      </el-col>
      <el-col :span="6"><el-button type="primary">logout</el-button></el-col>
    </el-row>
   </div>


   </div>
</template>

<script>
import Register from './register'
import Login from './login'
import Newarticle from './newarticle'
export default {
  name:'home',
  components:{
    Register,
    Login,
    Newarticle
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="css" scoped>
.homeheader{
  height: 60px;
  background-color: #697282;
}
.menu{
  padding: 10px;
}
</style>
