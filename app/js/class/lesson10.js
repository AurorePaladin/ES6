{
  let list =new Set();
  list.add(5);
  list.add(7);
  console.log('size',list.size);//list.size 类似于 list.lenth
}
//size 2


{
  let arr = [1,2,3,4,5];
  let list =new Set(arr);

  console.log('size',list.size);
}
//size 5

{
  let list =new Set();
  list.add(1);
  list.add(2);
  list.add(1);//没有成功添加进去  重复的元素不会添加进去也不会报错

  console.log('list',list);

  let arr=[1,2,3,1,2];
  let list2=new Set(arr);//去重的特性

  console.log('unique',list2);
}
//{1 2}
//{ 1 2 3}

{
  let arr=['add','delete','clear','has'];//添加  删除  清空  判断是否有这个元素
  let list=new Set(arr);

  console.log('has',list.has('add'));
  console.log('delete',list.delete('add'),list);
  list.clear();
  console.log('list'.list);
}
//has true
//{'delete','clear','has'}
//Set()

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  for(let key of list.keys()){
    console.log('keys',key);
  }

  for(let key of list.values()){
    console.log('value',value);
  }

  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }

  list.forEach(function(item){console.log(item);})
}
//keys add     keys delete     keys clear     keys has
//value add    value delete    value clear    value has
//entries add add  entries delete delete  entries clear clear entries has has
//add delete clear has


{
let weakList= new WeakSet();//支持的数据类型不同 1.只能是对象 2.弱引用 3.不能使用方法
let arg={};

weakList.add(arg);

console.log('weakList',weakList);
}
//weakList { Object{} }


{
  let map = new Map();
  let arr =['123'];

  map.set(arr,456);

  console.log('map',map,map.get(arr));
}
//map  Map  {["123"] => 456} 456


{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
}
//map args   Map {"a" => 123 , "b" => 456}
//size 2
//delete true  Map {"b" => 456}
//clear undefined   Map {}


{
  let  weakmap = new WeakMap();

  let o={
    weak.map.set(o,123);
    console.log(weakmap.get(o));
  }
}
//123

{
  //数据结构横向对比，增，查，改，删
  let map =new Map();
  let array=[];
  //增
  map.set('t',1);
  array.push({t:1});
  console.info('map-array',may,array);
  // 查
  let map-exist=map.has('t');
  let array_exist=array.find(item=>item.t);
  console.info('map-array',map-exist,array_exist);
  // 改
  map.set('t',2);
  array.forEach(item=>item.t?item.t=2:'');
  console.info('map-array-modify',may,array);
  // 删
  map.delete('t');
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('map-array-empty',may,array);
}
//map-array  Map(1) {"t"=>1}
//map-array  true  Object {t:1}
// map-array-modify  Map(1) {"t"=>2}
// map-array-empty   Map(0) {} []


{
  // set和array的对比
  let set=new Set();
  let array=[];
  // 增
  set.add({t:1});
  array.push({t:1});

  console.info('set-array',set,array);
  // 查
  let set_exist=set.has({t:1});
  let array_exist=array.find(item=>item.t);
  console.info('set-array',map-exist,array_exist);
  // 改
  set.forEach(item=>item.t?item.t=2:'');
  array_exist.forEach(item=>item.t?item.t=2:'');
  console.info('set-array-modify',set,array);
  // 删
  set.forEach(item=>item.t?set.delete(item):'')
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('set-array-empty',set,array);
}
//set-array  Set(1) {Object {t:1} }
//false    Object {t:1}
//set-array-modify set(1)  {Object {t:2}}
//set-array-modify set(0)  {}    {}


{
  //map,set,object的对比
  let item={t:1};
  let map=new Map();
  let set=new Set();
  let obj={};
  // 增
  map.set('t',1);
  set.add(item);
  obj['t']=1;
  console.info('map-set-obj',obj,map,set);
  //查
  console.info({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  });
  // 改
  map.set('t',2);
  item.t=2;
  obj['t']=2;
  console.info('map-set-obj-modify',obj,map,set);
  // 删
  map.delete('t');
  set.delete('t');
  delete obj['t'];
  console.info('map-set-obj-empty',obj,map,set);

}
//map-set-obj  Object{t:1}  Map(1) {"t" => 1}  Set(1) {Object{t:1}}
//Object {map_exist: true, set_exist: true, obj_exist: true}
//map-set-obj-modify Object{t: 2} Map(1) {"t"=>2} Set(1) {Object {t:2}}
//map-set-obj-empty Object{}  Map(0){}  Set(0){}
