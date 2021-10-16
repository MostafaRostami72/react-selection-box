import React,{useEffect} from 'react';
import NProgress from "nprogress";

const TopProgress = ({isLoading}) => {

    useEffect(() => {
        if (isLoading) {
            NProgress.start();
        } else {
            NProgress.done();
        }
    }, [isLoading]);

    return ''
};

export default React.memo(TopProgress);
