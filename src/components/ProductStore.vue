<template>
    <HeaderBar />
    <div class="centred">

<h1>PRODUCT STORE</h1>
    </div>

    <div style="border=1; align=center; border-color: grey;"  >
<DataTable  :value="productstable"  responsiveLayout="scroll" tableStyle="min-width: 50rem">
     <Column field="ProductName" header="Product Name">{{ products.ProductName }}  </Column>
    <Column field="ProductPrice" header="Price"> {{ products.ProductPrice }}  </Column>
    <Column field="ProductInDate" header="Product In Date"> {{ products.ProductInDate }} </Column>
    <Column field="ProductId" header="ProductId"> {{ products.ProductId }}  </Column>

    <!-- <Column field="ProductId" header="test"><h1>test</h1></Column> -->

    <Column field="BarCodeData" header="Product Bar Code">
        <BarCode  v-bind:value="products.ProductId"
    :format="'CODE39'"
    :lineColor="'GREY'"
    :width="1"
    :height="20"
    :elementTag="'img'"/> 

 </Column> 
</DataTable>
</div>

<!-- <BarCode  v-bind:value="'productstable.ProductId'"
    :format="'CODE39'"
    :lineColor="'GREY'"
    :width="1"
    :height="20"
    :elementTag="'img'"/>  -->
<FooterBar />
</template>

<script>
import BarCode from './BarCode.vue';
import HeaderBar from './HeaderBar.vue';
import FooterBar from './FooterBar.vue';
import axios from 'axios';

    export default {
    name: "ProductStore",
    data(){
            return{ 
                name:"",
            products: null,
            productstable:null,
           
            
            
      
        }
        
        },

        methods:{
            async   getFromStore(){
              const result= await axios.get("http://localhost:3000/products");
              if(result.status==200){
                this.products = result.data;
                console.log(this.products)

                this.productstable = this.products.map((o) => ({
         barCode:null,
          ...o,
        }));
               // console.log('asgafstafs', this.products)
                //  alert("Product Added  Successfully");
                //  this.$router.push({name:'ProductStore'})
              }

            //   console.warn("Display",result)
        },
        },
        mounted(){
           this.getFromStore();
        //    console.log(this.products);
        },
    components: {
    HeaderBar,
    FooterBar,
    BarCode
}

}
</script>

<style scoped>
.centred{
 text-align: center;
 font-family: Georgia, 'Times New Roman', Times, serif;
 color:rgba(34, 33, 33, 0.801)
}


</style>