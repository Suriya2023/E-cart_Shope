import React from 'react'

function cart({ cart, SetCart }) {
    return (
        <div>

            <div className="conatainer">
                {
                    cart.map((e) => {
                        return (

                            <div className="col-lg-5">
                                {/* <div className="flex"> */}
                                <div className="card mb-3 " style={{ width: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-lg-3">
                                            <img src={e.imgSrc} className="img-fluid rounded-start" alt="Img" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{e.title}</h5>
                                                <p className="card-text">{e.description}</p>
                                                <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default cart
