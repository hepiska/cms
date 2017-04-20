<template lang="html">
   <div class="home">
   <div class="homeheader">
     <el-row :gutter="20" class="menu">
      <el-col :span="6"><el-button type="primary">new article</el-button></el-col>
      <el-col :span="6"><el-button type="primary">register</el-button></el-col>
      <el-col :span="6"><el-button type="primary">login</el-button></el-col>
      <el-col :span="6"><el-button type="primary">logout</el-button></el-col>
    </el-row>
   </div>



   </div>
</template>

<script>
export default {
  name:'home',
  components:{

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
