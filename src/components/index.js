import Vue from "vue"

const components = {
  TopNavigationBar: () => import("./TopNavigationBar"),
  NavigationHeadBack: () => import("./NavigationHeadBack"),
  TopToolBar: () => import("./TopToolBar"),
  PageInation: () => import("./PageInation")
  //   CourseClassification: () => import('./CourseClassification'),
  //   BannerEditor: () => import('./BannerEditor'),
  //   Tinymce: () => import('./Tinymce'),
  //   CoursePicker: () => import('./CoursePicker'),
  //   CommentViewer: () => import('./CommentViewer')
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
