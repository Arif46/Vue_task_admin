<template>
     <div class="card">
              <div class="card-header">
                <h3 class="card-title">DataTable with default features</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Descriptions</th>
                    <th>Status</th>
                    <th>Actions</th>
                   
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="blog in blogs" :key="blog.id">
                    <td>{{blog.id}}</td>
                    <td>{{blog.name}}</td> 
                    <td>{{blog.description}}</td>
                    <td> 4</td>
                    <td>
                          <a href="#" class="btn btn-primary btn-sm" >Edit</a>
                         <a @click.prevent="deleteblog(blog)" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                  </tr>
                 
                  </tbody>
                  <tfoot>
                
                  </tfoot>
                </table>
              </div>
              <!-- /.card-body -->
     </div>
</template>
<script>
import axios from 'axios'
export default {
   data(){
      return {
          blogs:[],
      }
   },
   methods:{
        loadBlog(){
              axios.get('http://127.0.0.1:8000/api/Blog')
              .then(response => {
                 this.blogs = response.data;
              });
          },
          deleteblog(blog){
             axios.delete(`http://127.0.0.1:8000/api/Blog/${blog.id}`)
              .then(()=>{
                   this.$toast.success({
                            title:'success',
                            message:'Blog delete Successfully.'
                        });
                 });
                 let index =this.blogs.indexOf(blog);
                 this.blogs.splice(index, 1); 
          }
   },
   mounted(){
       this.loadBlog();
   }

}
</script>
<style>
</style>