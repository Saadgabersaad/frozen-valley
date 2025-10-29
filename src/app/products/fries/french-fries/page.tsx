import React from 'react'
import ProductCard from "@/app/components/Cards";
import { frenchfries} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={frenchfries}/>
            <InfoSection data={productInfoData.fries} />

        </div>
    )
}
export default Page
