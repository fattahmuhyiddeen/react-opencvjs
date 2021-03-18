# react-opencvjs

## Installation
`yarn add react-opencvjs`

## Usage

`import openCV from 'react-opencvjs'`

....

```javascript
useEffect(()=>{
  openCV({
    onLoaded: () => console.log('open cv loaded'),
    onFailed: () => console.log('open cv failed to load'),
    version: '4.5.1'
  })
},[])

// if open cv loaded
// eslint-disable-next-line no-undef
cv.imread('img id')
```

it will take several seconds to load. so it will be great you you load earlier before the component that you wish to use is going to load. this library already handle if you try to import twice, it will only ensure it load once.