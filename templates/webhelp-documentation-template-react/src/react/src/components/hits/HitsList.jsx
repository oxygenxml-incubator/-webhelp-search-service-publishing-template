import React from 'react';
import HitsItem from './HitsItem.jsx';

const HitsList = ({ hits }) => {
    if (hits?.length > 0){
        {console.log(hits)}
        return (<div className="hits-container"><ul className="hits">{
            hits.map((hit) => {
                return (
                    <HitsItem
                        key={"objectID" in hit ? hit.objectID : hit.toString()}
                        title={hit.title}
                        description={hit.shortDescription}
                        url={hit.objectID}
                        documentation={hit.documentation}
                    />
                );
            })
        }</ul></div>);
    }
    else
        return (<div className="no-results"><strong>No results found!</strong></div>);
}

export default HitsList;