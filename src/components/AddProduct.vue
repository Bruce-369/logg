<template>
   
    <HeaderBar />
  
 <div class="centered">
<h1>ADD PRODUCT</h1>
 </div>

 <div class="Add">
         <span class="p-float-label">
              <InputText id="ProductName"  v-model="products.ProductName"  />
             <label for="ProductName" >Product Name</label>
         </span>
         <span class="p-float-label">
             <InputText id="ProductPrice"  v-model="products.ProductPrice" />
              <label for="ProductPrice"  >Price</label> 
     </span>

     <span class="p-float-label flex flex-row gap-3 width-100 px-2 card flex justify-content-center">
        <Calendar touchUI id="ProductInDate"  v-model="products.ProductInDate" dateFormat="dd/mm/yy"  />
              <label for="ProductInDate"  >Product in Date</label> 
     </span>
     
       <span class="p-float-label">
          <InputText  id="ProductId"  v-model="products.ProductId" />
         <label for="ProductId" >Product Id to Generate BarCode</label>
     </span>

     <Button style="color: skyblue;">
                <br> <i class="pi pi-database"  @click="AddToStore"  style="font-size: 20px; width: 100px; "></i>
             </Button>
   
 </div>


<FooterBar />

</template>

<script>
import HeaderBar from  './HeaderBar.vue'
import axios from 'axios';
import FooterBar from './FooterBar.vue';



 export default {
     name: "AddProduct",
     data(){
         return{ 
             products: {
                 ProductName:'',
                 ProductPrice:'',
                 ProductInDate:'',
                 ProductId:'',
                 BarCodeData:'',
         },
     }
     },
    

methods:{
     async   AddToStore(){
              const result= await axios.post("http://localhost:3000/products",{
                        ProductName:this.products.ProductName,
                        ProductPrice:this.products.ProductPrice,
                        ProductInDate:this.products.ProductInDate,
                        ProductId:this.products.ProductId,
                        BarCodeData:this.products.ProductId
              });
              if(result.status==201){
                 alert("Product Added  Successfully");
                 this.$router.push({name:'ProductStore'})
              }

              console.warn("result",result)
        },


//         function broofa() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//         return v.toString(16);
//     });
// }

// console.log(broofa())
    //     formatDate (value){
    //     return moment(String(value)).format("DD/MM/YYYY");
    //   }

//     formatDate(dateString) {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
//   }

     },
    // mounted() {
    //     let pro = localStorage.getItem("users-info");
    //     if (!pro) {
    //         this.$router.push({ name: "ProductStore" });
    //     }
    // },

     
 components:{
    HeaderBar,
    FooterBar
}
 }
</script>

<style scoped>

.centered 
{
 text-align: center;
 font-family: Georgia, 'Times New Roman', Times, serif;
 color:rgba(34, 33, 33, 0.801)
}
.Add{
 width: 100%;
 align-items: center;
 flex-direction: column;
 display: flex;
 justify-content: center;
 height: auto;
 gap: 2rem;
 font-family: serif;
 font-size: small;
}

</style>