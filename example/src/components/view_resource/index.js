import React, {useState} from 'react';
import styled from "styled-components";
import {CodeIcon} from '@heroicons/react/outline'

const ViewRecourse = ({title, children}) => {
    const [view, setView] = useState(false);

    return (
        <Container>
            <div className="d-flex align-items-center">
                <h5 className="font-weight-bold mr-auto">{title}</h5>

                <button className="btn btn-light d-flex align-items-center" onClick={() => setView(!view)}>
                    <CodeIcon className="view-icon mr-1"/>
                    <Span>View source</Span>
                </button>
            </div>

            <div className={"mt-2 " + (view ? 'd-block' : 'd-none')}>
                {children}
            </div>
        </Container>
    );
};

export default React.memo(ViewRecourse);

// styles

const Container = styled.div`

  .view-icon {
    width: 24px;
    height: 24px;
  }
`

const Span = styled.span`
  font-size: 12px;
`