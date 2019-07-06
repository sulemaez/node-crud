<template>
    <div class="container mx-auto m-4 flex justify-center pt-32">
         <div class="bg-white rounded-lg w-8/12">
             <table class="border-collapse text-left w-full rounded-lg">
                 <thead>
                     <tr class="w-full bg-gray-300">
                         <th class="w-1/3 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-gray-700 border-b border-grey-100">Product Name</th>
                         <th class="w-1/3 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-gray-700 border-b border-grey-100">Price</th>
                         <th class="w-1/3 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-gray-700 border-b border-grey-100">Action</th>
                     </tr>
                 </thead>
                 <tbody id="tbody" ref="tbody">
                     
                 </tbody>
             </table>
         </div>
    </div>
</template>

<script>
export default {
    methods : {
        delete(e){
           this.$http.delete(`${this.$url}products/${e.target.id}`)
           .then(data=>{
               alert(data.data.message)
               this.populate()
           })
           .catch(err => {
               alert("ERROR !")
           })

        },
        edit(e){
           this.$router.push(`/edit/${e.target.id}`)
        },
        populate(){
             this.$http.get(`${this.$url}products`)
        .then(data=>{
            let tbody = document.querySelector("#tbody")
            tbody.innerHTML = ""
            let html = ""
            data.data.forEach(product =>{
               html += `
                   <tr class="border-b border-gray-300">
                         <td class="py-6 px-4 font-bold text-base">
                          ${product.name}
                         </td>
                         <td class="py-6 px-4 font-bold text-base">
                            ${product.price}
                         </td>
                         <td class="flex items-center pt-4">
                             <button id="${product._id}" class="mr-6 bg-blue-600 hover:bg-blue-300 px-4 py-1 rounded shadow-lg text-white">
                                 Edit
                             </button>
                             <button id="${product._id}" class="mr-6 hover:bg-red-300 bg-red-600 px-4 py-1 rounded shadow-lg text-white">
                                 Delete
                             </button>
                         </td>
                     </tr>
               `
            })
            tbody.innerHTML = html
            for(var i =0; i < this.$refs['tbody'].children.length;i++){
                this.$refs['tbody'].children[i].children[2].children[1].addEventListener('click',(e)=>{
                    this.delete(e)
                })
                this.$refs['tbody'].children[i].children[2].children[0].addEventListener('click',(e)=>{
                    this.edit(e)
                })
            }
        })
        }
    },
    mounted(){
       this.populate()
    },
}
</script>
