(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{751:function(t,s,a){"use strict";a.r(s);var e=a(70),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"serializers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serializers"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/serializers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Serializers"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# serializers.py")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" serializers\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Serializers define the API representation.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        model "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Product\n        fields "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        exclude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://es.wikipedia.org/wiki/Serializaci%C3%B3n",target:"_blank",rel:"noopener noreferrer"}},[t._v("Serialización"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"lectura"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lectura"}},[t._v("#")]),t._v(" Lectura")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" serializers​\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyModel\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyModelSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("​\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n    Ejemplo de un serializer heredando de ModelSerializer\n    y su estructura básica\n    '''")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("​\n       model "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyModel "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# model to serialize")]),t._v("\n       fields "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("​ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# campos incluidos")]),t._v("\n       exclude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# campos a ignorar")]),t._v("\n       depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# manejo de relaciones")]),t._v("\n")])])]),a("h2",{attrs:{id:"escritura"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#escritura"}},[t._v("#")]),t._v(" Escritura")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" serializers​\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyModel\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyModelSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("​\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n    Ejemplo de un serializer heredando de ModelSerializer\n    y su estructura básica\n    '''")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("​\n       model "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyModel "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# model to serialize")]),t._v("\n       fields "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("​ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# campos incluidos")]),t._v("\n       exclude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# campos a ignorar")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n        Ejemplo de una función de creación\n        '''")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MyModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n        Ejemplo de una función de actualización\n        '''")]),t._v("\n        instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);