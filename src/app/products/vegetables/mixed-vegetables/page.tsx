import React from 'react'
import ProductCard from "@/app/components/Cards";
import { mixedVegetables} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={mixedVegetables} />
            <InfoSection data={productInfoData.mixedVegetables} />

        </div>
    )
}
export default Page
