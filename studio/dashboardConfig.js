export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6252e837bdfc880729050bc6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-vhapyyr2',
                  apiId: '0ec0e8bc-7095-42fe-b8d7-b6062a992302'
                },
                {
                  buildHookId: '6252e837b201ff0391437460',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-q8gtysjj',
                  apiId: 'bda4c23f-696e-4f29-968d-6cfe4806cee9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ok/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-q8gtysjj.netlify.app', category: 'apps'}
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
