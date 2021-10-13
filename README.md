# Frontend
## Running
```bash
yarn start:dev
```
or


After building the application by using `yarn build`, you can serve the production public folder by going into the folder directory and running
`npx http-server .`

## Important
### SVG Files
In order to load SVG files, you must create at the root of the project a file named ```custom.d.ts``` with the following contents:
```ts
declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
```
And then on the ```tsconfig.json``` you must add to the include section:
```json
"include": ["src", "jest.setup.ts", "custom.d.ts"],
```
And, finally, to import some SVG, do:
```ts
import EstetoSVGIcon from '../../../assets/svg/esteto.svg'

 <ContainerGrid>
    <EstetoSVGIcon />
    <TextWrapper />
  </ContainerGrid>
```
Also, install the library `"@svgr/webpack": "^5.5.0"` as dev dependency
```bash
yarn add -D @svgr/wepack
```
and add this to your `webpack.common.js`:
```js
{
  test: /\.svg$/,
  use: ['@svgr/webpack'],
}
```

## TODO
- [x] Add responsiveness.
- [] Send messages.
- [] Show them on the messages box.
- [] ?Create a simple Go backend to handle requests.