
# Still a work in progress, not yet deployed. Planning for mid-October release. 

## Prerequisites
1. Download and install [Node.js](https://nodejs.org/en/download) for Next.js development.
2. For version control, download and install [Git](https://git-scm.com/downloads) or [GitHub Desktop](https://desktop.github.com).
3. (Optional) Interested in contributing to the backend with Go? Download and install [Go](https://go.dev/doc/install) to explore backend development opportunities alongside Next.js frontend tasks. (With Hayden)

## Frontend Stack
- [NextJs](https://nextjs.org/) - overall framework that is built on [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/) - styling framework that provides a pool of pre-defined classes to speed up the design
- [Ant Design](https://ant.design/) - React Component library that allows us to use pre-defined components

## Getting Started
Start by cloning the repository using the command:
```
git clone git@github.com:DallasFormulaRacing/DFRWebsite.git
```
This will download the project files to your local machine.

Once cloned, navigate into the project directory and install the dependencies by running:
```
npm install
```
This command will ensure all required packages are installed and ready for use.

To launch the development server, execute the following command:
```
npm run dev
```
This will start the server, enabling you to preview your changes in real time.

Open your web browser and go to http://localhost:3000/ to view the live website.

Start editing any page you want! Changes you make will automatically update the page, allowing you to see your modifications instantly!

## Frontend File System
```
├── app // main source of the frontend code, most of the development is going to happen here
│   ├── api // Can be used to create api endpoints handled by Next.js (can be ignored for now)
│   ├── components // holds some components for pages
│   ├── about // each folder is a page on the website that don't have (), and a contain a page.tsx
│   │   ├── page.tsx
│   ├── page.tsx // main entry point of the website (home page)
├── public // images can be found here
```

## Contributing
You don't need to adhere strictly to every detail, as the primary focus is on working in separate branches to maintain a cleaner version control history and have fun. 

However, it's crucial to recognize the broader significance: through this process, you can hone essential job-related skills like crafting effective commits, monitoring issues, and providing detailed pull request descriptions. Furthermore, showcasing this workflow in interviews can greatly impress potential employers. While perfection isn't necessary, don't hesitate to embrace the opportunity to learn and improve.

-- written by ChatGPT

### Creating Issues
- **Summary**: Concise description of the issue/task.
- **Explanation**: 
  - **What**: Clearly state the problem or task.
  - **Where**: Specify where it occurs.
  - **How (if possible)**: Provide details on how to reproduce or context.

### Pull Request
1. Ideally make a new branch for each issue
2. Make a pull request when done just for a small review (just to get the feeling on how the workplace is)
3. Add a summary of the work done
4. Once approved go ahead and merge the pull request

Ex:
```
Implement EV Team Page

Implemented the EV Team Page as per the provided design specifications.
The page now includes separate components for different sections, incorporating images
and populating content from a newly created dataset.

[image](src)
```

## Resources
- https://nextjs.org/docs
- https://v2.tailwindcss.com/docs
- https://www.atlassian.com/git
- https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/best-practices-for-pull-requests
