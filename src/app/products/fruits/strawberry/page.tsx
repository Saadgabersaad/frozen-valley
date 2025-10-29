import React from 'react'
import ProductCard from "@/app/components/Cards";
import {strawberry} from "@/app/core/consts/products";
import {productInfoData} from "@/app/core/consts/info";
import InfoSection from "@/app/components/InfoSection";

const Page = () => {
    return (
        <div>
            <ProductCard cards={strawberry}/>
            <InfoSection data={productInfoData.frozenStrawberry} />
        </div>
    )
}
export default Page
