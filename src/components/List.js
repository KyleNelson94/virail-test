import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";

const List = props => {
    const ListContainer = styled.div`
        position: relative;
    `;

    function renderItems(){

        if(props.loading) return<p>Loading...</p>;

        props.items.map((item, key) => {
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