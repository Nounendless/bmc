export default{
    state: {

        isCollapse:false,
        tabsList: [
            //默认数据
            {
                path: 'productinfo',
                name: 'home_pdct',
                label: '产品信息',
                icon: 's-home',
                url: 'Home/Home'
            }
        ]
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state,val) {
        console.log(val,'val')
        //判断添加的数据是否为首页
        if(val.name !== 'home_pdct'){
            const index = state.tabsList.findIndex(item => item.name === val.name)
        //如果不存在
        if(index === -1){
            state.tabsList.push(val)
        }
        }
        },
        //删除指定tag数据
        closeTag(state, item) {
//console.log(item,'item')
        const index = state.tabsList.findIndex(val => val.name === item.name)
        state.tabsList.splice(index, 1)
        }
    }
}