const fs = require('fs')
const {resolve, join} = require('path')
const docPath = resolve('./docs')

/**
 *
 * @param content {string}
 */
function getTitleFromContent(content) {
  const index = content.indexOf('\n')
  if (index > -1 || content) {
    const firstLineContent = index > -1
      ? content.substring(0, index)
      : content

    return firstLineContent.replace('# ', '')
  }

  return ''
}

/**
 *
 * @param name {string}
 * @returns {*}
 */
function removeExtension(name) {
  const pointIndex = name.indexOf('.')
  return pointIndex > -1
    ? name.substring(0, pointIndex)
    : name
}

function getTitleFromMD(mdPath) {
  const content = fs.readFileSync(mdPath, 'utf-8') || ''
  return getTitleFromContent(content)
}

function genDocSidebar(dir) {
  const sidebarPath = join(docPath, dir)
  return fs.readdirSync(sidebarPath)
    .map(name => {
      return {
        text: getTitleFromMD(join(sidebarPath, name)),
        link: `/${dir}/${removeExtension(name)}`
      }
    })
}

module.exports = {
  title: 'T UI',
  description: 'A UI Library based on tailwindcss',

  themeConfig: {
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    sidebar: {
      '/components/': genDocSidebar('components'),
      '/': genDocSidebar('components')
    }
  }
}


function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        {link: '/guide/index'},
        {text: 'Getting Started', link: '/guide/getting-started'},
        {text: 'Configuration', link: '/guide/configuration'},
        {text: 'Asset Handling', link: '/guide/assets'},
        {text: 'Markdown Extensions', link: '/guide/markdown'},
        {text: 'Using Vue in Markdown', link: '/guide/using-vue'},
        {text: 'Deploying', link: '/guide/deploy'}
      ]
    },
    {
      text: 'Advanced',
      children: [
        {text: 'Frontmatter', link: '/guide/frontmatter'},
        {text: 'Theming', link: '/guide/theming'},
        {text: 'API Reference', link: '/guide/api'},
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{text: 'Basics', link: '/config/basics'}]
    },
    {
      text: 'Theme Config',
      children: [
        {text: 'Homepage', link: '/config/homepage'},
        {text: 'Algolia Search', link: '/config/algolia-search'},
        {text: 'Carbon Ads', link: '/config/carbon-ads'}
      ]
    }
  ]
}