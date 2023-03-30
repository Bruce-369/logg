<template>
     <div  class="main">
    <HeaderBar />

 <div class="centered">
<h1>UPDATE PRODUCT</h1>
 </div>

 <div class="Update">
         <span class="p-float-label">
              <InputText id="ProductName"  v-model="products.ProductName"  />
             <label for="ProductName" >Product Name</label>
         </span>
         <span class="p-float-label">
             <InputText id="ProductPrice"  v-model="products.ProductPrice" />
              <label for="ProductPrice"  >Price</label> 
     </span>

     <span class="p-float-label flex flex-row gap-3 width-100 px-2 card flex justify-content-center">
        <Calendar touchUI id="ProductInDate"  v-model="products.ProductInDate" dateFormat="dd/mm/yy" />

       
        
              <label for="ProductInDate"  >Product in Date</label> 
     </span>
     
       <span class="p-float-label">
          <InputText  id="ProductId"  v-model="products.ProductId" />
         <label for="ProductId" >Product Id to Generate BarCode</label>
     </span>

     <Button style="color: skyblue;">
                <br> <i class="pi pi-upload"  @click="updateProduct"  style="font-size: 20px; width: 100px; "></i>
             </Button>
   
 </div>

</div>
</template>

<script>
import axios from 'axios';
// import HeaderBar from './HeaderBar.vue';

    export default {
        name: "updateProduct",

        data(){
         return{ 
             products: {
                 ProductName:'',
                 ProductPrice:'',
                 ProductInDate:'',
                 ProductId:'',
         },
     }
     },
     methods:{
         async   updateProduct(){
            const result= await axios.put("http://localhost:3000/products/"+this.$route.params.id,{
                ProductName:this.products.ProductName,
                ProductPrice:this.products.ProductPrice,
                ProductInDate:this.products.ProductInDate,
                ProductId:this.products.ProductId,
              });
              if(result.status==200){
                 alert("Product Updated  Successfully");
                 this.$router.push({name:'store'})
              }

            }
        },
   async mounted() {
        let user = localStorage.getItem("users-info");
        if (!user) {
            this.$router.push({ name: "store" });
        }
     const result = await axios.get("http://localhost:3000/products/"+this.$route.params.id)
        this.customers =result.data


    },
    components: { 
        // HeaderFile
     },
    }
</script>

<style scoped>

</style>