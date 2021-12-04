# Frontend
This is the frontend part of the Gartic-Like Application.

- ✅ Choose your name
- ✅ Choose your room or create a new one

<div align="center">
<img align="center" alt="part1" src="https://user-images.githubusercontent.com/22435398/144692015-873f8782-8039-4ef0-9f22-fa378e19f434.gif" style="max-width: 100%;">
</div>
<br>

- ✅ Multiple colors to draw
- ✅ Know which player is currently drawing
- ✅ Know which participants are in the room
- ✅ Progress Bar shows you how much time you have to draw or to get it right

<div align="center">
<img align="center" alt="part2" src="https://user-images.githubusercontent.com/22435398/144692178-5b3f711d-84b5-4e86-a60b-b129d1724395.gif" style="max-width: 100%;">
</div>
<br>

- ✅ Clear and erase functions
- ✅ Chat between participants

<div align="center">
<img align="center" alt="part3" src="https://user-images.githubusercontent.com/22435398/144692253-8b759e6e-6441-4b1c-8c21-5f0d2e214774.gif" style="max-width: 100%;">
</div>
<br>

- ✅ Multiple clients
- ✅ Multiple rooms

<div align="center">
<img align="center" alt="part4" src="https://user-images.githubusercontent.com/22435398/144692340-570641ac-8ac5-4bd4-ac58-eb1fb99a08cc.gif" style="max-width: 100%;">
</div>

## Installation
Git clone this repository
```bash
git clone https://github.com/Guilospanck/gartic-like-app.git
```

Git clone [Gartic-Go-Backend](https://github.com/Guilospanck/gartic-go-backend) repository
```bash
git clone https://github.com/Guilospanck/gartic-go-backend.git
```

Be sure to have <code>NodeJS</code> (at least version v14), <code>Yarn</code> and <code>Go</code> installed.

## Running

Cd into gartic-like-app folder, then run
```bash
yarn
```
to install node_modules dependencies and finally
```bash
yarn start:dev
```
to start the application.


## Tip (for myself)
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
- [x] Send messages.
- [x] Show them on the messages box.
- [x] Create a simple Go backend to handle requests.
- [ ] Add interaction when user exits room while drawing.
- [ ] Add which design will be drawn.
- [ ] Add function to read chat messages and verify if user got it right.
- [ ] Add score function when user is right about a design being drawn.
- [ ] Add tests.
