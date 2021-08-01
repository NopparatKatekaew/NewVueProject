<template>
  <div class="name">
    <div class="headerfnamelname">
      <h1>
        Your FirstName and LastName
      </h1>
        <div class="firstname">
          <label>Name</label>
          <br>
          <input class="box" type="text" v-model="blog.firstname" >
        </div>
        <div class="lastname">
          <label>Lastname</label>
          <br>
          <input class="box" type="text" v-model="blog.lastname" >  
        </div>
        <div id="uname">
          <p>Your Name : {{blog.firstname}}</p>
          <p>Your LastName : {{blog.lastname}}</p>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        blog:{
          firstname:'',
          lastname:'',
        }
      }
        
    }

  }
</script>
<style>
.headerfnamelname{
  text-align: center;
  margin-top: 5%;
}
.box{
  border-radius: 5px;
  height: 20px;
  
}
</style>
