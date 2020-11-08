class Active {
    constructor(options){
        this.$options = options;
        // 响应式数据
        this.$data = options.data;
        // 对数据的观察监听
        this.observe(this.$data);
        // // 模拟watcher的创建过程
        // new Watcher();
        // this.$data.test;
        // new Watcher();
        // this.$data.foo.bar;
        new Compile(options.el,this);
        if (options.created) {
            options.created.call(this)
        }
    }
    observe(value){
        // 判断是否存在这个对象
        if (!value || typeof value !== 'object') {
            return;
        }
        // 遍历对象
        Object.keys(value).forEach(key => {
             this.defineReactive(value, key, value[key])
        })
    }
    // 数据响应化处理
    defineReactive(obj, key, value){
        // 递归解决数据嵌套问题
        this.observe(value);
        const dep = new Dep();
        Object.defineProperty(obj, key, {
            get(){
                Dep.target && dep.addDep(Dep.target); 
                return value;
            },
            set(newValue){
                if(newValue === value){
                    return;
                }
                value = newValue;
                // console.log(`${key}:属性更新了：${value}`)
                dep.notify();
            }
        })
    }
}
// 依赖收集
class Dep{
    constructor() {
        // 存放所有依赖
        this.deps = [];
    }
    // 添加依赖
    addDep(dep){
        this.deps.push(dep);
    }
    // 通知所有监听器更新视图
    notify(){
       this.deps.forEach(dep => dep.update());
    }
}
// 监听器 负责更新视图
class Watcher {
    constructor() {
        // new 一个监听器 将监听器对象赋值给Dep.target
        Dep.target = this;
    }
    update() {
        console.log("视图更新了……")
    }
}