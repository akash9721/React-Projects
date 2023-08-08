import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,imgUrl,newsUrl,publiceDate,author}=this.props;
        return (
            <>
                <div className="card h-100">
                    <img className="card-img-top img-fluid" src={imgUrl?imgUrl:"https://cdn.ndtv.com/common/images/ogndtv.png"} alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{title} ...</h5>
                            <p className="card-text">{description} ...</p>
                            <p className="card-text"><small className="text-muted">By:{author?author:"Unknown"} on {new Date(publiceDate).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" className="btn btn-info">Read More...</a>
                        </div>
                </div>
            </>
        )
    }
}
