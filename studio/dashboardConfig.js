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
                  buildHookId: '5d13562ef5ded6018d3a85c0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nifihi4n',
                  apiId: 'b592f86d-487f-4e7e-99ab-5939d6f04c37'
                },
                {
                  buildHookId: '5d13562ee522760185ad08cd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g9kedd47',
                  apiId: 'fb02b5db-c5b4-4668-8878-f39198e87c0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/martinzubovskiy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g9kedd47.netlify.com', category: 'apps'}
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
