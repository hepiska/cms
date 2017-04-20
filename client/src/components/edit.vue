<template lang="html">
   <div class="edit">
     <el-form ref="form"  label-width="120px">
        <el-form-item label="title">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item  label="content">
          <el-input type="textarea" v-model="content"></el-input>
        </el-form-item>
         <el-form-item label="">
            <router-link :to="'/'">
              <el-button type="primary" @click='submit()'>submit</el-button>
            </router-link>
         </el-form-item>

      </el-form>
   </div>
</template>

<script>
export default {
  name:'edit',
  data(){
    return {
     title:'',
     content:'',
     editdata:''
    }
  },
  mounted(){
    this.geteditdata()
  },
  methods:{
    submit(){
      let self=this
      this.axios.put(`http://localhost:3000/api/article/${this.$route.params.id}`, {
        title:self.title,
        content:self.content
      }, {
         headers: {
           token: localStorage.getItem('token')
          }
      }
    ).then(function (response) {
        alert(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    geteditdata(){
      let self=this
      this.axios.get(`http://localhost:3000/api/article/${this.$route.params.id}`, {
      })
      .then(function (response) {
        console.log(response.data);
        self.editdata=response.data
        self.title=response.data.title,
        self.content=response.data.content
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
