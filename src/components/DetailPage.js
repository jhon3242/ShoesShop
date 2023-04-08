import React from 'react';
import {useParams} from "react-router-dom";

const getItemInfo = (data, id) => {
    return data.find(item => item.id === +id);
}

function DetailPage(props) {
    const {id} = useParams();
    const url = `/shoes${id}.jpg`;
    let itemInfo = getItemInfo(props.data, id);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={url} width="100%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{itemInfo.title}</h4>
                    <p>{itemInfo.content}</p>
                    <p>{itemInfo.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;