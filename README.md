# nice-pagination

You will have a nice and simple to use pagination component.

[![NPM](https://img.shields.io/npm/v/nice-pagination.svg)](https://www.npmjs.com/package/nice-pagination) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save nice-pagination
```

## Online Demo

Visit this link:
[https://simacoders.ir/features/#NicePagination](https://simacoders.ir/features/#NicePagination)



## Usage

```jsx
import React from 'react'
import NicePagination from 'nice-pagination'

const Example = () => {
  return <NicePagination  initialPage={1} totalPages={10} minButtonsToDots={6}
              type='simple'
              onPageChanged={(p) => console.log("SelectedPage:", p)}/>
}
```
This appears a simple pagination control with 10 pages where the first page is marked as selected. If the total page is less than 6, all page indicators will be shown. Otherwise, Page indicatores will be displyed as spread dots. By clicking on each page indicator, seleted page number will be printed in console.

## Properties

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>initialPage</td>
      <td>Number</td>
      <td>Selected page when the component is loaded.</td>
    </tr>
    <tr>
      <td>totalPages</td>
      <td>Number</td>
      <td>Total pages :)</td>
    </tr>
    <tr>
      <td>minButtonsToDots</td>
      <td>Number</td>
      <td>If `totalPage` is less than this amount, all page indicators will be shown. Otherwise, Page indicatores will be displyed as spread dots.</td>
    </tr>
    <tr>
      <td>dotsButtonStep</td>
      <td>Number</td>
      <td>I you click on dots, current page is moved to `dotsButtonStep` previous or later page.</td>
    </tr>
    <tr>
      <td>onPageChanged</td>
      <td>Function(currentPage)</td>
      <td>When current page changed, this method is called.</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Change appearance of button in 3 pre-defined types: simple, circle and square.</td>
    </tr>
    <tr>
      <td>style</td>
      <td>Object</td>
      <td>Custom style to add to component body.</td>
    </tr>
    <tr>
      <td>className</td>
      <td>String</td>
      <td>Custom class to add to component body.</td>
    </tr>
    <tr>
      <td>settings</td>
      <td>Object</td>
      <td>An object to change the appearance of buttons</td>
    </tr>
  </tbody>
</table>


You can change the appearance of buttons by `settings` like:
```bash
{
  CustomPreButton: Previous button component,
  CustomNextButton: Next button component,
  CustomDotsButton: Dots button component,
  CustomNumberButton: Page button component,
  CustomSelectedButton: Selected page button component
}
```

If you want to change appearance of some elements, you should put just those elements in the settings objec.
For example if we need to change previous and next buttons, so:

```bash
settings: {
  CustomPreButton : MyPreviousButtonComponent,
  CustomNextButton : MyNextBbuttonComponent
}
```
Custom buttons should have a callback function named 'onClick' that has an input argument



## License

MIT © [mortezadvlp](https://github.com/mortezadvlp)
