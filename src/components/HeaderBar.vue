<template>
    <div class="Top"> 
<router-link to="/store" class="button "><b>STORE </b></router-link>
 <router-link to="/add" class="button"><b>ADD PRODUCT </b></router-link> 
 <router-link to="/code" class="button"><b>GENERATE BARCODE</b></router-link>
    </div>
</template>

<script>
    export default {
        name:'HeaderBar',
      
        
    }
</script>

<style >
.Top {
  background-color: #333;
  overflow: hidden;
  margin-top: -7px;
  margin-left: -7px;
  margin-right: -7px;
  text-align: left;
  text-size-adjust: 3rem;
    padding: 14px 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: small;
    margin-right: 5px;
    
}
.button{
    margin-right: 2rem;
    color: whitesmoke;
    text-decoration: none;

} 

</style>