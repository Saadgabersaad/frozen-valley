import React from 'react'
import ProductCard from "@/app/components/Cards";
import {broccoli} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={broccoli} />
            <InfoSection data={productInfoData.broccoli} />

        </div>
    )
}
export default Page
