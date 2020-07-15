# gatsby-scrollspy

## Description

Simple, automated scrollspy. Gets the data from content container in page, and then having hrefs and titles creating from them inner menu, working ToC, in form of component. This component can be placed anywhere in the layout.

Dependenties - only two external libraries:

- [Loadable Components](https://loadable-components.com)
- [Lodash](https://lodash.com)

## HOWTO

1. Install dependencies

```bash
npm i @loadable/component lodash
```

2. Create a component

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

By default should be placed in /components. Script is looking for container with class name "content-container" and H3 tags inside. Active class is named "currentInnerAnchor". All names are easy to find and change.

Best tool to create anchors in headers automatically is plugin gatsby-remark-autolink-headers, and this setting in gatsby-config.js:

```javascript
{
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
```

It should work after restarting. In case of problems pm me.
