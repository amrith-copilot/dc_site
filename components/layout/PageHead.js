import React from 'react';
import Head from 'next/head';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ? headTitle : 'DataClap Digital '}</title>
                <link rel="icon" href="/assets/DataClap-icon.svg" type="image/svg+xml" />
            </Head>
        </>
    );
};

export default PageHead;
