import{m as l,o as r,c as d,a as s,h as t,v as a,g as i,d as p}from"./app-CRhtLMJh.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u={data(){},mounted(){this.$store.commit("setPerson",{name:null,age:null,job:null})},computed:{...l({isDisabled:"isDisabled",person:"person"})},methods:{}},b={key:0,class:"w-25"},c={class:"mb-3"},v={class:"mb-3"},f={class:"mb-3"},g={class:"mb-3"},h=["disabled"];function j(e,o,$,y,k,V){return e.person?(r(),d("div",b,[s("div",c,[t(s("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>e.person.name=n),vmodel:"name",placeholder:"name",class:"form-control"},null,512),[[a,e.person.name]])]),s("div",v,[t(s("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=n=>e.person.age=n),vmodel:"age",placeholder:"age",class:"form-control"},null,512),[[a,e.person.age]])]),s("div",f,[t(s("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=n=>e.person.job=n),vmodel:"job",placeholder:"job",class:"form-control"},null,512),[[a,e.person.job]])]),s("div",g,[s("input",{disabled:!e.isDisabled,onClick:o[3]||(o[3]=i(n=>e.$store.dispatch("store",{name:e.person.name,age:e.person.age,job:e.person.job}),["prevent"])),"click.prevent":"store",type:"submit",value:"Add",class:"btn btn-primary"},null,8,h)])])):p("",!0)}const B=m(u,[["render",j]]);export{B as default};
