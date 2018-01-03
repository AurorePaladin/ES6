{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);

  console.log('s',`\u{20BB7}`);
}
//a    a
//s    口7
//s    𠮷

{
  let s='𠮷';
  console.log('length',s.length);
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0));
  console.log('code0',s1.codePointAt(0).toString(16));
  console.log('code1',s1.codePointAt(1));
  console.log('code2',s1.codePointAt(2));
}
//length   2
//0  乱码？
//1  乱码？
//at0  55362
//at1  57271
//length 3
//code0 134071
//code0 20bb7
//code1 57271
//code2  a

{
  console.log(String.fromCharCode("0x20bb7")); //es5 方法
  console.log(String.fromCodePoint("0x20bb7"));//es6 方法
}
//乱码
//𠮷

{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  //es5 乱码
  //es5 乱码
  //es5 a
  //es5 b
  //es5 c
  for(let code of str){
    console.log('es6',code);
  }
  //es6 𠮷
  //es6 a
  //es6 b
  //es6 c
}
{
  let str="string";
  console.log('includes',str.includes("r"));
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith("str"));
  console.log('end',str.endsWith("ng"));
}
//includes true
//includes false
//start true
//end  true


//重复复制方法
{
  let str="abc";
  console.log(str.repeat(2));
}
//abcabc


//模板字符串
{
  let name="list";
  let info="hello world";
  let m=`i am ${name,${info}}`;
  console.log(m);
}
//i am list, hello world

//es7草案 有用的两个API 补白
{
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
}
//01
//10

//标签模板
{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v 1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}
//i am ,,,listhello world

{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
//Hi\n3
//Hi
//3
