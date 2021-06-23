# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

<ClientOnly>
<component-case>
<template v-slot:case>
    <t-button>default</t-button>
    <t-button type="primary">primary</t-button>
    <t-button type="success">success</t-button>
    <t-button type="warning">warning</t-button>
    <t-button type="danger">danger</t-button>
    <t-button type="info">info</t-button>
    <t-button type="text">text</t-button>
    <br><br>
    <t-button plain>default</t-button>
    <t-button plain type="primary">primary</t-button>
    <t-button plain type="success">success</t-button>
    <t-button plain type="warning">warning</t-button>
    <t-button plain type="danger">danger</t-button>
    <t-button plain type="info">info</t-button>
    <t-button plain type="text">text</t-button>
    <br><br>
    <t-button round>default</t-button>
    <t-button round type="primary">primary</t-button>
    <t-button round type="success">success</t-button>
    <t-button round type="warning">warning</t-button>
    <t-button round type="danger">danger</t-button>
    <t-button round type="info">info</t-button>
    <t-button round type="text">text</t-button>
</template>

<template v-slot:code-desc>

使用`type`、`plain`、`round`属性来定义 Button 的样式。

</template>

<template v-slot:code>

``` html
<t-button>default</t-button>
<t-button type="primary">primary</t-button>
<t-button type="success">success</t-button>
<t-button type="warning">warning</t-button>
<t-button type="danger">danger</t-button>
<t-button type="info">info</t-button>
<t-button type="text">text</t-button>
<br><br>
<t-button plain>default</t-button>
<t-button plain type="primary">primary</t-button>
<t-button plain type="success">success</t-button>
<t-button plain type="warning">warning</t-button>
<t-button plain type="danger">danger</t-button>
<t-button plain type="info">info</t-button>
<t-button plain type="text">text</t-button>
<br><br>
<t-button round>default</t-button>
<t-button round type="primary">primary</t-button>
<t-button round type="success">success</t-button>
<t-button round type="warning">warning</t-button>
<t-button round type="danger">danger</t-button>
<t-button round type="info">info</t-button>
<t-button round type="text">text</t-button>
```

</template>
</component-case>
</ClientOnly>