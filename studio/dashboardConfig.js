export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edcc03522763efd23a0372d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-dm633p7q',
                  apiId: '433401c2-2ae2-41a3-9b1f-1780362a070b'
                },
                {
                  buildHookId: '5edcc036eb4b844dd97c72e3',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-b5cn52mv',
                  apiId: 'd979cbc9-70e5-46f8-8bbc-1d9889e5fc92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lukebennett88/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-b5cn52mv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
