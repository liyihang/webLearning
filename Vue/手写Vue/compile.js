class Compile{
    constructor(el,vm){
        // 获取宿主节点
        this.$el = document.querySelector(el);
        this.$vm = vm;
        // 编译
        if(this.$el){
            this.$fragment = this.node2Fragment(this.$el);
            // 执行编译
            this.compile(this.$fragment);
            // 编译完的html追加至$el
            this.$el.appenChild(this.$fragment);
        }
    }
    // 将宿主的元素拿出来遍历 效率较高
    node2Fragment() {

    }
    // 编译
    compile() {

    }
}