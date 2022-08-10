<template>
  <div class="centrar" style="padding-bottom: 60px;">
    <el-card class="ancho">
      <h1>Sistema de Gestion Documental</h1>
      <el-row>
        <Nav></Nav>
      </el-row>
      <el-row>
        <el-col :span="6" class="border1">
          {{nodo.label}}
          <div class="block heigth">
            <el-tree :data="info" node-key="id" :default-expand-all="expand" :expand-on-click-node="true" draggable>
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span @click="() => getNodo(node, data)">
                  <i class="fa-lg fa-regular fa-folder"></i>
                  <span>{{ node.label }}</span>
                </span>
              </span>
            </el-tree>
          </div>
        </el-col>
        <el-col :span="18" class="border2" style="display: flex;">
          <div class="heigth position" style="width: 70%;">
            <el-row>
              <el-col :span="24">
                <i class="fa-3x fa-regular fa-folder" style="color: rgb(90, 90, 90);"></i>
              </el-col>
              <el-col :span="24">
                <span>{{data.label}}</span>
              </el-col>
            </el-row>
          </div>
          <div class="heigth position" style="width: 30%;">
            <el-row>
              <el-col>
                <i class="fa-lg fa-regular fa-trash-can show" v-show="data.data" @click="() => remove(nodo, data)"></i>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" class="border1 size">
          <i class="fa-lg fa-solid fa-angles-up show" @click="expand = false"></i>
        </el-col>
        <el-col :span="18" class="border2 size">
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Products from '@/views/finderScripts/products'
import { mapActions, mapMutations, mapState } from 'vuex';
let id = 1000;
export default {
  components: {
    Nav,
  },
  data() {
    return {
      expand:true,
      info: Products.products
    }
  },

  computed: {
    ...mapState(['nodo','data'])
  },

  methods: {
    ...mapMutations(['getNodo']),
    /* getNodo(nodo, data) {
      this.nodo = nodo
      console.log(nodo.label)
    }, */

    /* append(nodo, data) {
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
      console.log(" = > ",data)
    }, */

    remove(node, data) {
      const parent = data.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
      console.log("remove >>",node)
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
  },
}
</script>
<style scoped>
.border1 {
  padding: 5px;
  border-width: 1px;
  border-right: 1px solid #EBEEF5;
  border-bottom: 1px solid #EBEEF5;
}

.border2 {
  padding: 5px;
  border-width: 1px;
  border-bottom: 1px solid #EBEEF5;
}

.ancho {
  width: 70%;
}

.centrar {
  display: flex;
  justify-content: center;
}

.heigth {
  height: 500px;
}

.position {
  display: flex;
  justify-content: center;
  align-items: center;
}

.show{
  color:rgb(210, 210, 210);
}

.show:hover{
  color: black;
  cursor: pointer;
}

.size{
  height: 40px;
}
</style>
