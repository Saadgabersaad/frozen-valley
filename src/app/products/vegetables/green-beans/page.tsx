import React from 'react'
import ProductCard from "@/app/components/Cards";
import {greenBeans} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div> <ProductCard cards={greenBeans}/>
            <InfoSection data={productInfoData.greenBeans} /></div>
    )
}
export default Page
