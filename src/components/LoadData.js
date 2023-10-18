import React from "react";
import data from "./data";


const LoadData = ({ cat }) => {

    const allData = data.filter((items) => items.category === cat);
    return (
        <div>
            {
                cat == "All" && <div className="card-container">
                    {
                        data.map((item) => (
                            <div className="card">
                                <img src={item.img} alt="no image" />
                                <div className="right">
                                    <div className="top">
                                        <p id="title">{item.title}</p>
                                        <p id="price">$ {item.price}</p>
                                    </div>
                                    <p id="desc">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            {
                cat == "lunch" && <div className="card-container">
                    {
                        allData.map((item) => (
                            <div className="card">
                                <img src={item.img} alt="no image" />
                                <div className="right">
                                    <div className="top">
                                        <p id="title">{item.title}</p>
                                        <p id="price">$ {item.price}</p>
                                    </div>
                                    <p id="desc">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            {
                cat == "shakes" && <div className="card-container">
                    {
                        allData.map((item) => (
                            <div className="card">
                                <img src={item.img} alt="no image" />
                                <div className="right">
                                    <div className="top">
                                        <p id="title">{item.title}</p>
                                        <p id="price">$ {item.price}</p>
                                    </div>
                                    <p id="desc">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            {
                cat == "breakfast" && <div className="card-container">
                    {
                        allData.map((item) => (
                            <div className="card">
                                <img src={item.img} alt="no image" />
                                <div className="right">
                                    <div className="top">
                                        <p id="title">{item.title}</p>
                                        <p id="price">$ {item.price}</p>
                                    </div>
                                    <p id="desc">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default LoadData;

