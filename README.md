# gatsby-scrollspy

## Description

Simple, automated scrollspy. Gets the data from content container in page, and then having hrefs and titles creating from them inner menu, working ToC, in form of component. This component can be placed anywhere in the layout.

Dependend on two external libraries:

- [Loadable Components](https://loadable-components.com)
- [Lodash](https://lodash.com)

## HOWTO

1. Install dependencies

```bash
npm i @loadable/component lodash
```

2 Create a component

```javascript
import { Link } from "gatsby";
import React from "react";
import loadable from "@loadable/component";
const Scrollspy = loadable(() => import("./automenu"));

const ToC = () => <Scrollspy />;

export default ToC;
```

3. Profit

## Defaults

Script is looking for container with class name "content-container" and H3 tags inside.

Best way to create anchors in them is plugin gatsby-remark-autolink-headers, and set in gatsby-config.js:

```javascript
{
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
```

It should work after restarting. In case of problems pm me.
