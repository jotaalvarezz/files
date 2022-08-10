<template>
    <div class="centrar">
        <el-card class="ancho">
            <el-row :span="24">
                <Nav></Nav>
            </el-row><!-- <i class="fa-solid fa-folder"></i> -->
            <el-row :span="24">
                <!-- <div class="block">
                    <el-tree :data="data" :node-key="id" style="" :icon-class="valor == true ? 'fa-regular fa-folder' : 'fa-regular fa-folder-open'" 
                                @node-click="expand" :expand-on-click-node="true">
                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span>{{ node.label }}</span>
                            <span>
                                <el-button type="text" size="mini" @click="() => append(data)">
                                    Append
                                </el-button>
                                <el-button type="text" size="mini" @click="() => remove(node, data)">
                                    Delete
                                </el-button>
                            </span>
                        </span>
                    </el-tree>
                </div> -->
                <Finder :tree="tree"></Finder>
            </el-row>
            <el-row :span="24">
            </el-row>
        </el-card>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Products from '@/views/finderScripts/products2'
import {Finder} from "@jledentu/vue-finder"
import "@jledentu/vue-finder/dist/vue-finder.css";
let id = 1000;

export default {
    components:{
        Nav,
        Finder
    },
    data() {
      return{
         tree:Products.products
      }
    },

    computed:{
        
    },

    methods: {

        expand(){
            if(this.valor){
                return this.valor = false;
            }else{
                return this.valor = true;
            }
        },

        append(data) {
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
                this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },

        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },

        renderContent(h, { node, data, store }) {
            return (
                <span class="custom-tree-node">
                    <span>{node.label}</span>
                    <span>
                        <el-button size="mini" type="text" on-click={() => this.append(data)}>Append</el-button>
                        <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>Delete</el-button>
                    </span>
                </span>);
        }
    }
};
</script>

<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}

.ancho{
    width: 70%;
}

.centrar{
    display: flex;
    justify-content: center;
}
</style>