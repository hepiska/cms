<template lang="html">
   <div class="register">
     <el-form ref="form"  label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <el-form-item  label="Password">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
         <el-form-item label="">
            <el-button type="primary" @click='regiter()'>submit</el-button>
         </el-form-item>


      </el-form>
   </div>
</template>

<script>
export default {
  name:'register',
  data(){
    return{
      name:'',
      email:'',
      password:''
    }
  },
  methods:{
    regiter(){
      let self=this
      this.axios.post('http://localhost:3000/api/user', {
        name:self.name,
        email:self.email,
        password:self.password
      })
      .then(function (response) {
        //console.log(response.data);
        alert(response.data)
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
