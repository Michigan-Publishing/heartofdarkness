## Architecture

The Engagement layer websites are built on several complimentary technologies that promote static websites, content management, and clear deployment paths. The following technologies are used to ensure a functioning website that runs on GitHub pages.

GitHub - Source control and static page
[Netlify](https://www.netlify.com/) - Staging server
[Netlify CMS](https://www.netlifycms.org/) - Content Management application 
[Gatsby](https://www.gatsbyjs.com/) - JAMStack site library. This uses React and Markdown/MDX to create the static pages. 

## How it works

Netlify CMS has commit access to the GitHub repository. This content management system understands Gatsby and static content. A user can login to Netlify CMS, edit or create pages, and save the file. Upon save, Netlify commits the changes to a markdown file stored in the Gatsby app. What this means is while Netlify CMS is useful in creating content, content could be created and modified without the CMS platform. 

Upon new commits, Netlify the service rebuilds the application and deploys it to the Netlify site. Content can be reviewed on this staging server before pushing it to the production version of the engagement layer. After everything looks good, someone with GitHub access (not just Netlify) will run `npm run deploy` (or `yarn deploy`) to push the site to the GitHub pages, production version of the application. 
