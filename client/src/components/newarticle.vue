<template lang="html">
   <div class="newarticle">
     <el-form ref="form"  label-width="120px">
        <el-form-item label="title">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item  label="content">
          <el-input type="textarea" v-model="content"></el-input>
        </el-form-item>
         <el-form-item label="">
            <el-button type="primary" @click='submit()'>submit</el-button>
         </el-form-item>


      </el-form>
   </div>
</template>

<script>
export default {
  name:'newarticle',
  data(){
    return{
      title:'',
      content:''
    }
  },
  methods:{
    submit(){
      let self=this
      this.axios.post('http://localhost:3000/api/article', {
        title:self.title,
        content:self.content
      },
        {
          headers: {
            token: localStorage.getItem('token')
          }
        })
      .then(function (response) {
        console.log(response.data);
        self.$store.dispatch(`getData`);
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
