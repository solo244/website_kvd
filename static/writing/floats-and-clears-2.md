---
slug: floats-and-clears-2
title: Floats and clears 2
header: ...
collection: CSS Introductions
category: Tutorial
filters: CSS
date: 22 August 2015
icons: google_css.svg
folder: writing
---

After explaining floats in the previous tutorial you might have noticed that floats are trouble. In the sense that they give you the option to position elements next to each other yes, but by doing so, they completely mess up the “flow” off your document. The normal flow simply dictates that every elements is positioned underneath the previous element. That way, you get a stack of HTML elements.

But because we wanted them next to each other, instead of underneath each other (that’s just boring), we activated the float property and every other element below the floating one(s), suddenly moves up. Then even disappear behind the floating elements if they are smaller. This is a problem and needs to be fixed. But allow me to demonstrate via an example.
