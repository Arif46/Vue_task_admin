<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Blog Add Form</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Blog Add Form</li>
                    </ol>
                </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                <!-- left column -->
                <div class="col-md-8">
                    <!-- general form elements -->
                    <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Blog Add</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form @click.prevent="createblog">
                        <div class="card-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>

                            <input
                            v-model='BlogForm.name' 
                            type="text" name="name"
                            class="form-control" 
                            placeholder="Enter Your Name"
                             :class="{ 'is-invalid': BlogForm.errors.has('name') }"
                            >
                        <has-error :form="BlogForm" field="name"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Textarea</label>

                            <textarea 
                            v-model="BlogForm.description"
                            class="form-control" 
                            name="description" rows="3" 
                            placeholder="Enter Description"
                            :class="{ 'is-invalid': BlogForm.errors.has('description') }">
                            </textarea>
                            <has-error :form="BlogForm" field="description"></has-error>

                        </div>
                    
                       
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer ">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                    
                </div>
              
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>

           
    </div>
</template>
<script>
import { Form } from 'vform'
import axios from 'axios'

export default {
   data(){
       return {
           BlogForm: new Form({
                name:'',
                description:'',

           })   
       }
   },
   methods:{
              createblog(){
            //   axios.post('/api/category',{name:this.name})
            //   .then(response=>{
            //     console.log(response);
            //   });
              //validation
               this.BlogForm.post('http://127.0.0.1:8000/api/Blog')
               .then(({ data }) => { 
                    this.BlogForm.name = '';
                    this.BlogForm.description = '';
                    this.$toast.success({
                            title:'success',
                            message:'blog Created Successfully.'
                        })
                 })
            }
        }
 }
</script>
<style>
</style>