import antfu from '@antfu/eslint-config'

// Custom rule to disallow usage of Bun.env
const noBunEnv = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow usage of Bun.env',
      category: 'Best Practices',
      recommended: true,
    },
    messages: {
      noBunEnv: 'No Bun.env allowed, use dotenv instead',
    },
    schema: [], // no options
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.object.type === 'Identifier'
          && node.object.name === 'Bun'
          && node.property.type === 'Identifier'
          && node.property.name === 'env'
        ) {
          context.report({
            node,
            messageId: 'noBunEnv',
          })
        }
      },
    }
  },
}

export default antfu(
  {
    type: 'app',
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: false,
      quotes: 'single',
    },
    ignores: ['dist', 'node_modules', 'PRD.md'],
  },
  {
    plugins: {
      custom: {
        rules: {
          'no-bun-env': noBunEnv,
        },
      },
    },
  },
)
