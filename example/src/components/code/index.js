import SyntaxHighlighter from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {gml} from "react-syntax-highlighter/src/styles/hljs";

const Code = ({children, className, dark = true}) => {

    return (
        <SyntaxHighlighter
            className={'rounded-sm py-3 ' + className}
            language="jsx"
            style={dark ? gml : prism}
            showLineNumbers
            wrapLongLines
            wrapLines
        >
            {children}
        </SyntaxHighlighter>
    );
};

export default Code;