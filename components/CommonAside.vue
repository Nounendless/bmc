<template>

    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        active-text-color="gray"
        text-color="black"
        :collapse="isCollapse">
        <!-- index 唯一标志 -->
        <!-- <el-menu-item @click="clickMenu(item)" style="background-color:#797979;font-size:18px;color:white" v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`" style="color:white"></i>
            <span slot="title" >{{item.label}}</span>
        </el-menu-item> -->
        <el-submenu style="background-color:#797979;"  v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template v-slot:title>
                <i :class="`el-icon-${item.icon}`" style="color:white"></i>
                <span style="font-size:18px;color:white" >{{item.label}}</span>
            </template>
            <el-menu-item-group >
                <el-menu-item @click="clickMenu(subItem)" v-for="subItem in item.children" :key="subItem.path" :index="subItem.path">
                    <span style="font-size:17px">{{subItem.label}}</span>
                    </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse){
    width:200px;
    min-height:400px
}
.el-submenu__title:hover, .el-menu-item:focus, .el-menu-item:hover{
background-color: lightgray;
}
   
</style>
<script>
export default {
    data() {
        return {
            menuData:[
                // {
                // path: 'productinfo',
                // name: 'home_pdct',
                // label: '首页',
                // icon: 's-home',
                // url: 'Home/Home'
                // },
                {
                label: '服务器信息',
                icon: 'menu',
                children: [
                  {
                    path: '/',
                    name: 'home_pdct',
                    label: '产品信息',
                    icon: 'menu',
                    url: 'ProductInfo'
                  },  
                  {
                    path: 'cpuinfo',
                    name: 'cpuinfo',
                    label: '处理器信息',
                    icon: 's-home',
                    url: 'CpuInfo'
                  },  
                  {
                    path: '/page3',
                    name: 'page3',
                    label: '内存信息',
                    icon: 'menu',
                    url: 'Other/PageOne'
                  },  
                  {
                    path: '/page4',
                    name: 'page4',
                    label: '网卡信息',
                    icon: 's-home',
                    url: 'Other/PageOne'
                  },  
                  {
                    path: '/page5',
                    name: 'page5',
                    label: '其他类信息',
                    icon: 's-home',
                    url: 'Other/PageOne'
                  },  
                ],
                },               
                {
                label: '服务器管理',
                icon: 's-tools',
                children: [
                  {
                    path: '/page10',
                    name: 'page10',
                    label: '存储管理',
                    icon: 's-home',
                    url: 'Other/PageOne'
                  },  
                  {
                    path: '/page2',
                    name: 'page2',
                    label: '电源管理',
                    icon: 's-home',
                    url: 'Other/PageTwo'
                  },  
                  {
                    path: '/page3',
                    name: 'page3',
                    label: '风扇管理',
                    icon: 's-home',
                    url: 'Other/PageOne'
                  },  
                  {
                    path: '/page6',
                    name: 'page6',
                    label: 'BIOS设置',
                    icon: 's-home',
                    url: 'Other/PageOne'
                  },  
                  {
                    path: 'network',
                    name: 'network',
                    label: '网络设置',
                    icon: 's-home',
                    url: 'Network'
                  },
                  {
                    path: 'timezone',
                    name: 'timezone',
                    label: '时区设置',
                    icon: 's-home',
                    url: 'TimeZone'
                  }, 
                  {
                    path: '/page7',
                    name: 'page7',
                    label: '固件更新',
                    icon: 's-home',
                    url: 'Other/PageOne'
                  } 
                ],
                },
            ],
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //点击菜单
        clickMenu(item) {
            console.log(item)
            if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))){
                this.$router.push(item.path)
            }
            this.$store.commit('selectMenu',item)
        }
    },
    computed: {
        //没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        //有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    }
}
</script>
