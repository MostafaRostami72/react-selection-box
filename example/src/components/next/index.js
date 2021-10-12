import React from 'react';
import {Link} from 'react-router-dom'
import styled from "styled-components";
import {ChevronRightIcon} from '@heroicons/react/outline'

const NextPage = ({url, title}) => {
    return (
        <Container className="d-flex align-items-center p-3 border-top">
            <span className="mr-auto">Next page:</span>

            <Link to={url} className="next-page-link">
                {title}

                <ChevronRightIcon className="next-page-icon"/>
            </Link>
        </Container>
    );
};

export default NextPage;

// styles

const Container = styled.div`
  margin-top: 80px;

  .next-page-link {
    position: relative;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    border-radius: 7px;
    color: rgb(0, 112, 243);
    background-color: transparent;
    border: none;
    font-size: inherit;
    line-height: inherit;
    transition: background 0.2s ease 0s, color 0.2s ease 0s, box-shadow 0.2s ease 0s;
    outline: none;

    &:hover {
      color: rgb(0, 112, 243);
      background: rgba(0, 118, 255, 0.1);
    }
  }

  .next-page-icon {
    width: 24px;
    height: 24px;
  }
`;
