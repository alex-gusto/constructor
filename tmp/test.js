/* script */
//
//
//
//
//
//
//
const __vue_script__ = {
props: ['title', 'content'],
methods: {
t() {
return ''
}
}
}

/* template */

  /* style */
  const __vue_inject_styles__ = undefined
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

    if (false) {
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
  
  /* style inject SSR */
  

  
  export default __vue_normalize__(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  )