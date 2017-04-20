<template lang="html">
   <div class="viewarticle">
     <el-card class="box-card">
       <h4>author:{{author}}</h4>
       <el-form ref="form"  label-width="120px">
          <el-form-item label="title">
            <el-input v-model="title"></el-input>
          </el-form-item>
          <el-form-item  label="content">
            <el-input type="textarea" v-model="content"></el-input>
          </el-form-item>
          <el-form-item  label="content">
              <router-link :to="'/edit/'+propsartile._id"> <el-button type="primary">edit</el-button></router-link>
                <el-button type="primary" @click='deletedata()'>delete</el-button>
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
    setdata(){
      this.title=this.propsartile.title,
      this.content=this.propsartile.content,
      this.author=this.propsartile.author.name
    },
    deletedata(){
      let self=this
      this.axios.delete(`http://localhost:3000/api/article/${this.propsartile._id}`,
        {
          headers: {
            token: localStorage.getItem('token')
          }
        })
      .then(function (response) {
        alert(response.data);
        //self.$store.dispatch(`getData`);
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
