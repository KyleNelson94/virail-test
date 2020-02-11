import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";

const List = ({items, loading}) => {
    const ListContainer = styled.div`
        position: relative;
    `;

    function renderItems(){

        if(loading) return<p>Loading...</p>;

        items.map((item, key) => {
            const {transport, expired, price, provider, segments} = item;

			return (
                <Card
                    key={key}
                    type={transport}
                    expired={expired}
                    price={price}
                    provider={provider}
                    segments={segments}
                />
            );
        });
    };

    return (
        <ListContainer>
            {renderItems()}
        </ListContainer>  
    );
};

export default List;

List.propTypes = {
    items: PropTypes.array
}