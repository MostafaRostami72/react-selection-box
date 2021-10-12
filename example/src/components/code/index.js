import SyntaxHighlighter from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {monokaiSublime} from "react-syntax-highlighter/src/styles/hljs";

const Code = ({children, className, dark = true}) => {

    return (
        <SyntaxHighlighter className={'rounded-sm py-3 ' + className} language="jsx" style={dark ? monokaiSublime : prism}>
            {children}
        </SyntaxHighlighter>
    );
};

export default Code;