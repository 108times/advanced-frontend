declare module '*.module.css'
declare module '*.module.scss'

declare module '*.png'
declare module '*.jpg'

declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >

  export default ReactComponent
}

declare const __IS_DEV__: boolean
