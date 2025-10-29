import React from 'react'
import ProductCard from "@/app/components/Cards";
import { sweetCorn} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={sweetCorn}/>
            <InfoSection data={productInfoData.sweetCorn} />
        </div>    )
}
export default Page
