import React from 'react'
import ProductCard from "@/app/components/Cards";
import { peasWithCarrot} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={peasWithCarrot}/>
            <InfoSection data={productInfoData.peasCarrot} />

        </div>
    )
}
export default Page
