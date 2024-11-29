import Head from "next/head";
import React from "react";
import MarkdownToJSX from 'markdown-to-jsx';

function SyntaxHighlightedCode(props: React.HTMLProps<HTMLElement>) {
    const ref = React.useRef<HTMLElement>(null);
  
    React.useEffect(() => {
      if (ref.current && props.className?.includes('lang-') && window.hljs) {
        window.hljs.highlightElement(ref.current)
  
        // hljs won't reprocess the element unless this attribute is removed
        ref.current.removeAttribute('data-highlighted')
      }
    }, [props.className, props.children])
  
    return <code {...props} ref={ref} />
  }

export default function Markdown ({children}: {children: string}) {
    return (<>
        <Head>
            <link
            rel="stylesheet"
            href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/nord.min.css"
            />
            <script
            crossorigin
            src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"
            ></script>
        </Head>
        <MarkdownToJSX
          options={{
            overrides: {
              code: SyntaxHighlightedCode
            }
          }}
          children={children}
        />
    </>)
}