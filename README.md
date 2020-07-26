# gatsby-scrollspy

## Description

Simple, automated scrollspy. Gets the data from content container in page, and then having hrefs (ids) and titles creates from them inner menu, working ToC, in form of component. This component can be placed anywhere in the layout.

In JSX you should write id at every header. MDX is full automatic, just use plugin described at the end of this file.

Dependenties - only two external libraries:

- [Loadable Components](https://loadable-components.com)
- [Lodash](https://lodash.com)

## HOWTO

1. Install dependencies, no need to change gatsby-config.js

```bash
npm i @loadable/component lodash
```

2. Place automenu.js at /components, and create a component:

```javascript
import { Link } from "gatsby";
import React from "react";
import loadable from "@loadable/component";
const Scrollspy = loadable(() => import("./automenu"));

const ToC = () => <Scrollspy />;

export default ToC;
```

3. Run and profit, no config file was changed, so there's no need for restart, ctrl+r is enough.

## Defaults

- By default automenu.js and component file should be placed in /components.
- Script is looking for container with class name "content-container" and H3 tags inside. Active class is named "currentInnerAnchor". All names are easy to find and change.

MDX: best tool to create anchors in headers automatically is plugin [https://www.gatsbyjs.org/packages/gatsby-remark-autolink-headers/](gatsby-remark-autolink-headers), and this setting in gatsby-config.js:

```javascript
{
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
```

In case of problems pm me.
