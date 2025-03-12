import React from 'react'
import instimage1 from "../assets/img/instagram/insta-1.jpg";

import instimage2 from "../assets/img/instagram/insta-2.jpg";

import instimage3 from "../assets/img/instagram/insta-3.jpg";

import instimage4 from "../assets/img/instagram/insta-4.jpg";

import instimage5 from "../assets/img/instagram/insta-5.jpg";

import instimage6 from "../assets/img/instagram/insta-6.jpg";
const Instagram = () => {
  return (
    <div>

<div className="instagram">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" >
                    <img src={instimage1} alt="" />
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" >
                <img src={instimage2} alt="" />
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" >
                <img src={instimage3} alt="" />
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" >
                <img src={instimage4} alt="" />
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" >
                <img src={instimage5} alt="" />
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item set-bg" >
                <img src={instimage6} alt="" />
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Instagram