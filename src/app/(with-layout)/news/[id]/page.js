import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h2>This is dynamic page for id: {params.id}</h2>
        </div>
    );
};

export default DynamicPage;