<template lang="html">
   <div class="viewarticle">
     <el-card class="box-card">
       <h4>{{author}}</h4>
       <el-form ref="form"  label-width="120px">
          <el-form-item label="title">
            <el-input v-model="title"></el-input>
          </el-form-item>
          <el-form-item  label="content">
            <el-input type="textarea" v-model="content"></el-input>
          </el-form-item>
        </el-form>
    </el-card>



   </div>
</template>

<script>
export default {
  name:'viewarticle',
  props:['propsartile'],
  mounted(){
    this.setdata()
  },
  data(){
    return{
      title:'',
      content:'',
      author:''
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
        localStorage.setItem("token",response.data);
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    setdata(){
      this.title=this.propsartile.title,
      this.content=this.propsartile.content,
      this.author=this.propsartile.author.name
    }
  }
}
</script>

<style lang="css">
</style>
