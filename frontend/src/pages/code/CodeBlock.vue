<template>
  <pre class="code-container">
    <code
        :class="['hljs', `language-${language}`]"
        v-highlight
    >{{ code }}</code>
  </pre>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/idea.css'; // 选择你喜欢的样式

export default {
  name: 'CodeBlock',
  props: {
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'javascript'
    }
  },
  directives: {
    highlight: {
      mounted(el) {
        hljs.highlightElement(el);
      },
      updated(el) {
        hljs.highlightElement(el);
      }
    }
  }
};
</script>

<style scoped>
.code-container {
  background-color: #f8f8f8;
  padding: 1em;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1em 0;
}

code {
  font-family: 'Fira Code', Menlo, Consolas, monospace;
  font-size: 0.9em;
}
</style>