<template>
  <div>
    <div id="nav" class="choice">
      <router-link class="navigetor" to="/about">Firstname</router-link> |
      <router-link class="navigetor" to="/age">Age</router-link> |
      <router-link class="navigetor" to="/radio">Radio</router-link> 
      
    </div>
    <router-view/>
  </div>
</template>

<style>
.choice{
  text-align: center;
  font-size: 30px;
  color: black;
}
.navigetor{
  color: rgb(0, 0, 0);
}

</style>
