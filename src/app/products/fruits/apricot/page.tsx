import React from 'react'
import ProductCard from "@/app/components/Cards";
import {apricot} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={apricot}/>
            <InfoSection data={productInfoData.frozenApricot} />

        </div>
    )
}
export default Page
