import React from 'react'
import Category from './filterPartials/Category';
import Price from './filterPartials/Price';
import Star from './filterPartials/Star';
import SubCategory from './filterPartials/SubCategory';

const ShopFilter = ({ filterResult, category, filterResultRatings, rating, subCategory, changeChecked, selectedPrice, changePrice}) => {
  return (
    <>
      <div className="f-group">
        <span className="f-groupTitle">Category</span>
        <Category filterResult={filterResult} category={category} />
      </div>
      <div className="f-group">
        <span className="f-groupTitle">SubCategory</span>
        <SubCategory subCategory={subCategory} changeChecked={changeChecked} />
      </div>
      <div className="f-group">
        <span className="f-groupTitle">Price</span>
        <Price value={selectedPrice} changePrice={changePrice} />
      </div>
      <div className="f-group">
        <span className="f-groupTitle">Star Rating</span>
        <Star rating={rating} filterResultRatings={filterResultRatings} />
      </div>
    </>
  );
};

export default ShopFilter
