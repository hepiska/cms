<template lang="html">
   <div class="login">
     <el-form ref="form"  label-width="120px">
        <el-form-item label="email">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <el-form-item  label="Password">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
         <el-form-item label="">
            <el-button type="primary" @click='login()'>submit</el-button>
         </el-form-item>


      </el-form>
   </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    login(){
      let self=this
      this.axios.post('http://localhost:3000/api/login', {
        email:self.email,
        password:self.password
      })
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("token",response.data);
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="css">
</style>
