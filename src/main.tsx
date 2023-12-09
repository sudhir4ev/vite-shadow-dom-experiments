import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

mountAtShadowRoot(document.getElementById('shadow-root') as HTMLElement)

function mountAtShadowRoot(el: HTMLElement) {
    el.attachShadow({mode: "open"});
    const shadowDomRoot = el.shadowRoot;
    const root = ReactDOM.createRoot(shadowDomRoot as unknown as HTMLElement)
    // myStyle(shadowDomRoot.mount())

    root.render(<StrictMode>
        <div className="body">
            <App/>
        </div>
    </StrictMode>)
}
