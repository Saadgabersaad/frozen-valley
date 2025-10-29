import React from 'react'
import ProductCard from "@/app/components/Cards";
import {okra} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={okra}/>
            <InfoSection data={productInfoData.okra} />

        </div>
    )
}
export default Page
