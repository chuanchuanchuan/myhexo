(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{79:function(t,n,e){"use strict";e.r(n);var a=e(0),s=Object(a.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("#使用java代码从HDFS上读取带lzo压缩的SequenceFile文件")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hadoop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hadoop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hadoop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Created by lcc on 17-7-31.\n */")]),t._v("\n")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('public class readweibo {\n\n   public static void main(String[] args) throws Exception {\n\n       Configuration conf = new Configuration();\n\n       Path seqFile = new Path("/weibo/01");\n       conf.set("io.compression.codecs", "com.hadoop.compression.lzo.LzoCodec");\n       conf.set("fs.default.name", "hdfs://lcc-desktop:9000");\n       FileSystem fs = FileSystem.get(conf);\n       FileStatus[] fileStatuses = fs.listStatus(seqFile);\n       List<Integer> l = new LinkedList<Integer>();\n       int tmp = 0;\n       for (int j = 0; j < fileStatuses.length; j++) {\n           SequenceFile.Reader reader = new SequenceFile.Reader(conf, SequenceFile.Reader.file(fileStatuses[j].getPath()));\n\n           BytesWritable key = new BytesWritable();\n           MapWritable value = new MapWritable();\n\n\n           while (reader.next(key, value)) {\n               //System.out.println(key);\n               Set<Writable> vs = value.keySet();\n               Iterator<Writable> it = vs.iterator();\n               int i = 0;\n               List<String> outkey=new LinkedList<String>();\n               while (it.hasNext()) {\n                   Writable wt=it.next();\n                   outkey.add(wt.toString());\n\n                   //System.out.println(weibokey.length);\n                   //it.next();\n                   i = i + 1;\n               }\n               if (!l.contains(i)) {\n                   l.add(i);\n               }\n               tmp = tmp + 1;\n               if(i==29)\n               {\n                   Iterator<String> ok=outkey.iterator();\n                   while(ok.hasNext())\n                   {\n                       String oktmp=ok.next();\n                       System.out.println(oktmp);\n                   }\n                   break;\n               }\n           }\n\n       }\n       //System.out.println(tmp);\n       Iterator<Integer> itl = l.iterator();\n       while (itl.hasNext()) {\n           Integer itv = itl.next();\n           //System.out.println(itv);\n       }\n\n   }\n}\n')])])])])},[],!1,null,null,null);n.default=s.exports}}]);