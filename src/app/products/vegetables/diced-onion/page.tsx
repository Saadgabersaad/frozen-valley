import React from 'react'
import ProductCard from "@/app/components/Cards";
import {dicedOnion} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={dicedOnion}/>
            <InfoSection data={productInfoData.carrot} />
        </div>
    )
}
export default Page
