export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6030d9669509f9458fec03c3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kv1f6tn9',
                  apiId: '6b439dd5-6c81-4e2e-a1b2-dac24f104d60'
                },
                {
                  buildHookId: '6030d96637d8155ac02eff04',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9yhoqgrb',
                  apiId: '08355674-84f8-46b9-b3ef-2caa88f4e7df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seecrz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9yhoqgrb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
