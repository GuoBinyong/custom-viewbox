import Vue,{VNodeData,CreateElement,ComponentOptions} from "vue"



/**
 * getTemplateDataHandler(templateData,ViewBoxInstance,createElement)=>TemplateData
 * @param templateData : TemplateData    被之前 getTemplateDataHandler 处理过的 模板数据
 * @param ViewBoxInstance : ViewBoxInstance    自定义的 ViewBox 组件的实例对象
 * @param createElement : function    vue 的 createElement 函数
 * @returns TemplateData : {
 *            slots:{ header:[],bottom:[],defaultSlot:[] } , //插槽
 *            ...   //其它属性同 createElement 的第2个参数的属性一样，详见： https://cn.vuejs.org/v2/guide/render-function.html
 *            }      返回自定义的 ViewBox 组件的 模块数据
 *
 * */

type GetTemplateDataHandler = (templateData:TemplateData,ViewBoxInstance:Vue,createElement:CreateElement)=>TemplateData


interface TemplateData extends VNodeData {
    slots?:{ header?:VNode[],bottom?:VNode[],defaultSlot?:VNode[] } ; //插槽
}

type TemplateDataOrGet = TemplateData | GetTemplateDataHandler;



/**
 *
 * 创建自定义的 ViewBox 组件
 *
 * 接口1:
 * customViewBox(getTemplateDataHandler , name = "ByViewBox")
 * @param getTemplateDataHandler      可选；获取模板数据的回调函数
 * @param name ? : string    可选，默认值："ByViewBox" ； 自定义的 ViewBox 组件的名字
 * @returns VueComponentOptions  返回Vue组件的选项对象
 *
 *
 * 接口2:
 * customViewBox(templateData , name = "ByViewBox")
 * @param templateData      可选；模板数据
 * @param name ? : string    可选，默认值："ByViewBox" ； 自定义的 ViewBox 组件的名字
 * @returns VueComponentOptions  返回Vue组件的选项对象
 *
 *
 * 接口3:
 * customViewBox(getTemplateData , name = "ByViewBox")
 * @param getTemplateData : [TemplateData|getTemplateDataHandler]      可选；数组；该数组可以包含 模版数据 templateData 或者 获取模板数据的回调函数 getTemplateDataHandler； 模版数据 templateData 会被合并, 模板数据的回调函数 getTemplateDataHandler 返回的模块数据会传给下一个 getTemplateDataHandler ；
 * @param name ? : string    可选，默认值："ByViewBox" ； 自定义的 ViewBox 组件的名字
 * @returns VueComponentOptions  返回Vue组件的选项对象
 *
 *
 *
 *
 *
 * getTemplateDataHandler(templateData,ViewBoxInstance,createElement)=>TemplateData
 * @param templateData : TemplateData    被之前 getTemplateDataHandler 处理过的 模板数据
 * @param ViewBoxInstance : ViewBoxInstance    自定义的 ViewBox 组件的实例对象
 * @param createElement : function    vue 的 createElement 函数
 * @returns TemplateData : {
 *            slots:{ header:[],bottom:[],defaultSlot:[] } , //插槽
 *            ...   //其它属性同 createElement 的第2个参数的属性一样，详见： https://cn.vuejs.org/v2/guide/render-function.html
 *            }      返回自定义的 ViewBox 组件的 模块数据
 *
 *
 * 注意：
 * 如果把该组件定义成函数式组件，则会出现：当把该组件嵌套使用时，内层 ViewBox 不能正常分发插槽的情况；
 */
export default function customViewBox(getTemplateData?:TemplateDataOrGet | TemplateDataOrGet[], name?:string):ComponentOptions;