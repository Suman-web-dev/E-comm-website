import React from 'react'
import shop1 from "../../assets/img/shop/shop-1.jpg";
import shop2 from "../../assets/img/shop/shop-2.jpg";
import shop3 from "../../assets/img/shop/shop-3.jpg";
import shop4 from "../../assets/img/shop/shop-4.jpg";
import shop5 from "../../assets/img/shop/shop-5.jpg";
import shop6 from "../../assets/img/shop/shop-6.jpg";
import shop7 from "../../assets/img/shop/shop-7.jpg";
import shop8 from "../../assets/img/shop/shop-8.jpg";
import shop9 from "../../assets/img/shop/shop-9.jpg";










const Shop = () => {
  return (
    <>

<div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__links">
                        <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="shop spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="shop__sidebar">
                        <div className="sidebar__categories">
                            <div className="section-title">
                                <h4>Categories</h4>
                            </div>
                            <div className="categories__accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-heading active">
                                            <a data-toggle="collapse" data-target="#collapseOne">Women</a>
                                        </div>
                                        <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul>
                                                    <li><a href="#">Coats</a></li>
                                                    <li><a href="#">Jackets</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">T-shirts</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseTwo">Men</a>
                                        </div>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul>
                                                    <li><a href="#">Coats</a></li>
                                                    <li><a href="#">Jackets</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">T-shirts</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseThree">Kids</a>
                                        </div>
                                        <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul>
                                                    <li><a href="#">Coats</a></li>
                                                    <li><a href="#">Jackets</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">T-shirts</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFour">Accessories</a>
                                        </div>
                                        <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul>
                                                    <li><a href="#">Coats</a></li>
                                                    <li><a href="#">Jackets</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">T-shirts</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFive">Cosmetic</a>
                                        </div>
                                        <div id="collapseFive" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul>
                                                    <li><a href="#">Coats</a></li>
                                                    <li><a href="#">Jackets</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">T-shirts</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar__filter">
                            <div className="section-title">
                                <h4>Shop by price</h4>
                            </div>
                            <div className="filter-range-wrap">
                                <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                data-min="33" data-max="99"></div>
                                <div className="range-slider">
                                    <div className="price-input">
                                        <p>Price:</p>
                                        <input type="text" id="minamount"/>
                                        <input type="text" id="maxamount"/>
                                    </div>
                                </div>
                            </div>
                            <a href="#">Filter</a>
                        </div>
                        <div className="sidebar__sizes">
                            <div className="section-title">
                                <h4>Shop by size</h4>
                            </div>
                            <div className="size__list">
                                <label for="xxs">
                                    xxs
                                    <input type="checkbox" id="xxs"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="xs">
                                    xs
                                    <input type="checkbox" id="xs"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="xss">
                                    xs-s
                                    <input type="checkbox" id="xss"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="s">
                                    s
                                    <input type="checkbox" id="s"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="m">
                                    m
                                    <input type="checkbox" id="m"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="ml">
                                    m-l
                                    <input type="checkbox" id="ml"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="l">
                                    l
                                    <input type="checkbox" id="l"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="xl">
                                    xl
                                    <input type="checkbox" id="xl"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="sidebar__color">
                            <div className="section-title">
                                <h4>Shop by size</h4>
                            </div>
                            <div className="size__list color__list">
                                <label for="black">
                                    Blacks
                                    <input type="checkbox" id="black"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="whites">
                                    Whites
                                    <input type="checkbox" id="whites"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="reds">
                                    Reds
                                    <input type="checkbox" id="reds"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="greys">
                                    Greys
                                    <input type="checkbox" id="greys"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="blues">
                                    Blues
                                    <input type="checkbox" id="blues"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="beige">
                                    Beige Tones
                                    <input type="checkbox" id="beige"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="greens">
                                    Greens
                                    <input type="checkbox" id="greens"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="yellows">
                                    Yellows
                                    <input type="checkbox" id="yellows"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-9">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <img src={shop1} alt="" />
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li><a href="img/shop/shop-1.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Furry hooded parka</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <img src={shop2} alt="" />
                                    <ul className="product__hover">
                                        <li><a href="img/shop/shop-2.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Flowy striped skirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src={shop3} alt="" />

                                    <ul className="product__hover">
                                        <li><a href="img/shop/shop-3.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Croc-effect bag</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src={shop4} alt="" />

                                    <ul className="product__hover">
                                        <li><a href="img/shop/shop-4.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Dark wash Xavi jeans</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg">
                                <img src={shop5} alt="" />

                                    <div className="label">Sale</div>
                                    <ul className="product__hover">
                                        <li><a href="img/shop/shop-5.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Ankle-cuff sandals</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src={shop6} alt="" />

                                    <ul className="product__hover">
                                        <li><a href="img/shop/shop-6.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Contrasting sunglasses</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src={shop7} alt="" />

                                    <ul className="product__hover">
                                        <li><a href="img/shop/shop-7.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Circular pendant earrings</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src={shop8} alt="" />

                                    <div className="label stockout stockblue">Out Of Stock</div>
                                    <ul className="product__hover">
                                        <li><a href="img/shop/shop-8.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Cotton T-Shirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg">
                                <img src={shop9} alt="" />

                                    <div className="label">Sale</div>
                                    <ul className="product__hover">
                                        <li><a href="img/shop/shop-9.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Water resistant zips backpack</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="pagination__option">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Shop