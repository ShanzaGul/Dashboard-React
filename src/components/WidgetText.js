import React from 'react'

function WidgetText(props) {
    return (
        <div className="col-md-12 col-lg-6">
        <div className="content bg-white shadow-sm rounded-top p-3">
        <div className="widgetWrap">
        <div className="widgetTitle p-1" style={{fontSize:"15px",color:"gray"}}>{props.title}</div>
        <div className="widgetValue">
            <div className="value" style={{fontSize:"30px"}}>{props.value}</div>
            <div className="description" style={{fontSize:"12px",color:"black"}}>{props.des}</div>
            <div style={{fontSize:"12px",color:"rgb(255,154,158)"}}>Since Last Month</div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default WidgetText;
