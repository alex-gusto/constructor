/* script */








const __vue_script__ = {
  props: ['title', 'content'],

  methods: {
    t (): string {
      return ''
    }
  }
}

/* template */
var __vue_render__ = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container section" }, [
    _c("h2", [_vm._v(_vm._s(_vm.title))]),
    _vm._v(" "),
    _c("p", [_vm._v(_vm._s(_vm.content))])
  ])
}
var __vue_staticRenderFns__ = []
__vue_render__._withStripped = true

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-3fa709ea_0", { source: ".section {\n  background: tomato;\n}\n\n/*# sourceMappingURL=SectionContent.vue.map */", map: {"version":3,"sources":["SectionContent.vue"],"names":[],"mappings":"AAoBA;EACA,kBAAA;AAnBA;;AAEA,6CAA6C","file":"SectionContent.vue","sourcesContent":["<template>\r\n  <div class=\"container section\">\r\n    <h2>{{ title }}</h2>\r\n    <p>{{ content }}</p>\r\n  </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\n  export default {\r\n    props: ['title', 'content'],\r\n\r\n    methods: {\r\n      t (): string {\r\n        return ''\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<style lang=\"scss\">\r\n  .section {\r\n    background: tomato;\r\n  }\r\n</style>\r\n"]}, media: undefined })

  }
  /* scoped */
  const __vue_scope_id__ = undefined
  /* module identifier */
  const __vue_module_identifier__ = undefined
  /* functional template */
  const __vue_is_functional_template__ = false
  /* component normalizer */
  function __vue_normalize__(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {}

    // For security concerns, we use only base name in production mode.
    component.__file = "SectionContent.vue"

    if (!component.render) {
      component.render = template.render
      component.staticRenderFns = template.staticRenderFns
      component._compiled = true

      if (functional) component.functional = true
    }

    component._scopeId = scope

    if (true) {
      let hook
      if (false) {
        // In SSR.
        hook = function(context) {
          // 2.3 injection
          context =
            context || // cached call
            (this.$vnode && this.$vnode.ssrContext) || // stateful
            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__
          }
          // inject component styles
          if (style) {
            style.call(this, createInjectorSSR(context))
          }
          // register component module identifier for async chunk inference
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier)
          }
        }
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        component._ssrRegister = hook
      }
      else if (style) {
        hook = function(context) {
          style.call(this, createInjector(context))
        }
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context)
            return originalRender(h, context)
          }
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook]
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0]
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {})
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined })

      if (!style.ids.includes(id)) {
        let code = css.source
        let index = style.ids.length

        style.ids.push(id)

        if (false && css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'
          // http://stackoverflow.com/a/26603875
          code +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
            ' */'
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']')
        }

        if (!style.element) {
          const el = style.element = document.createElement('style')
          el.type = 'text/css'

          if (css.media) el.setAttribute('media', css.media)
          if (isOldIE) {
            el.setAttribute('data-group', group)
            el.setAttribute('data-next-index', '0')
          }

          head.appendChild(el)
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'))
          style.element.setAttribute('data-next-index', index + 1)
        }

        if (style.element.styleSheet) {
          style.parts.push(code)
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n')
        } else {
          const textNode = document.createTextNode(code)
          const nodes = style.element.childNodes
          if (nodes[index]) style.element.removeChild(nodes[index])
          if (nodes.length) style.element.insertBefore(textNode, nodes[index])
          else style.element.appendChild(textNode)
        }
      }
    }
  }
  /* style inject SSR */
  

  
  export default __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  )