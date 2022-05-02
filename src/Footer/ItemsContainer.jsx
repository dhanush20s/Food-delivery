import Item from "./Item";
import { CONTACT, LEGAL, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-10 py-16 ">
      <Item Links={COMPANY} title="COMPANY" />  
      <Item Links={CONTACT} title="CONTACT" />
      <Item Links={LEGAL} title="LEGAL" />
      {/* <Item Links={SUPPORT} title="SUPPORT" /> */}
      <div>
       <a href="https://apps.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" target="_blank">  
      <img className="mb-10" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"/>
      </a> 
      <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target="_blank">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"/>
      </a>
      </div>
    </div>
  );
};

export default ItemsContainer;